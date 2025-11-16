"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    number: '01',
    title: 'Search Your Fragrance',
    description: 'Enter the name of your favorite designer perfume or browse our curated collection.',
  },
  {
    number: '02',
    title: 'Review Matches',
    description: 'View verified dupe alternatives with detailed scent profiles, prices, and ratings.',
  },
  {
    number: '03',
    title: 'Make Smart Choices',
    description: 'Compare side-by-side and choose the perfect alternative that fits your budget.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-white">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[var(--blush)] rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[var(--lavender)] rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text-primary)] mb-5">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            Three simple steps to discover your perfect fragrance alternative
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative text-center md:text-left"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[var(--dusty-rose)] to-transparent -z-10" />
              )}

              {/* Step Number */}
              <div className="relative mb-8 inline-block">
                <div className="text-8xl font-bold text-[var(--blush)] opacity-30">
                  {step.number}
                </div>
                <div className="absolute top-0 left-0 text-6xl font-bold text-gradient">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-4">
                {step.title}
              </h3>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <Link href="/compare">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group px-10 py-5 rounded-xl bg-gradient-to-r from-[var(--dusty-rose)] to-[var(--blush)] text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-3"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
