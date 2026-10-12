import type { Metadata } from "next";
import AIStudioClient from "./AIStudioClient";

export const metadata: Metadata = {
  title: "AI Studio | Smiley Films",
  description: "Explore our AI Studio.",
};

export default function AIStudioPage() {
  return <AIStudioClient />;
}
