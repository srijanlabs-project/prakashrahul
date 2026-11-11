"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { adminFetch, SignedOutError } from "./admin-fetch";
import {
  POSITION_STATUSES,
  POSITION_TYPES,
  type Position,
  type PositionInput,
} from "@/app/lib/positions";

const fieldClass =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#f2691c]";
const labelClass = "mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-white/60";

const EMPTY: PositionInput = {
  title: "",
  location: "",
  type: "Full-time",
  description: "",
  status: "open",
};

export function PositionsPanel() {
  const router = useRouter();
  const [positions, setPositions] = useState<Position[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<PositionInput>(EMPTY);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [busy, setBusy] = useState(false);

  function handleFailure(failure: unknown, fallback: string) {
    if (failure instanceof SignedOutError) router.refresh();
    else setError(failure instanceof Error ? failure.message : fallback);
  }

  useEffect(() => {
    let active = true;
    adminFetch<{ positions: Position[] }>("/api/admin/positions")
      .then((result) => active && setPositions(result.positions ?? []))
      .catch((failure) => active && handleFailure(failure, "Could not load positions."));
    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function load() {
    try {
      const result = await adminFetch<{ positions: Position[] }>("/api/admin/positions");
      setPositions(result.positions ?? []);
    } catch (failure) {
      handleFailure(failure, "Could not load positions.");
    }
  }

  function openNew() {
    setForm(EMPTY);
    setEditingId(null);
    setShowForm(true);
    setError(null);
  }

  function openEdit(position: Position) {
    const { title, location, type, description, status } = position;
    setForm({ title, location, type, description, status });
    setEditingId(position.id);
    setShowForm(true);
    setError(null);
  }

  async function save(event: React.FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError(null);
    try {
      await adminFetch(editingId ? `/api/admin/positions/${editingId}` : "/api/admin/positions", {
        method: editingId ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setShowForm(false);
      await load();
    } catch (e) {
      handleFailure(e, "Could not save.");
    } finally {
      setBusy(false);
    }
  }

  async function toggleStatus(position: Position) {
    setError(null);
    try {
      const { title, location, type, description } = position;
      await adminFetch(`/api/admin/positions/${position.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          location,
          type,
          description,
          status: position.status === "open" ? "closed" : "open",
        }),
      });
      await load();
    } catch (e) {
      handleFailure(e, "Could not update.");
    }
  }

  async function remove(position: Position) {
    if (!window.confirm(`Delete "${position.title}"? Existing applications are kept.`)) return;
    setError(null);
    try {
      await adminFetch(`/api/admin/positions/${position.id}`, { method: "DELETE" });
      await load();
    } catch (e) {
      handleFailure(e, "Could not delete.");
    }
  }

  const sorted = [...(positions ?? [])].sort((a, b) => b.createdAt.localeCompare(a.createdAt));

  return (
    <section>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="max-w-xl text-sm text-white/50">
          Open positions appear on the public Apply page and in its role dropdown. Closed positions
          are hidden but kept here.
        </p>
        {!showForm && (
          <button
            type="button"
            onClick={openNew}
            className="rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-black"
            style={{ background: "#f2691c" }}
          >
            Add position
          </button>
        )}
      </div>

      {error && (
        <p role="alert" className="mb-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </p>
      )}

      {showForm && (
        <form onSubmit={save} className="mb-8 space-y-5 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="font-display text-xl font-medium">{editingId ? "Edit position" : "New position"}</h2>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className={labelClass}>Title</span>
              <input
                className={fieldClass}
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                maxLength={100}
                required
                placeholder="e.g. Senior Product Manager"
              />
            </label>
            <label className="block">
              <span className={labelClass}>Location</span>
              <input
                className={fieldClass}
                value={form.location}
                onChange={(e) => setForm({ ...form, location: e.target.value })}
                maxLength={100}
                required
                placeholder="e.g. Mumbai / Remote"
              />
            </label>
            <label className="block">
              <span className={labelClass}>Type</span>
              <select
                className={fieldClass}
                value={form.type}
                onChange={(e) => setForm({ ...form, type: e.target.value as PositionInput["type"] })}
              >
                {POSITION_TYPES.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className={labelClass}>Status</span>
              <select
                className={fieldClass}
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value as PositionInput["status"] })}
              >
                {POSITION_STATUSES.map((s) => (
                  <option key={s} value={s}>
                    {s === "open" ? "Open (visible on site)" : "Closed (hidden)"}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="block">
            <span className={labelClass}>Description</span>
            <textarea
              className={`${fieldClass} min-h-40`}
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              maxLength={4000}
              placeholder="What the role involves, what you're looking for..."
            />
          </label>

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={busy}
              className="rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-black disabled:opacity-60"
              style={{ background: "#f2691c" }}
            >
              {busy ? "Saving..." : "Save position"}
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="rounded-full border border-white/15 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-white/70 hover:text-white"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {!positions && !error && <p className="text-sm text-white/50">Loading positions...</p>}

      {positions && positions.length === 0 && !showForm && (
        <p className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center text-sm text-white/50">
          No positions yet. Add one to show it on the Apply page.
        </p>
      )}

      <div className="space-y-3">
        {sorted.map((position) => (
          <div key={position.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="mb-1 flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-lg font-medium">{position.title}</h3>
                  <span
                    className={`rounded-full px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] ${
                      position.status === "open"
                        ? "bg-emerald-500/15 text-emerald-300"
                        : "bg-white/10 text-white/50"
                    }`}
                  >
                    {position.status}
                  </span>
                </div>
                <p className="text-sm text-white/50">
                  {position.location} &middot; {position.type}
                </p>
              </div>

              <div className="flex gap-4 text-xs font-semibold uppercase tracking-[0.1em]">
                <button type="button" onClick={() => openEdit(position)} className="text-white/70 hover:text-white">
                  Edit
                </button>
                <button type="button" onClick={() => void toggleStatus(position)} className="text-white/70 hover:text-white">
                  {position.status === "open" ? "Close" : "Reopen"}
                </button>
                <button type="button" onClick={() => void remove(position)} className="text-red-300/80 hover:text-red-300">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
