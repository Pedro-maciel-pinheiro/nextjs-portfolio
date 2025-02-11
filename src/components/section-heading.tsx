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
    <motion.h2 variants={slideInFromBottom(0)} whileInView={"visible"} viewport={{ once: true }}
      initial={"hidden"} className=" mb-20 mt-20 text-3xl font-semibold capitalize text-black dark:text-white md:text-4xl">
      {t(heading)}
    </motion.h2>
  );
};
