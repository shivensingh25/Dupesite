'use client';

import { useState, useEffect } from 'react';
import { Search, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
      style={{ padding: '0.75rem 0' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#D7A8A1] to-[#EDE5F8] flex items-center justify-center shadow-sm">
                <span className="text-white text-xl font-bold">S</span>
              </div>
              <h1 className="text-xl font-semibold tracking-tight text-[var(--text-primary)]">
                ScentMatch
              </h1>
            </motion.div>
          </Link>

          {/* Compact search icon - scrolls to hero */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => window.scrollTo({ top: 300, behavior: 'smooth' })}
              className="w-10 h-10 rounded-full bg-[var(--neutral-smoke)] flex items-center justify-center hover:bg-[var(--blush)] transition-colors duration-200"
              aria-label="Open search"
            >
              <Search className="w-4 h-4 text-[var(--text-secondary)]" />
            </button>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <nav className="hidden lg:flex items-center gap-8">
              {[
                { name: 'Home', href: '/' },
                { name: 'Compare Dupes', href: '/compare' },
                { name: 'Brands', href: '#brands' },
                { name: 'About', href: '#about' },
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D7A8A1] to-[#EDE5F8] group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </nav>

            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDarkMode(!darkMode)}
              className="w-10 h-10 rounded-full bg-[var(--neutral-smoke)] flex items-center justify-center hover:bg-[var(--blush)] transition-colors duration-200"
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <Sun className="w-4 h-4 text-[var(--text-secondary)]" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Moon className="w-4 h-4 text-[var(--text-secondary)]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
