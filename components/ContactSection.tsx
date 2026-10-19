"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  MoveUpRight,
} from "lucide-react";

import {
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaFacebookF,
} from "react-icons/fa";

import {
  SiThreads,
  SiSpotify,
  SiApplemusic,
  SiYoutubemusic,
} from "react-icons/si";

const platforms = [
  {
    name: "SPOTIFY",
    detail: "STREAM THE MUSIC",
    href: "https://open.spotify.com/artist/1W05ID4wFnAcO4QiQ3yfwC",
    Icon: SiSpotify,
  },
  {
    name: "APPLE MUSIC",
    detail: "LISTEN YOUR WAY",
    href: "https://music.apple.com/be/artist/zavyre/6783392940",
    Icon: SiApplemusic,
  },
  {
    name: "YOUTUBE MUSIC",
    detail: "EXPLORE THE SOUND",
    href: "https://music.youtube.com/@zavyremusic",
    Icon: SiYoutubemusic,
  },
];

const socials = [
  {
    name: "INSTAGRAM",
    href: "https://www.instagram.com/zavyre.music/",
    Icon: FaInstagram,
  },
  {
    name: "TIKTOK",
    href: "https://www.tiktok.com/@zavyre.music",
    Icon: FaTiktok,
  },
  {
    name: "THREADS",
    href: "https://www.threads.com/@zavyre.music",
    Icon: SiThreads,
  },
  {
    name: "FACEBOOK",
    href: "https://www.facebook.com/share/19VZQyAykS/",
    Icon: FaFacebookF,
  },
  {
    name: "YOUTUBE",
    href: "https://music.youtube.com/@zavyremusic",
    Icon: FaYoutube,
  },
];

export default function ContactSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#06090e] px-5 pb-8 pt-24 text-white sm:px-8 sm:pt-32 lg:px-14"
    >
      {/* Ambient lighting */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-cyan-500/[0.08] blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-fuchsia-500/[0.07] blur-[140px]" />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Section intro */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 flex items-center justify-between gap-4 border-b border-white/10 pb-5"
        >
          <p className="flex items-center gap-3 text-xs tracking-[0.3em] text-cyan-300">
            <span className="h-px w-8 bg-cyan-300" />
            STAY CONNECTED
          </p>

          <span className="text-right text-[10px] tracking-[0.2em] text-white/35">
            THE JOURNEY CONTINUES
          </span>
        </motion.div>

        {/* Main content */}
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
          <div>
            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-6 text-xs tracking-[0.3em] text-white/40"
            >
              ONE MORE TRACK. ONE MORE FEELING.
            </motion.p>

            <motion.h2
              initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[clamp(3.5rem,10vw,9rem)] font-black uppercase leading-[0.78] tracking-[-0.085em]"
            >
              STAY
              <br />
              IN THE
              <br />
              <span className="bg-gradient-to-r from-cyan-300 via-white to-fuchsia-400 bg-clip-text text-transparent">
                FREQUENCY.
              </span>
            </motion.h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-white/50 sm:text-base">
              Keep the music close. Discover the releases, follow the journey,
              and find your next favourite track.
            </p>
          </div>

          {/* Streaming platforms */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative overflow-hidden border border-white/10 bg-white/[0.025] p-6 sm:p-8"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-300/10 blur-[70px]" />

            <div className="relative mb-8 flex items-center justify-between">
              <div>
                <p className="text-[10px] tracking-[0.3em] text-white/40">
                  YOUR NEXT LISTEN
                </p>

                <h3 className="mt-2 text-2xl font-bold tracking-tight">
                  Enter the sound.
                </h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-300/30 text-cyan-200">
                <SiSpotify size={22} />
              </div>
            </div>

            <div className="relative space-y-3">
              {platforms.map((platform) => {
                const Icon = platform.Icon;

                return (
                  <motion.a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={shouldReduceMotion ? undefined : { x: 5 }}
                    transition={{ duration: 0.2 }}
                    className="group flex items-center justify-between gap-4 border border-white/10 bg-black/20 p-4 transition-colors hover:border-cyan-300/40 hover:bg-cyan-300/[0.04]"
                  >
                    <div className="flex items-center gap-4">
                      <Icon
                        size={22}
                        className="shrink-0 text-white/65 transition-colors group-hover:text-cyan-200"
                      />

                      <div>
                        <p className="text-xs font-semibold tracking-[0.12em]">
                          {platform.name}
                        </p>

                        <p className="mt-1 text-[9px] tracking-[0.15em] text-white/40">
                          {platform.detail}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="shrink-0 text-white/40 transition-colors group-hover:text-cyan-200"
                    />
                  </motion.a>
                );
              })}
            </div>

            <p className="relative mt-5 text-[10px] leading-5 text-white/35">
              Choose your preferred streaming platform to listen to ZAVYRE.
            </p>
          </motion.div>
        </div>

        {/* Social links */}
        <div className="mt-24 border-y border-white/10 py-7 sm:mt-32">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-[10px] tracking-[0.3em] text-white/40">
                FIND ZAVYRE ONLINE
              </p>

              <p className="mt-2 text-sm text-white/70">
                Follow the artist beyond the music.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = social.Icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ZAVYRE on ${social.name}`}
                    className="group inline-flex items-center gap-2.5 border border-white/15 px-4 py-3 text-[10px] tracking-[0.12em] text-white/65 transition-all duration-300 hover:border-cyan-300/60 hover:bg-cyan-300/[0.05] hover:text-cyan-200"
                  >
                    <Icon
                      size={16}
                      className="shrink-0 transition-transform duration-300 group-hover:scale-110"
                    />

                    {social.name}

                    <ArrowUpRight
                      size={12}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <a
            href="#home"
            className="group inline-flex w-fit items-center gap-3"
          >
            <span className="text-2xl font-black tracking-[-0.08em]">
              ZAVYRE<span className="text-cyan-300">.</span>
            </span>

            <ArrowDownRight
              size={18}
              className="rotate-180 text-cyan-300 transition-transform group-hover:-translate-y-1"
            />
          </a>

          <p className="text-[10px] tracking-[0.12em] text-white/35">
            AN UNOFFICIAL FAN-MADE CONCEPT WEBSITE.
          </p>

          <a
            href="#home"
            className="inline-flex w-fit items-center gap-2 text-[10px] tracking-[0.2em] text-white/50 transition-colors hover:text-cyan-200"
          >
            BACK TO TOP
            <MoveUpRight size={13} />
          </a>
        </footer>
      </div>
    </section>
  );
}