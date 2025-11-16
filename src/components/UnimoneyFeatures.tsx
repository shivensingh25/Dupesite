'use client';

import { motion } from 'framer-motion';
import { Search, Scale, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Faster Discovery',
    description: 'Find your perfect dupe in minutes, not hours. Our curated database makes comparison effortless.',
  },
  {
    icon: Scale,
    title: 'Transparent Comparison',
    description: 'Side-by-side fragrance notes, longevity, and pricing. No hidden details, just honest reviews.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Verified',
    description: 'Every dupe is tested and rated by our community. Only the best alternatives make it to our list.',
  },
];

export default function UnimoneyFeatures() {
  return (
    <section className="py-32 md:py-40 bg-white">
      <div className="container px-4">
        
        {/* Section Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose ScentMatch?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We make finding luxury fragrance alternatives simple, transparent, and reliable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto mb-32">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border-2 border-gray-200 rounded-2xl p-12 min-h-[280px] hover:shadow-2xl transition-all hover:border-purple-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-8">
                <feature.icon className="w-8 h-8 text-purple-600" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-lg text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto"
        >
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-purple-600 mb-3">500+</div>
            <div className="text-lg text-gray-600">Perfume Dupes</div>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-purple-600 mb-3">10K+</div>
            <div className="text-lg text-gray-600">Happy Users</div>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-purple-600 mb-3">90%</div>
            <div className="text-lg text-gray-600">Cost Savings</div>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-purple-600 mb-3">4.8★</div>
            <div className="text-lg text-gray-600">User Rating</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
