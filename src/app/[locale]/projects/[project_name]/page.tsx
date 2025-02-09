"use client";

import { project_info } from "@/constant/projects-images";
import { SearchParamsProps } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { CustomButtom } from "@/components/custom-button";
import { SiGithub } from "react-icons/si";
import { useSectionInView } from "@/hooks/hooks";

export default function page({ params }: SearchParamsProps) {
  const { project_name } = params;
  const { ref } = useSectionInView("projects");
  const t = useTranslations(`projects.${project_name}`);

  const project_data = project_info;

  // Find the project that matches the project name from the URL params
  const selectedProject = project_data.find(
    (project) => project.name === project_name,
  );

  // If the project is not found, return a message
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

  const animatedDelay = 0.2;

  return (
    <div className="mx-auto flex min-h-screen w-full items-center justify-center bg-white/80 dark:bg-black/80">
      <motion.div
      
        className="mx-4 my-8 w-full h-full flex flex-col "
        variants={fadeIn(0)}
        initial="hidden"
        whileInView={"visible"}
      >
        <Card
          className="flex h-full w-full lg:max-w-7xl items-center justify-center
         border-gray-100 bg-white/50 shadow-2xl shadow-black/80 dark:border-gray-400
          dark:bg-black/90 dark:shadow-white mx-auto "
        >
          <CardContent className="relative grid h-full w-full gap-6 p-2
           md:grid-cols-2 lg:max-h-[800px]">
            <div className="h-full w-full">
              <video
                src={selectedProject.video}
                autoPlay
                loop
                controls
                className="h-72 w-full rounded-lg border border-gray-400 
                object-cover object-center dark:border-gray-100 md:h-[700px]"
              />
            </div>
            <div className="flex flex-col justify-center items-center md:items-start p-1 gap-4">
              <h1 className=" text-3xl font-bold md:text-5xl ">{t("title")}</h1>
              <div className="flex flex-col gap-4 max-w-96 p-1">
                <h2 className="text-xl font-semibold md:text-2xl">
                  {t("subtitle")}
                </h2>
                <div className="flex flex-col w-full lg:w-[450px] gap-2  p-1">
                  <p className="text-start font-semibold text-lg">
                    {t("description")}
                  </p>

                  <ul className="border-t border-gray-400 dark:border-gray-100 pt-2">
                    {t
                      .raw("technologies")
                      .map((tech: string, index: number) => (
                        <li className="text-sm  font-semibold" key={index}>
                          {tech}
                        </li>
                      ))}
                  </ul>
                </div>

                <motion.ul className="grid grid-cols-5 lg:grid-cols-7 gap-6 mt-2 px-1 overflow-hidden">
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
              <div
                className="relative  my-4  border-t-2 border-black
               dark:border-white w-full lg:w-[450px] mx-1"
              >
                <div className="mt-6 flex items-center justify-center md:justify-start gap-6">
                  <Link href={selectedProject.link_website} target="blink">
                    <CustomButtom title={selectedProject.button_text_online} />
                  </Link>
                  <Link href={selectedProject.link_github} target="blink">
                    <CustomButtom
                      title={selectedProject.button_text_github}
                      Icon={SiGithub}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
