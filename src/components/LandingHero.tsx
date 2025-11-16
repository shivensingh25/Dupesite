"use client";

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Star, Droplet, Gauge, BadgeCheck } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { value: '500+', label: 'Designer Fragrances' },
  { value: '2000+', label: 'Verified Dupes' },
  { value: '95%', label: 'Accuracy Rate' },
];

export default function LandingHero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 180, 360], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-56 -right-40 w-[28rem] h-[28rem] rounded-full bg-gradient-to-br from-[#F7E6EA] to-[#EDE5F8] blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 0.95, 1.1], rotate: [360, 180, 0], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-48 -left-40 w-[30rem] h-[30rem] rounded-full bg-gradient-to-br from-[#EDE5F8] to-[#FAF8F5] blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -40, 0], opacity: [0.18, 0.32, 0.18] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full bg-gradient-to-br from-[#D7A8A1]/20 to-transparent blur-3xl"
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 lg:gap-20 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md border border-white/70 shadow-sm"
            >
              <Sparkles className="w-5 h-5 text-[var(--dusty-rose)]" />
              <span className="text-base font-medium text-[var(--text-secondary)]">
                Your smart fragrance companion
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-8 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.08] text-[var(--text-primary)] max-w-2xl"
            >
              Compare Perfume Dupes
              <span className="block mt-4 text-gradient">With Ease & Legitimacy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-6 text-lg md:text-xl text-[var(--text-secondary)] max-w-xl leading-relaxed"
            >
              Discover authentic alternatives to your favorite designer fragrances and shop smarter without compromising on luxury.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-5"
            >
              <Link href="/compare">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group w-full sm:w-auto px-10 py-[18px] rounded-full bg-gradient-to-r from-[var(--dusty-rose)] to-[var(--blush)] text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
                >
                  Start Comparing
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="w-full sm:w-auto px-10 py-[18px] rounded-full bg-white border border-[var(--blush)]/40 text-[var(--text-primary)] text-lg font-semibold shadow-[0_12px_30px_-20px_rgba(0,0,0,0.45)] hover:shadow-lg transition-all"
              >
                Learn How It Works
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 w-full"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65 + index * 0.1 }}
                  className="rounded-3xl border border-white/70 bg-white/65 backdrop-blur-md shadow-[0_25px_50px_-30px_rgba(0,0,0,0.5)] px-8 py-7 text-center"
                >
                  <div className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)]">{stat.value}</div>
                  <p className="mt-2 text-sm md:text-base font-medium text-[var(--text-secondary)]">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-3xl bg-white/70 backdrop-blur-2xl border border-white/60 shadow-[0_35px_80px_-40px_rgba(0,0,0,0.6)] p-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--blush)]/25 text-[var(--dusty-rose)] text-sm font-semibold">
                <BadgeCheck className="w-4 h-4" />
                Verified Match
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-[var(--text-primary)]">ScentMatch Insights</h3>
              <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                Tailored recommendations ranked by note similarity, community trust scores, and real-world performance.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/80 border border-white/60 p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)]">
                    <Star className="w-4 h-4 text-[var(--dusty-rose)]" />
                    Accord Match
                  </div>
                  <p className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">92%</p>
                  <span className="text-xs text-[var(--text-secondary)]">Vanilla, Jasmine, Musk</span>
                </div>

                <div className="rounded-2xl bg-white/80 border border-white/60 p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)]">
                    <Droplet className="w-4 h-4 text-[var(--dusty-rose)]" />
                    Longevity
                  </div>
                  <p className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">8 hrs</p>
                  <span className="text-xs text-[var(--text-secondary)]">Real wearer feedback</span>
                </div>

                <div className="rounded-2xl bg-white/80 border border-white/60 p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)]">
                    <Gauge className="w-4 h-4 text-[var(--dusty-rose)]" />
                    Projection
                  </div>
                  <p className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">Balanced</p>
                  <span className="text-xs text-[var(--text-secondary)]">Ideal for daily wear</span>
                </div>

                <div className="rounded-2xl bg-white/80 border border-white/60 p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[var(--text-primary)]">
                    <Sparkles className="w-4 h-4 text-[var(--dusty-rose)]" />
                    Savings
                  </div>
                  <p className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">$148</p>
                  <span className="text-xs text-[var(--text-secondary)]">vs. original bottle</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              className="absolute -top-10 -left-8 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/60 shadow-lg px-6 py-4"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--text-secondary)]">Top Note</p>
              <p className="mt-2 text-lg font-semibold text-[var(--text-primary)]">Pink Pepper</p>
              <span className="text-xs text-[var(--text-secondary)]">Bright & effervescent</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              className="absolute -bottom-12 right-6 rounded-2xl bg-gradient-to-br from-[var(--blush)]/70 to-[var(--lavender)]/70 backdrop-blur-xl border border-white/40 shadow-xl px-6 py-5 text-white"
            >
              <p className="text-xs uppercase tracking-[0.28em]">Community Score</p>
              <p className="mt-2 text-2xl font-semibold">4.8 / 5</p>
              <span className="text-xs text-white/80">Over 1,200 trusted reviews</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 12, 0] }}
        transition={{ opacity: { delay: 1 }, y: { repeat: Infinity, duration: 2 } }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-7 h-12 border border-white/60 bg-white/40 backdrop-blur-md rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 18, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="w-1.5 h-1.5 bg-[var(--dusty-rose)] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
