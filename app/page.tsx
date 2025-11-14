import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <footer className="text-center py-8 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Your Name — Built with Next.js & Tailwind
      </footer>
    </>
  );
}
