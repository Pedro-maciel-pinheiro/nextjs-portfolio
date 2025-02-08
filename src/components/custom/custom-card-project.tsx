"use client";

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
  const projectText = useTranslations("project");
  return (
    <>
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        className="mx-auto flex min-h-[95vh] w-full max-w-7xl flex-col items-center justify-center"
      >
        <motion.div
          variants={slideInFromBottom(1)}
          className="mb-14 mt-14 flex flex-col items-center justify-center gap-4"
        >
          <h1 className="flex flex-col text-2xl font-semibold md:text-5xl">
            {projectText(h1_text)}
          </h1>
          <p className="max-w-[80%] text-center text-sm font-semibold md:max-w-[100%] md:text-start md:text-lg">
            {projectText(h3_text)}
          </p>
        </motion.div>
        <motion.div
          variants={fadeIn(0.2)}
          className="mx-2 h-full w-full max-w-[90%] overflow-hidden rounded-xl border-2 border-black backdrop-blur-sm dark:border-white dark:bg-black/40 dark:backdrop-blur-none md:max-w-[98%]"
        >
          {dataHolder}
        </motion.div>
      </motion.div>
    </>
  );
};
