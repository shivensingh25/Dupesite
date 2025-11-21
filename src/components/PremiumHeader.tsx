"use client";

import Link from "next/link";

export default function PremiumHeader() {
  return (
    <header className="sticky top-0 z-50 bg-[var(--ivory)]/90 backdrop-blur-md border-b border-black/5 shadow-sm">
      <div className="container py-5 flex items-center gap-10">
        <Link href="/" className="flex items-center gap-2 font-semibold text-[var(--charcoal)]">
          <div className="w-9 h-9 rounded-md bg-[var(--blush)] border border-black/10 flex items-center justify-center text-sm">S</div>
          <span className="text-base tracking-tight">ScentMatch</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-[var(--charcoal)]/80">
          <Link href="/compare" className="hover:text-[var(--charcoal)] transition-colors">Compare Dupes</Link>
          <Link href="/about" className="hover:text-[var(--charcoal)] transition-colors">About</Link>
          <Link href="/faq" className="hover:text-[var(--charcoal)] transition-colors">FAQ</Link>
        </nav>
        <Link
          href="/get-started"
          aria-label="Get started finding perfume dupes"
          className="ml-auto btn btn-cta"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}
