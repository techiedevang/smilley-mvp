import type { StaticImageData } from "next/image";

// ---------------------------------------------------------------------------
// Static imports from root-level "Stills For AI Projects"
// Note: Folder and files remain untouched in project root as specified.
// ---------------------------------------------------------------------------

// Vertical Dramas: Kaise Tum Mujhe Mil Gaye
import kaese1 from "../../Stills For AI Projects/Kaese mujhe tum mil gaye/file_00000000920c81fdbd6933f4f69a9adb.png";
import kaese2 from "../../Stills For AI Projects/Kaese mujhe tum mil gaye/file_00000000aab48211887aff713d6e04b5.png";

// Vertical Dramas: After The Identity Was Exposed
import identity1 from "../../Stills For AI Projects/After the identity was exposed/file_000000005cfc81f48473d06e6e7059f9.png";
import identity2 from "../../Stills For AI Projects/After the identity was exposed/WhatsApp Image 2026-10-01 at 3.01.26 PM (3).jpeg";

// Vertical Dramas: Queen Of The Cage
import queen1 from "../../Stills For AI Projects/Queen of the Cage/Frame (1).png";
import queen2 from "../../Stills For AI Projects/Queen of the Cage/file_00000000d2748208841b3b0be2037f09.png";

// Vertical Dramas: Beyond The Prism
import prism1 from "../../Stills For AI Projects/Beyond the Prism/file_0000000077cc81fd981ba9bd087ddff1.png";
import prism2 from "../../Stills For AI Projects/Beyond the Prism/file_000000007f4081f4993321911469727d.png";

// Narrative Shows: Rage Of The Heiress
import rage1 from "../../Stills For AI Projects/Rage of Heiress/file_000000000d4c820ca17fd71a169fdd4f.png";
import rage2 from "../../Stills For AI Projects/Rage of Heiress/file_00000000a420820e942a3917a089f571.png";

// Narrative Shows: Signed & Bound
import signed1 from "../../Stills For AI Projects/Signed and Bound/File 002.png";
import signed2 from "../../Stills For AI Projects/Signed and Bound/file_00000000516482109ca6bae9bdda4ee2.png";

// Feature Films: Purpose of Wow
import purposeOfWowImg from "../../Stills For AI Projects/Purpose of Wow/purpose-of-wow-portrait.jpg";
import purposeOfWowLandscape from "../../Stills For AI Projects/Purpose of Wow/purpose of wow.jpeg";

// Ad Films: AI commercial still
import adShowImg from "../../Stills For AI Projects/Ad Shows/ad-show-still.jpg";

// ---------------------------------------------------------------------------
// Types & Categories
// ---------------------------------------------------------------------------

export type ProjectCategory =
  | "Vertical Dramas"
  | "Ad Films"
  | "Narrative Shows"
  | "Feature Films";

export type FilterCategory = "All" | ProjectCategory;

export interface CategoryFilterConfig {
  key: FilterCategory;
  label: string;
  enabled: boolean;
  disabled?: boolean;
}

export const CATEGORY_FILTERS: CategoryFilterConfig[] = [
  { key: "All", label: "All", enabled: true },
  { key: "Vertical Dramas", label: "Vertical Dramas", enabled: true },
  { key: "Ad Films", label: "Ad Films", enabled: true, disabled: true },
  { key: "Narrative Shows", label: "Narrative Shows", enabled: true },
  { key: "Feature Films", label: "Feature Films", enabled: true },
];

export interface ProjectStill {
  src: StaticImageData;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  client?: string;
  category: ProjectCategory;
  stills: ProjectStill[];
  enabled?: boolean;
  synopsis?: string;
  format?: string;
  year?: string;
  genre?: string;
  direction?: string;
}

// ---------------------------------------------------------------------------
// Project Data
// ---------------------------------------------------------------------------

