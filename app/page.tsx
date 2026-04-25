import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import WhatWeBuildSection from "./components/WhatWeBuildSection";
import PillarsSection from "./components/PillarsSection";
import FeaturedToolsSection from "./components/FeaturedToolsSection";
import ExperimentsSection from "./components/ExperimentsSection";
import SageStoneSection from "./components/SageStoneSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WhatWeBuildSection />
      <PillarsSection />
      <FeaturedToolsSection />
      <ExperimentsSection />
      <SageStoneSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
