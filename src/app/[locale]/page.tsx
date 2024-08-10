import About from "./about/page";
import Contact from "./contact/page";
import Hero from "./home/hero";
import Projects from "./projects/page";

export default function Home() {
  return (
    <main
      className={`w-full flex flex-col justify-center items-center  overflow-hidden
        min-h-screen  mx-auto `}
    >
      <Hero />
     
    </main>
  );
}
