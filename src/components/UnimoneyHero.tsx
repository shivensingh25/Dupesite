'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const brands = [
  'Chanel', 'Dior', 'Tom Ford', 'Gucci', 'Versace', 'YSL',
  'Chanel', 'Dior', 'Tom Ford', 'Gucci', 'Versace', 'YSL' // Duplicate for infinite scroll
];

export default function UnimoneyHero() {
  return (
    <section className="relative bg-gradient-to-b from-purple-50 to-white py-32 md:py-48 pb-40 md:pb-56 overflow-hidden">
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 right-10 w-72 h-72 bg-purple-300 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-8 leading-tight"
          >
            Find the perfect{' '}
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              dupe
            </span>{' '}
            for your favorite perfume
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Compare designer fragrances with high-quality alternatives and save up to 90%. No hidden costs, just transparent comparisons.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16"
          >
            <Link href="/compare">
              <button className="bg-purple-600 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-purple-700 transition-all transform hover:scale-105 flex items-center gap-3 shadow-xl">
                Compare Dupes
                <ArrowRight className="w-6 h-6" />
              </button>
            </Link>
            
            <Link href="/about">
              <button className="bg-white text-purple-600 border-2 border-purple-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-purple-50 transition-all">
                Learn More
              </button>
            </Link>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10"
          >
            <p className="text-base text-gray-500">Trusted by fragrance lovers worldwide 🎓</p>
          </motion.div>

          {/* Explicit spacer to ensure clear separation from logo carousel */}
          <div aria-hidden className="h-16 md:h-24 lg:h-28" />
        </div>

        {/* Logo Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 md:mt-16"
        >
          <div className="overflow-hidden">
            <div className="flex animate-scroll">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-10 px-10 py-5 bg-white rounded-2xl shadow-lg border-2 border-gray-200"
                >
                  <span className="text-2xl font-semibold text-gray-700">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
