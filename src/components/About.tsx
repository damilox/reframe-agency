"use client";
import { motion } from "framer-motion";
import Image from "next/image"; // 1. Import the Image component

export default function About() {
  return (
    <section className="py-24 px-4 bg-[#050505]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Founder Image Container */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative aspect-square md:aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 group"
        >
          {/* Overlay Gradient for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80" />
          
          {/* 2. The Actual Image Implementation */}
          <Image 
            src="/images/david.jpg" // Change this to your actual filename (e.g., /ceo.png)
            alt="Babalola Olaoluwa - Founder of Reframe Digital"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            priority // Helps with LCP performance
          />

          <div className="absolute bottom-8 left-8 z-20">
            <p className="text-white font-bold text-2xl tracking-tighter">Babalola Olaoluwa David</p>
            <p className="text-indigo-500 font-medium uppercase text-xs tracking-widest">Founder & Lead Strategist</p>
          </div>
        </motion.div>

        {/* Founder Text */}
        <div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-none">
            We don't just build brands. We build <span className="italic text-indigo-500">Market Leaders.</span>
          </h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              I founded Reframe Digital because the old way of marketing is dead. In a world of noise, you don't need "more ads"—you need a better narrative.
            </p>
            <p>
              Our approach is simple: we combine high-end creative direction with aggressive performance data. If it doesn't move the needle, we don't build it.
            </p>
          </div>
          
          <div className="mt-10 p-6 border border-white/5 rounded-3xl bg-white/5 flex gap-8">
            <div>
              <p className="text-white font-bold text-3xl">50+</p>
              <p className="text-gray-500 text-xs uppercase font-bold tracking-widest">Brands Scaled</p>
            </div>
            <div className="w-[1px] h-full bg-white/10" />
            <div>
              <p className="text-white font-bold text-3xl">$10M+</p>
              <p className="text-gray-500 text-xs uppercase font-bold tracking-widest">Revenue Generated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}