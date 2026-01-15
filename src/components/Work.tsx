"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "Peculiar Grace F&B",
    category: "360° Brand Transformation",
    metrics: "+45% Dine-in Revenue",
    // Stable high-quality restaurant food shot
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", 
    description: "A complete visual overhaul for a premier supermarket's food division—integrating social media strategy with physical environmental branding."
  },
  {
    title: "Zenith Rebrand",
    category: "Fintech Design",
    metrics: "$2M Seed Round Raised",
    // Stable sleek dark tech UI shot
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Architecting a trust-based visual system for a disruptive fintech player in the digital banking space."
  }
];

export default function Work() {
  return (
    <section id="work" className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-bold text-white tracking-tighter"
          >
            Selected <br /> <span className="text-indigo-500 font-serif italic">Archives</span>
          </motion.h2>
          <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
            Proof of our ability to reframe perception and scale sales across physical and digital touchpoints.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] rounded-[40px] overflow-hidden border border-white/10 bg-neutral-900">
                {/* Fixed Image Tag for stability */}
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100" 
                />
                
                <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-4 py-2 rounded-full z-20">
                   {p.metrics}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              </div>
              
              <div className="mt-8 flex justify-between items-start px-2">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-tight">{p.title}</h3>
                  <p className="text-indigo-500 text-xs font-bold uppercase tracking-widest mb-4">{p.category}</p>
                  <p className="text-gray-400 text-sm max-w-sm leading-relaxed">{p.description}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-all">
                  ↗
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 360° Brand Rollout Grid */}
        <div className="mt-32 pt-24 border-t border-white/5">
          <div className="mb-12">
            <h3 className="text-white font-bold text-xl uppercase tracking-[0.3em] mb-4">The Multi-Channel Ecosystem</h3>
            <p className="text-gray-500 max-w-xl">Demonstrating visual consistency across Digital Content, Retail Signage, and POS Marketing.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
               <Image src="/images/image-1.jpeg" alt="IG Assets" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
               <Image src="/images/image-2.jpeg" alt="POS Assets" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
               <Image src="/images/image-3.jpeg" alt="Event Assets" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10">
               <Image src="/images/image-4.jpeg" alt="Promo Strategy" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}