export const projects: Project[] = [
  // --- Vertical Dramas (Client: Dashverse India Private Limited) ---
  {
    id: "kaise-tum-mujhe-mil-gaye",
    title: "Kaise Tum Mujhe Mil Gaye",
    client: "Dashverse India Private Limited",
    category: "Vertical Dramas",
    enabled: true,
    format: "Vertical Drama Series (9:16)",
    year: "2024",
    genre: "Romance / Drama",
    direction: "Smiley Films AI Studio",
    synopsis:
      "A high-emotion romantic drama crafted specifically for mobile-first audiences, exploring destiny, serendipity, and the complex journey of two souls destined to cross paths against all societal odds.",
    stills: [
      { src: kaese1, alt: "Kaise Tum Mujhe Mil Gaye still 1" },
      { src: kaese2, alt: "Kaise Tum Mujhe Mil Gaye still 2" },
    ],
  },
  {
    id: "after-the-identity-was-exposed",
    title: "After The Identity Was Exposed",
    client: "Dashverse India Private Limited",
    category: "Vertical Dramas",
    enabled: true,
    format: "Vertical Drama Series (9:16)",
    year: "2024",
    genre: "Suspense / Thriller",
    direction: "Smiley Films AI Studio",
    synopsis:
      "A gripping narrative of deception and corporate warfare where long-buried secrets, false personas, and family legacies collide the moment a clandestine identity is exposed to the public.",
    stills: [
      { src: identity1, alt: "After The Identity Was Exposed still 1" },
      { src: identity2, alt: "After The Identity Was Exposed still 2" },
    ],
  },
  {
    id: "queen-of-the-cage",
    title: "Queen Of The Cage",
    client: "Dashverse India Private Limited",
    category: "Vertical Dramas",
    enabled: true,
    format: "Action / Combat Drama (9:16)",
    year: "2024",
    genre: "Action / Underdog Drama",
    direction: "Smiley Films AI Studio",
    synopsis:
      "An adrenaline-fueled story of resilience inside the unforgiving underground fighting circuit, following a fiercely determined warrior fighting her way up to claim the championship title.",
    stills: [
      { src: queen1, alt: "Queen Of The Cage still 1" },
      { src: queen2, alt: "Queen Of The Cage still 2" },
    ],
  },
  {
    id: "beyond-the-prism",
    title: "Beyond The Prism",
    client: "Dashverse India Private Limited",
    category: "Vertical Dramas",
    enabled: true,
    format: "Sci-Fi / Thriller (9:16)",
    year: "2024",
    genre: "Sci-Fi / Mystery",
    direction: "Smiley Films AI Studio",
    synopsis:
      "A visually hypnotic vertical sci-fi odyssey exploring multiverse reflections, quantum phenomena, and the harrowing choices required to restore equilibrium across fractured timelines.",
    stills: [
      { src: prism1, alt: "Beyond The Prism still 1" },
      { src: prism2, alt: "Beyond The Prism still 2" },
    ],
  },

  // --- Narrative Shows (Client: Dashverse India Private Limited) ---
  {
    id: "rage-of-the-heiress",
    title: "Rage Of The Heiress",
    client: "Dashverse India Private Limited",
    category: "Narrative Shows",
    enabled: true,
    format: "Narrative Show",
    year: "2024",
    genre: "Drama / Revenge",
    direction: "Smiley Films AI Studio",
    synopsis:
      "An opulent corporate vendetta saga where an exiled heiress returns in disguise to dismantle the corrupt syndicate that took her inheritance and tore her family apart.",
    stills: [
      { src: rage1, alt: "Rage Of The Heiress still 1" },
      { src: rage2, alt: "Rage Of The Heiress still 2" },
    ],
  },
  {
    id: "signed-and-bound",
    title: "Signed & Bound",
    client: "Dashverse India Private Limited",
    category: "Narrative Shows",
    enabled: true,
    format: "Legal Drama / Noir",
    year: "2024",
    genre: "Legal Thriller",
    direction: "Smiley Films AI Studio",
    synopsis:
      "A high-stakes legal thriller centered on an ironclad contract signed in shadows, exploring the moral compromises and dark secrets tethering two powerful dynasties together.",
    stills: [
      { src: signed1, alt: "Signed & Bound still 1" },
      { src: signed2, alt: "Signed & Bound still 2" },
    ],
  },

  // --- Feature Films ---
  {
    id: "purpose-of-wow",
    title: "Purpose of Wow",
    client: "In-House Production",
    category: "Feature Films",
    enabled: true,
    format: "Cinematic Feature Film",
    year: "2024",
    genre: "Cinematic / Drama",
    direction: "Smiley Films",
    synopsis:
      "A breathtaking cinematic journey tracing the pursuit of wonder, human passion, and extraordinary life moments that reveal true purpose on the grand canvas.",
    stills: [
      { src: purposeOfWowImg, alt: "Purpose of Wow portrait still" },
      { src: purposeOfWowLandscape, alt: "Purpose of Wow title still" },
    ],
  },

  // --- Ad Films (AI commercial still, disabled tab) ---
  {
    id: "ad-film",
    title: "Ad Film",
    category: "Ad Films",
    enabled: false,
    format: "Commercial Ad Campaign",
    year: "2024",
    genre: "Luxury Commercial",
    direction: "Smiley Films AI Studio",
    synopsis:
      "A high-concept luxury commercial advertisement blending commercial cinematography with generative AI artistry for premium brand elevation.",
    stills: [
      { src: adShowImg, alt: "Ad Film commercial still" },
    ],
  },
];
