"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Scan } from "lucide-react";

const galleryItems = [
  {
    number: "01",
    title: "THE ARTIST",
    category: "PORTRAIT / PRESENCE",
    image: "/images/gallery1.png",
    className: "md:col-span-7 md:row-span-2",
  },
  {
    number: "02",
    title: "THE SOUND",
    category: "MUSIC / MOVEMENT",
    image: "/images/gallery2.png",
    className: "md:col-span-5",
  },
  {
    number: "03",
    title: "THE ATMOSPHERE",
    category: "LIGHT / SHADOW",
    image: "/images/gallery3.png",
    className: "md:col-span-5",
  },
];

export default function GallerySection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#03070c] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-14"
    >
      <div className="pointer-events-none absolute -right-40 top-40 h-96 w-96 rounded-full bg-cyan-500/[0.06] blur-[130px]" />

      <div className="relative mx-auto max-w-[1400px]">
        {/* Heading */}
        <div className="mb-14 flex items-end justify-between gap-6 sm:mb-20">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs tracking-[0.3em] text-cyan-300">
              <span className="h-px w-8 bg-cyan-300" />
              A VISUAL UNIVERSE
            </p>

            <motion.h2
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-5xl font-black uppercase leading-[0.9] tracking-[-0.07em] sm:text-7xl lg:text-8xl"
            >
              BEYOND
              <br />
              THE <span className="text-white/35">SOUND.</span>
            </motion.h2>
          </div>

          <div className="hidden pb-2 text-right sm:block">
            <Scan
              className="ml-auto mb-3 text-cyan-300"
              size={25}
              strokeWidth={1}
            />
            <p className="text-[10px] tracking-[0.25em] text-white/40">
              VISUAL ARCHIVE
            </p>
            <p className="mt-1 text-xs text-white/60">
              ZAVYRE / 001—003
            </p>
          </div>
        </div>

        {/* Balanced asymmetric gallery */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[250px] md:grid-cols-12">
          {galleryItems.map((item, index) => (
            <motion.a
              key={item.number}
              href={item.image}
              target="_blank"
              rel="noopener noreferrer"
              initial={
                shouldReduceMotion ? false : { opacity: 0, y: 35 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className={`group relative block min-h-[280px] overflow-hidden border border-white/10 bg-[#0b1118] sm:min-h-[320px] md:min-h-0 ${item.className}`}
              aria-label={`Open ${item.title} image`}
            >
              <img
                src={item.image}
                alt={`${item.title} — ZAVYRE visual`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-black/20 transition-colors duration-500 group-hover:from-black/70" />

              <div className="absolute left-5 right-5 top-5 flex items-center gap-3">
                <span className="text-xs tracking-[0.2em] text-cyan-200">
                  {item.number}
                </span>
                <span className="h-px w-8 shrink-0 bg-white/40" />
                <span className="text-[9px] tracking-[0.15em] text-white/70 sm:tracking-[0.2em]">
                  {item.category}
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 sm:bottom-7 sm:left-7 sm:right-7">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[10px] tracking-[0.2em] text-white/50">
                    ZAVYRE / VISUAL SERIES
                  </p>
                </div>

                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 transition-all duration-300 group-hover:border-cyan-300 group-hover:bg-cyan-300 group-hover:text-black">
                  <ArrowUpRight size={19} />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Closing line */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
          <p className="text-[10px] tracking-[0.2em] text-white/40">
            EVERY IMAGE TELLS A DIFFERENT STORY.
          </p>
          <p className="text-[10px] tracking-[0.2em] text-cyan-200/70">
            END OF FRAME <span className="ml-2">↘</span>
          </p>
        </div>
      </div>
    </section>
  );
}