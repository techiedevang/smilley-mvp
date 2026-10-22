import type { StaticImageData } from "next/image";

// ---------------------------------------------------------------------------
// Static imports from root-level "Stills For AI Projects"
// Note: Folder and files remain untouched in project root as specified.
// ---------------------------------------------------------------------------

// Vertical Dramas: Kaese Mujhe Tum Mil Gaye
import kaese1 from "../../Stills For AI Projects/Kaese mujhe tum mil gaye/file_00000000920c81fdbd6933f4f69a9adb.png";
import kaese2 from "../../Stills For AI Projects/Kaese mujhe tum mil gaye/file_00000000aab48211887aff713d6e04b5.png";
import kaese3 from "../../Stills For AI Projects/Kaese mujhe tum mil gaye/WhatsApp Image 2026-10-01 at 3.01.26 PM (5).jpeg";
import kaese4 from "../../Stills For AI Projects/Kaese mujhe tum mil gaye/WhatsApp Image 2026-10-01 at 3.01.26 PM (7).jpeg";

// Vertical Dramas: After The Identity Was Exposed
import identity1 from "../../Stills For AI Projects/After the identity was exposed/file_000000005cfc81f48473d06e6e7059f9.png";
import identity2 from "../../Stills For AI Projects/After the identity was exposed/file_00000000be54820c9d4d718ffecbfb05.png";
import identity3 from "../../Stills For AI Projects/After the identity was exposed/WhatsApp Image 2026-10-01 at 3.01.26 PM (3).jpeg";
import identity4 from "../../Stills For AI Projects/After the identity was exposed/WhatsApp Image 2026-10-01 at 3.01.26 PM.jpeg";

// Vertical Dramas: Queen Of Cage
import queen1 from "../../Stills For AI Projects/Queen of the Cage/file_0000000043608211b3c7b793345307c2.png";
import queen2 from "../../Stills For AI Projects/Queen of the Cage/file_00000000d2748208841b3b0be2037f09.png";
import queen3 from "../../Stills For AI Projects/Queen of the Cage/Frame (1).png";
import queen4 from "../../Stills For AI Projects/Queen of the Cage/Frame (2).png";

// Vertical Dramas: Beyond The Prism
import prism1 from "../../Stills For AI Projects/Beyond the Prism/file_0000000077cc81fd981ba9bd087ddff1.png";
import prism2 from "../../Stills For AI Projects/Beyond the Prism/file_000000007f4081f4993321911469727d.png";
import prism3 from "../../Stills For AI Projects/Beyond the Prism/Frame (1).png";
import prism4 from "../../Stills For AI Projects/Beyond the Prism/Frame (2).png";

// Narrative Shows: Rage Of The Heiress
import rage1 from "../../Stills For AI Projects/Rage of Heiress/file_000000000d4c820ca17fd71a169fdd4f.png";
import rage2 from "../../Stills For AI Projects/Rage of Heiress/file_00000000a420820e942a3917a089f571.png";
import rage3 from "../../Stills For AI Projects/Rage of Heiress/Screenshot 2026-10-17 at 12.30.15 PM.png";
import rage4 from "../../Stills For AI Projects/Rage of Heiress/Screenshot 2026-10-17 at 12.34.30 PM.png";

// Narrative Shows: Signed & Bound
import signed1 from "../../Stills For AI Projects/Signed and Bound/File 002.png";
import signed2 from "../../Stills For AI Projects/Signed and Bound/file_00000000516482109ca6bae9bdda4ee2.png";
import signed3 from "../../Stills For AI Projects/Signed and Bound/Screenshot 2026-10-17 at 12.42.13 PM.png";

// Feature Films: Purpose of Wow
import purposeOfWowImg from "../../Stills For AI Projects/purpose of wow.jpeg";

// Ad Shows: AI commercial still
import adShowImg from "../../Stills For AI Projects/Ad Shows/ad-show-still.jpg";

// ---------------------------------------------------------------------------
// Types & Categories
// ---------------------------------------------------------------------------

export type ProjectCategory =
  | "Vertical Dramas"
  | "Ad Shows"
  | "Narrative Shows"
  | "Feature Films";

export type FilterCategory = "All" | ProjectCategory;

