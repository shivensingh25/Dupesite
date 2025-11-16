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
  // generate a soft gradient based on id for subtle variety
  const hue =
    Array.from(perfume.id).reduce((acc, ch) => acc + ch.charCodeAt(0), 0) % 60 + 280;
  const imgGradient = `linear-gradient(180deg, hsla(${hue} 70% 92% / 0.15), hsla(${hue} 60% 95% / 0.08))`;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -4 }}
      className="group relative"
    >
      {/* Card Container */}
      <div className="card">
        {/* Dupe Count Badge */}
        <div className="badge-dupe">
          {perfume.dupeCount} Dupes
        </div>

        {/* Hot Badge */}
        {perfume.isPopular && (
          <div className="badge-hot flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Hot
          </div>
        )}

        {/* Image Section */}
        <div className="card-img" style={{ background: imgGradient }}>
          {/* Animated Background Gradient */}
          {/* Perfume Bottle Silhouette */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="relative w-28 h-56">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-44 rounded-t-3xl rounded-b-lg" style={{ background: `linear-gradient(180deg, rgba(255,255,255,0.95), rgba(245,240,245,0.92))`, boxShadow: '0 8px 24px rgba(0,0,0,0.04)' }} />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 rounded-xl" style={{ background: `linear-gradient(135deg, rgba(215,168,161,0.85), rgba(237,229,248,0.8))`, boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }} />
            </motion.div>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-4">
          {/* Brand */}
          <Link
            href={`/perfume/${perfume.id}`}
            className="inline-block text-xs uppercase tracking-wider font-semibold text-[var(--text-tertiary)] hover:text-[var(--dusty-rose)] transition-colors duration-200"
          >
            {perfume.brand}
          </Link>

          {/* Name */}
          <h3 className="text-2xl font-semibold text-[var(--text-primary)] leading-tight">
            <Link
              href={`/perfume/${perfume.id}`}
              className="hover:text-[var(--dusty-rose)] transition-all duration-200"
            >
              {perfume.name}
            </Link>
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-3 pt-1">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(perfume.rating)
                      ? 'fill-[var(--dusty-rose)] text-[var(--dusty-rose)]'
                      : 'fill-gray-200 text-gray-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-[var(--text-primary)]">
              {perfume.rating}
            </span>
            <span className="text-xs text-[var(--text-tertiary)]">
              ({perfume.reviews.toLocaleString()})
            </span>
          </div>

          {/* Notes */}
          <div className="flex flex-wrap gap-2 pt-2">
            {perfume.notes.slice(0, 3).map((note, idx) => (
              <span
                key={idx}
                className="note-pill"
              >
                {note}
              </span>
            ))}
            {perfume.notes.length > 3 && (
              <span className="note-pill opacity-70">
                +{perfume.notes.length - 3}
              </span>
            )}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4" />

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
                whileHover={{ scale: 1.03, x: 2 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--dusty-rose)] to-[var(--blush)] text-white font-semibold shadow-md hover:shadow-lg flex items-center gap-2 transition-all"
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
