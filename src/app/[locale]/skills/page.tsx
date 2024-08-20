"use client";
import { SkillsIcons } from "@/components/skills/skills-icons";
import { useInViewHook } from "@/hooks/in-view";
import { slideInFromBottom } from "@/utils/motion";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { MainSkillsIcons } from "./components/swiper-skills";

export default function Skills() {
  const { ref, inView } = useInViewHook();
  const t = useTranslations("home");
  return (
    <>
      <motion.div
        ref={ref}
        initial={"hidden"}
        animate={inView ? "visible" : "hidden"}
        className="grid min-h-screen w-full items-center justify-center gap-16 bg-primary dark:bg-black/80"
      >
        <motion.div
          variants={slideInFromBottom(0.2)}
          className="mt-16 flex flex-col items-center justify-center gap-2 text-center"
        >
          <h1 className="flex text-center text-3xl md:text-6xl">
            {t("skills-h1")}
          </h1>
          <p className="w-72 text-sm md:text-lg">{t("skills-text")}</p>
        </motion.div>

        <motion.div
          variants={slideInFromBottom(0.2)}
          className="flex h-[500px] flex-col"
        >
          <div>
            <div className="block md:hidden">
              <MainSkillsIcons />
            </div>

            <div className="hidden md:block">
              <SkillsIcons />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
