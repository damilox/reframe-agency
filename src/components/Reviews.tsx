"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Tunde Williams",
    company: "Luxe Properties",
    text: "Reframe Digital took our reach from zero to 10X in 3 months. Scaling sales became easy.",
  },
  {
    name: "Sarah Chen",
    company: "Zenith Fintech",
    text: "The best marketing decision we've made. They simplified the noise and sharpened our message.",
  },
  {
    name: "Amaka Okafor",
    company: "Glow Skincare",
    text: "Brutally honest and incredibly effective. Our brand is now heard and seen everywhere.",
  },
  {
    name: "David adewale",
    company: "TechFlow",
    text: "Professional, tactical, and result-oriented. They mastered our market positioning perfectly.",
  },
];

export default function Reviews() {
  return (
    <section className="py-20 bg-black overflow-hidden border-y border-white/5">
      <div className="mb-10 px-4 text-center">
        <p className="text-indigo-500 font-bold text-xs uppercase tracking-[0.3em]">Success Stories</p>
      </div>

      {/* Marquee Container */}
      <div className="flex">
        <motion.div
          // This moves the marquee from Left to Right
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-6 whitespace-nowrap"
        >
          {/* Tripling the array for seamless looping */}
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="w-[350px] md:w-[450px] bg-[#0A0A0A] border border-white/10 p-8 rounded-[32px] flex-shrink-0"
            >
              {/* 5 Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={16} className="fill-indigo-500 text-indigo-500" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-white font-medium text-lg leading-relaxed whitespace-normal mb-6">
                "{t.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-500 font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs uppercase tracking-widest">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}