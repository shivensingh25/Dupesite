"use client";

import { motion } from 'framer-motion';
import { Grid3x3, LayoutList } from 'lucide-react';
import { useState } from 'react';

export default function SortBar({ onSort, onViewChange }:{ onSort?: (s:string)=>void, onViewChange?: (v:'grid'|'list')=>void }){
  const [view, setView] = useState<'grid'|'list'>('grid');

  const handleViewChange = (newView: 'grid' | 'list') => {
    setView(newView);
    onViewChange?.(newView);
  };

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-[var(--text-secondary)] font-medium">Most Popular</span>
      
      <div className="flex items-center gap-2 p-1 rounded-xl bg-[var(--neutral-smoke)]">
        <motion.button 
          onClick={() => handleViewChange('grid')} 
          aria-pressed={view === 'grid'} 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className={`p-2 rounded-lg transition-all ${view === 'grid' ? 'bg-white shadow-sm' : ''}`}
        >
          <Grid3x3 className="w-5 h-5 text-[var(--text-secondary)]" />
        </motion.button>
        <motion.button 
          onClick={() => handleViewChange('list')} 
          aria-pressed={view === 'list'} 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className={`p-2 rounded-lg transition-all ${view === 'list' ? 'bg-white shadow-sm' : ''}`}
        >
          <LayoutList className="w-5 h-5 text-[var(--text-secondary)]" />
        </motion.button>
      </div>
    </div>
  );
}
