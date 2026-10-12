"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AIToggle() {
  const pathname = usePathname();

  return (
    <div className="flex justify-center mb-16">
      <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1 relative">
        <Link
          href="/ai-work/ai-projects"
          className={`relative px-8 py-2.5 text-sm font-medium transition-colors duration-300 rounded-full z-10 ${
            pathname === "/ai-work/ai-projects"
              ? "text-black"
              : "text-white hover:text-white/80"
          }`}
        >
          {pathname === "/ai-work/ai-projects" && (
            <div
              className="absolute inset-0 bg-[#FFD700] rounded-full -z-10"
              style={{
                boxShadow: "0 0 20px rgba(255, 215, 0, 0.3)",
              }}
            />
          )}
          AI Projects
        </Link>
        <Link
          href="/ai-work/ai-studio"
          className={`relative px-8 py-2.5 text-sm font-medium transition-colors duration-300 rounded-full z-10 ${
            pathname === "/ai-work/ai-studio"
              ? "text-black"
              : "text-white hover:text-white/80"
          }`}
        >
          {pathname === "/ai-work/ai-studio" && (
            <div
              className="absolute inset-0 bg-[#FFD700] rounded-full -z-10"
              style={{
                boxShadow: "0 0 20px rgba(255, 215, 0, 0.3)",
              }}
            />
          )}
          AI Studio
        </Link>
      </div>
    </div>
  );
}
