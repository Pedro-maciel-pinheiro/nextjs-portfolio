import Contact from "@/components/contact/contact-form";
import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Projects from "@/components/projects/projects";

import Experience from "@/components/exp/experiences";

export default function Home() {
  return (
    <main
      className={`mx-auto flex min-h-screen w-full flex-col items-center justify-center overflow-hidden`}
    >
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
