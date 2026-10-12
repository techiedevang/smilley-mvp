"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIProjectsPage() {
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Latest", "Popular"];

  const aiProjects = [
    { title: "Project 1", description: "AI Generated Short Film", category: "Latest", image: "/images/placeholder-poster.svg" },
    { title: "Project 2", description: "AI Visual Effects", category: "Popular", image: "/images/placeholder-poster.svg" },
    { title: "Project 3", description: "AI Conceptual Art", category: "Latest", image: "/images/placeholder-poster.svg" },
    { title: "Project 4", description: "AI Narrative Generation", category: "Popular", image: "/images/placeholder-poster.svg" },
    { title: "Project 5", description: "AI Sound Design", category: "Latest", image: "/images/placeholder-poster.svg" },
    { title: "Project 6", description: "AI Color Grading", category: "Popular", image: "/images/placeholder-poster.svg" },
  ];

  const filteredProjects = filter === "All"
    ? aiProjects
    : aiProjects.filter((p) => p.category === filter);

  return (
    <div>
      <section className="mb-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--border)] pb-4 mb-8">
          <h2 className="font-serif text-3xl font-light text-white mb-4 md:mb-0">
            AI Projects
          </h2>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${
                  filter === f
                    ? "bg-[#FFD700] text-black"
                    : "bg-white/5 text-[var(--fg-muted)] hover:bg-white/10 hover:text-white"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
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
