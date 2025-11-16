"use client";

import Link from "next/link";

export default function PremiumHeader() {
  return (
    <header className="sticky top-0 z-40 bg-[var(--ivory)]/80 backdrop-blur-md border-b border-black/5">
      <div className="container py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold text-[var(--charcoal)]">
          <div className="w-8 h-8 rounded-md bg-[var(--blush)] border border-black/10 flex items-center justify-center text-sm">S</div>
          <span>ScentMatch</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--charcoal)]/80">
          <Link href="/compare" className="hover:text-[var(--charcoal)]">Compare Dupes</Link>
          <Link href="/about" className="hover:text-[var(--charcoal)]">About</Link>
          <Link href="/faq" className="hover:text-[var(--charcoal)]">FAQ</Link>
        </nav>
        <Link href="/get-started" className="badge bg-white hover:bg-[var(--lavender)]">
          Get Started
        </Link>
      </div>
    </header>
  );
}
