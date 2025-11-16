"use client";

import { useState } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function SearchBar({ onSearch }:{ onSearch?: (q:string)=>void }){
  const [q, setQ] = useState('');

  return (
    <motion.div 
      id="search" 
      initial={{ opacity: 0, y: 10 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6, delay: 0.3 }} 
      className="search-bar"
    >
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-tertiary)] pointer-events-none" />
        <input 
          type="text"
          value={q}
          onChange={(e)=> setQ(e.target.value)}
          placeholder="Search for perfumes, brands, or notes..."
          onKeyDown={(e)=> { if(e.key === 'Enter' && onSearch) onSearch(q); }}
          className="w-full"
        />
        <motion.button 
          whileHover={{ scale: 1.02 }} 
          whileTap={{ scale: 0.98 }} 
          onClick={()=> onSearch?.(q)} 
          className="search-btn bg-gradient-to-r from-[var(--dusty-rose)] to-[var(--blush)] text-white"
        >
          Search
        </motion.button>
      </div>
    </motion.div>
  );
}
