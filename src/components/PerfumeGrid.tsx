"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PerfumeCard from './PerfumeCard';
import { perfumes } from '@/data/perfumes';
import CategoryFilters from './CategoryFilters';
import SortBar from './SortBar';

export default function PerfumeGrid() {
  const [category, setCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const items = perfumes.filter((p) => (category === 'all' ? true : p.category === category));

  return (
    <section className="py-12 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
          <div>
            <h2 className="text-3xl font-semibold text-[var(--text-primary)] mb-2">
              Popular Designer <span className="text-gradient">Perfumes & Their Dupes</span>
            </h2>
            <p className="text-sm text-[var(--text-secondary)]">Compare luxury fragrances with affordable alternatives</p>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 w-full lg:w-auto">
            <CategoryFilters onChange={(c) => setCategory(c)} />
            <div className="ml-auto">
              <SortBar onViewChange={(v) => setViewMode(v)} />
            </div>
          </div>
        </div>

        <div className="mb-6 text-sm text-[var(--text-secondary)]">
          Showing <span className="font-semibold text-[var(--text-primary)]">{items.length}</span> fragrances with <span className="font-semibold text-[var(--text-primary)]">{items.reduce((acc, p) => acc + p.dupeCount, 0)}</span> affordable alternatives
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={viewMode} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {items.map((perfume, index) => (
              <PerfumeCard key={perfume.id} perfume={perfume} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-12 text-center">
          <motion.button 
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }} 
            className="px-10 py-3 bg-gradient-to-r from-[var(--dusty-rose)] to-[var(--blush)] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            Load More
          </motion.button>
        </div>
      </div>
    </section>
  );
}
