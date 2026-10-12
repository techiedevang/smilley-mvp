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
      </div>

      <section className="bg-[#0B0F19] rounded-xl border border-[var(--border)] p-6 md:p-10 mb-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10">
          <h2 className="font-serif text-3xl font-light text-white">
            AI Studio
          </h2>
          <Link
            href="/contact"
            className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)] hover:text-white transition-colors duration-300 mt-2 md:mt-0"
          >
            Talk to the studio
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
