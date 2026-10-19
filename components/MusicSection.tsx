
"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Disc3,
  Headphones,
  Play,
} from "lucide-react";

const releases = [
  {
    number: "01",
    title: "Tell Me What You Want",
    type: "SINGLE",
    year: "2026",
    image:
      "./images/tell-me-cover.jpg",
    url: "https://distrokid.com/hyperfollow/zavyre/tell-me-what-you-want",
    featured: true,
  },
  {
    number: "02",
    title: "On My Mind",
    type: "SINGLE",
    year: "2026",
    image:
      "https://distrokid.imgix.net/http%3A%2F%2Fgather.fandalism.com%2Fhyperfollow-blob_image_13042901_1oo187q1v04ho8l0nuy05xm_1792246619881.jpg?fm=jpg&q=75&w=200&s=f7550d0e1a77882f3446ab6f34bb1cbb",
    url: "https://distrokid.com/hyperfollow/zavyre/on-my-mind",
  },
  {
    number: "03",
    title: "Don't Let Go",
    type: "SINGLE",
    year: "2026",
    image:
      "https://distrokid.imgix.net/http%3A%2F%2Fgather.fandalism.com%2F13042901--D941456A-98EE-486B-90764C74D2F6E122--0--2283485--cover.png?fm=jpg&q=75&w=800&s=518ae239b1f5b50d173ab49764e980ca",
    url: "https://distrokid.com/hyperfollow/zavyre/dont-let-go",
  },
  {
    number: "04",
    title: "AMAVI",
    type: "ALBUM",
    year: "2026",
    image:
      "./images/amavi.jpg",
    url: "https://distrokid.com/hyperfollow/zavyre/amavi",
  },
  {
    number: "05",
    title: "Addicted To You",
    type: "SINGLE",
    year: "2026",
    image:
      "https://distrokid.imgix.net/http%3A%2F%2Fgather.fandalism.com%2Fhyperfollow-blob_image_13042901_brqes82jwnjqshtx6pfqv_1785695296774.jpg?fm=jpg&q=75&w=200&s=453ef8f57f8160733a822a38b2f596f9",
    url: "https://distrokid.com/hyperfollow/zavyre/addicted-to-you-4",
  },
  {
    number: "06",
    title: "I Want It All",
    type: "SINGLE",
    year: "2026",
    image:
      "https://distrokid.imgix.net/http%3A%2F%2Fgather.fandalism.com%2Fhyperfollow-blob_image_13042901_8jeyu2arhpa0vbyziac9ec_1790830267016.jpg?fm=jpg&q=75&w=200&s=5f0d36c268bdc7d84d8931cff994c3af",
    url: "https://distrokid.com/hyperfollow/zavyre/i-want-it-all",
  },
  {
    number: "07",
    title: "I'll Be Your Light",
    type: "SINGLE",
    year: "2026",
    image:
      "https://distrokid.imgix.net/http%3A%2F%2Fgather.fandalism.com%2Fhyperfollow-blob_image_13042901_j0ap6qriazbwu99gbeuu5_1784460875726.jpg?fm=jpg&q=75&w=200&s=b31001ec93337854d82e52d9d4bd454c",
    url: "https://distrokid.com/hyperfollow/zavyre/ill-be-your-light",
  },
  {
    number: "08",
    title: "Where You Belong",
    type: "SINGLE",
    year: "2026",
    image:
      "https://distrokid.imgix.net/http%3A%2F%2Fgather.fandalism.com%2Fhyperfollow-blob_image_13042901_3mer2ielkgnw5cc1q3l3dj_1784460780089.jpg?fm=jpg&q=75&w=200&s=526c25f1939d9fa7fabba1ca6e221bf5",
    url: "https://distrokid.com/hyperfollow/zavyre/where-you-belong-3/",
  },
];

