"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIProjectClient() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Films", "Ads", "Music videos", "Visuals"];

  const aiProjects = [
    { title: "Project title", description: "Client name, year | AI film", category: "Films", image: "/images/placeholder-poster.svg" },
    { title: "Project title", description: "Client name, year | AI ad", category: "Ads", image: "/images/placeholder-poster.svg" },
    { title: "Project title", description: "Client name, year | Music video", category: "Music videos", image: "/images/placeholder-poster.svg" },
    { title: "Project title", description: "Client name, year | AI film", category: "Films", image: "/images/placeholder-poster.svg" },
    { title: "Project title", description: "Client name, year | Visuals", category: "Visuals", image: "/images/placeholder-poster.svg" },
    { title: "Project title", description: "Client name, year | AI ad", category: "Ads", image: "/images/placeholder-poster.svg" },
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

        <div className="flex flex-col md:flex-row md:items-start justify-between mb-2">
          <div>
            <h1 className="font-serif text-3xl font-light text-white mb-2">
              AI Projects
            </h1>
            <p className="text-[var(--fg-muted)] text-sm mb-6">
              A selection of work made with AI tools, from concept to final cut.
            </p>
          </div>
        </div>
      </div>

      <section className="mb-24 mt-4">
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
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center text-black">
                      <Play size={20} fill="currentColor" className="ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 text-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {`Project ${index + 1}: thumbnail or video`}
                  </div>
                </div>
                <div className="p-4 bg-[var(--bg-card)]">
                  <h3 className="text-white text-md font-medium mb-1">{project.title}</h3>
                  <p className="text-[var(--fg-muted)] text-xs">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
