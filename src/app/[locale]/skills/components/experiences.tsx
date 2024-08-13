"use client";

import { experienceItems } from "@/constant/experiences-information";
import { useInViewHook } from "@/hooks/in-view";
import {
  fadeIn,
  underlineHeight,

} from "@/utils/motion";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export const Experiences = () => {
  const [visiblePopups, setVisiblePopups] = useState([false, false, false]);
  const { ref, inView } = useInViewHook();
  const t = useTranslations("experiences");
  const animationDelay = 0.8;
  const handleMouseEnter = (index: any) => {
    const updatedPopups = visiblePopups.map((_, i) => i === index);
    setVisiblePopups(updatedPopups);
  };

  const handleMouseLeave = () => {
    setVisiblePopups([false, false, false]);
  };

  return (
    <motion.div
      ref={ref}
      initial={"hidden"}
      animate={inView ? "visible" : "hidden"}
      className="w-full h-full flex flex-col relative
     items-start justify-start mb-8 mt-2 md:mt-0 md:mb-0"
    >
      <div className="hidden lg:flex flex-col items-center  absolute w-2 h-full">
        <motion.span
          variants={underlineHeight(4)}
          className="mx-6 w-1 max-w-h-72 bg-black dark:bg-white rounded-full  "
        />

        <FaChevronDown className="relative" size={20} />
        <div className="   font-bold text-gray-500">Hover</div>
      </div>

      {experienceItems.map((item, index) => (
        <div
          key={index}
          className="flex justify-center font-semibold cursor-pointer transition-all 
          duration-500 items-center w-full h-20 md:h-36 "
        >
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: index * animationDelay, duration: 1 }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className=" flex  items-center justify-center w-full h-[50px] md:h-full  gap-2 "
          >
            <div className="font-extrabold w-64 md:w-full flex justify-center items-center">
              {item.year}{" "}
              <span className="mx-4 w-1 h-10 bg-black dark:bg-white rounded-full" />
            </div>

            {visiblePopups[index] && (
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn(0.1)}
                className="-translate-y-20 absolute w-96 h-28 bg-black  dark:bg-white rounded-lg shadow-xl flex items-center justify-center text-center p-2"
              >
                <p className="text-sm text-white dark:text-black">
                  {t(`dialog-text-${index + 1}`)}
                </p>
              </motion.div>
            )}

            <div className=" mx-2 font-bold w-full flex items-center justify-start ">
              <p className="text-sm md:text-lg ">{t(`title-${index + 1}`)}</p>
            </div>
          </motion.section>
        </div>
      ))}
    </motion.div>
  );
};
