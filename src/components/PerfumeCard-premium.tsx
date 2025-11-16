'use client';

import Link from 'next/link';
import { Star, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Perfume } from '@/types/perfume';

interface PerfumeCardProps {
  perfume: Perfume;
  index?: number;
}

export default function PerfumeCard({ perfume, index = 0 }: PerfumeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      {/* Card Container */}
      <div className="relative bg-white rounded-3xl overflow-hidden card-shadow smooth-transition">
        {/* Dupe Count Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
          className="absolute top-4 right-4 z-10 px-4 py-2 rounded-full bg-gradient-to-r from-[var(--rose-gold)] to-[var(--dusty-rose)] text-white text-sm font-semibold shadow-lg backdrop-blur-sm"
        >
          {perfume.dupeCount} Dupes
        </motion.div>

        {/* Hot Badge */}
        {perfume.isPopular && (
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.4 + index * 0.1, type: 'spring' }}
            className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs font-bold flex items-center gap-1 shadow-lg"
          >
            <Sparkles className="w-3 h-3" />
            Hot
          </motion.div>
        )}

        {/* Image Section */}
        <div className="relative h-80 bg-gradient-to-br from-[var(--pearl)] via-white to-[var(--rose-dust)] overflow-hidden">
          {/* Animated Background Gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[var(--rose-gold)]/20 via-transparent to-[var(--soft-lavender)]/20"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Perfume Bottle Silhouette */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
              className="relative w-32 h-64"
            >
              {/* Bottle */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-48 bg-gradient-to-b from-[var(--dusty-rose)]/40 to-[var(--soft-lavender)]/60 rounded-t-3xl rounded-b-lg backdrop-blur-sm shadow-2xl" />
              {/* Cap */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[var(--rose-gold)] to-[var(--dusty-rose)] rounded-xl shadow-xl" />
              {/* Highlight */}
              <div className="absolute top-20 left-8 w-2 h-32 bg-white/40 rounded-full blur-sm" />
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          {/* Brand */}
          <Link
            href={`/perfume/${perfume.id}`}
            className="inline-block text-xs uppercase tracking-wider font-bold text-[var(--text-tertiary)] hover:text-[var(--rose-gold)] transition-colors duration-200"
          >
            {perfume.brand}
          </Link>

          {/* Name */}
          <h3>
            <Link
              href={`/perfume/${perfume.id}`}
              className="text-2xl font-semibold text-[var(--text-primary)] hover:text-gradient transition-all duration-200 line-clamp-1"
            >
              {perfume.name}
            </Link>
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(perfume.rating)
                      ? 'fill-[var(--rose-gold)] text-[var(--rose-gold)]'
                      : 'fill-[var(--sand)] text-[var(--sand)]'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-[var(--text-primary)]">
              {perfume.rating}
            </span>
            <span className="text-sm text-[var(--text-tertiary)]">
              ({perfume.reviews.toLocaleString()})
            </span>
          </div>

          {/* Notes */}
          <div className="flex flex-wrap gap-2">
            {perfume.notes.slice(0, 3).map((note, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1.5 bg-gradient-to-r from-[var(--pearl)] to-[var(--sand)] rounded-full text-xs text-[var(--text-secondary)] font-medium smooth-transition cursor-default"
              >
                {note}
              </motion.span>
            ))}
            {perfume.notes.length > 3 && (
              <span className="px-3 py-1.5 bg-[var(--pearl)] rounded-full text-xs text-[var(--text-tertiary)] font-medium">
                +{perfume.notes.length - 3}
              </span>
            )}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--sand)] to-transparent" />

          {/* Price & CTA */}
          <div className="flex items-center justify-between pt-2">
            <div>
              <p className="text-xs text-[var(--text-tertiary)] mb-1">Original Price</p>
              <p className="text-3xl font-bold text-[var(--text-primary)]">
                ${perfume.price}
              </p>
            </div>

            <Link href={`/perfume/${perfume.id}`}>
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[var(--rose-gold)] to-[var(--dusty-rose)] text-white font-semibold shadow-lg hover:shadow-xl flex items-center gap-2 smooth-transition"
              >
                View Dupes
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
