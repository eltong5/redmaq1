"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/sections/HeroSection";
import MissionVisionSection from "../components/sections/MissionVisionSection";
import ValuesSection from "../components/sections/ValuesSection";
import ServicesSection from "../components/sections/ServicesSection";

const Index = () => {
  const [dark, setDark] = useState<boolean>(false);

  // Theme persistence and detection
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initial = saved ? saved === "dark" : prefersDark;
    setDark(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header dark={dark} onToggleTheme={() => setDark((d) => !d)} />
      
      <main className="flex-1">
        <HeroSection />
        
        <section id="nosotros" className="container-x py-24 fade-in">
          <MissionVisionSection />
        </section>
        
        <section id="valores" className="container-x py-24 bg-muted/30 fade-in">
          <ValuesSection />
        </section>
        
        <section id="servicios" className="container-x py-24 fade-in">
          <ServicesSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
