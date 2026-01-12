"use client";
import { motion } from "framer-motion";

export default function FooterCTA() {
  return (
    <section className="py-32 px-4 border-t border-white/5 bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-8">
          READY TO <span className="italic text-indigo-500">REFRAME?</span>
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          We’re currently accepting 2 more clients for Q1. Let’s see if we’re a fit for your growth goals.
        </p>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-full font-bold text-lg transition-all transform hover:scale-105">
          Schedule Your Discovery Call
        </button>
      </div>

      {/* Decorative background text */}
      <div className="absolute -bottom-10 left-0 w-full opacity-[0.02] select-none pointer-events-none">
        <h1 className="text-[20vw] font-black text-white whitespace-nowrap">
          REFRME REFRME REFRME
        </h1>
      </div>
    </section>
  );
}