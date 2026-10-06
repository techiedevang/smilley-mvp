import type { Metadata } from "next";
import AIWorkClient from "./AIWorkClient";

export const metadata: Metadata = {
  title: "AI Work | Smiley Films",
  description:
    "AI-made films, ads and visuals from Smiley Films. Explore our AI projects and the AI Studio.",
};

export default function AIWorkPage() {
  return <AIWorkClient />;
}
