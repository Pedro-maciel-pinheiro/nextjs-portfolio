"use client";

import { useInViewHook } from "@/hooks/in-view";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { slideInFromBottom } from "@/utils/motion";
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
      <div
        className="min-h-[95vh] w-full flex flex-col  
      items-center justify-center  max-w-7xl mx-auto "
      >
        <motion.div
          ref={ref}
          initial={"hidden"}
          animate={inView ? "visible" : "hidden"}
          variants={slideInFromBottom(0.2)}
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
        <div
          className=" w-full max-w-[90%] md:max-w-full h-full
         flex flex-col md:flex-row items-center justify-between border-2 border-black dark:border-white rounded-xl overflow-hidden"
        >
          {dataHolder}
        </div>
      </div>
    </>
  );
};
