"use client";

import { Skill_data } from "@/constant/icons-index";
import { useInViewHook } from "@/hooks/in-view";
import { motion } from "framer-motion";

import Link from "next/link";

export const SkillsIcons = () => {
  const { ref, inView } = useInViewHook();
  const animationDelay = 0.2;
  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6   gap-6 md:gap-4  
     items-center justify-center max-w-7xl mx-auto "
    >
      {Skill_data.map((icon, index) => (
        <motion.div
          key={icon.skill_name}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: index * animationDelay, duration: 0.3 }}
          className="flex items-center justify-center "
        >
          <Link
            href={icon.href}
            className="flex flex-col items-center justify-center gap-2 w-14 md:w-20 h-20"
            target="blank"
          >
            <icon.Image
              size={45}
              className={`rounded-sm hover:scale-105  
              transition-all duration-300 ${icon.text_style}`}
            />
            <p className="text-[12px] md:text-sm font-medium text-center">{icon.skill_name}</p>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};
