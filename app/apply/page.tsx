import type { Metadata } from "next";
import { SiteHeader } from "@/app/components/site-header";
import { ApplyForm } from "./apply-form";

export const metadata: Metadata = {
  title: "Apply for a Role",
  description:
    "Apply to work with Rahul Prakash. Share your details and upload your resume as a PDF.",
  alternates: {
    canonical: "/apply",
  },
};

export default function ApplyPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-black font-sans text-white">
      <SiteHeader />

      <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em]" style={{ color: "#f2691c" }}>
            Careers
          </div>
          <h1 className="mb-4 font-display text-4xl font-medium leading-[1.05] sm:text-5xl">
            Apply for a role
          </h1>
          <p className="text-base leading-relaxed text-white/60">
            Tell us a little about yourself and upload your resume. Every application is read
            personally.
          </p>
        </div>

        <ApplyForm />
      </main>
    </div>
  );
}
