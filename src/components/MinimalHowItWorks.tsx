'use client';

import { motion } from 'framer-motion';
import { Search, CheckCircle, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Search Your Fragrance',
    description: 'Enter the name of your favorite designer perfume or browse our curated collection.',
  },
  {
    icon: CheckCircle,
    title: 'Review Matches',
    description: 'View verified dupe alternatives with detailed scent profiles, prices, and ratings.',
  },
  {
    icon: Sparkles,
    title: 'Make Smart Choices',
    description: 'Compare side-by-side and choose the perfect alternative that fits your budget.',
  },
];

export default function MinimalHowItWorks() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-[#FAF9F6]">
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
            How It <span className="text-[#5A5A5A]">Works</span>
          </h2>
          <p className="text-lg text-[#5A5A5A] max-w-[720px] mx-auto">
            Three simple steps to discover your perfect fragrance alternative
          </p>
        </motion.div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
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
                  
                  {/* Step Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#E7E6E4] mb-6">
                    <span className="text-sm font-semibold text-[#1E1E1E]">Step {index + 1}</span>
                  </div>

                  {/* Icon */}
                  <div className="inline-flex p-3 rounded-xl bg-[#FAF9F6] mb-6">
                    <Icon className="w-6 h-6 text-[#1E1E1E]" strokeWidth={1.5} />
                  </div>

                  {/* Content */}
                  <h3 className="text-[22px] font-medium text-[#1E1E1E] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-base text-[#5A5A5A] leading-relaxed">
                    {step.description}
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