export default function MusicSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="music"
      className="relative isolate overflow-hidden bg-[#03050a] px-6 py-28 text-white sm:px-10 sm:py-36 lg:px-16"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute left-[-10%] top-[10%] -z-10 h-96 w-96 rounded-full bg-cyan-500/[0.07] blur-[130px]" />

      <div className="pointer-events-none absolute right-[-10%] top-[45%] -z-10 h-96 w-96 rounded-full bg-fuchsia-500/[0.06] blur-[140px]" />

      <div className="mx-auto max-w-[1500px]">
        {/* Section heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-14 flex flex-col justify-between gap-8 md:mb-20 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-9 bg-cyan-300" />

              <span className="text-[10px] uppercase tracking-[0.35em] text-cyan-200">
                The discography
              </span>
            </div>

            <h2 className="text-[clamp(3.5rem,9vw,8rem)] font-extralight leading-[0.85] tracking-[-0.075em]">
              SOUND
              <br />
              <span className="font-serif italic text-white/55">
                without limits.
              </span>
            </h2>
          </div>

          <div className="max-w-xs md:pb-2">
            <p className="text-sm leading-7 text-white/50">
              Every track holds a different feeling. Explore the releases,
              find your sound, and take it with you.
            </p>

            <div className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-cyan-200">
              <Headphones size={15} />
              <span>Choose your next obsession</span>
            </div>
          </div>
        </motion.div>

        {/* Featured release */}
        <motion.a
          href={releases[0].url}
          target="_blank"
          rel="noreferrer"
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          whileHover={reduceMotion ? undefined : { scale: 1.005 }}
          className="group relative mb-16 grid overflow-hidden rounded-2xl border border-white/10 bg-[#090d14] md:mb-24 md:grid-cols-[0.85fr_1.15fr]"
        >
          {/* Artwork */}
          <div className="relative aspect-[1.15/1] overflow-hidden sm:aspect-[1.4/1] md:aspect-auto md:min-h-[440px]">
            <img
              src={releases[0].image}
              alt="Tell Me What You Want cover artwork"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10 md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#090d14]" />

            <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/30 px-4 py-2 backdrop-blur-xl">
              <span className="text-[9px] uppercase tracking-[0.25em]">
                Featured release
              </span>
            </div>

            <div className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.25em] text-white/70">
              ZAVYRE / 001
            </div>
          </div>

          {/* Featured details */}
          <div className="relative flex flex-col justify-center p-7 sm:p-10 md:p-12 lg:p-16">
            <div className="mb-8 flex items-center gap-3 text-cyan-200">
              <Disc3 size={18} />

              <span className="text-[10px] uppercase tracking-[0.3em]">
                The latest sound
              </span>
            </div>

            <h3 className="max-w-xl text-4xl font-light leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              Tell Me What
              <br />
              You Want<span className="text-cyan-300">.</span>
            </h3>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/45">
              Turn up the volume. Discover the release and listen on your
              favourite streaming platform.
            </p>

            <div className="mt-9 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-300 text-black transition-transform duration-300 group-hover:scale-110">
                <Play size={17} fill="currentColor" />
              </span>

              <span className="text-[10px] uppercase tracking-[0.25em]">
                Listen to the release
              </span>

              <ArrowUpRight
                size={17}
                className="text-cyan-200 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </div>

            <span className="pointer-events-none absolute right-5 top-5 text-7xl font-extralight tracking-tighter text-white/[0.035] sm:right-8 sm:top-8 sm:text-9xl">
              01
            </span>
          </div>
        </motion.a>

        {/* Collection heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8 flex items-end justify-between gap-4"
        >
          <div>
            <p className="mb-3 text-[9px] uppercase tracking-[0.35em] text-cyan-200">
              Explore the collection
            </p>

            <h3 className="text-2xl font-light tracking-tight sm:text-3xl">
              The releases<span className="text-cyan-300">.</span>
            </h3>
          </div>

          <span className="text-[10px] tracking-[0.2em] text-white/35">
            08 TRACKS
          </span>
        </motion.div>

        {/* Release grid */}
        <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-7 lg:gap-y-12">
          {releases.slice(1).map((release, index) => (
            <motion.a
              key={release.number}
              href={release.url}
              target="_blank"
              rel="noreferrer"
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 35 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: reduceMotion ? 0 : (index % 4) * 0.09,
              }}
              whileHover={reduceMotion ? undefined : { y: -7 }}
              className="group block min-w-0"
            >
              {/* Album cover */}
              <div className="relative aspect-square overflow-hidden rounded-xl border border-white/10 bg-[#0b1018]">
                <img
                  src={release.image}
                  alt={`${release.title} cover artwork`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/35" />

                {/* Artwork number */}
                <span className="absolute left-4 top-4 text-[10px] tracking-[0.2em] text-white/80">
                  {release.number}
                </span>

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.span
                    initial={false}
                    className="flex h-14 w-14 translate-y-3 items-center justify-center rounded-full border border-white/30 bg-black/40 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <Play size={19} fill="currentColor" />
                  </motion.span>
                </div>

                {/* Bottom artwork label */}
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/75 to-transparent px-4 pb-4 pt-12">
                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/80">
                    {release.type}
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="text-cyan-200 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                {/* Hover border */}
                <div className="pointer-events-none absolute inset-0 rounded-xl border border-cyan-300/0 transition-colors duration-300 group-hover:border-cyan-300/60" />
              </div>

              {/* Track information */}
              <div className="mt-4 flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h4 className="truncate text-base font-medium tracking-tight transition-colors duration-300 group-hover:text-cyan-200 sm:text-lg">
                    {release.title}
                  </h4>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-white/35">
                    ZAVYRE · {release.type}
                  </p>
                </div>

                <ArrowDownRight
                  size={17}
                  className="mt-1 shrink-0 text-white/30 transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1 group-hover:text-cyan-200"
                />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom streaming banner */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:mt-28 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-lg font-light sm:text-xl">
              Found your favourite?
            </p>

            <p className="mt-2 text-xs text-white/40">
              Take the music wherever you go.
            </p>
          </div>

          <a
            href="https://open.spotify.com/artist/1W05ID4wFnAcO4QiQ3yfwC"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-fit items-center gap-4 rounded-full border border-white/20 px-6 py-4 transition-all duration-300 hover:border-cyan-300/70 hover:bg-cyan-300/10"
          >
            <span className="text-[10px] uppercase tracking-[0.22em]">
              Explore on Spotify
            </span>

            <ArrowUpRight
              size={16}
              className="text-cyan-200 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
