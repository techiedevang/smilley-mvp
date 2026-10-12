"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AIStudioClient() {
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
        <h1 className="font-serif text-4xl md:text-5xl font-light text-white mb-6">
          AI <span className="text-gradient">Studio</span>
        </h1>
        <p className="text-[var(--fg-muted)] leading-relaxed max-w-2xl">
          Innovative tools and services that blend artificial intelligence with cinematic storytelling.
        </p>
      </div>

      <section>
        <div className="relative overflow-hidden bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-8 md:p-16 text-center group min-h-[40vh] flex flex-col justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 animate-reveal-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-3xl text-white font-serif font-light mb-4">Coming Soon</h3>
            <p className="text-[var(--fg-muted)] max-w-xl mx-auto leading-relaxed">
              Our dedicated AI Studio is currently under development. Stay tuned for innovative tools and services that blend artificial intelligence with cinematic storytelling.
            </p>
            <div className="mt-8">
              <button className="btn-primary px-8 py-3 text-sm font-semibold tracking-widest uppercase">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
