"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "../team/data";

const sections = [
  {
    id: "company",
    title: "The Company",
    content:
      "Born in Mumbai, Smiley Films is a production house engaged in Feature Films, Short Films and Web Content. We bring together strong industry alliances, in-house production, and end-to-end post-production facilities to deliver cinematic excellence. Since 2017, we have built a creative portfolio that is as diverse as it is immersive, earning the trust of clients and collaborators across the industry.",
    number: "01",
  },
  {
    id: "vision",
    title: "Vision",
    content:
      "To be the creative force that brings India's diverse stories to a global stage.",
    number: "02",
  },
  {
    id: "mission",
    title: "Mission",
    content:
      "To produce culturally rooted content across Film and Digital, delivering creative excellence through strong collaborations and a cost-efficient approach.",
    number: "03",
  },
  {
    id: "culture",
    title: "Culture",
    content:
      "At Smiley Films, we believe the best stories are born when varied voices, bold ideas, and driven people come together as one.",
    number: "04",
  },
];

const stats = [
  { value: "33+", label: "Projects delivered" },
  { value: "9+", label: "Years of experience" },
  { value: "10+", label: "Awards won" },
  { value: "20+", label: "Industry trust" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] as const } },
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export default function AboutPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative pt-36 pb-24 md:pt-44 md:pb-28 px-6 md:px-12 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 mesh-gradient opacity-60" />
          <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-[var(--accent)] opacity-[0.06] blur-[120px]" />
          <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-[var(--accent-dark)] opacity-[0.05] blur-[100px]" />
          {/* Decorative lines */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--accent)]/20 to-transparent" style={{ left: "8%"}} />
          <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[var(--accent)]/10 to-transparent" style={{ right: "8%"}} />
        </div>

        <div className="relative mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-6"
          >
            <motion.div className="flex items-center gap-4" variants={fadeInUp}>
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--accent)]" />
              <span className="text-[var(--accent)] text-xs font-semibold tracking-[0.35em] uppercase">
                Who We Are
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight"
            >
              About{" "}
              <span className="text-gradient-warm">
                Us
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-4 max-w-lg text-[var(--fg-muted)] text-base md:text-lg leading-relaxed"
            >
              The company behind the stories. Our vision, mission, culture and
              the numbers that drive us.
            </motion.p>

            <motion.div variants={fadeInUp} className="w-20 h-0.5 bg-gradient-to-r from-[var(--accent)] to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Content sections */}
      <section className="relative pb-20 md:pb-28 px-6 md:px-12">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="space-y-0 divide-y divide-[var(--border)]"
          >
            {sections.map((section, i) => (
              <motion.div
                key={section.id}
                variants={fadeInUp}
                className="group relative py-12 md:py-16 flex gap-8 md:gap-16 items-start"
              >
                {/* Number */}
                <span className="flex-shrink-0 font-display text-6xl md:text-7xl font-bold text-white/4 select-none group-hover:text-[var(--accent)]/10 transition-colors duration-500 leading-none">
                  {section.number}
                </span>

                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-0.5 bg-[var(--accent)] transition-all duration-300 group-hover:w-12" />
                    <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-white group-hover:text-[var(--accent)] transition-colors duration-300">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-[var(--fg-muted)] leading-relaxed max-w-2xl text-base md:text-lg">
                    {section.content}
                  </p>
                </div>

                {/* Hover accent */}
                <div className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-[var(--accent)]/0 via-[var(--accent)]/30 to-[var(--accent)]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-20 relative"
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-40" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-14">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="text-center card-lift"
                >
                  <div className="glass-card px-6 py-8 border border-[var(--border)] relative overflow-hidden group">
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    <span className="stat-number block text-4xl md:text-5xl font-serif font-light tabular-nums">
                      {stat.value}
                    </span>
                    <p className="mt-2 text-xs text-[var(--fg-muted)] font-medium tracking-wider uppercase">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-20 mt-4" />
          </motion.div>
        </div>
      </section>

      {/* Team slider section */}
      <section className="pb-28 px-6 md:px-12 bg-[var(--bg-elevated)] pt-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px divider-gradient opacity-40" />
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14"
          >
            <span className="section-label">People</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl font-light text-white">
              Meet the <span className="text-gradient">Team</span>
            </h2>
            <p className="mt-4 text-[var(--fg-muted)] max-w-lg text-sm md:text-base">
              The people behind Smiley Films. Click any member to view full profile.
            </p>
            <div className="mt-6 w-16 h-0.5 bg-gradient-to-r from-[var(--accent)] to-transparent" />
          </motion.div>

          <div
            className="flex gap-4 md:gap-6 overflow-x-auto slider-track pb-4 snap-x snap-mandatory"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="flex-shrink-0 w-56 snap-center"
              >
                <Link
                  href={`/team#${member.slug}`}
                  className="team-card group block"
                >
                  <div className="aspect-square overflow-hidden image-hover-zoom relative border border-[var(--border)] group-hover:border-[var(--accent)]/40 transition-colors duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={224}
                      height={224}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent opacity-80" />
                    <div className="team-card-overlay">
                      <div className="w-6 h-0.5 bg-[var(--accent)] mb-2" />
                      <span className="text-[var(--accent)] text-[10px] tracking-widest uppercase font-medium">View Profile</span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-serif text-lg font-light text-white group-hover:text-[var(--accent)] transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[var(--accent)]/70 mt-0.5 tracking-wide">
                      {member.designation}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
