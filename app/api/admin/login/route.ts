import {
  isAdminConfigured,
  startAdminSession,
  verifyPassword,
} from "@/app/lib/admin-auth";

const MAX_ATTEMPTS = 10;
const WINDOW_MS = 15 * 60 * 1000;
const attempts = new Map<string, number[]>();

function isLockedOut(ip: string): boolean {
  const now = Date.now();
  const recent = (attempts.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  attempts.set(ip, recent);
  return recent.length >= MAX_ATTEMPTS;
}

function recordFailure(ip: string) {
  attempts.set(ip, [...(attempts.get(ip) ?? []), Date.now()]);
}

export async function POST(request: Request) {
  if (!isAdminConfigured()) {
    return Response.json({ ok: false, error: "Admin is not configured." }, { status: 503 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isLockedOut(ip)) {
    return Response.json(
      { ok: false, error: "Too many attempts. Try again in a few minutes." },
      { status: 429 },
    );
  }

  const body = (await request.json().catch(() => null)) as { password?: unknown } | null;
  const password = typeof body?.password === "string" ? body.password : "";

  if (!verifyPassword(password)) {
    recordFailure(ip);
    return Response.json({ ok: false, error: "Incorrect password." }, { status: 401 });
  }

  attempts.delete(ip);
  await startAdminSession();
  return Response.json({ ok: true });
}
