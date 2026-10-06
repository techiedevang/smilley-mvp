"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home", anchor: "home" },
  { href: "/#featured-work", label: "Featured Work", anchor: "featured-work" },
  { href: "/ai-work", label: "AI Work", anchor: null as string | null },
  { href: "/#awards", label: "Awards", anchor: "awards" },
  { href: "/#about", label: "About Us", anchor: "about" },
  { href: "/#team", label: "Team", anchor: "team" },
  { href: "/#press", label: "Press", anchor: "press" },
];

const SECTION_IDS = [
  "home",
  "featured-work",
  "awards",
  "about",
  "team",
  "press",
  "contact",
];
const HEADER_OFFSET = 120;

function getActiveSection(): string {
  if (typeof document === "undefined") return "home";
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    const rect = el.getBoundingClientRect();
    if (rect.top <= HEADER_OFFSET && rect.bottom > HEADER_OFFSET) return id;
  }
  let best = "home";
  let bestTop = Infinity;
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    const rect = el.getBoundingClientRect();
    if (rect.top >= HEADER_OFFSET && rect.top < bestTop) {
      bestTop = rect.top;
      best = id;
    } else if (rect.top < HEADER_OFFSET && rect.bottom > 0) {
      best = id;
      break;
    }
  }
  return best;
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      // Scroll progress bar
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(
        totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0,
      );
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (pathname !== "/") return;
    const update = () => setActiveSection(getActiveSection());
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);

  const isActive = (href: string, anchor: string | null) => {
    if (pathname !== "/") {
      if (href === "/") return pathname === "/";
      if (pathname === "/ai-work" && href === "/ai-work") return true;
      if (pathname === "/team" && href === "/#team") return true;
      if (pathname === "/press" && href === "/#press") return true;
      return false;
    }
    if (href === "/" && anchor === "home") return activeSection === "home";
    return anchor != null && activeSection === anchor;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 py-3 transition-all duration-500 md:px-12 ${
          scrolled
            ? "bg-[var(--bg)]/95 backdrop-blur-md border-b border-[var(--border)] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center gap-3 group">
          <span className="relative flex h-9 w-20 flex-shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <div className="relative w-full h-full overflow-hidden rounded-sm">
              <Image
                src="/images/logo.png"
                alt="Smiley Films"
                fill
                className="object-contain object-left"
                sizes="80px"
                priority
              />
            </div>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-8 lg:flex items-center">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-[13px] font-light tracking-wide transition-all duration-300 group py-1 ${
                isActive(item.href, item.anchor)
                  ? "text-white"
                  : "text-[var(--fg-muted)] hover:text-white"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px transition-all duration-300 ${
                  isActive(item.href, item.anchor)
                    ? "w-full bg-[var(--accent)]"
                    : "w-0 bg-[var(--accent)] group-hover:w-full"
                }`}
              />
            </Link>
          ))}

          {/* Contact CTA in header */}
          <Link
            href="/#contact"
            className="btn-primary px-5 py-2.5 text-[11px] font-semibold tracking-widest uppercase ml-2"
          >
            Start a conversation
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="relative z-[200] flex lg:hidden w-10 h-10 items-center justify-center transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <div className="flex flex-col gap-1.5">
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block h-0.5 w-6 bg-[var(--cream)] origin-center"
            />
            <motion.span
              animate={
                menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }
              }
              transition={{ duration: 0.2 }}
              className="block h-0.5 w-4 bg-[var(--cream)]"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="block h-0.5 w-6 bg-[var(--cream)] origin-center"
            />
          </div>
        </button>

        {/* Mobile menu — slide in from right, full height */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Backdrop — tap to close */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={() => setMenuOpen(false)}
                className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm lg:hidden"
                aria-hidden
              />
              {/* Panel from right */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  type: "tween",
                  duration: 0.35,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="fixed top-0 right-0 bottom-0 z-[95] h-screen w-[min(320px,85vw)] bg-[var(--bg)] border-l border-[var(--border)] shadow-2xl flex flex-col lg:hidden overflow-y-auto"
              >
                <div className="flex flex-col items-stretch pt-24 pb-8 px-6">
                  <nav
                    className="flex flex-col gap-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    {navLinks.map((item, i) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 + 0.1 }}
                      >
                        <Link
                          href={item.href!}
                          className={`block py-3 font-serif text-xl font-light transition-colors border-b border-white/5 ${
                            isActive(item.href!, item.anchor)
                              ? "text-[var(--accent)]"
                              : "text-white hover:text-[var(--accent)]"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-8"
                    onClick={() => setMenuOpen(false)}
                  >
                    <Link
                      href="/#contact"
                      className="btn-primary w-full justify-center px-8 py-4 text-xs font-semibold tracking-widest uppercase inline-flex"
                    >
                      Start a conversation
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-[var(--accent-dark)] via-[var(--accent)] to-[var(--accent-light)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </>
  );
}
