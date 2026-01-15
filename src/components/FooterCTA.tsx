"use client";
import { motion } from "framer-motion";
import { Instagram, Mail, Linkedin, MessageSquare, Phone } from "lucide-react";

export default function FooterCTA() {
  const socials = [
    { 
      icon: <Linkedin size={20} />, 
      href: "https://www.linkedin.com/in/babalola-david-247846234", 
      label: "LinkedIn" 
    },
    { 
      icon: <Instagram size={20} />, 
      href: "https://www.instagram.com/reframemediagroup?igsh=MTQ3OW5tOHpicTdoMw==", 
      label: "Instagram" 
    },
    { 
      icon: <Mail size={20} />, 
      href: "mailto:Reframemediagroup@gmail.com", 
      label: "Gmail" 
    },
    { 
      icon: <MessageSquare size={20} />, 
      href: "https://wa.me/2349056322556?text=Hello%20Reframe%20Media,%20I'm%20ready%20for%2010X%20growth.", 
      label: "WhatsApp" 
    },
  ];

  return (
    <section className="py-32 px-4 border-t border-white/5 bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        
        {/* Massive 10X Headline */}
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-[8rem] font-black text-white tracking-tighter mb-8 leading-[0.8] uppercase"
        >
          10X MORE <span className="text-indigo-500 italic">REACH.</span> <br />
          10X MORE <span className="text-indigo-500 italic">SALES.</span>
        </motion.h2>

        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          We’re currently accepting <span className="text-white font-bold">2 more partners</span> for this quarter. Let’s build your market-leading narrative today.
        </p>

        {/* Action Button */}
        <div className="flex flex-col items-center gap-10">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:+2349056322556"
            className="group relative flex items-center gap-3 bg-white text-black px-12 py-6 rounded-full font-black text-xl transition-all hover:bg-indigo-500 hover:text-white"
          >
            <Phone size={24} className="group-hover:rotate-12 transition-transform" />
            BOOK YOUR 10X AUDIT
          </motion.a>

          {/* Social Media Dock */}
          <div className="flex flex-col gap-4">
             <p className="text-[10px] font-black tracking-[0.3em] text-gray-600 uppercase">Direct Connect</p>
             <div className="flex items-center gap-4">
                {socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 flex items-center justify-center rounded-full border border-white/10 text-gray-400 hover:border-indigo-500 hover:text-white hover:bg-indigo-500/10 transition-all"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
             </div>
          </div>
        </div>
      </div>

      {/* Decorative background text - 10X REACH */}
      <div className="absolute -bottom-10 left-0 w-full opacity-[0.04] select-none pointer-events-none">
        <motion.h1 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="text-[18vw] font-black text-white whitespace-nowrap uppercase tracking-tighter"
        >
          10X REACH 10X SALES 10X REACH 10X SALES 10X REACH 10X SALES
        </motion.h1>
      </div>
    </section>
  );
}