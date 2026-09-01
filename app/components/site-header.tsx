"use client";

import Link from "next/link";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/#about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/#ventures", label: "Ventures" },
  { href: "/#writing", label: "Writing" },
  { href: "/#photography", label: "Photography" },
  { href: "/#journey", label: "Journey" },
  { href: "/#contact", label: "Contact" },
];

function IconMenu() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-5 sm:px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-lg font-semibold tracking-tight">Rahul Prakash</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#f2691c]" aria-hidden="true" />
        </Link>

        <nav className="hidden flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.12em] text-white/60 sm:flex">
          {NAV_ITEMS.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white sm:hidden"
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-black px-4 py-4 text-white sm:hidden">
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm uppercase tracking-[0.1em] text-white/70 transition-colors hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
