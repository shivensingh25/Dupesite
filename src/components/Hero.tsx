"use client";

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import SearchBar from './SearchBar';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 px-6 overflow-hidden hero-section">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#F7E6EA]/30 to-[#EDE5F8]/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [45, 0, 45],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#EDE5F8]/20 to-[#FAF8F5]/30 blur-3xl"
        />
      </div>

  <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm border border-gray-200 mb-6"
        >
          <Sparkles className="w-4 h-4 text-[var(--dusty-rose)]" />
          <span className="text-sm font-medium text-[var(--text-secondary)]">
            Find luxury scents at affordable prices
          </span>
        </motion.div>

        {/* Main Heading - Reduced Size */}
        <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }} className="hero-title mb-5">
          Find Affordable <span className="block mt-2 text-gradient">Perfume Dupes</span>
        </motion.h1>

        {/* Subtitle - Enhanced */}
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="hero-subtitle mb-10">
          Discover high-quality alternatives to designer fragrances. <strong className="font-semibold text-[var(--text-primary)]">Same scent, smarter price.</strong>
        </motion.p>

        <SearchBar />
      </div>
    </section>
  );
}
