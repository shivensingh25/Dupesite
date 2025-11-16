"use client";

import { motion } from "framer-motion";
import { Search, ShieldCheck, Clock, Users } from "lucide-react";

const items = [
  { icon: Search, title: "Smart Comparison", desc: "AI‑guided matching compares fragrance notes, accords, and prices with precision." },
  { icon: ShieldCheck, title: "Verified Authenticity", desc: "Every recommendation is reviewed by our community and experts for reliability." },
  { icon: Clock, title: "Instant Results", desc: "Get accurate dupe matches in seconds with clear side‑by‑side info." },
  { icon: Users, title: "Community Driven", desc: "Real reviews from fragrance lovers who've tried the original and the dupe." },
];

export default function PremiumWhyChoose() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-6">
          <h2>Why Choose <span className="text-[var(--muted)]">ScentMatch</span></h2>
          <p className="mt-4">The most trusted platform for finding authentic perfume alternatives.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 grid-gap">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="card rounded-xl hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg border border-black/10 flex items-center justify-center bg-white">
                  <it.icon className="w-5 h-5 text-[var(--charcoal)]" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="mb-1">{it.title}</h3>
                  <p>{it.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
