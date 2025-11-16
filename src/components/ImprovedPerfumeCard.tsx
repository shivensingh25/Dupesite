'use client';

import Link from 'next/link';
import { Star, Heart, TrendingUp, Sparkles, ArrowRight, BadgeCheck, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import type { Perfume } from '@/types/perfume';

interface PerfumeCardProps {
  perfume: Perfume;
  index?: number;
}

export default function ImprovedPerfumeCard({ perfume, index = 0 }: PerfumeCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const savings = Math.round(((perfume.price - perfume.dupePrice) / perfume.price) * 100);
  
  // Generate unique gradient based on category
  const categoryGradients = {
    women: 'from-rose-50 via-pink-50 to-purple-50',
    men: 'from-blue-50 via-indigo-50 to-slate-50',
    unisex: 'from-amber-50 via-orange-50 to-yellow-50',
  };
  
  const gradient = categoryGradients[perfume.category as keyof typeof categoryGradients] || categoryGradients.unisex;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative h-full"
    >
      <div className="relative h-full bg-white rounded-2xl border border-gray-200/60 hover:border-gray-300 overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col">
        
        {/* Image Section with Hover Effect */}
        <div className={`relative bg-gradient-to-br ${gradient} aspect-[4/5] overflow-hidden`}>
          {/* Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-start justify-between z-10">
            <div className="flex flex-col gap-2">
              {perfume.isPopular && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2 + index * 0.05, type: 'spring' }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold shadow-lg"
                >
                  <TrendingUp className="w-3.5 h-3.5" />
                  HOT
                </motion.div>
              )}
              
              {savings > 80 && (
                <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold shadow-lg">
                  <DollarSign className="w-3.5 h-3.5" />
                  Save {savings}%
                </div>
              )}
            </div>
            
            {/* Wishlist Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`p-2.5 rounded-full backdrop-blur-md transition-all shadow-lg ${
                isWishlisted 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white/90 text-gray-600 hover:bg-white'
              }`}
              aria-label="Add to wishlist"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
            </motion.button>
          </div>
          
          {/* Perfume Bottle Illustration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="relative w-32 h-64"
            >
              {/* Bottle Body */}
              <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-52 rounded-t-3xl rounded-b-xl bg-gradient-to-b from-white/95 via-white/90 to-gray-50/95"
                style={{ 
                  boxShadow: '0 20px 60px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.8)'
                }}
              >
                {/* Brand Label */}
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-20 h-16 bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg border border-gray-200/50 flex items-center justify-center">
                  <span className="text-[10px] font-bold text-gray-700 text-center px-2 leading-tight">
                    {perfume.brand}
                  </span>
                </div>
                
                {/* Liquid Effect */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-3/4 rounded-t-3xl rounded-b-xl opacity-20"
                  style={{
                    background: perfume.category === 'women' 
                      ? 'linear-gradient(180deg, #ec4899, #f97316)'
                      : perfume.category === 'men'
                      ? 'linear-gradient(180deg, #3b82f6, #06b6d4)'
                      : 'linear-gradient(180deg, #f59e0b, #eab308)'
                  }}
                />
              </div>
              
              {/* Cap */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-200 via-gray-100 to-white"
                style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              >
                <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-white to-gray-50" />
              </div>
            </motion.div>
          </div>
          
          {/* Quick View on Hover */}
          <Link href={`/perfume/${perfume.id}`}>
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div className="px-6 py-3 rounded-full bg-white text-gray-900 font-semibold text-sm flex items-center gap-2 shadow-xl">
                Quick View
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          </Link>
        </div>
        
        {/* Content Section */}
        <div className="flex-1 flex flex-col p-5">
          {/* Brand & Category */}
          <div className="flex items-center justify-between mb-2">
            <Link
              href={`/perfume/${perfume.id}`}
              className="text-xs uppercase tracking-wider font-bold text-gray-500 hover:text-gray-900 transition-colors"
            >
              {perfume.brand}
            </Link>
            <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-600 capitalize font-medium">
              {perfume.category}
            </span>
          </div>
          
          {/* Name */}
          <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors">
            <Link href={`/perfume/${perfume.id}`}>
              {perfume.name}
            </Link>
          </h3>
          
          {/* Rating & Reviews */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(perfume.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'fill-gray-200 text-gray-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-bold text-gray-900">{perfume.rating}</span>
            <span className="text-xs text-gray-500">
              ({perfume.reviews.toLocaleString()})
            </span>
          </div>
          
          {/* Notes Preview */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {perfume.notes.slice(0, 3).map((note, idx) => (
              <span
                key={idx}
                className="text-xs px-2.5 py-1 rounded-md bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 font-medium border border-gray-200"
              >
                {note}
              </span>
            ))}
            {perfume.notes.length > 3 && (
              <span className="text-xs px-2.5 py-1 rounded-md bg-gray-100 text-gray-500 font-medium">
                +{perfume.notes.length - 3}
              </span>
            )}
          </div>
          
          {/* Spacer */}
          <div className="flex-1" />
          
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4" />
          
          {/* Price Section */}
          <div className="space-y-3">
            {/* Original Price */}
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-gray-500 font-medium">Original</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-gray-900">${perfume.price}</span>
              </div>
            </div>
            
            {/* Dupe Price with Savings */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200">
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <BadgeCheck className="w-3.5 h-3.5 text-green-600" />
                  <span className="text-xs font-bold text-green-700 uppercase tracking-wide">
                    Dupe from
                  </span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-green-700">
                    ${perfume.dupePrice}
                  </span>
                  <span className="text-xs font-semibold text-green-600">
                    ({savings}% off)
                  </span>
                </div>
              </div>
              <Sparkles className="w-5 h-5 text-green-600" />
            </div>
            
            {/* Dupe Count */}
            <div className="text-center">
              <Link
                href={`/perfume/${perfume.id}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors group"
              >
                <span className="flex items-center gap-1.5">
                  <BadgeCheck className="w-4 h-4" />
                  {perfume.dupeCount} verified dupes available
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          {/* CTA Button */}
          <Link href={`/perfume/${perfume.id}`} className="mt-4">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
            >
              Compare Dupes
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
