'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'
import { project_info } from '@/constant/projects-images'
import Image from 'next/image'
import { SectionHeading } from '../section-heading'
import 'swiper/css'
import 'swiper/css/pagination'

import { fadeInFromY, slideInFromBottom } from '@/utils/motion'

import { CustomButtom } from '../custom-button'
import Link from 'next/link'
import { Link as NavLink } from '@/navigation'
import { ArrowRight } from 'lucide-react'

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

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center">
        <SectionHeading heading={'title_project'} />
        <motion.p
          initial="hidden"
          whileInView={'visible'}
          viewport={{ once: true }}
          variants={slideInFromBottom(0)}
          className="mb-4 flex items-center justify-center text-lg font-semibold"
        >
          {t('slide')}
          <ArrowRight className="mb-1" />
        </motion.p>
      </div>
      <motion.section className="h-auto overflow-hidden lg:mx-auto">
        <motion.div
          initial="hidden"
          whileInView={'visible'}
          viewport={{ once: true }}
          variants={slideInFromBottom(0)}
          className="mx-auto mb-10 mt-4 h-1 w-full rounded-lg bg-gray-300 dark:bg-gray-500"
        >
          <motion.div
            initial={{ width: `${progress}%` }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="relative flex h-full items-center bg-rose-600"
          >
            <span className="absolute right-0 h-4 w-4 rounded-full bg-gray-700 dark:bg-white" />
          </motion.div>
        </motion.div>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          speed={1200}
          grabCursor={true}
          className={`max-w-[100%]`}
          onSlideChange={handleSlideChange}
        >
          {project_info.map((info, index) => (
            <SwiperSlide key={info.id} className="h-full w-full py-2">
              <motion.ul
                initial={'hidden'}
                whileInView={'visible'}
                viewport={{ once: true }}
                variants={fadeInFromY}
                custom={index}
                className="flex cursor-grab flex-col items-center active:cursor-grabbing"
              >
                <NavLink href={`/projects/${info.name}`}>
                  <li className="flex">
                    <Image
                      src={info.image_thumb}
                      alt={info.title}
                      width={800}
                      height={800}
                      className="w-full rounded-lg border-2 border-black object-center dark:border-white"
                    />
                  </li>
                </NavLink>
                <li className="mt-4 flex h-32 w-full flex-col gap-2">
                  <h1 className="mt-2 border-b border-black text-2xl font-semibold dark:border-gray-400 dark:text-gray-200 md:text-2xl">
                    {t(`${info.name}.title`)}
                  </h1>
                  <p className="text-lg font-medium dark:text-gray-200 md:text-lg">
                    {t(`${info.name}.subtitle`)}
                  </p>
                </li>
                <div className="flex w-full items-start justify-start gap-6 border-t border-black pt-6 dark:border-gray-400">
                  <Link href={info.link_website} target="_blank">
                    <CustomButtom title={info.button_text_online} />
                  </Link>

                  <NavLink href={`/projects/${info.name}`}>
                    <CustomButtom title={info.button_text_detail} />
                  </NavLink>
                </div>
              </motion.ul>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>
    </>
  )
}
