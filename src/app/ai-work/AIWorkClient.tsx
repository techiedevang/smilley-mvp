"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIWorkClient() {
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

  const aiProjects = [
    { title: "Project title", description: "Client name, year | AI film", category: "Films", image: "/images/placeholder-poster.svg" },
    { title: "Project title", description: "Client name, year | AI ad", category: "Ads", image: "/images/placeholder-poster.svg" },
    { title: "Project title", description: "Client name, year | Music video", category: "Music videos", image: "/images/placeholder-poster.svg" },
    { title: "Project title", description: "Client name, year | AI film", category: "Films", image: "/images/placeholder-poster.svg" },
    { title: "Project title", description: "Client name, year | Visuals", category: "Visuals", image: "/images/placeholder-poster.svg" },
    { title: "Project title", description: "Client name, year | AI ad", category: "Ads", image: "/images/placeholder-poster.svg" },
  ];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 mx-auto max-w-7xl min-h-screen">
      {/* Desktop/Tablet Header Section */}
      <div className="hidden md:block text-center mb-10 animate-reveal-up">
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

      {/* Mobile Hero Layout */}
      <div className="block md:hidden mb-12 animate-reveal-up">
        <h1 className="font-serif text-2xl font-semibold text-white mb-8">
          Stories made with AI, directed by us.
        </h1>

        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-[var(--bg-card)] border border-dashed border-white/20 mb-4 group cursor-pointer">
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 mb-2 rounded-full bg-[var(--accent)] flex items-center justify-center text-black shadow-[0_0_20px_rgba(255,215,0,0.5)]">
                <Play size={20} fill="currentColor" className="ml-1" />
              </div>
              <span className="text-[10px] text-[var(--fg-muted)] font-medium">AI showreel</span>
            </div>
          </div>
        </div>

        <Link
          href="/ai-project"
          className="btn-primary px-6 py-2 rounded-full text-xs font-semibold tracking-wide inline-block"
        >
          See AI projects
        </Link>
      </div>

      <section id="project" ref={projectRef} className="mb-24 scroll-mt-32">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 border-b border-[var(--border)] pb-6">
          <div>
            <h2 className="font-serif text-3xl font-light text-white mb-2">
              AI Projects
            </h2>
            <p className="text-[var(--fg-muted)] text-sm">
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

        <div className="flex flex-wrap gap-2 mb-8">
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

        <motion.div layout className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          <AnimatePresence>
            {aiProjects.map((project, index) => (
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
                </div>
                <div className="p-3 md:p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-1 gap-1 md:gap-0">
                    <h3 className="text-white text-sm md:text-lg font-medium truncate">{project.title}</h3>
                    <span className="text-[8px] md:text-[10px] uppercase tracking-wider font-semibold text-[var(--accent)] px-1.5 py-0.5 rounded-full bg-[var(--accent)]/10 w-fit">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-[var(--fg-muted)] text-xs md:text-sm line-clamp-2 md:line-clamp-none">{project.description}</p>
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
            className="text-sm font-semibold tracking-widest uppercase text-[var(--accent)] hover:text-white transition-colors duration-300 flex items-center gap-2 group hidden md:flex"
          >
            See All AI Studio →
          </Link>
          <div className="md:hidden text-xs text-[var(--fg-muted)] mt-1">
            AI films and ads | AI visuals | more
          </div>
        </div>

        {/* Desktop/Tablet AI Studio Block */}
        <div className="hidden md:block relative overflow-hidden bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-8 md:p-16 text-center group">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

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

        {/* Mobile AI Studio Block Layout (from Reference) */}
        <div className="md:hidden flex flex-col gap-3">
          <div className="border border-[var(--border)] bg-white/5 rounded-md p-6 text-center">
            <h3 className="text-xl text-white font-serif font-light mb-3">Coming Soon</h3>
            <p className="text-[var(--fg-muted)] text-sm leading-relaxed mb-4">
              Our dedicated AI Studio is currently under development. Stay tuned for innovative tools and services that blend artificial intelligence with cinematic storytelling.
            </p>
            <button className="bg-[var(--accent)] text-black px-6 py-2 text-xs font-semibold tracking-widest uppercase rounded">
              Notify Me
            </button>
          </div>

          <Link href="/#contact" className="mt-2 text-center w-full bg-[var(--accent)] text-black py-4 rounded-md font-semibold text-sm tracking-wide block">
            Start a project
          </Link>
        </div>
      </section>
    </div>
  );
}
