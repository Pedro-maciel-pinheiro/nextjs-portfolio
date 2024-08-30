"use client";
import React from "react";
import { SectionHeading } from "../section-heading";
import { Skill_data_1, Skill_data_2 } from "@/constant/skills-index";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInFromNegativeX, fadeInFromX } from "@/utils/motion";

export const Skills = () => {
  return (
    <section className="flex h-auto w-full md:mb-36 items-center justify-center ">
      <div className="flex h-full w-full max-w-[90%] flex-col items-center justify-center md:max-w-xl lg:max-w-3xl xl:max-w-4xl">
        <SectionHeading heading={"title_skill"} />

        <ul className="grid grid-cols-3 items-center gap-8 md:grid-cols-4
         lg:grid-cols-6 xl:grid-cols-9">
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
                className="flex flex-col items-center gap-2 "
              >
                <span className={`text-5xl ${skill.text_style}`}>
                  {skill.logo}
                </span>
                <p className="font-semibold text-[15px]">{skill.name}</p>
              </Link>
            </motion.li>
          ))}

          {Skill_data_2.map((skill, index) => (
            <motion.li
              key={skill.name}
              initial={"hidden"}
              whileInView={"visible"}
              viewport={{ once: true }}
              custom={index}
              variants={fadeInFromNegativeX}
            >
              <Link
                target="blank"
                href={skill.href}
                className="flex flex-col items-center  gap-2"
              >
                <span className={`text-5xl ${skill.text_style}`}>
                  {skill.logo}
                </span>
                <p className="font-semibold text-[15px]">{skill.name}</p>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
