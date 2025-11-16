'use client';

import { useState } from 'react';
import { perfumes } from '@/data/perfumes';
import ImprovedPerfumeCard from './ImprovedPerfumeCard';
import { SlidersHorizontal, Grid3x3, LayoutGrid, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type SortOption = 'popular' | 'price-low' | 'price-high' | 'rating' | 'dupes';
type CategoryFilter = 'all' | 'women' | 'men' | 'unisex';

export default function ImprovedPerfumeGrid() {
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  const [category, setCategory] = useState<CategoryFilter>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [gridCols, setGridCols] = useState<3 | 4>(3);

  // Filter perfumes
  let filteredPerfumes = category === 'all' 
    ? perfumes 
    : perfumes.filter(p => p.category === category);

  // Sort perfumes
  const sortedPerfumes = [...filteredPerfumes].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'dupes':
        return b.dupeCount - a.dupeCount;
      case 'popular':
      default:
        return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0) || b.reviews - a.reviews;
    }
  });

  const sortOptions: { value: SortOption; label: string }[] = [
    { value: 'popular', label: 'Most Popular' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'dupes', label: 'Most Dupes' },
  ];

  const categories: { value: CategoryFilter; label: string; emoji: string }[] = [
    { value: 'all', label: 'All Fragrances', emoji: '✨' },
    { value: 'women', label: 'For Women', emoji: '💐' },
    { value: 'men', label: 'For Men', emoji: '🌲' },
    { value: 'unisex', label: 'Unisex', emoji: '🌟' },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Designer Dupes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our curated collection of verified perfume alternatives. Same luxury scent, fraction of the price.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            <div className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="text-2xl font-bold text-purple-600">{perfumes.length}+</div>
              <div className="text-sm text-gray-600 font-medium">Perfumes</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="text-2xl font-bold text-pink-600">
                {perfumes.reduce((sum, p) => sum + p.dupeCount, 0)}+
              </div>
              <div className="text-sm text-gray-600 font-medium">Dupes</div>
            </div>
            <div className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="text-2xl font-bold text-green-600">85%</div>
              <div className="text-sm text-gray-600 font-medium">Avg Savings</div>
            </div>
          </div>
        </div>

        {/* Filters & Sort Bar */}
        <div className="mb-8 sticky top-[148px] z-40 bg-white/95 backdrop-blur-md rounded-2xl border border-gray-200 shadow-lg p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            
            {/* Category Filters */}
            <div className="flex-1 flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
              {categories.map(({ value, label, emoji }) => (
                <motion.button
                  key={value}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setCategory(value)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-all ${
                    category === value
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{emoji}</span>
                  <span>{label}</span>
                  {category === value && (
                    <span className="ml-1 px-2 py-0.5 rounded-full bg-white/20 text-xs">
                      {filteredPerfumes.length}
                    </span>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-3">
              
              {/* Sort Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 font-semibold text-sm text-gray-700 transition-colors">
                  <SlidersHorizontal className="w-4 h-4" />
                  <span className="hidden sm:inline">
                    {sortOptions.find(opt => opt.value === sortBy)?.label}
                  </span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Dropdown Menu */}
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden z-50">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSortBy(option.value)}
                      className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                        sortBy === option.value
                          ? 'bg-purple-50 text-purple-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid Layout Toggle */}
              <div className="hidden md:flex items-center gap-1 p-1 bg-gray-100 rounded-lg">
                <button
                  onClick={() => setGridCols(3)}
                  className={`p-2 rounded transition-colors ${
                    gridCols === 3 ? 'bg-white text-purple-600 shadow-sm' : 'text-gray-600'
                  }`}
                  title="3 columns"
                >
                  <Grid3x3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setGridCols(4)}
                  className={`p-2 rounded transition-colors ${
                    gridCols === 4 ? 'bg-white text-purple-600 shadow-sm' : 'text-gray-600'
                  }`}
                  title="4 columns"
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Active Filters Display */}
          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-200">
            <span className="text-sm font-medium text-gray-600">
              Showing {sortedPerfumes.length} {sortedPerfumes.length === 1 ? 'perfume' : 'perfumes'}
            </span>
            {category !== 'all' && (
              <button
                onClick={() => setCategory('all')}
                className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-600 font-medium hover:bg-purple-200 transition-colors"
              >
                Clear filter ×
              </button>
            )}
          </div>
        </div>

        {/* Results Count & Quick Actions */}
        <div className="flex items-center justify-between mb-6 px-1">
          <div className="text-sm text-gray-600">
            <span className="font-semibold text-gray-900">
              {sortedPerfumes.reduce((sum, p) => sum + p.dupeCount, 0)} dupes
            </span>
            {' '}available across all perfumes
          </div>
        </div>

        {/* Perfume Grid */}
        <motion.div
          layout
          className={`grid gap-6 ${
            gridCols === 4
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          <AnimatePresence mode="popLayout">
            {sortedPerfumes.map((perfume, index) => (
              <motion.div
                key={perfume.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ImprovedPerfumeCard perfume={perfume} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More / Pagination */}
        {sortedPerfumes.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:shadow-xl transition-all transform hover:scale-105">
              Load More Perfumes
            </button>
            <p className="mt-4 text-sm text-gray-500">
              Showing {sortedPerfumes.length} of {perfumes.length} total perfumes
            </p>
          </motion.div>
        )}

        {/* Empty State */}
        {sortedPerfumes.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No perfumes found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters</p>
            <button
              onClick={() => setCategory('all')}
              className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
