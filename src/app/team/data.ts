// Team portrait photos from /public/images/teams
export const teamMembers: {
  slug: string;
  name: string;
  designation: string;
  image: string;
  description: string;
  imdb: string;
  socialLinks: { href: string; label: string }[];
}[] = [
  {
    slug: "mehran-amrohi",
    name: "Mehran Amrohi",
    designation: "Producer",
    image: "/images/teams/Mehran Amrohi.png",
    description:
      "Leads the creative vision of Smiley Films, overseeing story, scripting, production quality, edit, and music. He also guides the company's financial direction, ensuring sustainable and meaningful growth.",
    imdb: "https://www.imdb.com/name/nm7428633/",
    socialLinks: [],
  },
  {
    slug: "sumit-khurana",
    name: "Sumit Khurana",
    designation: "Head of Business Development & Strategic Partnerships",
    image: "/images/teams/Sumit Khurana.png",
    description:
      "Drives growth strategy, partnerships, platform relations, and expansion opportunities. Aligns creative ambition with commercial scalability.",
    imdb: "https://www.imdb.com/name/nm11863918/",
    socialLinks: [],
  },
  {
    slug: "iftekhar-amrohi",
    name: "Iftekhar Amrohi",
    designation: "Head of Film Financing & Investor Relations",
    image: "/images/teams/iftekhar-amrohi.jpeg",
    description:
      "Leads film financing, capital structuring, and investor relations, driving strategic funding initiatives and partnerships across Smiley Films projects.",
    imdb: "",
    socialLinks: [],
  },
  {
    slug: "amrita-sengupta",
    name: "Amrita Sengupta",
    designation: "Head of Content & Creative Strategy",
    image: "/images/teams/amrita_sengupta.png",
    description:
      "Leads content strategy and development, overseeing concept creation and script development across projects, with experience across audio, OTT, and broadcast.",
    imdb: "",
    socialLinks: [],
  },
  {
    slug: "faqhrul-husaini",
    name: "Faqhrul Husaini",
    designation: "Head of Operations",
    image: "/images/teams/Faqhrul Husaini.png",
    description:
      "Oversees company-wide operations, process systems, vendor relations, and execution frameworks to ensure smooth functioning across projects.",
    imdb: "https://www.imdb.com/name/nm3566255/",
    socialLinks: [],
  },
  {
    slug: "afnan-amrohi",
    name: "Afnan Amrohi",
    designation: "Head of Production",
    image: "/images/teams/Afnan Amrohi.png",
    description:
      "Leads production planning and execution. Responsible for budgeting, scheduling, crew coordination, and ensuring projects are delivered efficiently and on time.",
    imdb: "https://www.imdb.com/name/nm9078414/",
    socialLinks: [],
  },
  {
    slug: "vinit-vyas",
    name: "Vinit Vyas",
    designation: "Head of script Development",
    image: "/images/teams/Vinit Vyas.png",
    description:
      "Leads content strategy, concept development, script evaluation, and narrative pipeline for upcoming projects.",
    imdb: "https://www.imdb.com/name/nm2793535/",
    socialLinks: [],
  },
];

export type TeamMember = (typeof teamMembers)[number];
