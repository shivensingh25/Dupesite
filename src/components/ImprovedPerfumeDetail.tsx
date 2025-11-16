'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, Heart, Share2, TrendingUp, BadgeCheck, DollarSign, 
  Clock, Droplet, Wind, ChevronRight, ShoppingCart, ExternalLink,
  CheckCircle, AlertCircle, Copy, ChevronDown
} from 'lucide-react';
import Link from 'next/link';
import type { Perfume } from '@/types/perfume';

interface DupeItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  rating: number;
  reviews: number;
  similarity: number;
  store: string;
  url?: string;
  longevity: string;
  sillage: string;
  verified: boolean;
}

interface PerfumeDetailContentProps {
  perfume: Perfume;
}

export default function ImprovedPerfumeDetail({ perfume }: PerfumeDetailContentProps) {
  const [activeTab, setActiveTab] = useState<'dupes' | 'notes' | 'reviews'>('dupes');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  
  const savings = Math.round(((perfume.price - perfume.dupePrice) / perfume.price) * 100);

  // Mock dupes data
  const dupes: DupeItem[] = [
    {
      id: '1',
      name: 'Inspired By ' + perfume.name,
      brand: 'Dupe Fragrances',
      price: perfume.dupePrice,
      rating: 4.5,
      reviews: 1243,
      similarity: 92,
      store: 'Amazon',
      url: '#',
      longevity: '6-8 hours',
      sillage: 'Moderate',
      verified: true,
    },
    {
      id: '2',
      name: perfume.name + ' Alternative',
      brand: 'Budget Scents',
      price: perfume.dupePrice + 5,
      rating: 4.3,
      reviews: 821,
      similarity: 88,
      store: 'eBay',
      url: '#',
      longevity: '5-7 hours',
      sillage: 'Light',
      verified: true,
    },
    {
      id: '3',
      name: 'Similar to ' + perfume.name,
      brand: 'Fragrance Outlet',
      price: perfume.dupePrice + 3,
      rating: 4.6,
      reviews: 1589,
      similarity: 90,
      store: 'FragranceX',
      url: '#',
      longevity: '7-9 hours',
      sillage: 'Strong',
      verified: true,
    },
  ];

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const tabs = [
    { id: 'dupes', label: 'Available Dupes', count: perfume.dupeCount },
    { id: 'notes', label: 'Fragrance Notes', count: perfume.notes.length },
    { id: 'reviews', label: 'Reviews', count: perfume.reviews },
  ] as const;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 sticky top-[148px] z-30 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-gray-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href="/compare" className="text-gray-500 hover:text-gray-900 transition-colors">
              Compare
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <Link href={`/category/${perfume.category}`} className="text-gray-500 hover:text-gray-900 transition-colors capitalize">
              {perfume.category}
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-semibold">{perfume.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Product Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="sticky top-48">
              {/* Badges */}
              <div className="flex items-center gap-2 mb-4">
                {perfume.isPopular && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold">
                    <TrendingUp className="w-4 h-4" />
                    Trending
                  </div>
                )}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-100 text-purple-700 text-sm font-bold">
                  {perfume.dupeCount} Dupes Available
                </div>
              </div>

              {/* Image Container */}
              <div className="relative aspect-[4/5] bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 rounded-3xl border border-gray-200 shadow-2xl overflow-hidden group">
                
                {/* Perfume Bottle */}
                <div className="absolute inset-0 flex items-center justify-center p-12">
                  <motion.div 
                    whileHover={{ scale: 1.05, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full max-w-xs"
                  >
                    {/* Bottle Body */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-80 rounded-t-[3rem] rounded-b-2xl bg-gradient-to-b from-white via-gray-50 to-gray-100 shadow-2xl">
                      {/* Brand Label */}
                      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-32 h-24 bg-gradient-to-br from-gray-100 to-white rounded-xl border border-gray-200 flex items-center justify-center p-4">
                        <div className="text-center">
                          <div className="text-xs font-bold text-gray-900 mb-1">{perfume.brand}</div>
                          <div className="text-[10px] text-gray-600 leading-tight">{perfume.name}</div>
                        </div>
                      </div>
                      
                      {/* Liquid */}
                      <div 
                        className="absolute bottom-0 left-0 right-0 h-3/4 rounded-t-[3rem] rounded-b-2xl opacity-30"
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
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 rounded-3xl bg-gradient-to-br from-gray-300 via-gray-200 to-white shadow-2xl">
                      <div className="absolute inset-4 rounded-2xl bg-gradient-to-br from-white to-gray-100 shadow-inner" />
                    </div>
                  </motion.div>
                </div>

                {/* Actions Overlay */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-3 rounded-full backdrop-blur-md shadow-lg transition-all ${
                      isWishlisted 
                        ? 'bg-red-500 text-white' 
                        : 'bg-white/90 text-gray-700 hover:bg-white'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={handleShare}
                    className="p-3 rounded-full bg-white/90 backdrop-blur-md text-gray-700 hover:bg-white shadow-lg transition-all"
                  >
                    {copiedLink ? <CheckCircle className="w-5 h-5 text-green-600" /> : <Share2 className="w-5 h-5" />}
                  </motion.button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <Clock className="w-5 h-5 mx-auto mb-1 text-purple-600" />
                  <div className="text-xs text-gray-600 font-medium">Longevity</div>
                  <div className="text-sm font-bold text-gray-900">8-10h</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <Droplet className="w-5 h-5 mx-auto mb-1 text-blue-600" />
                  <div className="text-xs text-gray-600 font-medium">Sillage</div>
                  <div className="text-sm font-bold text-gray-900">Strong</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
                  <Wind className="w-5 h-5 mx-auto mb-1 text-green-600" />
                  <div className="text-xs text-gray-600 font-medium">Season</div>
                  <div className="text-sm font-bold text-gray-900">All Year</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Link
                href={`/brand/${perfume.brand.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm font-bold uppercase tracking-wider text-purple-600 hover:text-purple-700 transition-colors"
              >
                {perfume.brand}
              </Link>
              <span className="text-gray-300">•</span>
              <span className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-semibold capitalize">
                {perfume.category}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              {perfume.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(perfume.rating)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'fill-gray-200 text-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-bold text-gray-900">{perfume.rating}</span>
              </div>
              <span className="text-gray-500">
                ({perfume.reviews.toLocaleString()} reviews)
              </span>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {perfume.description}
            </p>

            {/* Price Comparison Card */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-200 p-6 mb-8">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                    Original Price
                  </div>
                  <div className="text-4xl font-bold text-gray-900">${perfume.price}</div>
                  <div className="text-sm text-gray-500 mt-1">Designer fragrance</div>
                </div>
                
                <div className="relative">
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
                    Save {savings}%
                  </div>
                  <div className="text-sm font-semibold text-green-600 mb-2 uppercase tracking-wide flex items-center gap-1.5">
                    <BadgeCheck className="w-4 h-4" />
                    Dupe Price
                  </div>
                  <div className="text-4xl font-bold text-green-600">${perfume.dupePrice}</div>
                  <div className="text-sm text-gray-500 mt-1">Starting from</div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600">Your Savings</div>
                    <div className="text-2xl font-bold text-green-600">${perfume.price - perfume.dupePrice}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Similarity Score</div>
                    <div className="text-2xl font-bold text-purple-600">90%+</div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-bold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                onClick={() => {
                  const element = document.getElementById('dupes-section');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View All {perfume.dupeCount} Dupes
                <ChevronDown className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-xl bg-white border-2 border-purple-600 text-purple-600 text-lg font-bold hover:bg-purple-50 transition-all"
              >
                Buy Original
              </motion.button>
            </div>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium">All dupes verified by experts</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <BadgeCheck className="w-5 h-5 text-blue-600" />
                <span className="font-medium">30-day money-back guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs Section */}
        <div id="dupes-section" className="scroll-mt-24">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 mb-8 sticky top-[244px] z-20 bg-white/95 backdrop-blur-md">
            <div className="flex gap-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative pb-4 font-semibold transition-colors ${
                    activeTab === tab.id
                      ? 'text-purple-600'
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className="ml-2 px-2 py-0.5 rounded-full bg-gray-100 text-xs font-bold">
                    {tab.count}
                  </span>
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'dupes' && (
              <div className="space-y-4">
                {dupes.map((dupe, index) => (
                  <motion.div
                    key={dupe.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-all"
                  >
                    <div className="flex flex-col lg:flex-row gap-6">
                      
                      {/* Dupe Image */}
                      <div className="w-full lg:w-32 aspect-[4/5] lg:aspect-auto lg:h-32 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <div className="w-16 h-24 bg-gradient-to-b from-white to-gray-100 rounded-t-2xl rounded-b-lg shadow-lg" />
                      </div>

                      {/* Dupe Info */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-xl font-bold text-gray-900">{dupe.name}</h3>
                              {dupe.verified && (
                                <BadgeCheck className="w-5 h-5 text-green-600" />
                              )}
                            </div>
                            <p className="text-sm text-gray-600 font-medium">{dupe.brand}</p>
                          </div>
                          
                          <div className="text-right">
                            <div className="text-3xl font-bold text-green-600">${dupe.price}</div>
                            <div className="text-xs text-gray-500">at {dupe.store}</div>
                          </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                          <div>
                            <div className="text-xs text-gray-500 mb-1">Similarity</div>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
                                  style={{ width: `${dupe.similarity}%` }}
                                />
                              </div>
                              <span className="text-sm font-bold text-purple-600">{dupe.similarity}%</span>
                            </div>
                          </div>
                          
                          <div>
                            <div className="text-xs text-gray-500 mb-1">Rating</div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-bold">{dupe.rating}</span>
                              <span className="text-xs text-gray-500">({dupe.reviews})</span>
                            </div>
                          </div>
                          
                          <div>
                            <div className="text-xs text-gray-500 mb-1">Longevity</div>
                            <div className="text-sm font-semibold text-gray-900">{dupe.longevity}</div>
                          </div>
                          
                          <div>
                            <div className="text-xs text-gray-500 mb-1">Sillage</div>
                            <div className="text-sm font-semibold text-gray-900">{dupe.sillage}</div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3">
                          <motion.a
                            href={dupe.url}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-center hover:shadow-lg transition-all flex items-center justify-center gap-2"
                          >
                            View on {dupe.store}
                            <ExternalLink className="w-4 h-4" />
                          </motion.a>
                          
                          <button className="px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 font-semibold transition-colors">
                            Compare
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'notes' && (
              <div className="bg-white rounded-2xl border border-gray-200 p-8">
                <h3 className="text-2xl font-bold mb-6">Fragrance Pyramid</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-3">Top Notes</div>
                    <div className="flex flex-wrap gap-2">
                      {perfume.notes.slice(0, 2).map((note) => (
                        <span key={note} className="px-4 py-2 rounded-xl bg-purple-100 text-purple-700 font-semibold">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-3">Heart Notes</div>
                    <div className="flex flex-wrap gap-2">
                      {perfume.notes.slice(2, 4).map((note) => (
                        <span key={note} className="px-4 py-2 rounded-xl bg-pink-100 text-pink-700 font-semibold">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-500 mb-3">Base Notes</div>
                    <div className="flex flex-wrap gap-2">
                      {perfume.notes.slice(4).map((note) => (
                        <span key={note} className="px-4 py-2 rounded-xl bg-rose-100 text-rose-700 font-semibold">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="text-center py-12 bg-white rounded-2xl border border-gray-200">
                <Star className="w-16 h-16 mx-auto mb-4 text-gray-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Reviews Coming Soon</h3>
                <p className="text-gray-600">User reviews will be available shortly</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
