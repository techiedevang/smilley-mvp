"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  projects,
  CATEGORY_FILTERS,
  type FilterCategory,
} from "@/data/projects";

function LightbulbIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}

export default function AIWorkClient() {
  const [selectedCategory, setSelectedCategory] =
    useState<FilterCategory>("All");
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [selectedStillByProject, setSelectedStillByProject] = useState<
    Record<string, number>
  >({});

  const sliderRef = useRef<HTMLDivElement>(null);

  // Available category filters
  const availableFilters = useMemo(() => {
    return CATEGORY_FILTERS.filter((f) => f.enabled);
  }, []);

  // Filtered projects based on selectedCategory
  const displayedProjects = useMemo(() => {
    return projects.filter((p) => {
      if (p.enabled === false) return false;
      if (selectedCategory === "All") return true;
      return p.category === selectedCategory;
    });
  }, [selectedCategory]);

  // Reset slider scroll when filter changes
  useEffect(() => {
    setActiveSlideIndex(0);
    if (sliderRef.current) {
      sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [selectedCategory]);

  const scrollToSlide = (index: number) => {
    const slider = sliderRef.current;
    if (!slider || displayedProjects.length === 0) return;
    const targetIndex = Math.max(0, Math.min(index, displayedProjects.length - 1));
    const child = slider.children[targetIndex] as HTMLElement;
    if (child) {
      slider.scrollTo({
        left: child.offsetLeft - slider.offsetLeft,
        behavior: "smooth",
      });
      setActiveSlideIndex(targetIndex);
    }
  };

  const handlePrev = () => {
    scrollToSlide(activeSlideIndex - 1);
  };

  const handleNext = () => {
    scrollToSlide(activeSlideIndex + 1);
  };

  const onSliderScroll = () => {
    const slider = sliderRef.current;
    if (!slider || !slider.children.length) return;
    const scrollLeft = slider.scrollLeft;
    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(slider.children).forEach((child, idx) => {
      const el = child as HTMLElement;
      const distance = Math.abs(el.offsetLeft - slider.offsetLeft - scrollLeft);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    setActiveSlideIndex(closestIndex);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <section
      id="ai-studio"
      className="py-24 md:py-36 px-6 md:px-12 scroll-mt-24 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px divider-gradient opacity-60" />

      {/* Dramatic ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] md:w-[900px] h-[400px] rounded-full bg-[var(--accent)]/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-6xl relative">
        {/* Centered Section Header */}
        <div className="text-center mb-16 animate-reveal-up relative">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-44 w-full max-w-2xl mx-auto bg-[var(--accent)]/18 blur-[85px] pointer-events-none rounded-full" />

          {/* Centered Bulb Icon */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              type: "spring",
              stiffness: 200,
            }}
            className="inline-flex items-center justify-center w-14 h-14 mb-6 relative"
          >
            <div className="absolute inset-0 rounded-full bg-[var(--accent)]/10 ring-1 ring-[var(--accent)]/30" />
            <LightbulbIcon className="w-6 h-6 text-[var(--accent)] relative z-10" />
          </motion.div>

          {/* Eyebrow Label */}
          <div>
            <span className="section-label">Innovation</span>
          </div>

          {/* Renamed Heading: AI Studio */}
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white">
            AI <span className="text-gradient">Studio</span>
          </h2>

          {/* Accent divider line */}
          <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-[var(--accent)] to-transparent mx-auto" />

          {/* Tagline directly underneath the AI Studio heading */}
          <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[var(--fg-muted)] font-light leading-relaxed">
            We produce AI-driven fiction shows, films, AVs, ad films, and branded content, combining creative direction with emerging AI technologies to bring stories to life on screen.
          </p>
        </div>

        {/* Portfolio Filter Tabs & Slider Section */}
        <div>
          {/* Header row: Filter tabs on left, Arrows on right */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-[var(--border)] pb-6">
            {/* Filter Tabs */}
            <div
              className="flex flex-wrap items-center gap-2"
              role="tablist"
              aria-label="Filter AI Studio projects by category"
            >
              {availableFilters.map((tab) => {
                const isActive = selectedCategory === tab.key;
                return (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setSelectedCategory(tab.key)}
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

            {/* Slider Arrow Navigation */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                type="button"
                onClick={handlePrev}
                disabled={activeSlideIndex === 0}
                aria-label="Previous slide"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[var(--border)] bg-[var(--bg-card)]/80 hover:bg-[var(--accent)] hover:text-black hover:border-[var(--accent)] flex items-center justify-center text-white transition-all duration-300 disabled:opacity-25 disabled:pointer-events-none cursor-pointer shadow-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                disabled={activeSlideIndex >= displayedProjects.length - 1}
                aria-label="Next slide"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[var(--border)] bg-[var(--bg-card)]/80 hover:bg-[var(--accent)] hover:text-black hover:border-[var(--accent)] flex items-center justify-center text-white transition-all duration-300 disabled:opacity-25 disabled:pointer-events-none cursor-pointer shadow-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel / Slider Container */}
          <div
            ref={sliderRef}
            onScroll={onSliderScroll}
            onKeyDown={onKeyDown}
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label="AI Studio Projects Slider"
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4 pt-2 -mx-2 px-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]/50 rounded-xl"
            style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
          >
            {displayedProjects.map((project, index) => {
              const currentStillIdx = selectedStillByProject[project.id] ?? 0;
              const currentStill =
                project.stills[currentStillIdx] || project.stills[0];

              return (
                <div
                  key={project.id}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${displayedProjects.length}: ${project.title}`}
                  className="flex-shrink-0 w-[86vw] sm:w-[70vw] md:w-[46%] lg:w-[31.5%] snap-start group"
                >
                  <div className="bg-[var(--bg-card)] rounded-2xl overflow-hidden border border-[var(--border)] hover:border-[var(--accent)]/40 transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-2xl">
                    {/* Main Project Still */}
                    <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden bg-[#0A0D14]">
                      {currentStill && (
                        <Image
                          src={currentStill.src}
                          alt={currentStill.alt}
                          fill
                          sizes="(max-width: 640px) 86vw, (max-width: 1024px) 46vw, 32vw"
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                          priority={index < 2}
                        />
                      )}

                      {/* Top badge */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                        <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-[var(--accent)] bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full border border-[var(--accent)]/30">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Stills Gallery Selector (if project has multiple stills) */}
                    {project.stills.length > 1 && (
                      <div className="px-4 pt-3 flex items-center gap-2 overflow-x-auto scrollbar-none">
                        <span className="text-[10px] text-[var(--fg-muted)] tracking-wider uppercase font-medium mr-1 flex-shrink-0">
                          Stills:
                        </span>
                        {project.stills.map((still, sIdx) => (
                          <button
                            key={sIdx}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedStillByProject((prev) => ({
                                ...prev,
                                [project.id]: sIdx,
                              }));
                            }}
                            aria-label={`View still ${sIdx + 1} of ${project.title}`}
                            className={`relative w-10 h-10 rounded-md overflow-hidden border transition-all flex-shrink-0 cursor-pointer ${
                              sIdx === currentStillIdx
                                ? "border-[var(--accent)] scale-105 shadow-sm ring-1 ring-[var(--accent)]"
                                : "border-white/10 opacity-60 hover:opacity-100"
                            }`}
                          >
                            <Image
                              src={still.src}
                              alt={still.alt}
                              fill
                              sizes="40px"
                              className="object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}

                    {/* Information Area */}
                    <div className="p-5 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="font-serif text-xl sm:text-2xl font-light text-white group-hover:text-[var(--accent)] transition-colors duration-300">
                          {project.title}
                        </h3>
                        {project.client && (
                          <p className="text-xs text-[var(--fg-muted)] tracking-wider uppercase font-medium mt-1.5">
                            Client: <span className="text-white/90">{project.client}</span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slider Pagination Dots */}
          <div
            className="flex justify-center items-center gap-2 mt-8"
            role="tablist"
            aria-label="Project slide navigation"
          >
            {displayedProjects.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={idx === activeSlideIndex}
                aria-label={`Go to slide ${idx + 1}: ${p.title}`}
                onClick={() => scrollToSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeSlideIndex
                    ? "w-8 bg-[var(--accent)]"
                    : "w-2 bg-white/20 hover:bg-white/50"
                }`}
              />
            ))}
          </div>

          {/* Contact Button linking to Contact Us section */}
          <div className="mt-12 text-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--accent)] hover:bg-[var(--accent-light)] text-black px-8 py-4 rounded-xl font-semibold text-base tracking-wide transition-all shadow-[0_0_25px_rgba(192,57,43,0.35)] hover:shadow-[0_0_35px_rgba(192,57,43,0.5)] transform hover:-translate-y-0.5 cursor-pointer"
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
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px divider-gradient opacity-60" />
    </section>
  );
}
