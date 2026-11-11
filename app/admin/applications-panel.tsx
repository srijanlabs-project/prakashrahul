"use client";

import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import type { ApplicationRecord } from "@/app/lib/applications-store";
import { adminFetch, SignedOutError } from "./admin-fetch";

const inputClass =
  "rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#f2691c]";

function formatWhen(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatSize(bytes: number): string {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

export function ApplicationsPanel() {
  const router = useRouter();
  const [applications, setApplications] = useState<ApplicationRecord[] | null>(null);
  const [truncated, setTruncated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [role, setRole] = useState("");

  function showResult(result: { applications: ApplicationRecord[]; truncated?: boolean }) {
    setApplications(result.applications ?? []);
    setTruncated(Boolean(result.truncated));
  }

  function showFailure(failure: unknown) {
    if (failure instanceof SignedOutError) router.refresh();
    else setError(failure instanceof Error ? failure.message : "Could not load applications.");
  }

  useEffect(() => {
    let active = true;
    adminFetch<{ applications: ApplicationRecord[]; truncated?: boolean }>("/api/admin/applications")
      .then((result) => active && showResult(result))
      .catch((failure) => active && showFailure(failure));
    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function refresh() {
    setError(null);
    setApplications(null);
    adminFetch<{ applications: ApplicationRecord[]; truncated?: boolean }>("/api/admin/applications")
      .then(showResult)
      .catch(showFailure);
  }

  const roles = useMemo(
    () => Array.from(new Set((applications ?? []).map((a) => a.role))).sort(),
    [applications],
  );

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return (applications ?? []).filter((a) => {
      if (role && a.role !== role) return false;
      if (!needle) return true;
      return [a.name, a.email, a.phone, a.role].some((field) => field.toLowerCase().includes(needle));
    });
  }, [applications, query, role]);

  return (
    <section>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search name, email, phone..."
          className={`${inputClass} w-full sm:w-72`}
        />
        <select value={role} onChange={(event) => setRole(event.target.value)} className={inputClass}>
          <option value="">All roles</option>
          {roles.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={refresh}
          className="rounded-full border border-white/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-white/70 hover:text-white"
        >
          Refresh
        </button>
        {applications && (
          <span className="text-xs text-white/40">
            {visible.length} of {applications.length} shown
          </span>
        )}
      </div>

      {error && (
        <p role="alert" className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </p>
      )}

      {!applications && !error && <p className="text-sm text-white/50">Loading applications...</p>}

      {applications && applications.length === 0 && (
        <p className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-sm text-white/50">
          No applications yet.
        </p>
      )}

      {applications && applications.length > 0 && (
        <div className="overflow-x-auto rounded-2xl border border-white/10">
          <table className="w-full min-w-[760px] text-left text-sm">
            <thead className="bg-white/5 text-xs uppercase tracking-[0.1em] text-white/50">
              <tr>
                <th className="px-4 py-3 font-semibold">Received</th>
                <th className="px-4 py-3 font-semibold">Name</th>
                <th className="px-4 py-3 font-semibold">Role</th>
                <th className="px-4 py-3 font-semibold">Contact</th>
                <th className="px-4 py-3 font-semibold">Resume</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {visible.map((a) => (
                <tr key={a.id} className="align-top">
                  <td className="whitespace-nowrap px-4 py-3 text-white/70">{formatWhen(a.submittedAt)}</td>
                  <td className="px-4 py-3 font-medium">{a.name}</td>
                  <td className="px-4 py-3 text-white/80">{a.role}</td>
                  <td className="px-4 py-3 text-white/70">
                    <a href={`mailto:${a.email}`} className="block hover:text-[#f2691c]">
                      {a.email}
                    </a>
                    <span className="text-white/50">{a.phone}</span>
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href={`/api/admin/applications/resume?date=${a.date}&id=${a.id}`}
                      className="font-semibold text-[#f2691c] hover:opacity-80"
                    >
                      Download
                    </a>
                    <span className="block text-xs text-white/40">{formatSize(a.resumeSizeBytes)}</span>
                  </td>
                </tr>
              ))}
              {visible.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-white/50">
                    No applications match your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {truncated && (
        <p className="mt-4 text-xs text-white/40">Showing the most recent 500 applications.</p>
      )}
    </section>
  );
}
