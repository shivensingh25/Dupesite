"use client";

import { motion } from 'framer-motion';
import { Search, Shield, Zap, Heart } from 'lucide-react';

const features = [
  {
    icon: Search,
    title: 'Smart Comparison',
    description: 'Advanced AI-powered scent matching technology compares fragrance notes and accords with precision.',
    color: 'from-[#F7E6EA] to-[#EDE5F8]',
  },
  {
    icon: Shield,
    title: 'Verified Authenticity',
    description: 'Every dupe recommendation is tested and verified by our expert perfume panel for accuracy.',
    color: 'from-[#EDE5F8] to-[#D7A8A1]',
  },
  {
    icon: Zap,
    title: 'Instant Results',
    description: 'Get comprehensive dupe matches in seconds. Compare prices, notes, and longevity side-by-side.',
    color: 'from-[#D7A8A1] to-[#F7E6EA]',
  },
  {
    icon: Heart,
    title: 'Community Driven',
    description: 'Real reviews from fragrance enthusiasts who have tried both the original and the dupe.',
    color: 'from-[#FAF8F5] to-[#EDE5F8]',
  },
];

export default function Features() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-[var(--ivory)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-5">
            Why Choose <span className="text-gradient">ScentMatch</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            The most trusted platform for finding authentic perfume alternatives
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative p-10 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
                  {/* Icon */}
                  <div className={`inline-flex p-5 rounded-xl bg-gradient-to-br ${feature.color} mb-6`}>
                    <Icon className="w-7 h-7 text-[var(--text-primary)]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[var(--blush)]/5 to-[var(--lavender)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
