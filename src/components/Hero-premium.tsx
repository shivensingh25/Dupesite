'use client';

import { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-gradient-to-br from-[var(--cream)] via-[var(--rose-dust)] to-[var(--lavender-mist)]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-[var(--rose-gold)]/10 to-[var(--soft-lavender)]/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-[var(--mint)]/10 to-[var(--champagne)]/10 blur-3xl"
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 mb-8"
        >
          <Sparkles className="w-4 h-4 text-[var(--rose-gold)]" />
          <span className="text-sm font-medium text-[var(--text-secondary)]">
            Find luxury scents at affordable prices
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 tracking-tight leading-none"
        >
          Find Affordable{' '}
          <span className="block mt-2">
            <span className="text-gradient">Perfume Dupes</span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Discover high-quality alternatives to designer fragrances.{' '}
          <span className="text-[var(--text-primary)] font-medium">
            Same scent, smarter price.
          </span>
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--rose-gold)] via-[var(--soft-lavender)] to-[var(--mint)] rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative flex items-center">
              <Search className="absolute left-6 w-5 h-5 text-[var(--text-tertiary)] pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for perfumes, brands, or notes..."
                className="w-full pl-14 pr-6 py-5 rounded-3xl bg-white border-2 border-transparent focus:border-[var(--dusty-rose)] text-base placeholder:text-[var(--text-muted)] shadow-xl focus:shadow-2xl focus:outline-none transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="absolute right-2 px-8 py-3 rounded-2xl bg-gradient-to-r from-[var(--rose-gold)] to-[var(--dusty-rose)] text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Search
              </motion.button>
            </div>
          </div>

          {/* Popular Searches */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            <span className="text-sm text-[var(--text-tertiary)]">Popular:</span>
            {['Sauvage', 'Chanel No.5', 'Black Opium', 'Aventus', 'La Vie Est Belle'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 text-sm text-[var(--text-secondary)] hover:border-[var(--dusty-rose)] hover:text-[var(--text-primary)] transition-all duration-200"
              >
                {item}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
