
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MusicSection from "@/components/MusicSection";
import AboutSection from "@/components/AboutSection";
export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#03070c] text-white">
      <Navbar />
      <Hero />
      <MusicSection />
      <AboutSection/>

      <section
        id="music"
        className="min-h-screen border-t border-white/10 px-6 py-32 sm:px-12"
      >
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
          01 — The sound
        </p>

        <h2 className="mt-6 text-6xl font-light tracking-tight sm:text-8xl">
          Latest release<span className="text-cyan-300">.</span>
        </h2>
      </section>

      <section
        id="about"
        className="min-h-[70vh] border-t border-white/10 px-6 py-32 sm:px-12"
      >
        <h2 className="text-5xl font-light sm:text-7xl">
          About ZAVYRE
        </h2>
      </section>

      <section
        id="gallery"
        className="min-h-[70vh] border-t border-white/10 px-6 py-32 sm:px-12"
      >
        <h2 className="text-5xl font-light sm:text-7xl">
          Visual universe
        </h2>
      </section>

      <section
        id="contact"
        className="min-h-[50vh] border-t border-white/10 px-6 py-32 sm:px-12"
      >
        <h2 className="text-5xl font-light sm:text-7xl">
          Stay connected.
        </h2>
      </section>
    </main>
  );
}
