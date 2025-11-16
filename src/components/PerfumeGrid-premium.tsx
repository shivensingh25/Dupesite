'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, Grid3x3, LayoutList } from 'lucide-react';
import PerfumeCard from './PerfumeCard-premium';
import { perfumes } from '@/data/perfumes';

export default function PerfumeGrid() {
  const [category, setCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popularity');

  const categories = [
    { id: 'all', label: 'All Fragrances', count: perfumes.length },
    { id: 'women', label: 'For Her', count: perfumes.filter(p => p.category === 'women').length },
    { id: 'men', label: 'For Him', count: perfumes.filter(p => p.category === 'men').length },
    { id: 'unisex', label: 'Unisex', count: perfumes.filter(p => p.category === 'unisex').length },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[var(--cream)] to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
            Popular Designer{' '}
            <span className="text-gradient">Perfumes & Their Dupes</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Compare luxury fragrances with affordable alternatives
          </p>
        </motion.div>

        {/* Category Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat, index) => (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCategory(cat.id)}
                className={`relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  category === cat.id
                    ? 'bg-gradient-to-r from-[var(--rose-gold)] to-[var(--dusty-rose)] text-white shadow-lg'
                    : 'bg-white text-[var(--text-secondary)] hover:bg-[var(--pearl)] border border-[var(--sand)]'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {cat.label}
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    category === cat.id
                      ? 'bg-white/20'
                      : 'bg-[var(--sand)]'
                  }`}>
                    {cat.count}
                  </span>
                </span>
                {category === cat.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-gradient-to-r from-[var(--rose-gold)] to-[var(--dusty-rose)] rounded-2xl"
                    style={{ zIndex: 0 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Filters & View Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12"
        >
          {/* Results Count */}
          <div className="text-sm text-[var(--text-secondary)]">
            Showing <span className="font-semibold text-[var(--text-primary)]">{perfumes.length}</span> fragrances
            with <span className="font-semibold text-gradient">{perfumes.reduce((acc, p) => acc + p.dupeCount, 0)}</span> affordable alternatives
          </div>

          <div className="flex items-center gap-4">
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none pl-5 pr-12 py-3 rounded-2xl bg-white border border-[var(--sand)] text-sm font-medium text-[var(--text-secondary)] focus:outline-none focus:border-[var(--dusty-rose)] focus:ring-2 focus:ring-[var(--dusty-rose)]/20 cursor-pointer smooth-transition"
              >
                <option value="popularity">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="dupes">Most Dupes</option>
              </select>
              <SlidersHorizontal className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-tertiary)] pointer-events-none" />
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-1 p-1 rounded-2xl bg-[var(--pearl)]">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('grid')}
                className={`p-2.5 rounded-xl transition-all duration-200 ${
                  viewMode === 'grid'
                    ? 'bg-white shadow-md text-[var(--text-primary)]'
                    : 'text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]'
                }`}
              >
                <Grid3x3 className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode('list')}
                className={`p-2.5 rounded-xl transition-all duration-200 ${
                  viewMode === 'list'
                    ? 'bg-white shadow-md text-[var(--text-primary)]'
                    : 'text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]'
                }`}
              >
                <LayoutList className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={viewMode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`grid gap-8 ${
              viewMode === 'grid'
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1'
            }`}
          >
            {perfumes.map((perfume, index) => (
              <PerfumeCard key={perfume.id} perfume={perfume} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 rounded-2xl bg-white border-2 border-[var(--sand)] text-[var(--text-primary)] font-semibold hover:border-[var(--dusty-rose)] hover:shadow-lg smooth-transition"
          >
            Load More Fragrances
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
