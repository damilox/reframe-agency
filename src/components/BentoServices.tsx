"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, MessageSquare, Phone } from "lucide-react";

const serviceDetails = {
  "Brand Identity & Design": {
    longDesc: "We don't just make logos. We build a visual language that makes your brand unforgettable.",
    features: ["Visual DNA Strategy", "Premium Typography", "Color Psychology", "Logo Systems"],
    contactLabel: "Discuss Branding"
  },
  "Performance Marketing": {
    longDesc: "Data-driven scaling. We find where your customers are and convert them at the lowest cost.",
    features: ["Ad Management", "Funnel Optimization", "ROI Tracking", "A/B Testing"],
    contactLabel: "Discuss Ad Growth"
  },
  "Strategic Copywriting": {
    longDesc: "Words that sell. We write the scripts and pages that turn browsers into buyers.",
    features: ["Sales Letters", "Email Funnels", "Website Copy", "Ad Scripting"],
    contactLabel: "Order High-End Copy"
  },
  "Market Analysis": {
    longDesc: "Know your enemy. We audit your competition and find the gaps you can exploit for profit.",
    features: ["Competitor Audits", "Market Gaps", "Audience Insights", "Trend Analysis"],
    contactLabel: "Request an Audit"
  }
};

export default function BentoServices() {
  const [selectedService, setSelectedService] = useState<null | string>(null);

  const services = [
    { title: "Brand Identity & Design", desc: "Premium visual systems.", icon: "🎨", className: "md:col-span-2 md:row-span-2" },
    { title: "Performance Marketing", desc: "Aggressive growth via ads.", icon: "📈", className: "md:col-span-2" },
    { title: "Strategic Copywriting", desc: "Psychology-based messaging.", icon: "✍️", className: "md:col-span-1" },
    { title: "Market Analysis", desc: "Find your revenue leaks.", icon: "🔍", className: "md:col-span-1" },
  ];

  return (
    <section className="py-24 px-4 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-12 tracking-tighter">Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-fr">
          {services.map((s, i) => (
            <div 
              key={i}
              onClick={() => setSelectedService(s.title)}
              className={`p-8 rounded-3xl border border-white/10 bg-[#0A0A0A] hover:border-indigo-500/50 transition-all cursor-pointer group ${s.className}`}
            >
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm mb-6">{s.desc}</p>
              <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">Learn More +</span>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-[200]" 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-0 m-auto w-[90%] max-w-lg h-fit bg-[#111] border border-white/10 p-8 rounded-[32px] z-[210] shadow-2xl"
            >
              <button onClick={() => setSelectedService(null)} className="absolute top-6 right-6 text-gray-500 hover:text-white"><X /></button>
              
              <h3 className="text-2xl font-bold text-white mb-4">{selectedService}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                {serviceDetails[selectedService as keyof typeof serviceDetails]?.longDesc}
              </p>

              <div className="space-y-3 mb-8">
                {serviceDetails[selectedService as keyof typeof serviceDetails]?.features.map((f, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-200 text-sm">
                    <CheckCircle2 className="text-indigo-500" size={18} />
                    {f}
                  </div>
                ))}
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col gap-3">
                {/* WhatsApp Link */}
                <a 
                  href={`https://wa.me/2349056322556?text=Hello%20Reframe%20Digital,%20I'm%20interested%20in%20your%20${selectedService}%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all"
                >
                  <MessageSquare size={18} />
                  {serviceDetails[selectedService as keyof typeof serviceDetails]?.contactLabel}
                </a>

                {/* Direct Call Link */}
                <a 
                  href="tel:+2349056322556" 
                  className="flex items-center justify-center gap-3 w-full border border-white/10 text-white py-4 rounded-2xl font-bold hover:bg-white/5 transition-all"
                >
                  <Phone size={18} />
                  Call 0905 632 2556
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}