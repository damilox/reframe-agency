"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Project Zenith",
    tags: ["Branding", "Web Design"],
    result: "120% Sales Lift",
    color: "bg-blue-600",
  },
  {
    title: "Nova Marketing",
    tags: ["Ads", "Copywriting"],
    result: "5.4x ROAS",
    color: "bg-indigo-600",
  },
  {
    title: "The Reframe Lab",
    tags: ["Strategy", "Graphics"],
    result: "Market Leader",
    color: "bg-purple-600",
  },
  {
    title: "Elite Estates",
    tags: ["Lead Gen", "Ads"],
    result: "500+ Qualified Leads",
    color: "bg-zinc-800",
  },
];

export default function Work() {
  return (
    <section className="py-24 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">Selected Work</h2>
            <p className="text-gray-400">Where strategy meets execution.</p>
          </div>
          <button className="hidden md:block text-white border-b border-indigo-500 pb-1 hover:text-indigo-400 transition-colors">
            View All Case Studies
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-[450px] w-full overflow-hidden rounded-3xl bg-neutral-900 border border-white/5">
                {/* Background color placeholder - you will replace with <Image /> later */}
                <div className={cn("absolute inset-0 opacity-40 group-hover:scale-110 transition-transform duration-700", project.color)} />
                
                {/* Result Badge */}
                <div className="absolute top-6 left-6 bg-white text-black px-4 py-1 rounded-full text-xs font-bold">
                  {project.result}
                </div>

                {/* Bottom Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-8 left-8">
                  <div className="flex gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] uppercase tracking-widest text-white/60 border border-white/20 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}