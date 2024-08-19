"use client";
import { Skill_data, Skill_data_1, Skill_data_2 } from "@/constant/icons-index";
import { useInViewHook } from "@/hooks/in-view";
import { motion } from "framer-motion";
import Link from "next/link";

export const SkillsIcons = () => {
  const { ref, inView } = useInViewHook();
  const animationDelay = 0.5;
  return (
    <motion.div
      ref={ref}
      className="flex h-full max-w-7xl flex-col items-center justify-center gap-7 rounded-lg backdrop-blur-md dark:backdrop-blur-none"
    >
      <ul className="flex gap-4">
        {Skill_data_1.map((skill, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: -120 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -120 }}
            transition={{ delay: index * animationDelay, duration: 0.5 }}
          >
            <Link
              href={skill.href}
              target="blank"
              className="flex w-20 flex-col items-center gap-1"
            >
              <skill.Image
                size={50}
                className={`rounded-md ${skill.text_style}`}
              />
              <p className="text-sm font-semibold">{skill.skill_name}</p>
            </Link>
          </motion.li>
        ))}
      </ul>
      <ul className="flex gap-4">
        {Skill_data_2.map((skill, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 120 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 120 }}
            transition={{ delay: index * animationDelay, duration: 0.5 }}
          >
            <Link
              href={skill.href}
              target="blank"
              className="flex w-20 flex-col items-center gap-1"
            >
              <skill.Image
                size={50}
                className={`rounded-md ${skill.text_style}`}
              />
              <p className="text-sm font-semibold">{skill.skill_name}</p>
            </Link>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};
