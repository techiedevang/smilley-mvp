"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIWorkClient() {
  const [filter, setFilter] = useState("All");
  const [activeSection, setActiveSection] = useState("project");

  const projectRef = useRef<HTMLElement>(null);
  const studioRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!projectRef.current || !studioRef.current) return;

      // Header offset is around 140px, adjust detection threshold
      const headerOffset = 180;

      const projectRect = projectRef.current.getBoundingClientRect();
      const studioRect = studioRef.current.getBoundingClientRect();

      // If the top of the studio section is near or past the header offset, it's active
      if (studioRect.top <= headerOffset + 200) {
        setActiveSection("studio");
      } else {
        // Otherwise, if we're scrolled down at all, and studio isn't active, project is active
        setActiveSection("project");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to set initial state
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
        behavior: "smooth"
      });
    }
  };

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
      <div className="text-center mb-10 animate-reveal-up">
        <h1 className="font-serif text-4xl md:text-5xl font-light text-white mb-6">
          AI <span className="text-gradient">Work</span>
        </h1>
        <p className="text-[var(--fg-muted)] leading-relaxed max-w-2xl mx-auto">
          Exploring the frontiers of storytelling with artificial intelligence.
        </p>
      </div>

      <div className="flex justify-center mb-16 sticky top-[90px] md:top-[100px] z-50 animate-reveal-up" style={{ animationDelay: "0.1s" }}>
        <div className="bg-[var(--bg)]/80 backdrop-blur-md p-1 rounded-full border border-[var(--border)] inline-flex">
          <button
            onClick={() => scrollToSection("project")}
            className={`px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
              activeSection === "project"
                ? "bg-[var(--accent)] text-black"
                : "text-[var(--fg-muted)] hover:text-white"
            }`}
          >
            AI Project
          </button>
          <button
            onClick={() => scrollToSection("studio")}
            className={`px-6 py-2 rounded-full text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
              activeSection === "studio"
                ? "bg-[var(--accent)] text-black"
                : "text-[var(--fg-muted)] hover:text-white"
            }`}
          >
            AI Studio
          </button>
        </div>
      </div>

      <section id="project" ref={projectRef} className="mb-24 scroll-mt-32">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-2">
          <div>
            <h2 className="font-serif text-3xl font-light text-white mb-2">
              AI Projects
            </h2>
            <p className="text-[var(--fg-muted)] text-sm mb-6">
              A selection of work made with AI tools, from concept to final cut.
            </p>
          </div>
          <Link
            href="/ai-project"
            className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] hover:text-white transition-colors duration-300 mt-2 md:mt-0 flex items-center"
          >
            View all AI projects
          </Link>
        </div>

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

      <section id="studio" ref={studioRef} className="scroll-mt-32 bg-[#0B0F19] rounded-xl border border-[var(--border)] p-6 md:p-10 mb-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <h2 className="font-serif text-3xl font-light text-white">
            AI Studio
          </h2>
          <Link
            href="/ai-studio"
            className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] hover:text-white transition-colors duration-300 mt-2 md:mt-0"
          >
            See All AI Studio →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <div className="border border-[#1F2937] bg-[#111827]/50 rounded-lg p-6 hover:bg-[#111827] transition-colors">
            <h3 className="text-white text-lg font-medium mb-2">AI films and ads</h3>
            <p className="text-[#9CA3AF] text-sm">Concept, script, AI production and edit for brand films and commercials.</p>
          </div>
          <div className="border border-[#1F2937] bg-[#111827]/50 rounded-lg p-6 hover:bg-[#111827] transition-colors">
            <h3 className="text-white text-lg font-medium mb-2">AI visuals and campaigns</h3>
            <p className="text-[#9CA3AF] text-sm">Posters, product shots and social content in one consistent look.</p>
          </div>
          <div className="border border-[#1F2937] bg-[#111827]/50 rounded-lg p-6 hover:bg-[#111827] transition-colors">
            <h3 className="text-white text-lg font-medium mb-2">AI + live action</h3>
            <p className="text-[#9CA3AF] text-sm">Shoot on set, extend with AI. Backgrounds, VFX and extra shots.</p>
          </div>
          <div className="border border-[#1F2937] bg-[#111827]/50 rounded-lg p-6 hover:bg-[#111827] transition-colors">
            <h3 className="text-white text-lg font-medium mb-2">Training and consulting</h3>
            <p className="text-[#9CA3AF] text-sm">Help your team start using AI tools in creative work.</p>
          </div>
        </div>

        <div>
          <h3 className="text-white text-lg font-medium mb-4">How it works</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="border border-[#1F2937] bg-[#111827]/30 rounded-lg p-5">
              <h4 className="text-[var(--accent)] font-medium mb-1">Brief</h4>
              <p className="text-[#9CA3AF] text-xs">You share the idea and goal.</p>
            </div>
            <div className="border border-[#1F2937] bg-[#111827]/30 rounded-lg p-5">
              <h4 className="text-[var(--accent)] font-medium mb-1">Concept</h4>
              <p className="text-[#9CA3AF] text-xs">Script, style and storyboard.</p>
            </div>
            <div className="border border-[#1F2937] bg-[#111827]/30 rounded-lg p-5">
              <h4 className="text-[var(--accent)] font-medium mb-1">Create</h4>
              <p className="text-[#9CA3AF] text-xs">AI production with our directors.</p>
            </div>
            <div className="border border-[#1F2937] bg-[#111827]/30 rounded-lg p-5">
              <h4 className="text-[var(--accent)] font-medium mb-1">Deliver</h4>
              <p className="text-[#9CA3AF] text-xs">Final edit, sound and formats.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
