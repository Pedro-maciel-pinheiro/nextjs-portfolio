"use client";
import { useTheme } from "next-themes";

import { Hero } from "./home/hero";

export default function Home() {
  const { resolvedTheme } = useTheme();

  return (
    <main
      className={`w-full flex flex-col justify-center items-center 
        min-h-screen bg-fixed ${
          resolvedTheme === "dark" ? "hero-dark" : "hero-light"
        }`}
    >
      <Hero />
    </main>
  );
}
