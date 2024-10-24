"use client";
import React from "react";
import { SectionHeading } from "../section-heading";
import { Timeline } from "../timeline";
import { useSectionInView } from "@/hooks/hooks";

export default function Experience() {
  const { ref } = useSectionInView("experience");
  return (
    <section
      ref={ref}
      id="experience"
      className="flex h-full w-full scroll-m-20 flex-col items-center "
    >
      <div className="flex h-full w-full max-w-[90%] flex-col items-center md:max-w-xl lg:max-w-3xl xl:max-w-4xl">
        <SectionHeading heading={"title_exp"} />
        <Timeline />
      </div>
    </section>
  );
}
