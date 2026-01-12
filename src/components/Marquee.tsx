"use client";
import { motion } from "framer-motion";

const logos = ["BRAND A", "BRAND B", "BRAND C", "BRAND D", "BRAND E", "BRAND F"];

export default function Marquee() {
  return (
    <div className="py-10 bg-black overflow-hidden border-y border-white/5 flex">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-20"
      >
        {[...logos, ...logos].map((logo, i) => (
          <span key={i} className="text-2xl font-bold text-white/20 tracking-widest uppercase">
            {logo}
          </span>
        ))}
      </motion.div>
    </div>
  );
}