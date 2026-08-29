export function SiteFooter() {
  return (
    <section id="contact" className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
          Connect
        </div>

        <h3 className="mb-6 max-w-2xl font-display text-4xl font-medium leading-tight sm:text-5xl">
          Let&apos;s build something meaningful.
        </h3>

        <p className="mb-10 max-w-xl text-base leading-relaxed text-background/70 sm:text-lg">
          Based in Mumbai, India. Open to conversations around Product &amp; Platform
          Leadership roles, 0&rarr;1 SaaS building, enterprise platform strategy, and
          AI-driven workflow platforms.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="mailto:rrahulprakash@gmail.com" className="rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-background hover:text-foreground">
            rrahulprakash@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/prakashrahul/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-background/30 px-8 py-3.5 text-sm font-semibold text-background transition-colors hover:border-background"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>

      <div className="border-t border-background/15">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs text-background/50 sm:px-6">
          &copy; {new Date().getFullYear()} Rahul Prakash. All rights reserved.
        </div>
      </div>
    </section>
  );
}
