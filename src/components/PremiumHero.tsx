"use client";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

export default function PremiumHero() {
  const controls = useAnimation();
  
  useEffect(() => {
    // Start the floating animation after initial reveal
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      },
    });
  }, [controls]);

  // Animation variants for letter-by-letter reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const text = "Find your ";
  const accentText = "dream scent";
  const endText = " without the price tag";

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center section surface-blush">
      {/* Animated gradient background overlay with mesh effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50/50 via-purple-50/30 to-blue-50/50 animate-gradient-shift" />
      
      {/* Radial gradient orbs */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-purple-200/20 to-transparent rounded-full blur-3xl"
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
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-pink-200/20 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      {/* Floating particles with varied sizes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-purple-300/40 to-pink-300/40"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
            }}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
              x: [null, Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Animated decorative blobs */}
      <motion.div 
        className="blob blush w-[220px] h-[220px] top-10 left-[-60px]"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div 
        className="blob lavender w-[260px] h-[260px] bottom-[-60px] right-[-40px]"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />

      <div className="container text-center relative z-10">
        {/* Animated heading with letter reveal + continuous animations */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-4"
        >
          {text.split("").map((char, index) => (
            <motion.span 
              key={`${char}-${index}`} 
              variants={letterVariants}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2 + index * 0.1,
              }}
            >
              {char}
            </motion.span>
          ))}
          <span className="text-violet-700 inline-block relative drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)] font-semibold">
            {accentText.split("").map((char, index) => (
              <motion.span 
                key={`accent-${char}-${index}`} 
                variants={letterVariants}
                className="inline-block"
                animate={{
                  y: [0, -8, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2 + index * 0.1,
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            {/* Shimmer effect overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: 2.5,
              }}
            />
          </span>
          {endText.split("").map((char, index) => (
            <motion.span 
              key={`end-${char}-${index}`} 
              variants={letterVariants}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2 + index * 0.1,
              }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Animated subtitle with fade, slide, and continuous float */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: 1, 
            y: [0, -3, 0],
          }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.8 },
            y: {
              duration: 0.8,
              delay: 0.8,
              ease: "easeOut",
            },
          }}
          className="mx-auto max-w-[720px] mb-8 relative"
        >
          <motion.span
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            Compare designer fragrances with high‑quality alternatives. Same luxury experience, up to 90% less cost.
          </motion.span>
        </motion.p>

        {/* Animated buttons with scale effect and glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.5, 
            delay: 1.2,
            type: "spring",
            stiffness: 200,
          }}
          className="flex items-center justify-center gap-3 mt-4"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(0, 0, 0, 0)",
                "0 0 20px 2px rgba(168, 85, 247, 0.2)",
                "0 0 0 0 rgba(0, 0, 0, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
            className="rounded-xl"
          >
            <Link href="/compare" className="btn btn-primary">Start Comparing</Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(0, 0, 0, 0)",
                "0 0 20px 2px rgba(219, 39, 119, 0.15)",
                "0 0 0 0 rgba(0, 0, 0, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3.5,
            }}
            className="rounded-xl"
          >
            <Link href="/about" className="btn btn-outline">Learn More</Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
