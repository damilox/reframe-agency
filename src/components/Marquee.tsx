"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { name: "Milo", src: "/images/milo.png" },
  { name: "7up", src: "/images/7up.jpeg" },
  { name: "Peak Milk", src: "/images/peak.png" },
  { name: "Access Bank", src: "/images/access.png" },
  { name: "Glo", src: "/images/glo.jpeg" },
  { name: "Piggyvest", src: "/images/piggy-vest.png" },
  { name: "Kings Oil", src: "/images/kings.png" },
];

export default function Marquee() {
  return (
    <div className="py-12 bg-black overflow-hidden border-y border-white/5 flex items-center">
      <motion.div 
        animate={{ x: [0, "-50%"] }} 
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex whitespace-nowrap gap-24 items-center"
      >
        {/* We triple the list to make sure there is never a gap in the scroll */}
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <div key={i} className="relative w-32 h-12 flex-shrink-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <Image
              src={logo.src}
              alt={logo.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}