"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { project_info } from "@/constant/projects-images";
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
    <motion.section
      ref={slideRef}
      className="mt-16 h-full w-full overflow-hidden"
    >
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
            className="relative min-h-[520px] min-w-[280px] rounded-lg
             border-2 border-black dark:border-white md:min-w-[450px] xl:min-w-[550px]"
          >
            <Image
              draggable={false}
              src={item.images}
              alt=""
              width={600}
              height={600}
              className="rounded-se-lg border-b-4 border-gray-500 object-cover"
            />
            <p className="absolute z-10 mx-2 text-sm font-bold hidden md:block">
              {t(item.tagline)}
            </p>
            <div className="flex h-64 w-full flex-col items-center justify-between bg-white/80 font-semibold dark:bg-black/80">
              <div className="mt-2 flex flex-col items-center ">
                <h2 className="text-xl border-b-2 border-b-black dark:border-white">{t(item.title)}</h2>
                <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
                  <p className="text-start md:text-justify md:w-[400px] max-w-[90%]">
                    {t(item.description)}
                  </p>
                </div>
              </div>

              <div className="flex h-12 w-full items-center justify-center">
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
