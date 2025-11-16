'use client';

import { useState } from 'react';
import { Search, Menu, X, User, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function MinimalHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#1E1E1E] text-white text-center py-2.5 px-4">
        <p className="text-sm font-medium">
          ✨ New dupes added weekly • Free comparison tool • Save up to 90% ✨
        </p>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E7E6E4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#F7E9EF] to-[#EEE8F7] flex items-center justify-center">
                <span className="text-[#1E1E1E] text-xl font-semibold">S</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-[#1E1E1E]">ScentMatch</h1>
                <p className="text-xs text-[#9E9E9E]">Find Your Perfect Dupe</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-sm font-medium text-[#5A5A5A] hover:text-[#1E1E1E] transition-colors">
                Women
              </Link>
              <Link href="/" className="text-sm font-medium text-[#5A5A5A] hover:text-[#1E1E1E] transition-colors">
                Men
              </Link>
              <Link href="/" className="text-sm font-medium text-[#5A5A5A] hover:text-[#1E1E1E] transition-colors">
                Unisex
              </Link>
              <Link href="/" className="text-sm font-medium text-[#5A5A5A] hover:text-[#1E1E1E] transition-colors">
                Best Sellers
              </Link>
              <Link href="/compare" className="text-sm font-semibold text-[#1E1E1E]">
                Compare Dupes
              </Link>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAF9F6] hover:bg-[#E7E6E4] transition-colors">
                <Search className="w-4 h-4 text-[#5A5A5A]" strokeWidth={1.5} />
                <span className="text-sm text-[#5A5A5A]">Search</span>
              </button>

              <button className="md:hidden p-2 rounded-full hover:bg-[#FAF9F6] transition-colors">
                <Search className="w-5 h-5 text-[#5A5A5A]" strokeWidth={1.5} />
              </button>

              <button className="hidden sm:block p-2 rounded-full hover:bg-[#FAF9F6] transition-colors relative">
                <Heart className="w-5 h-5 text-[#5A5A5A]" strokeWidth={1.5} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#F7E9EF] text-[#7D5266] text-xs font-semibold rounded-full flex items-center justify-center">
                  3
                </span>
              </button>

              <Link href="/account" className="hidden sm:block">
                <button className="px-5 py-2 rounded-full bg-[#1E1E1E] text-white text-sm font-semibold hover:bg-[#2D2D2D] transition-all">
                  Sign In
                </button>
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-full hover:bg-[#FAF9F6] transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-[#1E1E1E]" strokeWidth={1.5} />
                ) : (
                  <Menu className="w-6 h-6 text-[#1E1E1E]" strokeWidth={1.5} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-[#E7E6E4] overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <Link href="/" className="block py-2 text-base font-medium text-[#5A5A5A] hover:text-[#1E1E1E]">
                Women
              </Link>
              <Link href="/" className="block py-2 text-base font-medium text-[#5A5A5A] hover:text-[#1E1E1E]">
                Men
              </Link>
              <Link href="/" className="block py-2 text-base font-medium text-[#5A5A5A] hover:text-[#1E1E1E]">
                Unisex
              </Link>
              <Link href="/" className="block py-2 text-base font-medium text-[#5A5A5A] hover:text-[#1E1E1E]">
                Best Sellers
              </Link>
              <Link href="/compare" className="block py-2 text-base font-semibold text-[#1E1E1E]">
                Compare Dupes
              </Link>
              <div className="pt-4 border-t border-[#E7E6E4]">
                <button className="w-full py-3 text-center rounded-full bg-[#1E1E1E] text-white font-semibold">
                  Sign In
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
