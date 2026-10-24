"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

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
  // All active projects for the continuous moving image strip
  const stripProjects = useMemo(() => {
    return projects.filter((p) => p.enabled !== false);
  }, []);

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

        {/* Continuous AI Studio Image Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full overflow-hidden mb-12 pt-2 pb-4"
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

        {/* Contact Button linking to Contact Us section */}
        <div className="mt-8 text-center">
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

      <div className="absolute bottom-0 left-0 right-0 h-px divider-gradient opacity-60" />
    </section>
  );
}
