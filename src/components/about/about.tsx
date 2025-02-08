"use client";
import { slideInFromBottom } from "@/utils/motion";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";
import { SectionHeading } from "../section-heading";
import { Skills } from "@/components/skills/skills";
import { useSectionInView } from "@/hooks/hooks";

export default function About() {
  const { ref } = useSectionInView("about");
  const t = useTranslations("about");
  return (
    <section
      ref={ref}
      id="about"
      className="flex h-auto w-full scroll-m-8 flex-col items-center justify-center md:h-screen"
    >
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
        variants={slideInFromBottom(0.5)}
        className="flex flex-col items-center justify-center"
      >
        <SectionHeading heading={"title_about"} />

        <motion.article className="mx-auto flex flex-col items-start gap-2 rounded-lg border-2 border-black p-8 font-semibold backdrop-blur-sm dark:border-white">
          <motion.h2 className="text-xl">{t("subtitle")}</motion.h2>

          <motion.p className="text-lg">{t("lorem")}</motion.p>
        </motion.article>
      </motion.div>

      <div className="flex h-full w-full flex-col items-center">
        <Skills />
      </div>
    </section>
  );
}
