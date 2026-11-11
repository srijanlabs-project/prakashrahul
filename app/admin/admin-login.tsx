"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function AdminLogin() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setBusy(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const result = (await response.json().catch(() => null)) as { ok: boolean; error?: string } | null;

      if (!response.ok || !result?.ok) {
        setError(result?.error ?? "Could not sign in. Please try again.");
        setBusy(false);
        return;
      }
      router.refresh();
    } catch {
      setError("Could not reach the server. Please try again.");
      setBusy(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-sm items-center px-4 text-white">
      <form onSubmit={onSubmit} className="w-full rounded-2xl border border-white/10 bg-white/5 p-8">
        <h1 className="mb-1 font-display text-2xl font-medium">Admin</h1>
        <p className="mb-6 text-sm text-white/50">Sign in to manage positions and applications.</p>

        <label className="mb-5 block">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
            Password
          </span>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            autoFocus
            required
            className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-[#f2691c]"
          />
        </label>

        {error && (
          <p role="alert" className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={busy}
          className="w-full rounded-full px-6 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90 disabled:opacity-60"
          style={{ background: "#f2691c" }}
        >
          {busy ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </main>
  );
}