export interface CategoryFilterConfig {
  key: FilterCategory;
  label: string;
  enabled: boolean;
}

export const CATEGORY_FILTERS: CategoryFilterConfig[] = [
  { key: "All", label: "All", enabled: true },
  { key: "Vertical Dramas", label: "Vertical Dramas", enabled: true },
  { key: "Ad Shows", label: "Ad Shows", enabled: true },
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
}

// ---------------------------------------------------------------------------
// Project Data
// ---------------------------------------------------------------------------

export const projects: Project[] = [
  // --- Vertical Dramas (Client: Dashverse India Private Limited) ---
  {
    id: "kaese-mujhe-tum-mil-gaye",
    title: "Kaese Mujhe Tum Mil Gaye",
    client: "Dashverse India Private Limited",
    category: "Vertical Dramas",
    enabled: true,
    stills: [
      { src: kaese1, alt: "Kaese Mujhe Tum Mil Gaye still 1" },
      { src: kaese2, alt: "Kaese Mujhe Tum Mil Gaye still 2" },
      { src: kaese3, alt: "Kaese Mujhe Tum Mil Gaye still 3" },
      { src: kaese4, alt: "Kaese Mujhe Tum Mil Gaye still 4" },
    ],
  },
  {
    id: "after-the-identity-was-exposed",
    title: "After The Identity Was Exposed",
    client: "Dashverse India Private Limited",
    category: "Vertical Dramas",
    enabled: true,
    stills: [
      { src: identity1, alt: "After The Identity Was Exposed still 1" },
      { src: identity2, alt: "After The Identity Was Exposed still 2" },
      { src: identity3, alt: "After The Identity Was Exposed still 3" },
      { src: identity4, alt: "After The Identity Was Exposed still 4" },
    ],
  },
  {
    id: "queen-of-cage",
    title: "Queen Of Cage",
    client: "Dashverse India Private Limited",
    category: "Vertical Dramas",
    enabled: true,
    stills: [
      { src: queen1, alt: "Queen Of Cage still 1" },
      { src: queen2, alt: "Queen Of Cage still 2" },
      { src: queen3, alt: "Queen Of Cage still 3" },
      { src: queen4, alt: "Queen Of Cage still 4" },
    ],
  },
  {
    id: "beyond-the-prism",
    title: "Beyond The Prism",
    client: "Dashverse India Private Limited",
    category: "Vertical Dramas",
    enabled: true,
    stills: [
      { src: prism1, alt: "Beyond The Prism still 1" },
      { src: prism2, alt: "Beyond The Prism still 2" },
      { src: prism3, alt: "Beyond The Prism still 3" },
      { src: prism4, alt: "Beyond The Prism still 4" },
    ],
  },

  // --- Narrative Shows (Client: Dashverse India Private Limited) ---
  {
    id: "rage-of-the-heiress",
    title: "Rage Of The Heiress",
    client: "Dashverse India Private Limited",
    category: "Narrative Shows",
    enabled: true,
    stills: [
      { src: rage1, alt: "Rage Of The Heiress still 1" },
      { src: rage2, alt: "Rage Of The Heiress still 2" },
      { src: rage3, alt: "Rage Of The Heiress still 3" },
      { src: rage4, alt: "Rage Of The Heiress still 4" },
    ],
  },
  {
    id: "signed-and-bound",
    title: "Signed & Bound",
    client: "Dashverse India Private Limited",
    category: "Narrative Shows",
    enabled: true,
    stills: [
      { src: signed1, alt: "Signed & Bound still 1" },
      { src: signed2, alt: "Signed & Bound still 2" },
      { src: signed3, alt: "Signed & Bound still 3" },
    ],
  },

  // --- Feature Films (no client specified) ---
  {
    id: "purpose-of-wow",
    title: "Purpose of Wow",
    // No client specified; do not invent one
    category: "Feature Films",
    enabled: true,
    stills: [
      { src: purposeOfWowImg, alt: "Purpose of Wow still" },
    ],
  },

  // --- Ad Shows (1 AI commercial still) ---
  {
    id: "ad-show",
    title: "Ad Show",
    category: "Ad Shows",
    enabled: true,
    stills: [
      { src: adShowImg, alt: "Ad Show commercial still" },
    ],
  },
];
