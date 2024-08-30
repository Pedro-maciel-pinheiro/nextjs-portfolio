import { slideInFromBottom } from "@/utils/motion";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";

type SectionHeadingProps = {
  heading: string;
};

export const SectionHeading = ({ heading }: SectionHeadingProps) => {
  const t = useTranslations("section-header-text");
  return (
    <motion.h2
      initial={"hidden"}
      whileInView={"visible"}
      variants={slideInFromBottom(0.2)}
      viewport={{
        once: true,
      }}
      className="mt-20 mb-20 text-3xl  md:text-4xl font-semibold capitalize
       text-black dark:text-white"
    >
      {t(heading)}
    </motion.h2>
  );
};
