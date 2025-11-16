'use client';

import { motion } from 'framer-motion';
import { Search, Shield, Zap, Heart } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Smart Comparison',
    description: 'AI-powered scent matching technology compares fragrance notes with precision.',
  },
  {
    icon: Shield,
    title: 'Verified Authenticity',
    description: 'Every dupe recommendation is tested and verified by expert perfume panels.',
  },
  {
    icon: Zap,
    title: 'Instant Results',
    description: 'Get comprehensive dupe matches in seconds with detailed comparisons.',
  },
  {
    icon: Heart,
    title: 'Community Driven',
    description: 'Real reviews from enthusiasts who have tried both original and dupe.',
  },
];

export default function MinimalFeatures() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-[32px] font-semibold text-[#1E1E1E] mb-5">
            Why Choose <span className="text-[#5A5A5A]">ScentMatch</span>
          </h2>
          <p className="text-lg text-[#5A5A5A] max-w-[720px] mx-auto">
            The most trusted platform for finding authentic perfume alternatives
          </p>
        </motion.div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div className="h-full bg-white rounded-xl border border-[#E7E6E4] p-6 shadow-sm hover:shadow-md transition-all duration-300">
                  
                  {/* Icon */}
                  <div className="inline-flex p-3 rounded-xl bg-[#FAF9F6] mb-6">
                    <Icon className="w-6 h-6 text-[#1E1E1E]" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="text-[22px] font-medium text-[#1E1E1E] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-base text-[#5A5A5A] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
