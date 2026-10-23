import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ProjectDetail from "./ProjectDetail";
import { projects } from "@/data/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return { title: "Project Not Found | Smiley Films" };
  return {
    title: `${project.title} | AI Studio | Smiley Films`,
    description:
      project.synopsis || `Explore ${project.title} by Smiley Films AI Studio.`,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
