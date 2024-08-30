"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, } from "framer-motion";
import { project_info, } from "@/constant/projects-images";
import Image from "next/image";
import { useTranslations } from "next-intl";
import MaskButton from "../mask-button";
import { fadeInSlider } from "@/utils/motion";

export const Slider = () => {
  const slideRef = useRef<HTMLDivElement | null>(null);
  const [constraint, setConstraint] = useState(0);
  const t = useTranslations("project");

  useEffect(() => {
    if (slideRef.current) {
      const slideWidth = slideRef.current.offsetWidth;
      const totalWidth = slideRef.current.scrollWidth;
      setConstraint(slideWidth - totalWidth);
    }
  }, []);

  return (
    <motion.section ref={slideRef} className="mt-16  h-full w-full 
    overflow-hidden">
      <motion.ul
        drag="x"  
        dragConstraints={{ right: 0, left: constraint }}
        className="flex h-full w-full cursor-grab gap-6"
      >
        {project_info.map((item, index) => (
          <motion.li
            key={index}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true }}
            variants={fadeInSlider}
            custom={index}
            className="min-w-[350px] min-h-96 rounded-lg border-2 border-black
             dark:border-white md:min-w-[450px] xl:min-w-[550px] relative"
          >
            
            <Image
              draggable={false}
              src={item.images}
              alt=""
              width={600}
              height={600}
              className="rounded-se-lg border-b-4 border-gray-500 object-cover"
            />
           <p className="mx-2 text-sm absolute z-10 font-bold">{t(item.tagline)}</p>
            <div className="flex h-64 w-full flex-col items-center justify-between 
            font-semibold bg-white/80 dark:bg-black/80">
              <div className="flex flex-col items-center border-b-2 border-b-black dark:border-white p-4">
                <h2>{t(item.title)}</h2>
                <span>{t("title-h3")}</span>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 md:w-96">
                {item.data.map((skill) => (
                  <span
                    key={skill.name}
                    className="flex flex-col items-center justify-center"
                  >
                    <p className="text-lg md:text-2xl">{skill.logo}</p>
                    <p className="text-[10px] md:text-sm">{skill.name}</p>
                  </span>
                ))}
              </div>

              <div className="flex h-12 w-full items-center justify-center ">
                <MaskButton
                  linkBasePath={item.project_link}
                  title={item.title_button}
                  btnColor={
                    "border-white dark:border-black bg-black text-white dark:bg-white dark:text-black w-56 md:w-80 font-semibold after:bg-blue-600 text-lg hover:text-white "
                  }
                  target={"blank"}
                />
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
};
