import { experiences_info } from '@/constant/experiences-information'
import {
  cardHoverVariants,
  glowVariants,
  iconVariants,
  itemVariantsTimeline,
  lineVariants,
} from '@/utils/motion'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import React from 'react'

export const Timeline = () => {
  const t = useTranslations('experience')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <div className="relative mb-5">
      <motion.ol
        className="relative cursor-pointer space-y-8 md:space-y-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {experiences_info.map((item, index) => (
          <motion.li
            key={item.title}
            variants={itemVariantsTimeline}
            className="group relative"
            style={{ perspective: '1000px' }}
          >
            <div className="flex items-start gap-6 md:gap-10">
              {/* Enhanced Timeline connector */}
              <div className="relative flex flex-col items-center">
                {/* Animated glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-md"
                  variants={glowVariants}
                  initial="initial"
                  animate="animate"
                />

                {/* Icon container with enhanced styling */}
                <motion.div
                  variants={iconVariants}
                  className="md:h-18 md:w-18 relative z-20 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-0.5 shadow-2xl"
                  whileHover={{
                    scale: 1.15,
                    rotate: 10,
                    boxShadow: '0 20px 40px rgba(139, 92, 246, 0.3)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex h-full w-full items-center justify-center rounded-full border border-gray-100 bg-white backdrop-blur-sm dark:border-gray-700 dark:bg-gray-900">
                    <motion.span
                      className="text-2xl drop-shadow-sm filter md:text-3xl"
                      whileHover={{ scale: 1.2, rotate: -10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {item.icon}
                    </motion.span>
                  </div>
                </motion.div>

                {/* Enhanced connecting line */}
                {index < experiences_info.length - 1 && (
                  <div className="relative mt-6">
                    {/* Glow line */}
                    <motion.div
                      className="absolute left-1/2 h-20 w-1 -translate-x-1/2 transform bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-sm md:h-24"
                      variants={lineVariants}
                    />
                    {/* Main line */}
                    <motion.div
                      variants={lineVariants}
                      className="relative z-10 h-20 w-0.5 origin-top bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 md:h-24"
                    />
                    {/* Animated dots */}
                    <motion.div
                      className="absolute left-1/2 top-0 h-1 w-1 -translate-x-1/2 transform rounded-full bg-white"
                      animate={{
                        y: [0, 80, 0],
                        opacity: [1, 0.3, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.5,
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Enhanced Content card */}
              <motion.div
                className="relative flex-1 overflow-hidden rounded-3xl border border-gray-200/70 bg-white/90 p-8 shadow-2xl dark:border-gray-600/50 dark:bg-white/5 md:p-10"
                variants={cardHoverVariants}
                whileHover="hover"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5 dark:opacity-10">
                  <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 transform rounded-full bg-gradient-to-br from-blue-500 to-purple-500 blur-3xl" />
                  <div className="absolute bottom-0 left-0 h-24 w-24 -translate-x-4 translate-y-4 transform rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 blur-2xl" />
                </div>

                {/* Header with enhanced animations */}
                <div className="relative z-10 mb-2">
                  <motion.h3
                    className="mb-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-2xl font-bold leading-tight text-transparent md:text-3xl"
                    initial={{ opacity: 0, x: -30, rotateX: -15 }}
                    whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
                    whileHover={{ scale: 1.02 }}
                  >
                    {t(item.title)}
                  </motion.h3>

                  <motion.div
                    className="flex flex-wrap items-center gap-2 text-sm font-medium md:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <motion.time
                      className="flex items-center gap-2 rounded-full border border-blue-300/50 bg-gradient-to-r from-blue-100/80 to-blue-200/60 px-4 py-2 text-blue-700 dark:border-blue-700/50 dark:from-blue-900/40 dark:to-blue-800/40 dark:text-blue-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <motion.span
                        className="h-2 w-2 rounded-full bg-blue-500"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [1, 0.7, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                      {t(item.date)}
                    </motion.time>

                    <motion.div
                      className="flex items-center gap-2 rounded-full border border-purple-300/50 bg-gradient-to-r from-purple-100/80 to-purple-200/60 px-4 py-2 text-purple-700 dark:border-purple-700/50 dark:from-purple-900/40 dark:to-purple-800/40 dark:text-purple-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <span className="h-2 w-2 rounded-full bg-purple-500" />
                      {item.location}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Enhanced Description */}
                <motion.p
                  className="relative z-10 text-base font-medium leading-relaxed text-black dark:text-gray-200 md:text-lg"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  {t(item.description)}
                </motion.p>

                {/* Shine effect on hover */}
                <motion.div
                  className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0"
                  whileHover={{
                    opacity: 1,
                    x: ['-100%', '100%'],
                  }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  )
}
