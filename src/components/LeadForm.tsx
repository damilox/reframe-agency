// components/LeadForm.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ service: "", budget: "" });

  const nextStep = () => setStep((s) => s + 1);

  return (
    <div className="max-w-xl mx-auto p-8 bg-[#0A0A0A] border border-white/10 rounded-3xl shadow-2xl">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">What do you need to Reframe?</h3>
            <div className="grid grid-cols-1 gap-3">
              {["Branding", "Paid Ads", "Copywriting", "Full Strategy"].map((s) => (
                <button
                  key={s}
                  onClick={() => { setFormData({ ...formData, service: s }); nextStep(); }}
                  className="p-4 text-left border border-white/10 rounded-xl hover:bg-indigo-600/20 hover:border-indigo-500 transition-all text-gray-300"
                >
                  {s}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">What is your monthly budget?</h3>
            <div className="grid grid-cols-1 gap-3">
              {["$1k - $3k", "$3k - $10k", "$10k+"].map((b) => (
                <button
                  key={b}
                  onClick={() => { setFormData({ ...formData, budget: b }); nextStep(); }}
                  className="p-4 text-left border border-white/10 rounded-xl hover:bg-indigo-600/20 hover:border-indigo-500 transition-all text-gray-300"
                >
                  {b}
                </button>
              ))}
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Let's build the engine.</h3>
            <input 
              type="email" 
              placeholder="Your work email" 
              className="w-full p-4 bg-black border border-white/10 rounded-xl mb-4 text-white focus:border-indigo-500 outline-none"
            />
            <button className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all">
              Request Access
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}