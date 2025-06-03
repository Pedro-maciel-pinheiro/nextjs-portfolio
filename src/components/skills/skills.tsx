'use client'
import React from 'react'
import { SectionHeading } from '../section-heading'
import { Skill_data_1 } from '@/constant/skills-index'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/utils/motion'

export const Skills = () => {


  return (
    <section className="mb-10 flex h-auto w-full items-center justify-center">
      <div className="mx-auto flex h-full w-full max-w-6xl flex-col items-center justify-center px-4">
        <SectionHeading heading={'title_skill'} className="my-10" />

        {/*  skills grid */}
        <motion.ul
          className="grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8 md:gap-4 lg:grid-cols-10 xl:grid-cols-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {Skill_data_1.map((skill, index) => (
            <motion.li
              key={skill.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.2,
                y: -8,
              }}
              whileTap={{ scale: 0.95 }}
              className="group flex justify-center"
            >
              <Link
                target="_blank"
                href={skill.href}
                className="flex flex-col items-center gap-3 rounded-2xl p-3 transition-all duration-300"
              >
                {/* icon display */}
                <motion.div
                  className="relative flex items-center justify-center"
                  whileHover={{ rotateY: 12 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className={`text-5xl ${skill.text_style} transition-all duration-300`}>
                    {skill.logo}
                  </span>
                </motion.div>

                {/* skill name */}
                <motion.p className="text-center text-sm font-medium text-gray-600 dark:text-gray-400">
                  {skill.name}
                </motion.p>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
