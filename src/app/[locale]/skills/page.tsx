"use client";
import { SkillsIcons } from "@/components/skills/skills-icons";
import { Skill_data } from "@/constant/icons-index";
import { useInViewHook } from "@/hooks/in-view";
import { slideInFromBottom } from "@/utils/motion";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";
import { MainSkillsIcons } from "./components/swiper-skills";

export default function Skills() {
  const { ref, inView } = useInViewHook();
  const t = useTranslations("home");
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-16 bg-primary dark:bg-black/80 md:justify-around">
      <motion.div
        ref={ref}
        initial={"hidden"}
        animate={inView ? "visible" : "hidden"}
        variants={slideInFromBottom(0.2)}
        className="flex h-full w-full flex-col items-center justify-center gap-2 text-center font-semibold"
      >
        <h1 className="flex text-center text-3xl md:text-6xl">
          {t("skills-h1")}
        </h1>
        <p className="w-72 text-sm md:text-lg">{t("skills-text")}</p>
      </motion.div>

      <div className="block md:hidden">
        <MainSkillsIcons />
      </div>

      <div className="hidden md:block">
        <SkillsIcons />
      </div>
    </div>
  );
}
