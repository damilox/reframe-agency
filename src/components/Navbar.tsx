"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react"; // Import from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Expertise", href: "#services" },
    { name: "Archives", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] flex justify-center p-4 md:p-6">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 w-full max-w-5xl",
          scrolled || isOpen
            ? "bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl"
            : "bg-transparent border border-transparent"
        )}
      >
        {/* Logo */}
        <div className="text-white font-bold text-xl tracking-tighter z-[110]">
          REFRAME<span className="text-indigo-500">.</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle & CTA */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-white text-black text-[10px] font-black tracking-widest px-5 py-2.5 rounded-full hover:bg-indigo-500 hover:text-white transition-all">
            GET STARTED
          </button>
          
          {/* Hamburger Icon */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white z-[110] p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Overlay Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-2xl mt-2 rounded-3xl overflow-hidden md:hidden border border-white/10"
            >
              <div className="flex flex-col p-8 gap-6 text-center">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl font-bold text-white hover:text-indigo-500 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <button className="bg-indigo-600 text-white py-4 rounded-2xl font-bold mt-4">
                  START A PROJECT
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}