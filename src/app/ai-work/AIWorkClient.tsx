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
  const [isPaused, setIsPaused] = useState(false);
  const [selectedStillByProject, setSelectedStillByProject] = useState<
    Record<string, number>
  >({});

  const sliderRef = useRef<HTMLDivElement>(null);

  // Available category filters
  const availableFilters = useMemo(() => {
    return CATEGORY_FILTERS.filter((f) => f.enabled);
  }, []);

  // All active projects for the continuous moving image strip
  const stripProjects = useMemo(() => {
    return projects.filter((p) => p.enabled !== false);
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
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    const isAtEnd = slider.scrollLeft >= maxScroll - 15;

    let targetIndex = index;
    if (targetIndex >= displayedProjects.length || (targetIndex > activeSlideIndex && isAtEnd)) {
      targetIndex = 0;
    } else if (targetIndex < 0) {
      targetIndex = displayedProjects.length - 1;
    }

    const child = slider.children[targetIndex] as HTMLElement;
    if (child) {
      const targetLeft =
        targetIndex === 0
          ? 0
          : targetIndex === displayedProjects.length - 1
          ? maxScroll
          : Math.min(child.offsetLeft - slider.offsetLeft, maxScroll);

      slider.scrollTo({
        left: targetLeft,
        behavior: "smooth",
      });
      setActiveSlideIndex(targetIndex);
    }
  };

  const handlePrev = () => {
    const slider = sliderRef.current;
    if (slider && slider.scrollLeft <= 15) {
      scrollToSlide(displayedProjects.length - 1);
    } else {
      scrollToSlide(activeSlideIndex - 1);
    }
  };

  const handleNext = () => {
    const slider = sliderRef.current;
    const maxScroll = slider ? slider.scrollWidth - slider.clientWidth : 0;
    if (slider && slider.scrollLeft >= maxScroll - 15) {
      scrollToSlide(0);
    } else {
      scrollToSlide(activeSlideIndex + 1);
    }
  };

  // Auto-slide carousel at a brisk interval (2.5 seconds)
  // When last image is reached, the very next slide wraps directly back to first slide
  useEffect(() => {
    if (isPaused || displayedProjects.length <= 1) return;

    const timer = setInterval(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      const maxScroll = slider.scrollWidth - slider.clientWidth;
      const isAtEnd = slider.scrollLeft >= maxScroll - 15;

      let nextIndex = 0;
      if (isAtEnd || activeSlideIndex >= displayedProjects.length - 1) {
        nextIndex = 0;
      } else {
        nextIndex = activeSlideIndex + 1;
      }

      const child = slider.children[nextIndex] as HTMLElement;
      if (child) {
        const targetLeft =
          nextIndex === 0
            ? 0
            : nextIndex === displayedProjects.length - 1
            ? maxScroll
            : Math.min(child.offsetLeft - slider.offsetLeft, maxScroll);

        slider.scrollTo({
          left: targetLeft,
          behavior: "smooth",
        });
        setActiveSlideIndex(nextIndex);
      }
    }, 2500);

    return () => clearInterval(timer);
  }, [isPaused, displayedProjects.length, activeSlideIndex]);

  const onSliderScroll = () => {
    const slider = sliderRef.current;
    if (!slider || !slider.children.length) return;
    const scrollLeft = slider.scrollLeft;
    const maxScroll = slider.scrollWidth - slider.clientWidth;

    if (scrollLeft >= maxScroll - 15) {
      setActiveSlideIndex(displayedProjects.length - 1);
      return;
    }

    if (scrollLeft <= 15) {
      setActiveSlideIndex(0);
      return;
    }

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

      {/* Dramatic background — matching Awards */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-black via-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[var(--gold)]/4 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-6xl relative">
        {/* Section header — cinematic dark matching Awards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
          className="text-center mb-16 relative"
        >
          {/* Ambient glow behind heading — red to match theme, exact same as Awards */}
          <div className="absolute inset-x-0 top-24 md:top-28 -translate-y-1/2 h-40 bg-[var(--accent)]/8 blur-[80px] pointer-events-none rounded-full" />

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

          {/* Eyebrow Label matching Awards */}
          <div className="flex items-center justify-center gap-5 mb-5">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-[var(--accent)]/60" />
            <span className="text-[var(--accent)] text-[10px] font-bold tracking-[0.45em] uppercase">
              Innovation
            </span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-[var(--accent)]/60" />
          </div>

          {/* Renamed Heading: AI Studio */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white">
            AI <span className="text-gradient">Studio</span>
          </h2>

          {/* Accent divider line */}
          <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-[var(--accent)] to-transparent mx-auto" />

          {/* Tagline directly underneath the AI Studio heading */}
          <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[var(--fg-muted)] font-light leading-relaxed">
            We produce AI-driven fiction shows, films, AVs, ad films, and branded content, combining creative direction with emerging AI technologies to bring stories to life on screen.
          </p>
        </motion.div>

        {/* Continuous AI Studio Image Strip (between Tagline & Toggle Bar) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full overflow-hidden mb-16 pt-2 pb-4"
        >
          {/* Subtle edge fade gradients */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

          {/* Marquee Track moving continuously in left direction */}
          <div
            className="ai-strip-track py-2"
            onTouchStart={(e) =>
              (e.currentTarget.style.animationPlayState = "paused")
            }
            onTouchEnd={(e) =>
              (e.currentTarget.style.animationPlayState = "running")
            }
          >
            {/* Duplicated list so the strip scrolls seamlessly forever */}
            {[...stripProjects, ...stripProjects].map((project, idx) => {
              const still = project.stills[0];
              return (
                <Link
                  key={`${project.id}-strip-${idx}`}
                  href={`/ai-studio/${project.id}`}
                  className="group relative flex-shrink-0 w-44 sm:w-52 md:w-56 aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden bg-[#0A0D14] border border-white/10 hover:border-[var(--accent)]/60 transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-[0_0_25px_rgba(192,57,43,0.35)] block cursor-pointer"
                  title={`View ${project.title} details`}
                >
                  {still && (
                    <Image
                      src={still.src}
                      alt={still.alt || project.title}
                      fill
                      sizes="(max-width: 640px) 176px, (max-width: 768px) 208px, 224px"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-108"
                    />
                  )}

                  {/* Gradient overlay for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                  {/* Category badge */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-[var(--accent)] bg-black/80 backdrop-blur-md px-2 py-0.5 rounded-full border border-[var(--accent)]/30">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Info at bottom */}
                  <div className="absolute bottom-0 inset-x-0 p-3.5 z-10">
                    <h4 className="text-white text-xs sm:text-sm font-medium line-clamp-1 group-hover:text-[var(--accent)] transition-colors">
                      {project.title}
                    </h4>
                    {project.client && (
                      <p className="text-[10px] text-[var(--fg-muted)] tracking-wider uppercase font-medium line-clamp-1 mt-0.5">
                        {project.client}
                      </p>
                    )}
                    <span className="inline-flex items-center gap-1 text-[10px] text-[var(--accent)] font-medium mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0 duration-200">
                      View Project
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </motion.div>

        {/* Portfolio Filter Tabs & Slider Section */}
        <div>
          {/* Filter Tabs Toggle Bar */}
          <div className="flex flex-wrap items-center gap-2 mb-8 border-b border-[var(--border)] pb-6">
            <div
              className="flex flex-wrap items-center gap-2"
              role="tablist"
              aria-label="Filter AI Studio projects by category"
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

          {/* Carousel / Slider Wrapper with Left & Right < > Glass Navigation Buttons like in Featured Section */}
          <div
            className="relative w-full group/slider"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Previous Arrow Button (<) positioned at left of slider */}
            <button
              type="button"
              onClick={handlePrev}
              className="absolute -left-2 sm:left-2 md:-left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-[var(--accent)]/30 hover:border-[var(--accent)]/40 transition-all duration-300 hover:scale-110 shadow-xl cursor-pointer"
              aria-label="Previous project"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next Arrow Button (>) positioned at right of slider */}
            <button
              type="button"
              onClick={handleNext}
              className="absolute -right-2 sm:right-2 md:-right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-[var(--accent)]/30 hover:border-[var(--accent)]/40 transition-all duration-300 hover:scale-110 shadow-xl cursor-pointer"
              aria-label="Next project"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Carousel / Slider Container — slides continuously in left direction */}
            <div
              ref={sliderRef}
              onScroll={onSliderScroll}
              onKeyDown={onKeyDown}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
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

                const isLandscape = Boolean(
                  currentStill &&
                    currentStill.src &&
                    currentStill.src.width &&
                    currentStill.src.height &&
                    currentStill.src.width / currentStill.src.height > 1.2
                );

                return (
                  <div
                    key={project.id}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${index + 1} of ${displayedProjects.length}: ${project.title}`}
                    className="flex-shrink-0 w-[86vw] sm:w-[70vw] md:w-[46%] lg:w-[31.5%] snap-start group"
                  >
                    <Link
                      href={`/ai-studio/${project.id}`}
                      className="bg-[var(--bg-card)] rounded-2xl overflow-hidden border border-[var(--border)] hover:border-[var(--accent)]/50 transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-2xl group/card cursor-pointer block"
                    >
                      {/* Main Project Still */}
                      <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden bg-[#0A0D14]">
                        {currentStill && (
                          isLandscape ? (
                            <div className="relative w-full h-full">
                              {/* Blurred background backdrop filling the card letterbox area */}
                              <Image
                                src={currentStill.src}
                                alt=""
                                fill
                                className="object-cover scale-125 blur-xl opacity-45 brightness-75 pointer-events-none"
                                aria-hidden
                              />
                              <div className="absolute inset-0 bg-black/30 pointer-events-none z-[1]" />

                              {/* Full landscape image fitted properly with object-contain */}
                              <div className="relative w-full h-full z-10 flex items-center justify-center p-2.5">
                                <Image
                                  src={currentStill.src}
                                  alt={currentStill.alt}
                                  fill
                                  sizes="(max-width: 640px) 86vw, (max-width: 1024px) 46vw, 32vw"
                                  className="object-contain object-center transition-transform duration-700 group-hover:scale-105 drop-shadow-2xl"
                                  priority={index < 2}
                                />
                              </div>
                            </div>
                          ) : (
                            <Image
                              src={currentStill.src}
                              alt={currentStill.alt}
                              fill
                              sizes="(max-width: 640px) 86vw, (max-width: 1024px) 46vw, 32vw"
                              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                              priority={index < 2}
                            />
                          )
                        )}

                        {/* Top badge */}
                        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-[var(--accent)] bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full border border-[var(--accent)]/30">
                            {project.category}
                          </span>
                        </div>

                        {/* Hover Overlay matching Featured Work style */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 z-10 flex items-end p-4">
                          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)] flex items-center gap-1.5 translate-y-2 group-hover/card:translate-y-0 transition-transform">
                            View Details
                            <svg
                              className="w-3.5 h-3.5"
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
                          </span>
                        </div>
                      </div>

                      {/* Stills Gallery Selector (if project has multiple stills) */}
                      {project.stills.length > 1 && (
                        <div className="px-4 pt-3 flex items-center gap-2 overflow-x-auto scrollbar-none z-20">
                          <span className="text-[10px] text-[var(--fg-muted)] tracking-wider uppercase font-medium mr-1 flex-shrink-0">
                            Stills:
                          </span>
                          {project.stills.map((still, sIdx) => (
                            <button
                              key={sIdx}
                              type="button"
                              onClick={(e) => {
                                e.preventDefault();
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
                          <h3 className="font-serif text-xl sm:text-2xl font-light text-white group-hover/card:text-[var(--accent)] transition-colors duration-300">
                            {project.title}
                          </h3>
                          {project.client && (
                            <p className="text-xs text-[var(--fg-muted)] tracking-wider uppercase font-medium mt-1.5">
                              Client: <span className="text-white/90">{project.client}</span>
                            </p>
                          )}
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
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
