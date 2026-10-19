"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowUpRight, AudioLines } from "lucide-react";

const socialLinks = [
  {
    label: "SPOTIFY",
    href: "https://open.spotify.com/artist/1W05ID4wFnAcO4QiQ3yfwC",
  },
  {
    label: "YOUTUBE MUSIC",
    href: "https://music.youtube.com/@zavyremusic",
  },
  {
    label: "APPLE MUSIC",
    href: "https://music.apple.com/be/artist/zavyre/6783392940",
  },
];

export default function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#07090d] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-14 lg:py-40"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-cyan-500/[0.07] blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-fuchsia-600/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Section label */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center justify-between border-b border-white/10 pb-5"
        >
          <span className="text-xs font-medium tracking-[0.35em] text-white/50">
            BEHIND THE SOUND
          </span>

          <span className="flex items-center gap-2 text-xs tracking-[0.2em] text-cyan-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
            ARTIST / ZAVYRE
          </span>
        </motion.div>

        {/* Oversized headline */}
        <div className="mb-20">
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-sm uppercase tracking-[0.25em] text-white/45"
          >
            More than a melody.
          </motion.p>

          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(3.5rem,11vw,10rem)] font-black uppercase leading-[0.8] tracking-[-0.075em]"
          >
            FEEL
            <br />
            <span className="bg-gradient-to-r from-cyan-300 via-white to-fuchsia-400 bg-clip-text text-transparent">
              EVERY
            </span>
            <br />
            FREQUENCY<span className="text-cyan-300">.</span>
          </motion.h2>
        </div>

        {/* Editorial composition */}
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          {/* Visual panel */}
           {/* Visual panel */}
<motion.div
  initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true, amount: 0.25 }}
  transition={{ duration: 0.9 }}
  className="group relative min-h-[480px] overflow-hidden border border-white/10 bg-[#0b1118] sm:min-h-[620px]"
>
  {/* Artist image */}
  <img
    src="/images/about.png"
    alt="ZAVYRE artist portrait"
    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
  />

  {/* Cinematic overlays */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10" />
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/20 via-transparent to-fuchsia-950/20" />

  {/* Decorative frame */}
  <div className="absolute inset-4 border border-white/20 sm:inset-6" />

  {/* Top label */}
  <div className="absolute left-8 top-8 flex items-center gap-3">
    <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
    <span className="text-[10px] tracking-[0.35em] text-white/80">
      ARTIST / ZAVYRE
    </span>
  </div>

  {/* Bottom artist typography */}
  <div className="absolute bottom-8 left-8 right-8 sm:bottom-12 sm:left-12">
    <p className="mb-3 text-xs tracking-[0.35em] text-cyan-200">
      SOUND WITHOUT LIMITS
    </p>

    <h3 className="text-5xl font-black tracking-[-0.07em] text-white sm:text-7xl">
      ZAVYRE<span className="text-cyan-300">.</span>
    </h3>

    <div className="mt-5 flex items-center justify-between border-t border-white/30 pt-4">
      <span className="text-[10px] tracking-[0.25em] text-white/70">
        FEEL EVERY FREQUENCY
      </span>
      <AudioLines size={24} strokeWidth={1} className="text-cyan-200" />
    </div>
  </div>
</motion.div>

          {/* Story copy */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-start"
          >
            <span className="mb-7 inline-flex items-center gap-3 text-xs tracking-[0.25em] text-cyan-200">
              <span className="h-px w-10 bg-cyan-300" />
              THE EXPERIENCE
            </span>

            <h3 className="mb-7 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Some sounds are heard.
              <span className="text-white/40"> Others stay with you.</span>
            </h3>

            <p className="mb-5 max-w-xl text-base leading-8 text-white/55">
              Step into the sound of ZAVYRE — a space where melodies,
              atmosphere, and emotion come together. Every release opens
              another window into the music.
            </p>

            <p className="mb-10 max-w-xl text-base leading-8 text-white/55">
              This is your invitation to explore the tracks, discover the
              latest releases, and find the sound that speaks to you.
              Put your headphones on and experience it for yourself.
            </p>

            <a
              href="#music"
              className="group inline-flex items-center gap-4 border border-white/20 px-6 py-4 text-xs font-semibold tracking-[0.2em] transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-300 hover:text-black"
            >
              EXPLORE THE MUSIC
              <ArrowDownRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
              />
            </a>

            <div className="mt-14 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/10 pt-7">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-[10px] tracking-[0.18em] text-white/45 transition-colors hover:text-cyan-200"
                >
                  {link.label}
                  <ArrowUpRight
                    size={12}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom marquee-style statement */}
        <div className="mt-24 overflow-hidden border-y border-white/10 py-6 sm:mt-32">
          <motion.div
            animate={shouldReduceMotion ? undefined : { x: ["0%", "-35%"] }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max items-center gap-8 whitespace-nowrap text-2xl font-black tracking-[-0.04em] text-white/[0.12] sm:text-4xl"
          >
            {Array.from({ length: 6 }, (_, index) => (
              <span key={index} className="flex items-center gap-8">
                FEEL THE FREQUENCY
                
                LIVE INSIDE THE MUSIC
              
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
