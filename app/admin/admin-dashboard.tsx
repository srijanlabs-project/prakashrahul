"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ApplicationsPanel } from "./applications-panel";
import { PositionsPanel } from "./positions-panel";

type Tab = "applications" | "positions";

export function AdminDashboard() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("applications");

  async function signOut() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  }

  const tabClass = (active: boolean) =>
    `rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${
      active ? "bg-[#f2691c] text-black" : "border border-white/15 text-white/70 hover:text-white"
    }`;

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="font-display text-lg font-semibold">Admin</span>
            <span className="h-1.5 w-1.5 rounded-full bg-[#f2691c]" aria-hidden="true" />
          </div>
          <div className="flex items-center gap-4 text-xs uppercase tracking-[0.12em]">
            <a href="/apply" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white">
              View apply page
            </a>
            <button type="button" onClick={signOut} className="text-white/60 hover:text-white">
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="mb-8 flex gap-3">
          <button type="button" onClick={() => setTab("applications")} className={tabClass(tab === "applications")}>
            Applications
          </button>
          <button type="button" onClick={() => setTab("positions")} className={tabClass(tab === "positions")}>
            Positions
          </button>
        </div>

        {tab === "applications" ? <ApplicationsPanel /> : <PositionsPanel />}
      </main>
    </div>
  );
}
