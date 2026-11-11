import type { Metadata } from "next";
import { connection } from "next/server";
import { isAdminAuthed, isAdminConfigured } from "@/app/lib/admin-auth";
import { AdminDashboard } from "./admin-dashboard";
import { AdminLogin } from "./admin-login";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  // Always render per request so login state and the env var are read at runtime.
  await connection();

  if (!isAdminConfigured()) {
    return (
      <main className="mx-auto flex min-h-screen max-w-md items-center px-4 text-white">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h1 className="mb-3 font-display text-2xl font-medium">Admin is not set up</h1>
          <p className="text-sm leading-relaxed text-white/60">
            Set an <code className="text-[#f2691c]">ADMIN_PASSWORD</code> environment variable (at
            least 10 characters) on the server, then redeploy.
          </p>
        </div>
      </main>
    );
  }

  return (await isAdminAuthed()) ? <AdminDashboard /> : <AdminLogin />;
}
