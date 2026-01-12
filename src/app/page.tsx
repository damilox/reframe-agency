"use client";

import React from "react";
import { motion } from "framer-motion";

// Component Imports
import Navbar from "@/components/Navbar";
import Marquee from "@/components/Marquee";
import BentoServices from "@/components/BentoServices";
import Process from "@/components/Process"; // Integrated the new component
import Work from "@/components/Work";
import LeadForm from "@/components/LeadForm";
import FooterCTA from "@/components/FooterCTA";

export default function Home() {
  return (
    <main className="bg-black min-h-screen selection:bg-indigo-500/30">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 blur-[140px] rounded-full -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-7xl md:text-[12rem] font-bold text-white tracking-tighter leading-none mb-6">
            REFRAME
          </h1>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed"
        >
          A high-performance digital engine for 
          <span className="text-white font-medium"> branding</span>, 
          <span className="text-white font-medium"> marketing</span>, and 
          <span className="text-white font-medium"> creative growth</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10"
        >
          <a href="#contact" className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-indigo-500 hover:text-white transition-all duration-300">
            Start Your Transformation
          </a>
        </motion.div>
      </section>

      {/* 2. SOCIAL PROOF (Rage Media Style) */}
      <Marquee />

      {/* 3. CORE SERVICES (Bento Grid Layout) */}
      <div id="services">
        <BentoServices />
      </div>

      {/* 4. THE METHODOLOGY (The Process Section) */}
      {/* We place this after services to explain HOW the services are delivered */}
      <div id="process">
        <Process />
      </div>

      {/* 5. CASE STUDIES (The Proof) */}
      <div id="work">
        <Work />
      </div>

      {/* 6. THE LEAD FUNNEL (Qualification Form) */}
      <section id="contact" className="py-32 bg-[#050505] relative border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Ready to <span className="text-indigo-500 font-serif italic">Scale?</span>
          </h2>
          <p className="text-gray-500 mb-12 text-lg">
            We only take on 2 new partners per month to ensure elite-level execution.
          </p>
          <LeadForm />
        </div>

        {/* Decorative Grid background for the form section */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      </section>

      {/* 7. FINAL CALL TO ACTION */}
      <FooterCTA />

      {/* 8. FOOTER */}
      <footer className="py-12 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-white font-bold text-2xl tracking-tighter">
            REFRAME<span className="text-indigo-500">.</span>
          </div>
          
          <div className="flex gap-10 text-sm font-medium text-gray-500">
            <a href="#services" className="hover:text-white transition-colors">Expertise</a>
            <a href="#process" className="hover:text-white transition-colors">Method</a>
            <a href="#work" className="hover:text-white transition-colors">Archives</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <p className="text-gray-600 text-xs font-mono">
            © 2026 REFRAME DIGITAL. ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </main>
  );
}