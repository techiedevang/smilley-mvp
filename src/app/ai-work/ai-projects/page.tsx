"use client";

import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIProjectsPage() {
  const aiProjects = [
    { title: "Project 1", description: "AI Generated Short Film", category: "Latest", image: "/images/placeholder-poster.svg" },
    { title: "Project 2", description: "AI Visual Effects", category: "Popular", image: "/images/placeholder-poster.svg" },
    { title: "Project 3", description: "AI Conceptual Art", category: "Latest", image: "/images/placeholder-poster.svg" },
    { title: "Project 4", description: "AI Narrative Generation", category: "Popular", image: "/images/placeholder-poster.svg" },
    { title: "Project 5", description: "AI Sound Design", category: "Latest", image: "/images/placeholder-poster.svg" },
    { title: "Project 6", description: "AI Color Grading", category: "Popular", image: "/images/placeholder-poster.svg" },
  ];

  return (
    <div>
      <section className="mb-24">
        <h2 className="font-serif text-3xl font-light text-white mb-8 border-b border-[var(--border)] pb-4">
          AI Projects
        </h2>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {aiProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group cursor-pointer rounded-lg overflow-hidden bg-[var(--bg-card)] border border-[var(--border)]"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center text-black shadow-[0_0_20px_rgba(255,215,0,0.5)]">
                      <Play size={20} fill="currentColor" className="ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-white text-lg font-medium">{project.title}</h3>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#FFD700] px-2 py-0.5 rounded-full bg-[#FFD700]/10">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-[var(--fg-muted)] text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
