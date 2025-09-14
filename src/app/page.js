'use client';

import Image from "next/image";
import Hero from "../components/Hero";
import About from "../components/About";
import Rapidfire from "../components/Rapidfire";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import GitHubStats from "../components/GitHubStats";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Rapidfire />
      <Skills />
      <Projects />
      <GitHubStats />
      <Contact />
    </>
  );
}
