import { experiences_info } from "@/constant/experiences-information";
import { slideInFromBottom } from "@/utils/motion";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React from "react";

export const Timeline = () => {
  const t = useTranslations("experience");
  return (
    <motion.ol className="mx-auto items-center backdrop-blur-sm">
      {experiences_info.map((item) => (
        <motion.li
          key={item.title}
          initial="hidden"
          whileInView={"visible"}
          viewport={{
            once: true,
          }}
          variants={slideInFromBottom(0.5)}
          className="relative mb-6 py-1 font-semibold sm:mb-0"
        >
          <div className="flex items-center">
            <div className="z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white ring-0 ring-black dark:bg-black dark:ring-white md:ring-8">
              <span className="text-2xl text-black dark:text-white">
                {item.icon}
              </span>
            </div>
            <span className="h-0.5 w-full bg-gray-500 dark:bg-white sm:flex"></span>
          </div>
          <div className="mt-3 sm:pe-8">
            <h3 className="p-1 text-lg font-semibold text-black dark:text-white">
              {t(item.title)}
            </h3>
            <time className="mb-2 flex gap-2 p-1 text-sm leading-none text-black dark:text-white">
              <p>{t(item.date)}</p>
              {"-"}
              <p>{item.location}</p>
            </time>
            <p className="w-fit p-1 text-base text-gray-800 dark:text-gray-200">
              {t(item.description)}
            </p>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  );
};
