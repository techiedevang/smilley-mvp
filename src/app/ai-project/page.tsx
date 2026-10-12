import type { Metadata } from "next";
import AIProjectClient from "./AIProjectClient";

export const metadata: Metadata = {
  title: "AI Projects | Smiley Films",
  description: "Explore our AI generated projects from Smiley Films.",
};

export default function AIProjectPage() {
  return <AIProjectClient />;
}
