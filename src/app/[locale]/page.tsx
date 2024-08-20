

import Contact from "./contact/page";
import Hero from "./home/hero";


export default function Home() {
  return (
    <main
      className={`mx-auto flex min-h-screen w-full flex-col items-center justify-center overflow-hidden`}
    >
      <Hero />
      <Contact />
    </main>
  );
}
