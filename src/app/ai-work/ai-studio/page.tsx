"use client";

import React from "react";

export default function AIStudioPage() {
  return (
    <div>
      <section>
        <h2 className="font-serif text-3xl font-light text-white mb-8 border-b border-[var(--border)] pb-4">
          AI Studio
        </h2>
        <div className="relative overflow-hidden bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-8 md:p-16 text-center group">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10 animate-reveal-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-3xl text-white font-serif font-light mb-4">Coming Soon</h3>
            <p className="text-[var(--fg-muted)] max-w-xl mx-auto leading-relaxed">
              Our dedicated AI Studio is currently under development. Stay tuned for innovative tools and services that blend artificial intelligence with cinematic storytelling.
            </p>
            <div className="mt-8">
              <button className="bg-[#FFD700] text-black px-8 py-3 text-sm font-semibold tracking-widest uppercase hover:bg-[#FFD700]/90 transition-colors">
                Notify Me
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
