"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

const defaultCategories = [
  { id: 'all', label: 'All Fragrances' },
  { id: 'women', label: 'For Her' },
  { id: 'men', label: 'For Him' },
  { id: 'unisex', label: 'Unisex' },
];

export default function CategoryFilters({ onChange }:{ onChange?: (id:string)=>void }){
  const [active, setActive] = useState('all');

  return (
    <div className="chip-scroll">
      {defaultCategories.map((c) => (
        <motion.button
          key={c.id}
          onClick={() => { setActive(c.id); onChange?.(c.id); }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={`chip ${active === c.id ? 'active' : ''}`}
        >
          {c.label}
        </motion.button>
      ))}
    </div>
  );
}
