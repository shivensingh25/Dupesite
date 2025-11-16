'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Star, TrendingUp, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const trendingSearches = [
  { term: 'Chanel No. 5', count: '12K searches' },
  { term: 'Dior Sauvage', count: '18K searches' },
  { term: 'Tom Ford', count: '9K searches' },
  { term: 'Vanilla Notes', count: '7K searches' },
];

const trustBadges = [
  { icon: Shield, text: '100% Verified Dupes', color: 'text-green-600' },
  { icon: Star, text: '50K+ Happy Customers', color: 'text-yellow-600' },
  { icon: Zap, text: 'Instant Comparison', color: 'text-purple-600' },
];

export default function ImprovedLandingHero() {
  const [email, setEmail] = useState('');

  return (
    <section className="relative min-h-[90vh] flex items-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-48 -right-48 w-96 h-96 rounded-full bg-gradient-to-br from-purple-400/30 to-pink-400/30 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [180, 90, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-48 -left-48 w-96 h-96 rounded-full bg-gradient-to-br from-rose-400/30 to-orange-400/30 blur-3xl"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-purple-200 shadow-lg mb-6"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <Sparkles className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-bold text-gray-900">
                2,000+ verified dupes • Updated daily
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            >
              Find Your Dream Scent
              <span className="block mt-2 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                Without the Price Tag
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Compare designer fragrances with high-quality alternatives. Same luxury experience, up to{' '}
              <span className="font-bold text-green-600">90% less cost</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start"
            >
              <Link href="/compare">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 text-white text-lg font-bold shadow-xl hover:shadow-2xl transition-all flex items-center justify-center gap-2"
                >
                  Start Comparing Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white border-2 border-purple-600 text-purple-600 text-lg font-bold hover:bg-purple-50 transition-all"
              >
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <badge.icon className={`w-5 h-5 ${badge.color}`} />
                  <span className="text-sm font-semibold text-gray-700">{badge.text}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            {/* Comparison Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-200">
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                Save $120!
              </div>
              
              {/* Original vs Dupe */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-gray-500 uppercase">Original</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-red-100 text-red-600 font-bold">
                      Expensive
                    </span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl" />
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900">Chanel No. 5</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">4.8 (12K reviews)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">$135</div>
                    </div>
                  </div>
                </div>

                {/* VS Divider */}
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-4 text-sm font-bold text-purple-600">VS</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-gray-500 uppercase">Dupe</span>
                    <span className="text-xs px-3 py-1 rounded-full bg-green-100 text-green-600 font-bold flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      Best Value
                    </span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl" />
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900">Inspired by No. 5</h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">4.6 (3K reviews)</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">$15</div>
                    </div>
                  </div>
                </div>

                {/* Similarity Score */}
                <div className="p-4 bg-purple-50 rounded-2xl border border-purple-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-purple-900">Scent Similarity</span>
                    <span className="text-2xl font-bold text-purple-600">92%</span>
                  </div>
                  <div className="w-full bg-purple-200 rounded-full h-3">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '92%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-3 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-200"
            >
              <div className="text-3xl font-bold text-purple-600">500+</div>
              <div className="text-sm text-gray-600 font-medium">Brands</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-xl p-4 text-white"
            >
              <div className="text-2xl font-bold">🔥 Trending</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trending Searches */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center lg:text-left"
        >
          <p className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">
            🔥 Trending Searches
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {trendingSearches.map((search, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-5 py-2.5 rounded-full bg-white border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {search.term}
                  </span>
                  <span className="text-xs text-gray-500">{search.count}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
