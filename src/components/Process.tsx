"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "The Audit",
    description: "We deep-dive into your current brand positioning, ad spend, and conversion data to find the leaks in your funnel.",
  },
  {
    number: "02",
    title: "The Reframing",
    description: "Our creative team builds a new visual and psychological narrative that sets you apart from every competitor.",
  },
  {
    number: "03",
    title: "The Launch",
    description: "We deploy high-performance campaigns and brand assets designed for one thing: aggressive ROI.",
  },
  {
    number: "04",
    title: "The Optimization",
    description: "Data doesn't lie. We continuously refine the strategy based on real-world performance to scale your revenue.",
  },
];

export default function Process() {
  return (
    <section className="py-32 px-4 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        
        {/* Left Side: Sticky Title */}
        <div className="md:w-1/3 md:sticky md:top-32 h-fit">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
            HOW WE <br /> <span className="text-indigo-500 italic">SCALE.</span>
          </h2>
          <p className="text-gray-500 text-lg">
            A repeatable system designed to move the needle. No guesswork, just execution.
          </p>
        </div>

        {/* Right Side: Scrollable Steps */}
        <div className="md:w-2/3 space-y-24">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative pl-12 border-l border-white/10 group"
            >
              {/* The Number Dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white group-hover:bg-indigo-500 transition-colors duration-500" />
              
              <span className="text-indigo-500 font-mono font-bold text-sm tracking-widest block mb-4">
                PHASE {step.number}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                {step.title}
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}