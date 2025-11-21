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
    <section className="section relative overflow-hidden">
      {/* Subtle background animation */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-purple-100/30 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <div className="container relative z-10">
        <motion.div 
          className="text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.h2
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              background: "linear-gradient(90deg, #1E1E1E 0%, #5A5A5A 50%, #1E1E1E 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Why Choose <span className="text-[var(--muted)]">ScentMatch</span>
          </motion.h2>
          <motion.p 
            className="mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The most trusted platform for finding authentic perfume alternatives.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 grid-gap">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
              }}
              className="card rounded-xl hover:shadow-md relative overflow-hidden group"
            >
              {/* Hover background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              
              <div className="flex items-start gap-4 relative z-10">
                <motion.div 
                  className="w-10 h-10 rounded-lg border border-black/10 flex items-center justify-center bg-white"
                  animate={{
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 360,
                  }}
                >
                  <it.icon className="w-5 h-5 text-[var(--charcoal)]" strokeWidth={1.5} />
                </motion.div>
                <div>
                  <motion.h3 
                    className="mb-1"
                    animate={{
                      x: [0, 2, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                  >
                    {it.title}
                  </motion.h3>
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
