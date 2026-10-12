"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIProjectClient() {
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
    <div className="pt-32 pb-24 px-6 md:px-12 mx-auto max-w-7xl min-h-screen">
      <div className="mb-12 animate-reveal-up">
        <Link href="/ai-work" className="inline-flex items-center gap-2 text-[var(--fg-muted)] hover:text-white transition-colors duration-300 mb-6 group">
          <svg
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-sm tracking-wider uppercase font-medium">Back to AI Work</span>
        </Link>
        <h1 className="font-serif text-4xl md:text-5xl font-light text-white mb-6">
          AI <span className="text-gradient">Projects</span>
        </h1>
        <p className="text-[var(--fg-muted)] leading-relaxed max-w-2xl">
          Exploring the frontiers of storytelling with artificial intelligence. Browse all our AI generated films, ads, and conceptual art.
        </p>
      </div>

      <section className="mb-24">
        <div className="flex flex-wrap gap-2 mb-8 border-b border-[var(--border)] pb-8">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider transition-colors duration-300 ${
                filter === f
                  ? "bg-[var(--accent)] text-black"
                  : "bg-white/5 text-[var(--fg-muted)] hover:bg-white/10 hover:text-white"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
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
                    <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center text-black shadow-[0_0_20px_rgba(var(--accent-rgb),0.5)]">
                      <Play size={20} fill="currentColor" className="ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-white text-lg font-medium">{project.title}</h3>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[var(--accent)] px-2 py-0.5 rounded-full bg-[var(--accent)]/10">
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
