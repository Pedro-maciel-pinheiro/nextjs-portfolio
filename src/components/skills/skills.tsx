"use client";
import React from "react";
import { SectionHeading } from "../section-heading";
import { Skill_data_1, Skill_data_2 } from "@/constant/skills-index";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInFromX } from "@/utils/motion";

export const Skills = () => {
  const animationDelay = 0.5;
  return (
    <section className="flex h-auto w-full items-center justify-center md:mb-36">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <SectionHeading heading={"title_skill"} />

        <ul className="grid grid-cols-4 items-center gap-8 sm:grid-cols-7 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12">
          {Skill_data_1.map((skill, index) => (
            <motion.li
              key={skill.name}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: true }}
              custom={index}
              variants={fadeInFromX}
            >
              <Link
                target="blank"
                href={skill.href}
                className="flex flex-col items-center gap-2"
              >
                <span className={`text-5xl ${skill.text_style}`}>
                  {skill.logo}
                </span>
                <p className="text-[12px] font-semibold md:text-sm">
                  {skill.name}
                </p>
              </Link>
            </motion.li>
          ))}

          {Skill_data_2.map((skill, index) => (
            <motion.li
              key={skill.name}
              initial={{ opacity: 0, y: -100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * animationDelay,
                duration: 0.3,
                stiffness: 10,
                damping: 5,
                mass: 0.2,
              }}
            >
              <Link
                target="blank"
                href={skill.href}
                className="flex flex-col items-center gap-2"
              >
                <span className={`text-5xl ${skill.text_style}`}>
                  {skill.logo}
                </span>
                <p className="text-[12px] font-semibold md:text-sm">
                  {skill.name}
                </p>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
