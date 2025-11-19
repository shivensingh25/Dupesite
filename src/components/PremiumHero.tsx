"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PremiumHero() {
  return (
    //parent hh
    <section className="relative overflow-hidden min-h-screen flex items-center section surface-blush">
      {/* subtle decorative blobs */}
      <div className="blob blush w-[220px] h-[220px] top-10 left-[-60px]" />
      <div className="blob lavender w-[260px] h-[260px] bottom-[-60px] right-[-40px]" />

      <div className="container text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-4"
        >
          Find your <span className="text-accent-gradient">dream scent</span> without the price tag
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          className="mx-auto max-w-[720px] mb-8"
        >
          Compare designer fragrances with high‑quality alternatives. Same luxury experience, up to 90% less cost.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="flex items-center justify-center gap-3 mt-4"
        >
          <Link href="/compare" className="btn btn-primary">Start Comparing</Link>
          <Link href="/about" className="btn btn-outline">Learn More</Link>
        </motion.div>
      </div>
    </section>
  );
}
