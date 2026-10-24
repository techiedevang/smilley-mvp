"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  projects,
  CATEGORY_FILTERS,
  type FilterCategory,
  type Project,
} from "@/data/projects";

const labelClass =
  "text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-2 block";
const valueClass = "text-white text-sm md:text-base leading-relaxed";

export default function ProjectDetail({ project }: { project: Project }) {
  const [selectedStillIndex, setSelectedStillIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] =
    useState<FilterCategory>("All");

  const currentStill = project.stills[selectedStillIndex] || project.stills[0];

  const isLandscape = Boolean(
    currentStill &&
      currentStill.src &&
      currentStill.src.width &&
      currentStill.src.height &&
      currentStill.src.width / currentStill.src.height > 1.2
  );

  const availableFilters = useMemo(
    () => CATEGORY_FILTERS.filter((f) => f.enabled),
    []
  );

  const filteredOtherProjects = useMemo(() => {
    return projects.filter((p) => {
      if (p.enabled === false) return false;
      if (p.id === project.id) return false;
      if (selectedCategory === "All") return true;
      return p.category === selectedCategory;
    });
  }, [selectedCategory, project.id]);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      <div className="px-6 md:px-12 pt-28 md:pt-36 pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl">
          {/* Back link matching Featured Work detail style */}
          <div className="mb-8 md:mb-10">
            <Link
              href="/#ai-studio"
              className="inline-flex items-center gap-2 text-[var(--fg-muted)] hover:text-[var(--accent)] text-sm transition-colors duration-300 group cursor-pointer"
              aria-label="Back to AI Studio"
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
              <span>Back to AI Studio</span>
            </Link>
          </div>

          <h1 className="sr-only">{project.title}</h1>

          {/* Two columns: Poster/stills left, Details right */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,1fr)] gap-8 lg:gap-14 items-start">
            {/* Left: Project Still with support for multi-stills and landscape blur */}
            <div className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0 lg:max-w-none w-full">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#0A0D14] border border-[var(--border)] shadow-2xl">
                {currentStill && (
                  isLandscape ? (
                    <div className="relative w-full h-full">
                      {/* Blurred backdrop for landscape letterbox fill */}
                      <Image
                        src={currentStill.src}
                        alt=""
                        fill
                        className="object-cover scale-125 blur-xl opacity-45 brightness-75 pointer-events-none"
                        aria-hidden
                      />
                      <div className="absolute inset-0 bg-black/30 pointer-events-none z-[1]" />

                      {/* Full landscape image fitted properly with object-contain */}
                      <div className="relative w-full h-full z-10 flex items-center justify-center p-3">
                        <Image
                          src={currentStill.src}
                          alt={currentStill.alt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 45vw"
                          className="object-contain object-center drop-shadow-2xl"
                          priority
                        />
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={currentStill.src}
                      alt={currentStill.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover object-center"
                      priority
                    />
                  )
                )}

                {/* Category Pill */}
                <div className="absolute top-4 left-4 z-20 pointer-events-none">
                  <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-[var(--accent)] bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-[var(--accent)]/30">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Thumbnails if project has multiple stills */}
              {project.stills.length > 1 && (
                <div className="flex items-center gap-3 overflow-x-auto scrollbar-none py-1">
                  <span className="text-xs text-[var(--fg-muted)] tracking-wider uppercase font-medium mr-1 flex-shrink-0">
                    Stills:
                  </span>
                  {project.stills.map((still, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedStillIndex(idx)}
                      className={`relative w-16 h-16 rounded-lg overflow-hidden border transition-all flex-shrink-0 cursor-pointer ${
                        idx === selectedStillIndex
                          ? "border-[var(--accent)] scale-105 shadow-md ring-1 ring-[var(--accent)]"
                          : "border-white/10 opacity-60 hover:opacity-100"
                      }`}
                      aria-label={`View still ${idx + 1}`}
                    >
                      <Image
                        src={still.src}
                        alt={still.alt}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Details */}
            <div className="flex flex-col space-y-8">
              <div>
                <span className="section-label">AI Studio Project</span>
                <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl font-light text-white leading-tight">
                  {project.title}
                </h2>
              </div>

              {project.client && (
                <div>
                  <span className={labelClass}>Client</span>
                  <p className={valueClass}>{project.client}</p>
                </div>
              )}

              {project.format && (
                <div>
                  <span className={labelClass}>Format</span>
                  <p className={valueClass}>{project.format}</p>
                </div>
              )}

              {project.genre && (
                <div>
                  <span className={labelClass}>Genre</span>
                  <p className={valueClass}>{project.genre}</p>
                </div>
              )}

              {project.direction && (
                <div>
                  <span className={labelClass}>Creative Direction & Production</span>
                  <p className={valueClass}>{project.direction}</p>
                </div>
              )}

              {project.synopsis && (
                <div>
                  <span className={labelClass}>Synopsis</span>
                  <p className="text-[var(--fg-muted)] text-sm md:text-base leading-relaxed font-light">
                    {project.synopsis}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* More AI Studio Works Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 border-t border-[var(--border)] bg-[#07090F]">
        <div className="mx-auto max-w-7xl">
          <h3 className="text-white font-serif text-3xl md:text-4xl font-light uppercase text-center">
            More AI Studio Works
          </h3>
          <div className="mt-2 flex justify-center">
            <div className="w-12 h-0.5 bg-[var(--accent)]" />
          </div>

          {/* Category Toggle Bar under More AI Studio Works */}
          <div className="flex flex-wrap justify-center items-center gap-2 mt-8 mb-12">
            <div
              className="flex flex-wrap justify-center items-center gap-2"
              role="tablist"
              aria-label="Filter More AI Studio works by category"
            >
              {availableFilters.map((tab) => {
                const isActive = selectedCategory === tab.key;
                const isDisabled = Boolean(tab.disabled);
                return (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => {
                      if (!isDisabled) setSelectedCategory(tab.key);
                    }}
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[var(--accent)] text-black font-semibold shadow-[0_0_15px_rgba(192,57,43,0.4)]"
                        : "bg-white/5 text-[var(--fg-muted)] hover:bg-white/10 hover:text-white border border-white/5"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Filtered Projects Grid */}
          {filteredOtherProjects.length > 0 ? (
            <div className="flex flex-wrap justify-center gap-6">
              {filteredOtherProjects.map((p) => {
                const still = p.stills[0];
                return (
                  <Link
                    key={p.id}
                    href={`/ai-studio/${p.id}`}
                    className="flex-shrink-0 w-[150px] sm:w-[180px] md:w-[200px] group"
                  >
                    <div className="aspect-[3/4] relative overflow-hidden rounded-xl border border-[var(--border)] group-hover:border-[var(--accent)]/50 transition-all bg-[#0A0D14]">
                      {still && (
                        <Image
                          src={still.src}
                          alt={p.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="200px"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h4 className="mt-3 text-white text-sm font-medium line-clamp-1 group-hover:text-[var(--accent)] transition-colors">
                      {p.title}
                    </h4>
                    <p className="text-[11px] text-[var(--fg-muted)] tracking-wider uppercase">
                      {p.category}
                    </p>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-[var(--fg-muted)] text-sm">
                No other projects found in this category.
              </p>
            </div>
          )}

          {/* Contact CTA button positioned at the very bottom (after More AI Studio Works) */}
          <div className="mt-16 md:mt-20 text-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-light)] text-black px-8 py-4 rounded-xl font-semibold text-sm md:text-base tracking-wide transition-all shadow-[0_0_25px_rgba(192,57,43,0.35)] hover:shadow-[0_0_35px_rgba(192,57,43,0.5)] transform hover:-translate-y-0.5 cursor-pointer"
            >
              Have an idea? Let’s make it.
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
