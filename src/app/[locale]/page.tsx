"use client";
import { useTheme } from "next-themes";

import { Hero } from "./home/hero";

export default function Home() {
  const { resolvedTheme } = useTheme();

  return (
    <main
      className={`w-full flex flex-col justify-center items-center 
        min-h-screen bg-white/5 dark:bg-black/30  mx-auto`}
    >
      
    </main>
  );
}
