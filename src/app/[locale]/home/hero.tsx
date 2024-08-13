"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SwiperSkills } from "@/app/[locale]/skills/components/swiper-skills";
import { useInViewHook } from "@/hooks/in-view";
import { slideInFromBottom } from "@/utils/motion";
import { Experiences } from "@/app/[locale]/skills/components/experiences";
import { ProjectEcommerce } from "@/app/[locale]/projects/components/project-ecommerce";

export default function Hero() {
  const { ref, inView } = useInViewHook();
  const t = useTranslations("home");
  const projectText = useTranslations("project");

  return (
    <>
      <div
        className={`flex items-center 
      justify-center transition-all duration-300
     min-h-screen w-full 
     `}
      >
        <div
          className="w-full h-screen mx-auto  
        bg-primary
         dark:bg-black/80
        flex items-center justify-center 
        font-semibold  "
        >
          <motion.div
            initial={"hidden"}
            animate={"visible"}
            variants={slideInFromBottom(0.2)}
            className="flex flex-col w-full items-center justify-center gap-2 "
          >
            <h1 className="text-4xl md:text-6xl flex flex-col text-center  ">
              Front-end Developer <span>& Web Designer</span>
            </h1>
            <p className="text-lg w-[400px] text-center">{t("description")}</p>
          </motion.div>
        </div>
      </div>

      <div
        className="h-full md:h-[700px] bg-primary  w-full border-white overflow-hidden
         dark:bg-black/80 flex flex-col  items-center justify-evenly  "
      >
        <motion.div
          ref={ref}
          initial={"hidden"}
          animate={inView ? "visible" : "hidden"}
          variants={slideInFromBottom(0.2)}
          className="flex flex-col items-center text-center
           justify-center font-semibold gap-2 mb-8 "
        >
          <h1 className=" flex  text-center text-4xl md:text-5xl ">
            {t("skills-h1")} & {t("skills-p")}
          </h1>
          <p className="text-lg w-72">{t("skills-text")}</p>
        </motion.div>

        <div
          className="flex flex-col-reverse md:flex-row  w-[90%] md:w-full h-full max-w-7xl
        mb-8 border-2 border-black dark:border-white
         rounded-md backdrop-blur-sm dark:backdrop-blur-sm"
        >
          <div className="flex w-full h-full ">
            <SwiperSkills />
          </div>

          <div className="flex w-full h-full ">
            <Experiences />
          </div>
        </div>
      </div>

      <div
        className=" bg-primary  w-full min-h-screen overflow-hidden
         dark:bg-black/80 flex flex-col  items-center  justify-center"
      >
        <div className="flex flex-col items-center justify-center gap-4 mb-8 mt-4">
          <h1 className="text-4xl md:text-5xl flex flex-col font-semibold ">{projectText("main-title")}</h1>
          <p className="text-lg font-medium">{projectText("subtitle")}</p>
        </div>
        <motion.div
          className="border-2 border-black dark:border-white rounded-md w-full h-full flex flex-col
        items-center justify-evenly max-w-7xl mx-auto mb-8 backdrop-blur-sm overflow-hidden"
        >
          <ProjectEcommerce />
        </motion.div>
      </div>

      <div className="h-screen">

      </div>
    </>
  );
}
