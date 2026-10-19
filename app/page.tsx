
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MusicSection from "@/components/MusicSection";
import AboutSection from "@/components/AboutSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#03070c] text-white">
      <Navbar />
      <Hero />
      <MusicSection />
      <AboutSection/>
      <GallerySection/>
      <ContactSection/>

    </main>
  );
}
