import React from "react";
import type { Metadata } from "next";
import AIToggle from "./AIToggle";

export const metadata: Metadata = {
  title: "AI Work | Smiley Films",
  description:
    "AI-made films, ads and visuals from Smiley Films. Explore our AI projects and the AI Studio.",
};

export default function AIWorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-32 pb-24 px-6 md:px-12 mx-auto max-w-7xl min-h-screen">
      <div className="text-center mb-16 animate-reveal-up">
        <h1 className="font-serif text-4xl md:text-5xl font-light text-white mb-6">
          AI <span className="text-gradient">Work</span>
        </h1>
        <p className="text-[var(--fg-muted)] leading-relaxed max-w-2xl mx-auto">
          Exploring the frontiers of storytelling with artificial intelligence.
        </p>
      </div>

      <AIToggle />

      {children}
    </div>
  );
}
