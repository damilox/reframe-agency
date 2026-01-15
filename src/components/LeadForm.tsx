"use client";
import { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function LeadForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ service: "", budget: "" });
  
  // YOUR FORMSPREE ID
  const [state, handleSubmit] = useForm("mnjjndzy");

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  if (state.succeeded) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl mx-auto p-12 bg-[#0A0A0A] border border-indigo-500/30 rounded-3xl text-center"
      >
        <div className="w-20 h-20 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="text-indigo-500" size={40} />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Babalola and the team will review your request and reply via email within 24 hours.
        </p>
        <button 
          onClick={() => window.location.reload()}
          className="text-indigo-400 text-sm font-bold uppercase tracking-widest hover:text-white transition-colors"
        >
          Return to Site
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-8 bg-[#0A0A0A] border border-white/10 rounded-3xl shadow-2xl relative">
      
      {step > 1 && (
        <button 
          onClick={prevStep}
          className="absolute top-8 left-8 text-gray-500 hover:text-white transition-colors flex items-center gap-2 text-sm z-10"
        >
          <ArrowLeft size={16} /> Back
        </button>
      )}

      <form onSubmit={handleSubmit}>
        <AnimatePresence mode="wait">
          
          {/* STEP 1: SERVICE */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="pt-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">What do you need?</h3>
              <input type="hidden" name="service" value={formData.service} />
              
              <div className="grid grid-cols-1 gap-3">
                {["Branding & Identity", "Social Media Management", "Web Development", "Paid Advertising"].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => { setFormData({ ...formData, service: s }); nextStep(); }}
                    className="p-4 text-left border border-white/10 rounded-xl hover:bg-indigo-600/20 hover:border-indigo-500 transition-all text-gray-300"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 2: BUDGET (Updated Ranges) */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="pt-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6">What is your monthly budget?</h3>
              <input type="hidden" name="budget" value={formData.budget} />
              
              <div className="grid grid-cols-1 gap-3">
                {/* Updated Ranges: 50k start */}
                {["₦50k - ₦200k", "₦200k - ₦1M", "₦1M+"].map((b) => (
                  <button
                    key={b}
                    type="button"
                    onClick={() => { setFormData({ ...formData, budget: b }); nextStep(); }}
                    className="p-4 text-left border border-white/10 rounded-xl hover:bg-indigo-600/20 hover:border-indigo-500 transition-all text-gray-300"
                  >
                    {b}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 3: MESSAGE & EMAIL */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center pt-8"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Project Details</h3>
              <p className="text-gray-500 text-sm mb-6">
                Tell us a bit more about your project.
              </p>
              
              {/* New Textarea for Messages */}
              <textarea
                name="message"
                required
                placeholder="Tell us about your brand and what you want to achieve..."
                className="w-full p-4 bg-black border border-white/10 rounded-xl mb-4 text-white focus:border-indigo-500 outline-none min-h-[120px]"
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <input 
                id="email" 
                type="email" 
                name="email" 
                required 
                placeholder="Your email address" 
                className="w-full p-4 bg-black border border-white/10 rounded-xl mb-4 text-white focus:border-indigo-500 outline-none"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <button 
                type="submit" 
                disabled={state.submitting}
                className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-all disabled:opacity-50"
              >
                {state.submitting ? "Sending..." : "Submit Inquiry"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
}