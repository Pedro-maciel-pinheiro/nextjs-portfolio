'use client'

import { cardVariants, textVariants } from '@/utils/motion'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import React from 'react'
import { SectionHeading } from '../section-heading'
import { Skills } from '@/components/skills/skills'
import { useSectionInView } from '@/hooks/hooks'

export default function About() {
  const { ref } = useSectionInView('about')
  const t = useTranslations('about')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <section
      ref={ref}
      id="about"
      className="relative flex h-auto w-full flex-col items-center 
      justify-center overflow-hidden "
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
        className="mx-auto flex flex-col items-center justify-center"
      >
        <motion.div variants={cardVariants}>
          <SectionHeading heading={'title_about'} className="my-5" />
        </motion.div>

        <motion.article
          variants={cardVariants}
          className="border-gradient-to-r hover:shadow-3xl group relative mx-auto flex flex-col items-start gap-6 rounded-3xl border-2 bg-white/80 from-blue-200 via-purple-200 to-pink-200 p-8 font-semibold shadow-2xl backdrop-blur-sm transition-all duration-500 dark:border-gray-700 dark:bg-white/5 md:p-12"
        >
          <motion.div className="relative z-10 space-y-6">
            <motion.div variants={textVariants} className="flex items-center gap-4">
              <div className="h-12 w-1 rounded-full bg-gradient-to-b from-blue-500 to-purple-500" />
              <motion.h2
                className="text-2xl font-bold md:text-3xl"
                whileHover={{ x: 10 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {t('subtitle')}
              </motion.h2>
            </motion.div>

            <motion.p
              variants={textVariants}
              className="relative pl-8 text-lg leading-relaxed text-gray-900 dark:text-gray-200 md:text-xl"
            >
              <span className="absolute left-2 top-0 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text font-serif text-4xl leading-none text-transparent">
                "
              </span>
              {t('lorem')}
              <span className="absolute -bottom-2 right-0 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text font-serif text-4xl leading-none text-transparent">
                "
              </span>
            </motion.p>

            {/* Enhanced animated underline with vibrant gradient */}
            <motion.div
              className="ml-8 h-1 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              style={{ transformOrigin: 'left' }}
            />
          </motion.div>
        </motion.article>
      </motion.div>

      <motion.div
        className="flex h-full w-full flex-col items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Skills />
      </motion.div>
    </section>
  )
}
