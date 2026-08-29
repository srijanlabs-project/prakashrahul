import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="min-w-0">
          <h1 className="font-display text-xl font-semibold tracking-tight">Rahul Prakash</h1>
          <p className="mt-1 max-w-md break-words text-xs leading-relaxed text-muted">
            Product &amp; Platform Leader &middot; 0&rarr;1 Product Building
          </p>
        </Link>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.12em] text-muted">
          <Link href="/#about" className="transition-colors hover:text-accent">About</Link>
          <Link href="/experience" className="transition-colors hover:text-accent">Experience</Link>
          <Link href="/#expertise" className="transition-colors hover:text-accent">Expertise</Link>
          <Link href="/#ventures" className="transition-colors hover:text-accent">Ventures</Link>
          <Link href="/#writing" className="transition-colors hover:text-accent">Writing</Link>
          <Link href="/#photography" className="transition-colors hover:text-accent">Photography</Link>
          <Link href="/#contact" className="transition-colors hover:text-accent">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
