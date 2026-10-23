"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  projects,
  CATEGORY_FILTERS,
  type FilterCategory,
} from "@/data/projects";

export default function AIProjectClient() {
  const [filter, setFilter] = useState<FilterCategory>("All");

  const availableFilters = useMemo(
    () => CATEGORY_FILTERS.filter((f) => f.enabled),
    [],
  );

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      if (p.enabled === false) return false;
      if (filter === "All") return true;
      return p.category === filter;
    });
  }, [filter]);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 mx-auto max-w-7xl min-h-screen">
      <div className="mb-12 animate-reveal-up">
        <Link
          href="/#ai-studio"
          className="inline-flex items-center gap-2 text-[var(--fg-muted)] hover:text-white transition-colors duration-300 mb-6 group"
        >
          <svg
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="text-sm tracking-wider uppercase font-medium">
            Back to AI Studio
          </span>
        </Link>

        <div className="flex flex-col md:flex-row md:items-start justify-between mb-2">
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-light text-white mb-2">
              AI Studio Projects
            </h1>
            <p className="text-[var(--fg-muted)] text-sm mb-6 max-w-2xl">
              We produce AI-driven fiction shows, films, AVs, ad films, and branded content, combining creative direction with emerging AI technologies to bring stories to life on screen.
            </p>
          </div>
        </div>
      </div>

      <section className="mb-24 mt-4">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 border-b border-[var(--border)] pb-8">
          {availableFilters.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider transition-colors duration-300 cursor-pointer ${
                filter === tab.key
                  ? "bg-[var(--accent)] text-black font-semibold"
                  : "bg-white/5 text-[var(--fg-muted)] hover:bg-white/10 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              const still = project.stills[0];
              const isLandscape =
                project.id === "purpose-of-wow" ||
                (still &&
                  still.src &&
                  still.src.width &&
                  still.src.height &&
                  still.src.width / still.src.height > 1.2);

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={`/ai-studio/${project.id}`}
                    className="group rounded-2xl overflow-hidden bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent)]/40 transition-colors shadow-lg flex flex-col justify-between h-full block"
                  >
                    <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden bg-black/40">
                      {still && (
                        isLandscape ? (
                          <div className="relative w-full h-full">
                            {/* Blurred background backdrop filling the letterbox area */}
                            <Image
                              src={still.src}
                              alt=""
                              fill
                              className="object-cover scale-125 blur-xl opacity-45 brightness-75 pointer-events-none"
                              aria-hidden
                            />
                            <div className="absolute inset-0 bg-black/30 pointer-events-none z-[1]" />

                            {/* Full landscape image fitted properly with object-contain */}
                            <div className="relative w-full h-full z-10 flex items-center justify-center p-2.5">
                              <Image
                                src={still.src}
                                alt={still.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-contain object-center transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
                                priority={index < 3}
                              />
                            </div>
                          </div>
                        ) : (
                          <Image
                            src={still.src}
                            alt={still.alt}
                            fill
                            className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={index < 3}
                          />
                        )
                      )}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-[var(--accent)] bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full border border-[var(--accent)]/30">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-white text-lg sm:text-xl font-medium mb-1 group-hover:text-[var(--accent)] transition-colors duration-300">
                        {project.title}
                      </h3>
                      {project.client && (
                        <p className="text-[var(--fg-muted)] text-xs tracking-wider uppercase font-medium">
                          Client: <span className="text-white/90">{project.client}</span>
                        </p>
                      )}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}
