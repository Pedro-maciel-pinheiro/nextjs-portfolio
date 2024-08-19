"use client";

import { useInViewHook } from "@/hooks/in-view";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { fadeIn, slideInFromBottom } from "@/utils/motion";
import { ReactElement } from "react";

interface CustomCardProps {
  h1_text: string;
  h3_text: string;

  dataHolder: ReactElement;
}

export const CustomCardProject = ({
  dataHolder,
  h1_text,
  h3_text,
}: CustomCardProps) => {
  const { ref, inView } = useInViewHook();
  const projectText = useTranslations("project");
  return (
    <>
      <motion.div
        ref={ref}
        initial={"hidden"}
        animate={inView ? "visible" : "hidden"}
        className="min-h-[95vh] w-full flex flex-col  
      items-center justify-center  max-w-7xl mx-auto "
      >
        <motion.div
          variants={slideInFromBottom(1)}
          className="flex flex-col items-center justify-center gap-4 mt-14 mb-14"
        >
          <h1 className="text-2xl md:text-5xl flex flex-col font-semibold ">
          {projectText(h1_text)}
          </h1>
          <p
            className="text-sm md:text-lg font-medium text-center
           md:text-start max-w-[80%] md:max-w-[100%]"
          >
            {projectText(h3_text)}
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn(0.2)}
          className=" w-full max-w-[90%] md:max-w-[98%] mx-2 h-full 
          backdrop-blur-sm dark:backdrop-blur-none dark:bg-black/40 
         border-2 border-black dark:border-white rounded-xl overflow-hidden"
        >
          {dataHolder}
        </motion.div>
      </motion.div>
    </>
  );
};
