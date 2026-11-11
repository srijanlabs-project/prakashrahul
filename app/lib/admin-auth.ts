import { createHash, createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export const ADMIN_COOKIE = "admin_session";
export const SESSION_SECONDS = 12 * 60 * 60;
const MIN_PASSWORD_LENGTH = 10;

function adminPassword(): string {
  return process.env.ADMIN_PASSWORD ?? "";
}

/** Admin is only enabled when a sufficiently long password is configured. */
export function isAdminConfigured(): boolean {
  return adminPassword().length >= MIN_PASSWORD_LENGTH;
}

function sha256(value: string): Buffer {
  return createHash("sha256").update(value).digest();
}

function sessionSecret(): Buffer {
  // Derived from the password, so changing the password signs everyone out.
  return sha256(`admin-session:${adminPassword()}`);
}

function sign(expiresAt: number): string {
  return createHmac("sha256", sessionSecret()).update(String(expiresAt)).digest("hex");
}

export function verifyPassword(input: string): boolean {
  if (!isAdminConfigured()) return false;
  return timingSafeEqual(sha256(input), sha256(adminPassword()));
}

export async function startAdminSession() {
  const expiresAt = Date.now() + SESSION_SECONDS * 1000;
  (await cookies()).set(ADMIN_COOKIE, `${expiresAt}.${sign(expiresAt)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: SESSION_SECONDS,
  });
}

export async function endAdminSession() {
  (await cookies()).delete(ADMIN_COOKIE);
}

export async function isAdminAuthed(): Promise<boolean> {
  if (!isAdminConfigured()) return false;

  const token = (await cookies()).get(ADMIN_COOKIE)?.value;
  if (!token) return false;

  const [expiresRaw, signature] = token.split(".");
  const expiresAt = Number(expiresRaw);
  if (!signature || !Number.isFinite(expiresAt) || expiresAt < Date.now()) return false;

  const expected = sign(expiresAt);
  if (signature.length !== expected.length) return false;
  return timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
}

/** For route handlers: returns an error response if the caller is not an admin, else null. */
export async function requireAdmin(): Promise<Response | null> {
  if (!isAdminConfigured()) {
    return Response.json({ ok: false, error: "Admin is not configured." }, { status: 503 });
  }
  if (!(await isAdminAuthed())) {
    return Response.json({ ok: false, error: "Please sign in." }, { status: 401 });
  }
  return null;
}
