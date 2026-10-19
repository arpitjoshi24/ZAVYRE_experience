
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  AudioLines,
  Menu,
  X,
} from "lucide-react";

const links = [
  { label: "Home", href: "#home", number: "01" },
  { label: "Music", href: "#music", number: "02" },
  { label: "About", href: "#about", number: "03" },
  { label: "Gallery", href: "#gallery", number: "04" },
  { label: "Contact", href: "#contact", number: "05" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navigateTo = (label: string, href: string) => {
    setActive(label);
    setMenuOpen(false);

    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10"
      >
        <nav
          className={`relative mx-auto flex max-w-[1440px] items-center justify-between rounded-2xl border px-5 transition-all duration-500 sm:px-7 ${
            scrolled
              ? "border-white/10 bg-[#05080cf2] py-3 shadow-[0_12px_50px_rgba(0,0,0,0.35)] backdrop-blur-2xl"
              : "border-white/[0.07] bg-black/15 py-4 backdrop-blur-md"
          }`}
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />

          {/* Brand */}
          <a
            href="#home"
            onClick={() => navigateTo("Home", "#home")}
            aria-label="ZAVYRE home"
            className="group relative z-10 flex shrink-0 items-center gap-1.5"
          >
            <span className="text-xl font-light tracking-[0.34em] text-white transition-colors duration-300 group-hover:text-cyan-200 sm:text-2xl">
              ZAVYRE
            </span>

            <motion.span
              animate={{ opacity: [0.35, 1, 0.35] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mb-3 h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#67e8f9]"
            />
          </a>

          {/* Desktop navigation */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex">
            {links.map((link) => {
              const isActive = active === link.label;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() =>
                    navigateTo(link.label, link.href)
                  }
                  className="group relative px-4 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/55 transition-colors duration-300 hover:text-white xl:px-5"
                >
                  {link.label}

                  <span
                    className={`absolute bottom-1.5 left-1/2 h-px -translate-x-1/2 bg-cyan-300 transition-all duration-300 ${
                      isActive
                        ? "w-5 shadow-[0_0_8px_#67e8f9]"
                        : "w-0 group-hover:w-5"
                    }`}
                  />
                </a>
              );
            })}
          </div>

          {/* Right controls */}
          <div className="relative z-10 flex items-center gap-4">
            <a
              href="#music"
              onClick={() => navigateTo("Music", "#music")}
              className="group hidden items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/[0.07] sm:flex"
            >
              <AudioLines
                size={15}
                className="text-cyan-300"
              />

              <span className="text-[9px] font-medium uppercase tracking-[0.18em] text-white/75">
                Explore sound
              </span>

              <ArrowUpRight
                size={13}
                className="text-white/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
              />
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-all duration-300 hover:border-cyan-300/50 hover:bg-cyan-300/10"
            >
              <AnimatePresence mode="wait" initial={false}>
                {menuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={18} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={18} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{
              duration: 0.65,
              ease: [0.76, 0, 0.24, 1],
            }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-[#05080c] px-6 pb-8 pt-28 sm:px-12 sm:pt-32"
          >
            {/* Background decoration */}
            <div className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-cyan-400/[0.07] blur-[120px]" />
            <div className="pointer-events-none absolute -left-32 bottom-10 h-80 w-80 rounded-full bg-fuchsia-500/[0.06] blur-[120px]" />

            <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center">
              <div className="mb-8 flex items-center gap-3">
                <span className="h-px w-8 bg-cyan-300" />
                <span className="text-[10px] uppercase tracking-[0.35em] text-cyan-200">
                  Enter the world of ZAVYRE
                </span>
              </div>

              <div className="flex flex-col">
                {links.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() =>
                      navigateTo(link.label, link.href)
                    }
                    initial={{ opacity: 0, y: 35 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{
                      duration: 0.45,
                      delay: 0.12 + index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group flex items-center justify-between border-b border-white/[0.09] py-3 sm:py-4"
                  >
                    <span className="flex items-center gap-5 sm:gap-8">
                      <span className="text-[10px] tracking-widest text-white/30">
                        {link.number}
                      </span>

                      <span className="text-4xl font-light tracking-tight text-white/75 transition-all duration-300 group-hover:translate-x-3 group-hover:text-cyan-200 sm:text-6xl md:text-7xl">
                        {link.label}
                      </span>
                    </span>

                    <ArrowUpRight
                      size={23}
                      className="text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300"
                    />
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
                className="mt-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
              >
                <div>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
                    Independent artist · Official music
                  </p>
                  <p className="mt-2 text-sm text-white/60">
                    Find your sound. Feel every moment.
                  </p>
                </div>

                <a
                  href="https://www.instagram.com/zavyre.music/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/60 transition-colors hover:text-cyan-200"
                >
                  Instagram <ArrowUpRight size={14} />
                </a>
              </motion.div>
            </div>

            <div className="relative mx-auto mt-8 flex w-full max-w-6xl items-center justify-between border-t border-white/10 pt-5">
              <span className="text-[9px] tracking-[0.25em] text-white/25">
                Z A V Y R E
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/25">
                Music connects us
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
