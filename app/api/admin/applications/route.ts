import { requireAdmin } from "@/app/lib/admin-auth";
import { listApplications } from "@/app/lib/applications-store";
import { getStorage } from "@/app/lib/storage";

export async function GET() {
  const denied = await requireAdmin();
  if (denied) return denied;

  const storage = getStorage();
  if (!storage) {
    return Response.json({ ok: false, error: "Storage is not configured." }, { status: 503 });
  }

  try {
    const { applications, truncated } = await listApplications(storage);
    return Response.json({ ok: true, applications, truncated });
  } catch (error) {
    console.error("Admin: failed to list applications.", error);
    return Response.json({ ok: false, error: "Could not load applications." }, { status: 500 });
  }
}
