import { endAdminSession } from "@/app/lib/admin-auth";

export async function POST() {
  await endAdminSession();
  return Response.json({ ok: true });
}
