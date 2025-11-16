'use client';

import { useState, useEffect } from 'react';
import { Search, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-effect shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[var(--rose-gold)] to-[var(--soft-lavender)] flex items-center justify-center shadow-md">
              <span className="text-white text-xl font-bold">S</span>
            </div>
            <h1 className="text-2xl font-semibold tracking-tight">
              <span className="text-gradient">ScentMatch</span>
            </h1>
          </motion.div>

          {/* Search Bar - Desktop */}
          <motion.div
            animate={{
              width: searchFocused ? '400px' : '300px',
            }}
            className="hidden md:block"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-tertiary)] pointer-events-none" />
              <input
                type="text"
                placeholder="Search fragrances..."
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl border border-[var(--sand)] bg-white/80 backdrop-blur-sm text-sm placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--dusty-rose)] focus:ring-2 focus:ring-[var(--dusty-rose)]/20 transition-all duration-300 smooth-transition"
              />
            </div>
          </motion.div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <nav className="hidden lg:flex items-center gap-8">
              {['Perfumes', 'Dupes', 'Brands', 'About'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--rose-gold)] to-[var(--soft-lavender)] group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </nav>

            {/* Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setDarkMode(!darkMode)}
              className="w-10 h-10 rounded-full bg-[var(--pearl)] flex items-center justify-center hover:bg-[var(--sand)] transition-colors duration-200"
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
