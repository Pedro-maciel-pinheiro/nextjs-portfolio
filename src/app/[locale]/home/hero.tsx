"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { MainSkillsIcons } from "@/app/[locale]/skills/components/swiper-skills";
import { useInViewHook } from "@/hooks/in-view";
import { slideInFromBottom } from "@/utils/motion";
import { Experiences } from "@/app/[locale]/skills/components/experiences";

import { CustomCardProject } from "@/components/custom/custom-card-project";

import { CardContent } from "@/components/custom/card-content";
import {
  projects_icons_eco,
  projects_icons_phone,
} from "@/constant/projects-images";
import Contact from "../contact/page";

export default function Hero() {
  const { ref, inView } = useInViewHook();
  const t = useTranslations("home");

  return (
    <>
      <div
        className={`flex min-h-screen w-full items-center justify-center transition-all duration-300`}
      >
        {/* main text */}
        <div className="mx-auto flex h-screen w-full items-center justify-center bg-primary font-semibold dark:bg-black/80">
          <motion.div
            initial={"hidden"}
            animate={"visible"}
            variants={slideInFromBottom(0.2)}
            className="flex w-full max-w-[100%] flex-col items-center justify-center gap-2 md:max-w-full"
          >
            <h1 className="flex flex-col text-center text-3xl md:text-6xl">
              {t("main-h1")} <span>& Web Designer</span>
            </h1>
            <p className="w-[400px] max-w-[90%] text-center text-sm md:max-w-full md:text-lg">
              {t("description")}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Skills */}

      <div className="flex h-full w-full  items-center justify-center  bg-primary dark:bg-black/80">
        <div className="mb-14 mt-14 flex h-full w-full  max-w-7xl flex-col items-center justify-evenly overflow-hidden md:h-[700px] ">
          <motion.div
            ref={ref}
            initial={"hidden"}
            animate={inView ? "visible" : "hidden"}
            variants={slideInFromBottom(0.2)}
            className="mb-8 flex flex-col items-center justify-center gap-2 text-center font-semibold"
          >
            <h1 className="flex text-center text-3xl md:text-5xl">
              {t("skills-h1")} & {t("skills-p")}
            </h1>
            <p className="w-72 text-sm md:text-lg">{t("skills-text")}</p>
          </motion.div>

          <div className="mb-8 flex h-full flex-col-reverse rounded-xl border-2 border-black backdrop-blur-sm dark:border-white dark:backdrop-blur-none md:w-full md:max-w-[98%] md:flex-row max-w-[90%] ">
            <div className="flex h-full w-full">
              <MainSkillsIcons />
            </div>

            <div className="flex h-full w-full">
              <Experiences />
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}

      <div className="w-full bg-primary dark:bg-black/80">
        <CustomCardProject
          h1_text={"main-title"}
          h3_text={"subtitle"}
          dataHolder={
            <CardContent
              title={"Next.js E-commerce"}
              icons={projects_icons_eco}
              videopath={"/video/dev-market-mainpage.mp4"}
              videolink={"https://dev-market-redux.vercel.app/"}
              project_info_1={"info-text-1"}
              project_info_2={"info-text-2"}
              href_1={"https://dev-market-redux.vercel.app/"}
              href_2={"/projects/project-1"}
            />
          }
        />
      </div>
      <div className="w-full bg-primary dark:bg-black/80">
        <CustomCardProject
          h1_text={"main-title-2"}
          h3_text={"subtitle"}
          dataHolder={
            <CardContent
              title={"Next.js Phone ShowCase"}
              icons={projects_icons_phone}
              videopath={"/video/phone-shop.mp4"}
              videolink={"https://phone-shop-mu.vercel.app/"}
              project_info_1={"info-text-3"}
              project_info_2={"info-text-4"}
              href_1={"https://phone-shop-mu.vercel.app/"}
              href_2={"/projects/project-2"}
            />
          }
        />
      </div>

     
    </>
  );
}
