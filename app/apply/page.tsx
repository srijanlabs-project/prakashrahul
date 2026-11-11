import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/app/components/site-header";
import { GENERAL_APPLICATION, type Position } from "@/app/lib/positions";
import { readPositions } from "@/app/lib/positions-store";
import { getStorage } from "@/app/lib/storage";
import { ApplyForm } from "./apply-form";

export const metadata: Metadata = {
  title: "Apply for a Role",
  description:
    "Apply to work with Rahul Prakash. See open positions, share your details and upload your resume as a PDF.",
  alternates: {
    canonical: "/apply",
  },
};

async function loadOpenPositions(): Promise<Position[]> {
  const storage = getStorage();
  if (!storage) return [];

  try {
    return (await readPositions(storage))
      .filter((position) => position.status === "open")
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  } catch (error) {
    console.error("Apply: could not load positions.", error);
    return [];
  }
}

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const positions = await loadOpenPositions();
  const { role } = await searchParams;
  const requested = Array.isArray(role) ? role[0] : role;
  const selected = positions.find((position) => position.id === requested);

  return (
    <div className="min-h-screen overflow-x-clip bg-black font-sans text-white">
      <SiteHeader />

      <main className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-12">
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

        <section className="mb-14" aria-labelledby="open-positions">
          <h2 id="open-positions" className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
            Open positions
          </h2>

          {positions.length === 0 ? (
            <p className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm leading-relaxed text-white/60">
              There are no open positions right now, but you&apos;re welcome to send a general
              application below.
            </p>
          ) : (
            <div className="space-y-3">
              {positions.map((position) => (
                <article
                  key={position.id}
                  className={`rounded-2xl border p-6 ${
                    selected?.id === position.id ? "border-[#f2691c]" : "border-white/10"
                  } bg-white/5`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-medium">{position.title}</h3>
                      <p className="mt-1 text-sm text-white/50">
                        {position.location} &middot; {position.type}
                      </p>
                    </div>
                    <Link
                      href={`/apply?role=${position.id}#application`}
                      scroll
                      className="rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-white transition-colors hover:border-[#f2691c] hover:text-[#f2691c]"
                    >
                      Apply
                    </Link>
                  </div>
                  {position.description && (
                    <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-white/60">
                      {position.description}
                    </p>
                  )}
                </article>
              ))}
            </div>
          )}
        </section>

        <section id="application" className="scroll-mt-28" aria-label="Application form">
          <ApplyForm
            key={selected?.id ?? "none"}
            roles={positions.map((position) => position.title)}
            initialRole={selected?.title ?? (positions.length === 0 ? GENERAL_APPLICATION : "")}
          />
        </section>
      </main>
    </div>
  );
}
