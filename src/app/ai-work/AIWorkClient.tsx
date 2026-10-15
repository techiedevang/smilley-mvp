"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [activeSection, setActiveSection] = useState("project");

  const projectRef = useRef<HTMLDivElement>(null);
  const studioRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!projectRef.current || !studioRef.current) return;

      const headerOffset = 180;
      const studioRect = studioRef.current.getBoundingClientRect();

      if (studioRect.top <= headerOffset + 200) {
        setActiveSection("studio");
      } else {
        setActiveSection("project");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 140;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const aiProjects = [
    { title: "Project title", description: "Client name, year | AI film", category: "Films", image: "/images/placeholder-poster.svg" },
    { title: "Project title", description: "Client name, year | AI ad", category: "Ads", image: "/images/placeholder-poster.svg" },
    { title: "Project title", description: "Client name, year | Music video", category: "Music videos", image: "/images/placeholder-poster.svg" },
    { title: "Project title", description: "Client name, year | AI film", category: "Films", image: "/images/placeholder-poster.svg" },
    { title: "Project title", description: "Client name, year | Visuals", category: "Visuals", image: "/images/placeholder-poster.svg" },
    { title: "Project title", description: "Client name, year | AI ad", category: "Ads", image: "/images/placeholder-poster.svg" },
  ];

  return (
    <section
      id="ai-work"
      className="py-24 md:py-36 px-6 md:px-12 scroll-mt-24 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px divider-gradient opacity-60" />

      <div className="mx-auto max-w-6xl">
        {/* Top Hero: Left-aligned Text & Toggle + Right Video with matching height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-20 animate-reveal-up">
          {/* Left Column: Left-aligned Heading, Subtitle, and Toggle */}
          <div className="lg:col-span-7 flex flex-col justify-between text-left">
            <div>
              {/* Innovation Eyebrow with Bulb SVG Icon */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 mb-5">
                <LightbulbIcon className="w-4 h-4 text-[var(--accent)]" />
                <span className="text-[var(--accent)] text-[11px] font-bold tracking-[0.25em] uppercase">
                  Innovation
                </span>
              </div>

              {/* Main Heading — styled same as Featured Work & Awards */}
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.1] tracking-tight">
                Innovation <span className="text-gradient">AI</span>
              </h2>

              {/* Subtitle */}
              <p className="text-[var(--fg-muted)] text-base sm:text-lg leading-relaxed mt-4 max-w-xl">
                Stories made with AI, directed by us.
              </p>
            </div>

            {/* Sub-navigation Toggle right under text */}
            <div className="mt-8 pt-4">
              <div className="bg-[var(--bg)]/90 backdrop-blur-md p-1 rounded-full border border-[var(--border)] inline-flex shadow-lg">
                <button
                  onClick={() => scrollToSection("ai-project-section")}
                  className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                    activeSection === "project"
                      ? "bg-[var(--accent)] text-black font-semibold"
                      : "text-[var(--fg-muted)] hover:text-white"
                  }`}
                >
                  AI Project
                </button>
                <button
                  onClick={() => scrollToSection("ai-studio-section")}
                  className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                    activeSection === "studio"
                      ? "bg-[var(--accent)] text-black font-semibold"
                      : "text-[var(--fg-muted)] hover:text-white"
                  }`}
                >
                  AI Studio
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Video with matching height */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full h-full min-h-[260px] md:min-h-[300px] rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--bg-card)] group shadow-2xl flex flex-col justify-end">
              <Image
                src="/images/chidiya-1920x1080.webp"
                alt="AI Showcase Video"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/20" />

              {/* Centered Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[var(--accent)] flex items-center justify-center text-black shadow-[0_0_30px_rgba(192,57,43,0.6)] group-hover:scale-110 transition-transform cursor-pointer">
                  <Play size={24} fill="currentColor" className="ml-1" />
                </div>
              </div>

              {/* Bottom Video Badge & Info */}
              <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between text-xs text-white/90">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
                  <span className="font-semibold tracking-wider uppercase text-[10px] text-white">
                    AI Showreel
                  </span>
                </div>
                <span className="text-[11px] font-mono text-white/70 bg-black/60 px-2 py-0.5 rounded-md border border-white/10">
                  01:45
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Projects Subsection */}
        <div id="ai-project-section" ref={projectRef} className="mb-24 scroll-mt-36">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 border-b border-[var(--border)] pb-6">
            <div>
              <h3 className="font-serif text-3xl font-light text-white mb-2">
                AI Projects
              </h3>
              <p className="text-[var(--fg-muted)] text-sm">
                A selection of work made with AI tools, from concept to final cut.
              </p>
            </div>

            {/* Desktop View All link (hidden on mobile) */}
            <Link
              href="/ai-project"
              className="hidden md:flex text-xs font-semibold tracking-widest uppercase text-[var(--accent)] hover:text-white transition-colors duration-300 items-center gap-1 group mt-2 md:mt-0"
            >
              View all AI projects
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Grid: Desktop 3 items per line x 2 lines (6 total). Mobile 1 item per line x 3 items total */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {aiProjects.map((project, index) => (
                <motion.div
                  key={project.title + index}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`group cursor-pointer rounded-lg overflow-hidden bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--accent)]/40 transition-colors ${
                    index >= 3 ? "hidden md:block" : ""
                  }`}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300">
                      <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center text-black shadow-lg">
                        <Play size={20} fill="currentColor" className="ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-0 right-0 text-center text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {`Project ${index + 1}: thumbnail or video`}
                    </div>
                  </div>
                  <div className="p-4 bg-[var(--bg-card)]">
                    <h4 className="text-white text-md font-medium mb-1">{project.title}</h4>
                    <p className="text-[var(--fg-muted)] text-xs">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Mobile View All link (aligned right at the very bottom of AI projects) */}
          <div className="flex md:hidden justify-end mt-6">
            <Link
              href="/ai-project"
              className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] hover:text-white transition-colors duration-300 flex items-center gap-1 group"
            >
              View all AI projects
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Banner: Have an idea? Let’s make it. */}
          <Link
            href="#contact"
            className="block w-full bg-[var(--accent)] hover:bg-[var(--accent-light)] text-black text-center py-4 px-6 rounded-xl font-semibold text-base md:text-lg tracking-wide transition-all mt-8 shadow-[0_0_25px_rgba(192,57,43,0.35)] cursor-pointer"
          >
            Have an idea? Let’s make it.
          </Link>
        </div>

        {/* AI Studio Subsection */}
        <div
          id="ai-studio-section"
          ref={studioRef}
          className="scroll-mt-36 bg-[#0B0F19] rounded-xl border border-[var(--border)] p-6 md:p-10 mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <h3 className="font-serif text-3xl font-light text-white">
              AI Studio
            </h3>

            {/* Desktop Talk to the studio link (hidden on mobile) */}
            <Link
              href="#contact"
              className="hidden md:flex text-xs font-semibold tracking-widest uppercase text-[var(--accent)] hover:text-white transition-colors duration-300 items-center gap-1 group mt-2 md:mt-0"
            >
              Talk to the studio
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <div className="border border-[#1F2937] bg-[#111827]/50 rounded-lg p-6 hover:bg-[#111827] transition-colors">
              <h4 className="text-white text-lg font-medium mb-2">AI films and ads</h4>
              <p className="text-[#9CA3AF] text-sm">
                Concept, script, AI production and edit for brand films and commercials.
              </p>
            </div>
            <div className="border border-[#1F2937] bg-[#111827]/50 rounded-lg p-6 hover:bg-[#111827] transition-colors">
              <h4 className="text-white text-lg font-medium mb-2">AI visuals and campaigns</h4>
              <p className="text-[#9CA3AF] text-sm">
                Posters, product shots and social content in one consistent look.
              </p>
            </div>
            <div className="border border-[#1F2937] bg-[#111827]/50 rounded-lg p-6 hover:bg-[#111827] transition-colors">
              <h4 className="text-white text-lg font-medium mb-2">AI + live action</h4>
              <p className="text-[#9CA3AF] text-sm">
                Shoot on set, extend with AI. Backgrounds, VFX and extra shots.
              </p>
            </div>
            <div className="border border-[#1F2937] bg-[#111827]/50 rounded-lg p-6 hover:bg-[#111827] transition-colors">
              <h4 className="text-white text-lg font-medium mb-2">Training and consulting</h4>
              <p className="text-[#9CA3AF] text-sm">
                Help your team start using AI tools in creative work.
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-white text-lg font-medium mb-4">How it works</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="border border-[#1F2937] bg-[#111827]/30 rounded-lg p-5">
                <h5 className="text-[var(--accent)] font-medium mb-1">Brief</h5>
                <p className="text-[#9CA3AF] text-xs">You share the idea and goal.</p>
              </div>
              <div className="border border-[#1F2937] bg-[#111827]/30 rounded-lg p-5">
                <h5 className="text-[var(--accent)] font-medium mb-1">Concept</h5>
                <p className="text-[#9CA3AF] text-xs">Script, style and storyboard.</p>
              </div>
              <div className="border border-[#1F2937] bg-[#111827]/30 rounded-lg p-5">
                <h5 className="text-[var(--accent)] font-medium mb-1">Create</h5>
                <p className="text-[#9CA3AF] text-xs">AI production with our directors.</p>
              </div>
              <div className="border border-[#1F2937] bg-[#111827]/30 rounded-lg p-5">
                <h5 className="text-[var(--accent)] font-medium mb-1">Deliver</h5>
                <p className="text-[#9CA3AF] text-xs">Final edit, sound and formats.</p>
              </div>
            </div>
          </div>

          {/* Mobile Talk to the studio link (aligned right at the very bottom of AI Studio) */}
          <div className="flex md:hidden justify-end mt-8">
            <Link
              href="#contact"
              className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] hover:text-white transition-colors duration-300 flex items-center gap-1 group"
            >
              Talk to the studio
              <svg
                className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px divider-gradient opacity-60" />
    </section>
  );
}
