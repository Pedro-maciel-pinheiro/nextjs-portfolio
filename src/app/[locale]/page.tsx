import { ProjectShowCase } from "@/components/skills/relume";
import About from "./about/page";
import Contact from "./contact/page";
import Hero from "./home/hero";
import Projects from "./projects/page";

export default function Home() {
  return (
    <main
      className={`mx-auto flex min-h-screen w-full flex-col items-center justify-center overflow-hidden`}
    >
      <Hero />
    </main>
  );
}
