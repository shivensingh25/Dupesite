"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";

type Props = {
  original?: { brand: string; name: string; rating: number; price: string };
  dupe?: { brand: string; name: string; rating: number; price: string };
};

export default function PremiumComparisonCard({
  original = { brand: "Chanel", name: "No. 5", rating: 4.8, price: "$135" },
  dupe = { brand: "Inspired by No. 5", name: "—", rating: 4.6, price: "$15" },
}: Props) {
  return (
    <motion.div 
      className="card rounded-xl p-4 md:p-6 relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background shimmer */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-100/20 to-transparent"
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 2,
        }}
      />

      {/* Original */}
      <motion.div 
        className="flex items-center justify-between gap-4 p-3 rounded-lg bg-[#FBF3E6] mb-3 relative overflow-hidden"
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(230, 81, 0, 0.1)" }}
      >
        <div>
          <motion.small 
            className="badge badge-amber"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(230, 81, 0, 0)",
                "0 0 0 4px rgba(230, 81, 0, 0.1)",
                "0 0 0 0 rgba(230, 81, 0, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Original
          </motion.small>
          <div className="mt-2 font-semibold">{original.brand} {original.name}</div>
          <div className="flex items-center gap-1 text-sm text-black/70">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
            >
              <Star className="w-4 h-4 fill-current text-yellow-400" />
            </motion.div>
            {original.rating}
          </div>
        </div>
        <motion.div 
          className="text-lg font-semibold"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          {original.price}
        </motion.div>
      </motion.div>

      {/* Dupe */}
      <motion.div 
        className="flex items-center justify-between gap-4 p-3 rounded-lg bg-[#E7F6EF] mb-4 relative overflow-hidden"
        initial={{ x: 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        whileHover={{ scale: 1.02, boxShadow: "0 4px 12px rgba(46, 125, 50, 0.1)" }}
      >
        <div>
          <motion.small 
            className="badge badge-mint"
            animate={{
              boxShadow: [
                "0 0 0 0 rgba(46, 125, 50, 0)",
                "0 0 0 4px rgba(46, 125, 50, 0.1)",
                "0 0 0 0 rgba(46, 125, 50, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            Dupe
          </motion.small>
          <div className="mt-2 font-semibold">{dupe.brand}</div>
          <div className="flex items-center gap-1 text-sm text-black/70">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
            >
              <Star className="w-4 h-4 fill-current text-yellow-400" />
            </motion.div>
            {dupe.rating}
          </div>
        </div>
        <motion.div 
          className="text-lg font-semibold"
          animate={{
            scale: [1, 1.15, 1],
            color: ["#1E1E1E", "#2E7D32", "#1E1E1E"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          {dupe.price}
        </motion.div>
      </motion.div>

      {/* Compare bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        <div className="flex justify-between text-sm text-black/60 mb-2">
          <span>Similarity</span>
          <motion.span
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            92%
          </motion.span>
        </div>
        <div className="h-2 rounded-full bg-black/10 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "92%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
            className="h-full rounded-full bar-gradient relative"
          >
            {/* Animated shine effect on progress bar */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
                delay: 1.5,
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
