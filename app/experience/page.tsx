import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { earlierCareer, experiences } from "@/app/lib/experience-data";
import { SITE_NAME } from "@/app/lib/seo-config";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "20+ years of 0→1 product and platform building across Srijan Labs, Praxis Retail, Broadway, JioMart, Future Retail, and Magicbricks — a company-by-company look at what Rahul Prakash built.",
  alternates: {
    canonical: "/experience",
  },
};

export default function ExperienceIndexPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background font-sans text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="max-w-2xl">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Leadership Journey
          </div>
          <h1 className="mb-6 font-display leading-[1.05]">
            <span className="mb-1 block text-base font-semibold text-muted sm:text-lg">
              Rahul Prakash &mdash;
            </span>
            <span className="block text-4xl font-medium sm:text-5xl">20+ years, company by company</span>
          </h1>
          <p className="text-lg leading-relaxed text-muted">
            {SITE_NAME}{" "}
            has built and scaled technology platforms from 0&rarr;1 across SaaS, retail,
            commerce, supply chain, and real estate. Each role below has its own story &mdash;
            the platforms built, the numbers moved, and the teams behind it.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="space-y-px overflow-hidden border-t border-border">
          {experiences.map((entry) => (
            <Link
              key={entry.slug}
              href={`/experience/${entry.slug}`}
              className="group grid gap-3 border-b border-border bg-background px-2 py-10 transition-colors hover:bg-surface sm:grid-cols-[160px_1fr_auto] sm:items-center sm:gap-10 sm:px-4"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">
                {entry.period}
              </div>

              <div>
                <h2 className="font-display text-2xl font-medium text-foreground transition-colors group-hover:text-accent sm:text-3xl">
                  {entry.company}
                </h2>
                <div className="mt-1 text-sm font-semibold text-accent">{entry.role}</div>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{entry.summary}</p>
              </div>

              <div className="text-xs font-semibold uppercase tracking-[0.1em] text-foreground transition-colors group-hover:text-accent">
                Read the story <span aria-hidden="true">&rarr;</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-8">
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-muted">Earlier Career</h3>
          <ul className="space-y-2">
            {earlierCareer.map((role) => (
              <li key={`${role.company}-${role.period}`} className="flex flex-wrap items-baseline gap-x-3 text-sm text-foreground/80">
                <span className="font-semibold">{role.role}</span>
                <span className="text-muted">&middot; {role.company}</span>
                <span className="text-muted">&middot; {role.period}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
