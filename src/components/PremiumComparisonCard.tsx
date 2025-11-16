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
    <div className="card rounded-xl p-4 md:p-6">
      {/* Original */}
      <div className="flex items-center justify-between gap-4 p-3 rounded-lg bg-[#FBF3E6] mb-3">
        <div>
          <small className="badge badge-amber">Original</small>
          <div className="mt-2 font-semibold">{original.brand} {original.name}</div>
          <div className="flex items-center gap-1 text-sm text-black/70">
            <Star className="w-4 h-4 fill-current text-yellow-400" /> {original.rating}
          </div>
        </div>
        <div className="text-lg font-semibold">{original.price}</div>
      </div>

      {/* Dupe */}
      <div className="flex items-center justify-between gap-4 p-3 rounded-lg bg-[#E7F6EF] mb-4">
        <div>
          <small className="badge badge-mint">Dupe</small>
          <div className="mt-2 font-semibold">{dupe.brand}</div>
          <div className="flex items-center gap-1 text-sm text-black/70">
            <Star className="w-4 h-4 fill-current text-yellow-400" /> {dupe.rating}
          </div>
        </div>
        <div className="text-lg font-semibold">{dupe.price}</div>
      </div>

      {/* Compare bar */}
      <div>
        <div className="flex justify-between text-sm text-black/60 mb-2">
          <span>Similarity</span>
          <span>92%</span>
        </div>
        <div className="h-2 rounded-full bg-black/10 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "92%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="h-full rounded-full bar-gradient"
          />
        </div>
      </div>
    </div>
  );
}
