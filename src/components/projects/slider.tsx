'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { project_info } from '@/constant/projects-images'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import { cardVariants, fadeInFromY, slideInFromBottom } from '@/utils/motion'
import Link from 'next/link'
import { Link as NavLink } from '@/navigation'
import { ExternalLink, Eye, Code, Sparkles } from 'lucide-react'
import { SectionHeading } from '../section-heading'

export const Slider = () => {
  const [slidesPerView, setSlidesPerView] = useState<number>(3)
  const [progress, setProgress] = useState<number>(0)
  const t = useTranslations('projects')

  // Update slidesPerView based on screen size on mount and window resize
  useEffect(() => {
    const updateSlidesPerView = () => {
      const slideResize = window.innerWidth
      const slides = slideResize < 768 ? 1 : slideResize < 1100 ? 2 : 3
      setSlidesPerView(slides)
      setProgress((slides / project_info.length) * 100)
    }
    updateSlidesPerView()
    window.addEventListener('resize', updateSlidesPerView)
    return () => window.removeEventListener('resize', updateSlidesPerView)
  }, [])

  // Update progress bar based on slide changes (slide change event)
  const handleSlideChange = (swiper: SwiperClass) => {
    const totalSlides = project_info.length
    const visibleSlides = Math.min(slidesPerView, totalSlides)
    const currentIndex = swiper.activeIndex

    const progressPercent = ((currentIndex + visibleSlides) / totalSlides) * 100
    setProgress(progressPercent)
  }

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
    <motion.div
      className="relative h-auto overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 dark:opacity-10">
        <div className="absolute left-20 top-20 h-96 w-96 animate-pulse rounded-full bg-blue-500 mix-blend-multiply blur-3xl filter"></div>
        <div className="absolute bottom-20 right-20 h-96 w-96 animate-pulse rounded-full bg-pink-500 mix-blend-multiply blur-3xl filter delay-1000"></div>
        <div className="delay-2000 absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 transform animate-pulse rounded-full bg-purple-500 mix-blend-multiply blur-3xl filter"></div>
      </div>

      <div className="relative z-10">
        {/* Enhanced Header Section */}
        <div className="flex w-full flex-col items-center justify-center">
          <SectionHeading heading={'title_project'} className="my-0 mb-4 mt-20" />
        </div>

        <motion.section className="h-auto overflow-hidden px-4 lg:mx-auto">
          {/* Enhanced Progress Bar */}
          <motion.div
            initial="hidden"
            whileInView={'visible'}
            viewport={{ once: true }}
            variants={cardVariants}
            className="mx-auto mb-12 mt-4 max-w-5xl"
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Progress</span>
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-sm font-bold text-transparent">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full border border-gray-300/40 bg-gray-100/50 backdrop-blur-sm dark:border-white/20 dark:bg-white/5">
              <motion.div
                initial={{ width: `${progress}%` }}
                animate={{ width: `${progress}%` }}
                variants={cardVariants}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="relative flex h-full items-center bg-gradient-to-r from-blue-500 to-purple-500"
              >
                <motion.span
                  className="absolute right-0 h-4 w-4 translate-x-1/2 transform rounded-full bg-white shadow-lg"
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(168, 85, 247, 0.7)',
                      '0 0 0 10px rgba(168, 85, 247, 0)',
                      '0 0 0 0 rgba(168, 85, 247, 0)',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Enhanced Swiper */}
          <Swiper
            slidesPerView={slidesPerView}
            spaceBetween={30}
            speed={1200}
            grabCursor={true}
            className="max-w-[100%] pb-8"
            onSlideChange={handleSlideChange}
          >
            {project_info.map((info, index) => (
              <SwiperSlide key={info.id} className="h-full w-full py-2">
                <motion.div
                  initial={'hidden'}
                  whileInView={'visible'}
                  viewport={{ once: true }}
                  variants={fadeInFromY}
                  custom={index}
                  className="flex h-full cursor-grab flex-col items-center active:cursor-grabbing"
                >
                  {/* Enhanced Project Card with Fixed Height */}
                  <div className="group relative flex h-[510px] w-full flex-col rounded-3xl border border-gray-300 bg-white/80 p-6 shadow-xl transition-all duration-500 hover:bg-white/90 hover:shadow-2xl hover:shadow-purple-500/10 dark:border-white/20 dark:bg-white/5 dark:hover:bg-white/15 dark:hover:shadow-purple-500/20 md:hover:scale-[1.01]">
                    {/* Image Section with Overlay */}
                    <div className="relative mb-6 flex-shrink-0 overflow-hidden rounded-2xl border-2">
                      <NavLink href={`/projects/${info.name}`}>
                        <div className="relative">
                          <Image
                            src={info.image_thumb}
                            alt={info.title}
                            width={800}
                            height={800}
                            className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                          {/* View icon overlay */}
                          <div className="absolute inset-0 flex scale-75 transform items-center justify-center opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                            <div className="rounded-full border border-white/30 bg-white/20 p-4 backdrop-blur-sm">
                              <Eye className="h-8 w-8 text-white" />
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-grow flex-col gap-4">
                      <div>
                        <h2 className="mb-2 text-2xl font-bold text-gray-800 transition-colors group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent dark:text-white">
                          {t(`${info.name}.title`)}
                        </h2>
                        <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-20 group-hover:from-purple-500 group-hover:to-pink-500" />
                      </div>
                      <p className="line-clamp-4 text-base leading-relaxed text-gray-600 transition-colors group-hover:text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-200">
                        {t(`${info.name}.subtitle`)}
                      </p>
                    </div>

                    {/* Enhanced Action Buttons - Fixed at bottom */}
                    <div className="mt-auto flex gap-3">
                      <Link href={info.link_website} target="_blank" className="flex-1">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="group/btn flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-4 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:from-purple-500 hover:to-pink-500 hover:shadow-xl"
                        >
                          <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:rotate-12" />
                          <span className="text-sm">Live Demo</span>
                        </motion.button>
                      </Link>

                      <NavLink href={`/projects/${info.name}`} className="flex-1">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="group/btn flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300/60 bg-gray-50/50 px-4 py-3 font-semibold text-gray-700 transition-all duration-200 hover:border-purple-400/40 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 hover:text-gray-800 dark:border-white/20 dark:bg-white/15 dark:text-white dark:hover:border-purple-400/40 dark:hover:from-blue-500/20 dark:hover:to-purple-500/20"
                        >
                          <Code className="h-4 w-4 transition-transform group-hover/btn:rotate-12" />
                          <span className="text-sm">Details</span>
                        </motion.button>
                      </NavLink>
                    </div>

                    {/* Decorative corner accent */}
                    <div className="absolute right-4 top-4 h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 opacity-20 blur-sm transition-opacity group-hover:opacity-40" />
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.section>
      </div>
    </motion.div>
  )
}
