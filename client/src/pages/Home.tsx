/**
 * Home Page — Marcus Chen Portfolio
 * Asymmetric left-rail layout with bioluminescent grid motif throughout.
 * Design: Bioluminescent Grid — black canvas, phosphor green, slate surfaces.
 */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import OpenSource from "@/components/OpenSource";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

// Topology line divider between sections
function SectionDivider() {
  return (
    <div className="relative h-px overflow-visible">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1e2d3d] to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#00ff88]/40 ring-4 ring-[#00ff88]/10" />
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e2e8f0]">
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <OpenSource />
        <SectionDivider />
        <Blog />
        <SectionDivider />
        <Contact />
      </main>
    </div>
  );
}
