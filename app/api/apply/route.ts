import { randomUUID } from "node:crypto";
import { getStorage, putObject } from "@/app/lib/storage";
import {
  MAX_RESUME_BYTES,
  validateFields,
  validateResumeMeta,
} from "@/app/lib/apply-rules";

const RATE_LIMIT = 10;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function fail(message: string, status: number) {
  return Response.json({ ok: false, error: message }, { status });
}

function text(form: FormData, key: string): string {
  const value = form.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const storage = getStorage();
  if (!storage) {
    console.error("Apply: storage env vars are not configured.");
    return fail("Applications are temporarily unavailable. Please try again later.", 503);
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return fail("Too many submissions. Please try again later.", 429);
  }

  const declaredLength = Number(request.headers.get("content-length") ?? 0);
  if (declaredLength > MAX_RESUME_BYTES + 100 * 1024) {
    return fail("The resume must be 5 MB or smaller.", 413);
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return fail("Invalid form submission.", 400);
  }

  // Honeypot: real users never fill this hidden field. Pretend success to bots.
  if (text(form, "company_website")) {
    return Response.json({ ok: true });
  }

  const fields = {
    name: text(form, "name"),
    email: text(form, "email"),
    phone: text(form, "phone"),
    role: text(form, "role"),
  };

  const fieldError = validateFields(fields);
  if (fieldError) return fail(fieldError, 400);

  const resume = form.get("resume");
  if (!(resume instanceof File)) return fail("Please attach your resume as a PDF.", 400);

  const metaError = validateResumeMeta(resume);
  if (metaError) return fail(metaError, 400);

  const bytes = Buffer.from(await resume.arrayBuffer());
  if (bytes.length > MAX_RESUME_BYTES) return fail("The resume must be 5 MB or smaller.", 413);
  if (bytes.subarray(0, 5).toString("latin1") !== "%PDF-") {
    return fail("The resume must be a valid PDF file.", 400);
  }

  const id = randomUUID();
  const submittedAt = new Date();
  const prefix = `applications/${submittedAt.toISOString().slice(0, 10)}/${id}`;

  try {
    await putObject(storage, `${prefix}/resume.pdf`, bytes, "application/pdf");
    await putObject(
      storage,
      `${prefix}/details.json`,
      JSON.stringify(
        {
          id,
          submittedAt: submittedAt.toISOString(),
          ...fields,
          resumeFileName: resume.name.slice(0, 200),
          resumeSizeBytes: bytes.length,
        },
        null,
        2,
      ),
      "application/json",
    );
  } catch (error) {
    console.error("Apply: failed to store application.", error);
    return fail("We could not save your application. Please try again.", 500);
  }

  return Response.json({ ok: true });
}
