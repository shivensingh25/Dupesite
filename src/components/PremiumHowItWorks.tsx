"use client";

import { motion } from "framer-motion";

const steps = [
  { title: "Search Your Fragrance", body: "Enter the name of your favorite designer perfume or browse our curated collection." },
  { title: "Review Matches", body: "See verified dupes with detailed scent profiles, prices, and ratings." },
  { title: "Make Smart Choices", body: "Compare side‑by‑side and choose the perfect alternative that fits your budget." },
];

export default function PremiumHowItWorks() {
  return (
    <section className="section surface-lavender">
      <div className="container">
        <div className="text-center mb-6">
          <h2>How It Works</h2>
          <p className="mt-4">Three simple steps to discover your perfect fragrance alternative.</p>
        </div>

        <div className="grid md:grid-cols-3 grid-gap mt-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="card rounded-xl hover:shadow-md"
            >
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="badge bg-[var(--ivory)] border-black/10">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="m-0">{s.title}</h3>
              </div>
              <p>{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
