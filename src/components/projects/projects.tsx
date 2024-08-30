"use client";

import React from "react";
import { SectionHeading } from "@/components/section-heading";
import { Slider } from "@/components/projects/slider";
import { useSectionInView } from "@/hooks/hooks";

export default function Projects() {
  const { ref } = useSectionInView("projects");
  return (
    <section
      ref={ref}
      id="projects"
      className="flex min-h-[90vh] w-full items-center justify-center bg-primary dark:bg-black/80"
    >
      <div className="flex max-w-[90%] flex-col items-center justify-center overflow-hidden md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        <SectionHeading heading={"title_project"} />

        <Slider />
      </div>
    </section>
  );
}
