import { requireAdmin } from "@/app/lib/admin-auth";
import {
  isValidApplicationRef,
  readApplication,
  resumeKey,
} from "@/app/lib/applications-store";
import { getObjectBytes, getStorage } from "@/app/lib/storage";

function safeFileName(value: string): string {
  const cleaned = value.replace(/[^A-Za-z0-9 ._-]/g, "").replace(/\s+/g, " ").trim();
  return cleaned.slice(0, 80) || "resume";
}

export async function GET(request: Request) {
  const denied = await requireAdmin();
  if (denied) return denied;

  const storage = getStorage();
  if (!storage) {
    return Response.json({ ok: false, error: "Storage is not configured." }, { status: 503 });
  }

  const params = new URL(request.url).searchParams;
  const date = params.get("date") ?? "";
  const id = params.get("id") ?? "";
  if (!isValidApplicationRef(date, id)) {
    return Response.json({ ok: false, error: "Invalid application." }, { status: 400 });
  }

  try {
    const file = await getObjectBytes(storage, resumeKey(date, id));
    if (!file) {
      return Response.json({ ok: false, error: "Resume not found." }, { status: 404 });
    }

    const record = await readApplication(storage, date, id);
    const fileName = safeFileName(record ? `${record.name} - ${record.role}` : id);

    return new Response(new Uint8Array(file.bytes), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${fileName}.pdf"`,
        "Content-Security-Policy": "sandbox",
        "X-Content-Type-Options": "nosniff",
        "Cache-Control": "private, no-store",
      },
    });
  } catch (error) {
    console.error("Admin: failed to download resume.", error);
    return Response.json({ ok: false, error: "Could not download the resume." }, { status: 500 });
  }
}
