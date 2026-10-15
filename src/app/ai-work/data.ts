export interface AIProject {
  id: string;
  title: string;
  description: string;
  category: "Films" | "Ads" | "Music videos" | "Visuals";
  image: string;
  objectPosition: string;
}

export const aiProjects: AIProject[] = [
  {
    id: "the-society",
    title: "The Society",
    description: "Fashion & Lifestyle, 2026 | AI Commercial",
    category: "Ads",
    image: "/images/ai-projects/still-1.jpeg",
    objectPosition: "object-[center_28%]",
  },
  {
    id: "the-revelation",
    title: "The Revelation",
    description: "Suspense Drama, 2026 | AI Film",
    category: "Films",
    image: "/images/ai-projects/still-2.jpeg",
    objectPosition: "object-[center_28%]",
  },
  {
    id: "dynasty",
    title: "Dynasty",
    description: "Period Romance, 2026 | AI Film",
    category: "Films",
    image: "/images/ai-projects/still-4.jpeg",
    objectPosition: "object-[center_42%]",
  },
  {
    id: "sanctuary",
    title: "Sanctuary",
    description: "Wellness & Drama, 2026 | Visuals",
    category: "Visuals",
    image: "/images/ai-projects/still-5.jpeg",
    objectPosition: "object-[center_35%]",
  },
  {
    id: "shadow-manor",
    title: "Shadow Manor",
    description: "Gothic Thriller, 2026 | AI Film",
    category: "Films",
    image: "/images/ai-projects/still-6.jpeg",
    objectPosition: "object-[center_70%]",
  },
  {
    id: "mythos-medusa",
    title: "Mythos: Medusa",
    description: "Fantasy & Mythology, 2026 | AI Film",
    category: "Films",
    image: "/images/ai-projects/still-10.jpeg",
    objectPosition: "object-[center_30%]",
  },
  {
    id: "kingdom-of-old",
    title: "Kingdom of Old",
    description: "Medieval Epic, 2026 | AI Film",
    category: "Films",
    image: "/images/ai-projects/still-7.jpeg",
    objectPosition: "object-[center_50%]",
  },
  {
    id: "summer-solstice",
    title: "Summer Solstice",
    description: "Youth & Culture, 2026 | AI Commercial",
    category: "Ads",
    image: "/images/ai-projects/still-8.jpeg",
    objectPosition: "object-[center_40%]",
  },
  {
    id: "hyperdrive",
    title: "Hyperdrive",
    description: "Automotive Action, 2026 | AI Music Video",
    category: "Music videos",
    image: "/images/ai-projects/still-9.jpeg",
    objectPosition: "object-[center_42%]",
  },
];
