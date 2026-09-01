import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/app/components/site-header";
import { SiteFooter } from "@/app/components/site-footer";
import { experiences, getExperienceBySlug } from "@/app/lib/experience-data";
import { SITE_NAME } from "@/app/lib/seo-config";

export function generateStaticParams() {
  return experiences.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getExperienceBySlug(slug);

  if (!entry) {
    return {};
  }

  const title = `${entry.company} — ${entry.role}`;
  const description = `${entry.summary} ${entry.period}, ${SITE_NAME} at ${entry.company}.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/experience/${entry.slug}`,
    },
    openGraph: {
      type: "article",
      url: `/experience/${entry.slug}`,
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getExperienceBySlug(slug);

  if (!entry) {
    notFound();
  }

  const index = experiences.findIndex((item) => item.slug === entry.slug);
  const previous = experiences[index - 1];
  const next = experiences[index + 1];

  return (
    <div className="min-h-screen overflow-x-clip bg-background font-sans text-foreground">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <Link href="/experience" className="mb-10 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-muted transition-colors hover:text-accent">
          &larr; All Experience
        </Link>

        <div className="max-w-3xl">
          <div className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-muted">
            {entry.period}
          </div>
          <h1 className="mb-4 font-display leading-[1.05] text-foreground">
            <span className="mb-1 block text-base font-semibold text-muted sm:text-lg">
              Rahul Prakash &mdash;
            </span>
            <span className="block text-4xl font-medium sm:text-5xl">{entry.company}</span>
          </h1>
          <div className="mb-8 text-lg font-semibold text-accent">{entry.role}</div>
          <p className="text-lg leading-relaxed text-muted">{entry.summary}</p>
        </div>

        {entry.metrics.length > 0 && (
          <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-border pt-10 sm:grid-cols-4">
            {entry.metrics.map((metric) => (
              <div key={metric.label} className="min-w-0">
                <dd className="font-display text-3xl font-medium text-accent sm:text-4xl">{metric.value}</dd>
                <dt className="mt-2 break-words text-sm leading-snug text-muted">{metric.label}</dt>
              </div>
            ))}
          </dl>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            The Story
          </div>
          <h2 className="font-display text-3xl font-medium sm:text-4xl">What I did here</h2>
        </div>

        <div className="space-y-10">
          {entry.narrative.map((era) => (
            <div key={era.label} className="grid gap-4 border-t border-border pt-8 sm:grid-cols-[160px_1fr] sm:gap-10">
              <div className="text-sm font-semibold uppercase tracking-[0.12em] text-muted">
                {era.label}
              </div>
              <p className="max-w-3xl leading-relaxed text-foreground/80">{era.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Key Impact
          </div>
          <h2 className="font-display text-3xl font-medium sm:text-4xl">Achievements &amp; highlights</h2>
        </div>

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {entry.themes.map((theme) => (
            <div key={theme.title} className="border-t border-border pt-6">
              <h3 className="mb-4 font-display text-lg font-medium text-foreground">{theme.title}</h3>
              <ul className="space-y-3">
                {theme.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {entry.tools && entry.tools.length > 0 && (
          <div className="mt-16 border-t border-border pt-8">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-muted">Tools &amp; Stack</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {entry.tools.map((tool) => (
                <span key={tool} className="text-sm text-foreground/80">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="grid gap-px overflow-hidden border-t border-l border-border sm:grid-cols-2">
          {previous ? (
            <Link
              href={`/experience/${previous.slug}`}
              className="border-r border-b border-border bg-background p-8 transition-colors hover:bg-surface"
            >
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-muted">&larr; Previous</div>
              <div className="font-display text-xl font-medium text-foreground">{previous.company}</div>
            </Link>
          ) : (
            <div className="border-r border-b border-border bg-background p-8" />
          )}

          {next ? (
            <Link
              href={`/experience/${next.slug}`}
              className="border-r border-b border-border bg-background p-8 text-right transition-colors hover:bg-surface"
            >
              <div className="mb-2 text-xs font-semibold uppercase tracking-[0.15em] text-muted">Next &rarr;</div>
              <div className="font-display text-xl font-medium text-foreground">{next.company}</div>
            </Link>
          ) : (
            <div className="border-r border-b border-border bg-background p-8" />
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
