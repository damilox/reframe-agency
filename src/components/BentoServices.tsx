"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const BentoCard = ({ 
  title, 
  description, 
  className, 
  icon,
  index 
}: { 
  title: string; 
  description: string; 
  className?: string;
  icon?: string;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
    className={cn(
      "relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-6 md:p-8 flex flex-col justify-between group cursor-pointer",
      className
    )}
  >
    {/* Animated Background Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div>
      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
        {icon}
      </div>
      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-tight">{title}</h3>
      <p className="text-gray-400 text-sm md:text-base leading-relaxed">{description}</p>
    </div>
    
    <div className="mt-8 flex items-center text-xs font-bold uppercase tracking-[0.2em] text-indigo-400 group-hover:text-indigo-300 transition-colors">
      <span>Learn More</span>
      <motion.span 
        className="ml-2"
        animate={{ x: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        →
      </motion.span>
    </div>
  </motion.div>
);

export default function BentoServices() {
  return (
    <section className="py-24 px-4 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter"
          >
            Core Expertise
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-xl text-lg"
          >
            We provide a full-stack solution to <span className="text-white font-medium">reframe</span> your business for high-scale growth.
          </motion.p>
        </div>

        {/* Responsive Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr">
          
          {/* Main Service - Branding */}
          <BentoCard
            index={1}
            title="Brand Identity & Design"
            description="We build visual systems that command attention and drive loyalty. This is the foundation of your Reframe."
            className="md:col-span-2 md:row-span-2 min-h-[300px] border-indigo-500/20"
            icon="🎨"
          />

          {/* Marketing/Ads */}
          <BentoCard
            index={2}
            title="Performance Marketing"
            description="Aggressive lead generation and paid ad strategies that actually convert clicks into revenue."
            className="md:col-span-2 min-h-[200px]"
            icon="📈"
          />

          {/* Copywriting */}
          <BentoCard
            index={3}
            title="Strategic Copywriting"
            description="Psychology-based messaging that speaks directly to your customer's needs."
            className="md:col-span-1 min-h-[200px]"
            icon="✍️"
          />

          {/* Market Analysis */}
          <BentoCard
            index={4}
            title="Market Analysis"
            description="Data-driven audits to find exactly where your brand is losing money."
            className="md:col-span-1 min-h-[200px]"
            icon="🔍"
          />

        </div>
      </div>
    </section>
  );
}