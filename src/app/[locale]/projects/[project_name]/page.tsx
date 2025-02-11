"use client";

import { project_info } from "@/constant/projects-images";
import { SearchParamsProps } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Link from "next/link";
import { Link as Navlink } from "@/navigation";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeIn, slideInFromBottom } from "@/utils/motion";
import { CustomButtom } from "@/components/custom-button";
import { SiGithub } from "react-icons/si";
import { VideoPlayer } from "@/components/video-player";
import { ArrowLeft, ArrowRight } from "lucide-react";
;

export default function page({ params }: SearchParamsProps) {
  const { project_name } = params;

  const t = useTranslations(`projects.${project_name}`);
  const nav_project = useTranslations('nav-project');

  const project_data = project_info;

  const animatedDelay = 0.2;

  const currentProjectIndex = project_data.findIndex(
    (project) => project.name === project_name
  )

  const nextProject = project_data[(currentProjectIndex + 1) % project_data.length]
  const previousProject = project_data[
    currentProjectIndex === 0 ? project_data.length - 1 : currentProjectIndex - 1
  ]

  const selectedProject = project_data[currentProjectIndex]


  if (!selectedProject) {
    return (
      <div className="mx-auto flex min-h-screen w-full items-center justify-center bg-black/80">
        <Card className="mx-auto flex h-full w-full max-w-7xl items-center justify-center bg-white p-8">
          <p className="text-lg font-semibold text-black">Project not found</p>
          <Link href={"/"} className="text-blue-50 underline">
            Return to main page
          </Link>
        </Card>
      </div>
    );
  }


  return (
    <div className="mx-auto flex min-h-screen w-full items-center
     justify-center bg-white/80 dark:bg-black/80">
      <motion.div
        className="mx-8 my-4 w-full h-full flex flex-col "
        variants={fadeIn(0)}
        initial="hidden"
        whileInView={"visible"}
      >
        <div className="mt-5 mb-2 lg:max-w-5xl w-full mx-auto flex justify-between items-center font-semibold capitalize text-lg">
          <Navlink href={`/projects/${previousProject.name}`} className="underline  flex items-center gap-1 hover:-translate-x-1 transition-all duration-200">
            <ArrowLeft className="mb-1" /> <p>{nav_project('back-button')}</p>
          </Navlink>
          <span aria-hidden="true">{nav_project('projects-page')}</span>
          <Navlink href={`/projects/${nextProject.name}`} className="underline  flex items-center gap-1 hover:translate-x-1 transition-all duration-200">
            <p>{nav_project('next-button')}</p> <ArrowRight className="mb-1" />
          </Navlink>
        </div>
        <Card
          className="flex h-full w-full lg:max-w-5xl items-center justify-center 
         border-gray-100 bg-white/50 shadow-2xl shadow-black/80 dark:border-gray-400
          dark:bg-black/90 dark:shadow-white mx-auto "
        >
          <CardContent className="relative flex flex-col items-center  h-full w-full gap-4 p-3">
            <div className="h-full w-full">
              <div className="flex flex-col items-start gap-4">
                <h1 className=" text-3xl font-bold md:text-5xl ">{t("title")}</h1>
                <h2 className="text-xl font-semibold md:text-2xl">{t("subtitle")}</h2>
              </div>
              <Link href={selectedProject.link_website} target="_blank" >
                <VideoPlayer videoSrc={selectedProject.video} />
              </Link>
            </div>

            <section className="flex flex-col justify-center items-center 
            md:items-start  gap-4 w-full h-full p-1">

              <div className="flex flex-col gap-4  ">
                <h2 className="text-xl font-semibold md:text-2xl">
                  {t("subtitle")}
                </h2>
                <div className="flex flex-col w-full  gap-2  ">
                  <p className="text-start font-semibold text-lg md:text-xl">
                    {t("description")}
                  </p>

                  <ul className="border-t border-gray-400 dark:border-gray-100 pt-2">
                    {t
                      .raw("technologies")
                      .map((tech: string, index: number) => (
                        <li className="text-sm md:text-lg  font-semibold" key={index}>
                          {tech}
                        </li>
                      ))}
                  </ul>
                </div>

                <motion.ul className="flex flex-wrap gap-6 mt-2 px-1 overflow-hidden">
                  {selectedProject.data.map((skill, index) => (
                    <motion.li
                      key={skill.name}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * animatedDelay,
                        duration: 0.5,
                        damping: 20,
                        mass: 1,
                        stiffness: 40,
                      }}
                    >
                      <Link
                        href={skill.href}
                        target="blink"
                        className="flex 
                      flex-col items-center gap-1"
                      >
                        <skill.logo
                          size={35}
                          className={`transition-colors duration-300 ${skill.text_style}`}
                        />
                        <p className="text-[12px] font-semibold">
                          {skill.name}
                        </p>
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              <motion.div initial={"hidden"} whileInView={"visible"} viewport={{ once: true }}
                className="relative  my-4  border-t-2 border-black
               dark:border-white w-full  mx-1"
              >
                <motion.div variants={slideInFromBottom(0)} className="mt-4 flex items-center justify-center md:justify-start gap-6">
                  <Link href={selectedProject.link_website} target="blink">
                    <CustomButtom title={selectedProject.button_text_online} />
                  </Link>
                  <Link href={selectedProject.link_github} target="blink">
                    <CustomButtom
                      title={selectedProject.button_text_github}
                      Icon={SiGithub}
                    />
                  </Link>
                </motion.div>
              </motion.div>
            </section>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
