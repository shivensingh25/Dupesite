"use client";

import { motion } from "framer-motion";

const steps = [
  { title: "Search Your Fragrance", body: "Enter the name of your favorite designer perfume or browse our curated collection." },
  { title: "Review Matches", body: "See verified dupes with detailed scent profiles, prices, and ratings." },
  { title: "Make Smart Choices", body: "Compare side‑by‑side and choose the perfect alternative that fits your budget." },
];

export default function PremiumHowItWorks() {
  return (
    <section className="section surface-lavender relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-pink-200/20 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
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
              y: [0, -3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            How It Works
          </motion.h2>
          <motion.p 
            className="mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Three simple steps to discover your perfect fragrance alternative.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 grid-gap mt-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ 
                y: -10,
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.12)",
              }}
              className="card rounded-xl hover:shadow-md relative overflow-hidden group"
            >
              {/* Glowing border effect on hover */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent rounded-xl"
                whileHover={{
                  borderColor: "rgba(155, 143, 184, 0.3)",
                }}
              />
              
              {/* Animated background shimmer */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-100/0 to-pink-100/0 group-hover:from-purple-100/30 group-hover:to-pink-100/30"
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-3">
                  <motion.span 
                    className="badge bg-[var(--ivory)] border-black/10 font-bold text-lg"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.5,
                    }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </motion.span>
                  <motion.h3 
                    className="m-0"
                    animate={{
                      x: [0, 3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.4,
                    }}
                  >
                    {s.title}
                  </motion.h3>
                </div>
                <motion.p
                  animate={{
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                >
                  {s.body}
                </motion.p>
              </div>
              
              {/* Corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-200/30 to-transparent rounded-bl-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
