"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import SafeImage from "@/components/SafeImage";

export default function AIProjectClient() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Films", "Ads", "Music videos", "Visuals"];

  const aiProjects = [
    {
      title: "The Society",
      description: "Fashion & Lifestyle, 2026 | AI Commercial",
      category: "Ads",
      image: "/images/ai-projects/still-1.jpeg",
      objectPosition: "object-[center_28%]",
    },
    {
      title: "The Revelation",
      description: "Suspense Drama, 2026 | AI Film",
      category: "Films",
      image: "/images/ai-projects/still-2.jpeg",
      objectPosition: "object-[center_30%]",
    },
    {
      title: "Electric Soul",
      description: "Cinematic Music Video, 2026 | Music Video",
      category: "Music videos",
      image: "/images/ai-projects/still-3.jpeg",
      objectPosition: "object-[center_32%]",
    },
    {
      title: "Dynasty",
      description: "Period Romance, 2026 | AI Film",
      category: "Films",
      image: "/images/ai-projects/still-4.jpeg",
      objectPosition: "object-[center_42%]",
    },
    {
      title: "Sanctuary",
      description: "Wellness & Drama, 2026 | Visuals",
      category: "Visuals",
      image: "/images/ai-projects/still-5.jpeg",
      objectPosition: "object-[center_35%]",
    },
    {
      title: "Shadow Manor",
      description: "Gothic Thriller, 2026 | AI Film",
      category: "Films",
      image: "/images/ai-projects/still-6.jpeg",
      objectPosition: "object-[center_50%]",
    },
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
                className="group cursor-pointer rounded-lg overflow-hidden bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent)]/40 transition-colors"
              >
                <div className="relative aspect-video overflow-hidden bg-[var(--bg-card)]">
                  <SafeImage
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover ${project.objectPosition || "object-center"} transition-transform duration-700 group-hover:scale-105`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index < 3}
                  />
                  {/* Hover overlay with play button — completely transparent by default for crystal clear image */}
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                    <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center text-black shadow-[0_0_20px_rgba(192,57,43,0.6)] transform group-hover:scale-110 transition-transform duration-300">
                      <Play size={20} fill="currentColor" className="ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-[var(--bg-card)]">
                  <h3 className="text-white text-md font-medium mb-1 group-hover:text-[var(--accent)] transition-colors duration-300">{project.title}</h3>
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
