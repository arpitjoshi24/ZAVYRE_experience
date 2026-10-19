
"use client";

import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  AudioLines,
  Play,
} from "lucide-react";

const socials = [
  {
    name: "Spotify",
    symbol: "◉",
    url: "https://open.spotify.com/artist/1W05ID4wFnAcO4QiQ3yfwC",
  },
  {
    name: "Apple Music",
    symbol: "♫",
    url: "https://music.apple.com/be/artist/zavyre/6783392940",
  },
  {
    name: "Instagram",
    symbol: "◎",
    url: "https://www.instagram.com/zavyre.music/",
  },
  {
    name: "TikTok",
    symbol: "♪",
    url: "https://www.tiktok.com/@zavyre.music",
  },
  {
    name: "YouTube",
    symbol: "▷",
    url: "https://music.youtube.com/@zavyremusic",
  },
  {
    name: "Facebook",
    symbol: "f",
    url: "https://www.facebook.com/share/19VZQyAykS/",
  },
  {
    name: "Threads",
    symbol: "@",
    url: "https://www.threads.com/@zavyre.music",
  },
];

const bars = Array.from({ length: 44 }, (_, i) => ({
  id: i,
  height: 8 + ((i * 17 + i * i * 3) % 36),
}));

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[850px] min-h-[100svh] flex-col justify-center overflow-hidden bg-[#03070c] text-white"
    >
      {/* Background artwork */}
      <div className="absolute inset-0 -z-30">
        <motion.div
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('/images/hero.png')] bg-cover bg-[center_42%] bg-no-repeat"
        />
      </div>

      {/* Cinematic overlays */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-r from-[#02050a]/95 via-[#02050a]/55 to-[#02050a]/10" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-t from-[#03070c] via-transparent to-[#03070c]/40" />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_75%_40%,transparent_5%,rgba(1,5,12,0.1)_55%,rgba(1,5,12,0.6)_100%)]" />

      {/* Ambient light */}
      <motion.div
        animate={{
          opacity: [0.12, 0.28, 0.12],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-[-15%] top-[15%] -z-10 h-96 w-96 rounded-full bg-cyan-400/20 blur-[140px]"
      />

      {/* Main hero content */}
      <div className="mx-auto w-full max-w-[1600px] px-6 pb-12 pt-32 sm:px-10 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.6fr]">
          <div className="relative z-10 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-7 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-cyan-300" />
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/75 sm:text-[11px] sm:tracking-[0.4em]">
                Independent artist
              </span>
              <span className="text-cyan-300">·</span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-white/75 sm:text-[11px] sm:tracking-[0.4em]">
                New music
              </span>
            </motion.div>

            {/* Oversized title */}
            <motion.h1
              initial={{ opacity: 0, y: 45, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 1.1,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="select-none text-[clamp(4.2rem,13.5vw,12.5rem)] font-extralight leading-[0.8] tracking-[-0.09em]"
            >
              ZAVYRE<span className="text-cyan-300">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-8 max-w-lg text-xs uppercase leading-7 tracking-[0.19em] text-white/65 sm:text-sm sm:leading-8 sm:tracking-[0.24em]"
            >
              Music for the moments you cannot put into words.
            </motion.p>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.7 }}
              className="mt-7 flex flex-wrap gap-2.5 sm:gap-3"
            >
              {socials.map((social, i) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 1.05 + i * 0.07,
                    type: "spring",
                    stiffness: 180,
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.08,
                    borderColor: "rgba(103,232,249,0.9)",
                  }}
                  whileTap={{ scale: 0.94 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-base text-white/80 backdrop-blur-md transition-colors hover:bg-cyan-300/10 hover:text-cyan-200 sm:h-11 sm:w-11"
                >
                  {social.symbol}
                </motion.a>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.a
              href="https://distrokid.com/hyperfollow/zavyre/tell-me-what-you-want"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.25, duration: 0.7 }}
              whileHover={{ scale: 1.035 }}
              whileTap={{ scale: 0.97 }}
              className="group mt-9 inline-flex items-center gap-4 rounded-full border border-cyan-300/80 bg-cyan-300/[0.06] py-2 pl-2 pr-6 shadow-[0_0_25px_rgba(34,211,238,0.08)] backdrop-blur-md transition-all duration-300 hover:bg-cyan-300 hover:text-black hover:shadow-[0_0_35px_rgba(34,211,238,0.3)]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-300 text-black transition-transform group-hover:rotate-90">
                <Play size={15} fill="currentColor" />
              </span>

              <span className="text-[10px] font-medium uppercase tracking-[0.22em]">
                Listen now
              </span>

              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>
          </div>

          {/* Right-side editorial text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="hidden justify-self-end pr-4 text-right lg:block"
          >
            <p className="font-serif text-5xl font-light italic leading-tight text-white/80">
              Music
              <br />
              connects
              <br />
              <span className="text-cyan-200">us.</span>
            </p>

            <motion.div
              animate={{ width: ["0%", "100%", "0%"] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="ml-auto mt-5 h-px bg-cyan-300"
            />
          </motion.div>
        </div>

        {/* Featured release strip */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.25 }}
          className="mt-16 grid gap-5 border-t border-white/15 pt-6 sm:mt-20 sm:grid-cols-[100px_1fr_auto] sm:items-center sm:gap-6 lg:max-w-4xl"
        >
          {/* Release artwork */}
          <a
            href="https://distrokid.com/hyperfollow/zavyre/tell-me-what-you-want"
            target="_blank"
            rel="noreferrer"
            aria-label="Listen to Tell Me What You Want"
            className="group relative block aspect-square w-24 overflow-hidden rounded-lg border border-cyan-300/40 sm:w-full"
          >
            <div className="absolute inset-0 bg-[url('/images/tell-me-cover.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
              <Play size={23} fill="white" />
            </div>
          </a>

          {/* Release details */}
          <div className="min-w-0">
            <p className="mb-2 text-[9px] uppercase tracking-[0.35em] text-cyan-200">
              Latest release
            </p>

            <h2 className="font-serif text-2xl font-light sm:text-3xl">
              Tell Me What You Want
            </h2>

            <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-white/45">
              ZAVYRE
            </p>

            {/* Decorative animated waveform */}
            <div
              aria-label="Animated sound visualizer"
              className="mt-4 flex h-8 items-center gap-[3px] overflow-hidden"
            >
              {bars.map((bar) => (
                <motion.span
                  key={bar.id}
                  animate={{
                    height: [
                      `${bar.height * 0.25}px`,
                      `${bar.height}px`,
                      `${bar.height * 0.45}px`,
                    ],
                    opacity: [0.45, 1, 0.65],
                  }}
                  transition={{
                    duration: 0.7 + (bar.id % 7) * 0.12,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: bar.id * 0.025,
                    ease: "easeInOut",
                  }}
                  className="w-[3px] shrink-0 rounded-full bg-cyan-300 sm:w-1"
                />
              ))}
            </div>
          </div>

          {/* Streaming CTA */}
          <a
            href="https://distrokid.com/hyperfollow/zavyre/tell-me-what-you-want"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/20 px-5 py-3 text-[9px] uppercase tracking-[0.18em] transition-all hover:border-cyan-300/70 hover:bg-cyan-300/10"
          >
            <AudioLines
              size={16}
              className="text-cyan-300"
            />
            Stream release
            <ArrowUpRight
              size={13}
              className="text-white/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#music"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
        className="absolute bottom-6 right-5 hidden flex-col items-center gap-3 text-white/45 md:flex lg:right-10"
      >
        <span className="text-[9px] uppercase tracking-[0.25em] [writing-mode:vertical-rl]">
          Scroll to explore
        </span>

        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20"
        >
          <ArrowDown size={14} />
        </motion.span>
      </motion.a>

      {/* Bottom edge */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
    </section>
  );
}
