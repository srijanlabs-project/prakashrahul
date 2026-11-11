"use client";

import { useRef, useState } from "react";
import { MAX_RESUME_BYTES, validateResumeMeta } from "@/app/lib/apply-rules";

type Status = "idle" | "submitting" | "success";

const inputClass =
  "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#f2691c]";

export function ApplyForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const resume = data.get("resume");

    if (!(resume instanceof File) || resume.size === 0) {
      setError("Please attach your resume as a PDF.");
      return;
    }
    const metaError = validateResumeMeta(resume);
    if (metaError) {
      setError(metaError);
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/apply", { method: "POST", body: data });
      const result = (await response.json().catch(() => null)) as
        | { ok: boolean; error?: string }
        | null;

      if (!response.ok || !result?.ok) {
        setError(result?.error ?? "Something went wrong. Please try again.");
        setStatus("idle");
        return;
      }

      form.reset();
      setFileName(null);
      setStatus("success");
    } catch {
      setError("Network error. Please check your connection and try again.");
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center sm:p-10">
        <div
          className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full"
          style={{ background: "#f2691c26", color: "#f2691c" }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            <path d="M5 12l4 4 10-10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h2 className="mb-2 font-display text-2xl font-medium">Application received</h2>
        <p className="mb-6 text-sm leading-relaxed text-white/60">
          Thank you for applying. Your resume has been submitted and will be reviewed.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-xs font-semibold uppercase tracking-[0.12em] text-[#f2691c] hover:opacity-80"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
            Full name
          </span>
          <input name="name" type="text" required maxLength={100} autoComplete="name" className={inputClass} placeholder="Your name" />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
            Email
          </span>
          <input name="email" type="email" required maxLength={200} autoComplete="email" className={inputClass} placeholder="you@example.com" />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
            Phone
          </span>
          <input name="phone" type="tel" required maxLength={20} autoComplete="tel" className={inputClass} placeholder="+91 98765 43210" />
        </label>

        <label className="block">
          <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
            Role applying for
          </span>
          <input name="role" type="text" required maxLength={100} className={inputClass} placeholder="e.g. Product Manager" />
        </label>
      </div>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Company website
          <input name="company_website" type="text" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
          Resume (PDF, max {MAX_RESUME_BYTES / (1024 * 1024)} MB)
        </span>
        <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-white/20 bg-white/5 px-4 py-8 text-center transition-colors hover:border-[#f2691c]">
          <span className="text-sm text-white/80">
            {fileName ?? "Click to choose your resume"}
          </span>
          <span className="text-xs text-white/40">PDF only</span>
          <input
            name="resume"
            type="file"
            accept="application/pdf,.pdf"
            required
            className="sr-only"
            onChange={(event) => setFileName(event.target.files?.[0]?.name ?? null)}
          />
        </label>
      </div>

      {error && (
        <p role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full px-8 py-3.5 text-sm font-semibold text-black transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        style={{ background: "#f2691c" }}
      >
        {status === "submitting" ? "Submitting..." : "Submit application"}
      </button>
    </form>
  );
}
