'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';

export default function MinimalHero() {
  return (
    <section className="relative px-6 py-20 bg-gradient-to-b from-[#FAF9F6] to-white overflow-hidden">
      
      {/* Subtle Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#F7E9EF] to-[#EEE8F7] blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-gradient-to-br from-[#EEE8F7] to-[#F7E9EF] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E7E6E4] mb-6 shadow-sm">
              <div className="w-2 h-2 bg-[#2E7D32] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[#5A5A5A]">
                2,000+ verified dupes
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[42px] md:text-[48px] font-semibold leading-[1.15] text-[#1E1E1E] mb-5">
              Find Your Dream Scent
              <span className="block mt-2 text-[#5A5A5A] font-normal">
                Without the Price Tag
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-[#5A5A5A] mb-8 max-w-[720px] mx-auto lg:mx-0 leading-relaxed">
              Compare designer fragrances with high-quality alternatives. Same luxury experience, up to <span className="font-semibold text-[#2E7D32]">90% less cost</span>.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center lg:justify-start">
              <Link href="/compare">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="group px-8 py-3.5 rounded-xl bg-[#1E1E1E] text-white font-semibold shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-2"
                >
                  Start Comparing Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                </motion.button>
              </Link>
              
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="px-8 py-3.5 rounded-xl bg-white border-1.5 border-[#E7E6E4] text-[#1E1E1E] font-semibold hover:border-[#1E1E1E] transition-all"
              >
                Watch Demo
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-[#9E9E9E]">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F7E9EF] to-[#EEE8F7] border-2 border-white" />
                  ))}
                </div>
                <span className="font-medium">50K+ customers</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" strokeWidth={0} />
                <span className="font-medium">4.8 rating</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Comparison Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-sm border border-[#E7E6E4] p-8">
              
              {/* Savings Badge */}
              <div className="absolute -top-3 -right-3 px-4 py-1.5 rounded-full bg-[#2E7D32] text-white text-sm font-semibold shadow-md">
                Save $120
              </div>

              {/* Original */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wide font-semibold text-[#9E9E9E]">Original</span>
                  <span className="px-3 py-1 rounded-full bg-[#FFF4E6] text-[#E65100] text-xs font-semibold">
                    Expensive
                  </span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[#FAF9F6] rounded-xl">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F7E9EF] to-[#EEE8F7] rounded-xl flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#1E1E1E] mb-1">Chanel No. 5</h4>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-[#FFB800] text-[#FFB800]" strokeWidth={0} />
                      <span className="text-sm text-[#5A5A5A]">4.8 (12K)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#1E1E1E]">$135</div>
                  </div>
                </div>
              </div>

              {/* VS Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#E7E6E4]" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-4 text-sm font-semibold text-[#5A5A5A]">VS</span>
                </div>
              </div>

              {/* Dupe */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-wide font-semibold text-[#9E9E9E]">Dupe</span>
                  <span className="px-3 py-1 rounded-full bg-[#E8F5E9] text-[#2E7D32] text-xs font-semibold">
                    Best Value
                  </span>
                </div>
                <div className="flex items-center gap-4 p-4 bg-[#E8F5E9] rounded-xl border border-[#C8E6C9]">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#81C784] to-[#66BB6A] rounded-xl flex-shrink-0" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#1E1E1E] mb-1">Inspired by No. 5</h4>
                    <div className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-[#FFB800] text-[#FFB800]" strokeWidth={0} />
                      <span className="text-sm text-[#5A5A5A]">4.6 (3K)</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#2E7D32]">$15</div>
                  </div>
                </div>
              </div>

              {/* Similarity Score */}
              <div className="p-4 bg-[#EEE8F7] rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-[#6B5B8C]">Scent Similarity</span>
                  <span className="text-xl font-bold text-[#6B5B8C]">92%</span>
                </div>
                <div className="w-full bg-[#DDD5EC] rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '92%' }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="bg-[#6B5B8C] h-2 rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-sm border border-[#E7E6E4] p-4"
            >
              <div className="text-2xl font-bold text-[#1E1E1E]">500+</div>
              <div className="text-sm text-[#9E9E9E]">Brands</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trending Searches */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-16 text-center lg:text-left"
        >
          <p className="text-sm font-semibold text-[#9E9E9E] mb-4 uppercase tracking-wide">
            Trending Searches
          </p>
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            {['Chanel No. 5', 'Dior Sauvage', 'Tom Ford', 'Vanilla Notes'].map((term) => (
              <button
                key={term}
                className="px-4 py-2 rounded-full bg-white border border-[#E7E6E4] text-sm font-medium text-[#5A5A5A] hover:border-[#1E1E1E] hover:text-[#1E1E1E] transition-all"
              >
                {term}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
