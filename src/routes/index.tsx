import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Contact } from "@/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A S Vincent — Cybersecurity Portfolio" },
      { name: "description", content: "Portfolio of A S Vincent — cybersecurity student building secure systems, network tools, and modern software." },
      { property: "og:title", content: "A S Vincent — Cybersecurity Portfolio" },
      { property: "og:description", content: "Cybersecurity student building secure systems, network tools, and modern software." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="site-shell relative min-h-screen overflow-x-hidden">
      <SmoothScroll />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
