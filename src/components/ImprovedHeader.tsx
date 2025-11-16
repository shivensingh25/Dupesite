'use client';

import { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, ShoppingBag, User, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function ImprovedHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { name: 'Women', href: '/category/women' },
    { name: 'Men', href: '/category/men' },
    { name: 'Unisex', href: '/category/unisex' },
    { name: 'Best Sellers', href: '/best-sellers' },
  ];

  return (
    <>
      {/* Top Bar - Announcement */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white text-center py-2 px-4 text-sm font-medium">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-center gap-2"
        >
          <span className="hidden sm:inline">🎉</span>
          <span>New dupes added weekly • Free comparison tool • Save up to 90%</span>
          <span className="hidden sm:inline">✨</span>
        </motion.div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-md border-b border-gray-200'
            : 'bg-white border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-600 to-rose-500 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                  <span className="text-white text-2xl font-bold">S</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
              </motion.div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  ScentMatch
                </h1>
                <p className="text-xs text-gray-500 font-medium">Find Your Perfect Dupe</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="relative text-sm font-semibold text-gray-700 hover:text-purple-600 transition-colors group"
                >
                  {category.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
              <Link
                href="/compare"
                className="relative text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors flex items-center gap-1 group"
              >
                Compare Dupes
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </Link>
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              
              {/* Search Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchOpen(!searchOpen)}
                className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700"
              >
                <Search className="w-4 h-4" />
                <span className="text-sm font-medium">Search</span>
              </motion.button>

              {/* Mobile Search Icon */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="md:hidden p-2.5 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Search className="w-5 h-5 text-gray-700" />
              </button>

              {/* Wishlist */}
              <Link href="/wishlist">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors hidden sm:block"
                >
                  <Heart className="w-5 h-5 text-gray-700" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    3
                  </span>
                </motion.button>
              </Link>

              {/* Account */}
              <Link href="/account">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:shadow-lg transition-all"
                >
                  <User className="w-4 h-4" />
                  <span className="text-sm">Sign In</span>
                </motion.button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-full hover:bg-gray-100 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-b-3xl shadow-2xl max-w-3xl mx-auto"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Search className="w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for perfumes, brands, or notes..."
                    className="flex-1 text-lg outline-none text-gray-900 placeholder-gray-400"
                    autoFocus
                  />
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="p-2 rounded-full hover:bg-gray-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Popular Searches */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                    Popular Searches
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Chanel No. 5', 'Dior Sauvage', 'Tom Ford', 'Vanilla', 'Floral'].map((term) => (
                      <button
                        key={term}
                        className="px-4 py-2 rounded-full bg-gray-100 hover:bg-purple-100 hover:text-purple-600 text-sm font-medium transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-gray-200 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className="block py-2 text-base font-semibold text-gray-700 hover:text-purple-600 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
              <Link
                href="/compare"
                className="block py-2 text-base font-semibold text-purple-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Compare Dupes
              </Link>
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/account"
                  className="block w-full py-3 text-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
