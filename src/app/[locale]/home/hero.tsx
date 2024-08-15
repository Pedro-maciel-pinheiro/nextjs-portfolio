"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { SkillsIcons } from "@/app/[locale]/skills/components/swiper-skills";
import { useInViewHook } from "@/hooks/in-view";
import { slideInFromBottom } from "@/utils/motion";
import { Experiences } from "@/app/[locale]/skills/components/experiences";
import { ProjectEcommerce } from "@/app/[locale]/projects/components/project-ecommerce";
import { ProjectPhone } from "../projects/components/project-phone";
import { CustomCardProject } from "@/components/custom/custom-card-project";

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
        {/* main text */}
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
            className="flex flex-col w-full items-center justify-center gap-2 max-w-[100%] md:max-w-full "
          >
            <h1 className="text-3xl md:text-6xl flex flex-col text-center  ">
              Front-end Developer <span>& Web Designer</span>
            </h1>
            <p className="text-sm md:text-lg w-[400px] text-center max-w-[90%] md:max-w-full">
              {t("description")}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Skills */}

      <div
        className="h-full w-full flex items-center justify-center
       bg-primary dark:bg-black/80  border-white "
      >
        <div
          className="h-full md:h-[700px]   w-full  overflow-hidden
         flex flex-col  items-center justify-evenly  mt-14 mb-14"
        >
          <motion.div
            ref={ref}
            initial={"hidden"}
            animate={inView ? "visible" : "hidden"}
            variants={slideInFromBottom(0.2)}
            className="flex flex-col items-center text-center
           justify-center font-semibold gap-2 mb-8 "
          >
            <h1 className=" flex  text-center text-3xl md:text-5xl ">
              {t("skills-h1")} & {t("skills-p")}
            </h1>
            <p className="text-sm md:text-lg w-72">{t("skills-text")}</p>
          </motion.div>

          <div
            className="flex flex-col-reverse md:flex-row  w-[90%] md:w-full h-full max-w-7xl
        mb-8 border-2 border-black dark:border-white 
         rounded-md backdrop-blur-sm dark:backdrop-blur-sm"
          >
            <div className="flex w-full h-full ">
              <SkillsIcons />
            </div>

            <div className="flex w-full h-full ">
              <Experiences />
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}

      <div className="bg-primary dark:bg-black/80 w-full">
        <CustomCardProject
          h1_text={"main-title"}
          h3_text={"subtitle"}
          dataHolder={<ProjectEcommerce />}
        />
      </div>

      <div className="bg-primary dark:bg-black/80 w-full ">
        <CustomCardProject
          h1_text={"main-title-2"}
          h3_text={"subtitle"}
          dataHolder={<ProjectPhone />}
        />
      </div>

      <div className="min-h-screen w-full bg-primary dark:bg-black/80"></div>
    </>
  );
}
