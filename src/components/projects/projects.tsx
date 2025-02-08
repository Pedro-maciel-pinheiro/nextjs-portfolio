"use client";

import React from "react";
import { Slider } from "@/components/projects/slider";
import { useSectionInView } from "@/hooks/hooks";

export default function Projects() {
  const { ref } = useSectionInView("projects");
  return (
    <section ref={ref} id="projects" className="h-full w-full">
      <Slider />
    </section>
  );
}
