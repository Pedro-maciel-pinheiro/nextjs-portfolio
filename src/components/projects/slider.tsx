"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { project_info } from "@/constant/projects-images";
import Image from "next/image";
import { SectionHeading } from "../section-heading";
import "swiper/css";
import "swiper/css/pagination";

import { fadeInFromY, slideInFromBottom } from "@/utils/motion";
import { FaChevronRight } from "react-icons/fa";

import { CustomButtom } from "../custom-button";
import Link from "next/link";
import { Link as NavLink } from "@/navigation";

export const Slider = () => {
  const [slidesPerView, setSlidesPerView] = useState<number>(3);
  const t = useTranslations("project");

  useEffect(() => {
    const updateSlidesPerView = () => {
      const slideResize = window.innerWidth;

      if (slideResize < 1100) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
    };
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const handleSlideChange = (swiper: SwiperClass) => {
    const totalSlides = project_info.length;
    const visibleSlides = Math.min(slidesPerView, totalSlides);
    const currentIndex = swiper.activeIndex;

    const progressPercent =
      ((currentIndex + visibleSlides) / totalSlides) * 100;
    setProgress(progressPercent);
  };


  // Update progress bar based on slide changes (slide change event)
  const handleSlideChange = (swiper: SwiperClass) => {
    const totalSlides = project_info.length;
    const visibleSlides = Math.min(slidesPerView, totalSlides);
    const currentIndex = swiper.activeIndex;

    const progressPercent =
      ((currentIndex + visibleSlides) / totalSlides) * 100;
    setProgress(progressPercent);
  };

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center">
        <SectionHeading heading={"title_project"} />
        <motion.p initial="hidden" whileInView={"visible"} variants={slideInFromBottom(0)} className="flex items-center justify-center font-semibold text-lg mb-4">
         {t("slide")}<FaChevronRight className="animate-bounce mb-1" />
        </motion.p>
      </div>
      <motion.section className="h-auto max-w-4xl overflow-hidden lg:mx-auto">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          speed={1200}
          grabCursor={true}
          className={`max-w-[90%]`}
        >
          {project_info.map((info, index) => (
            <SwiperSlide key={info.id} className="h-full w-full py-2">
              <motion.ul
                initial={"hidden"}
                whileInView={"visible"}
                viewport={{ once: true }}
                variants={fadeInFromY}
                custom={index}
                className="flex  cursor-grab flex-col items-center active:cursor-grabbing"
              >
                <NavLink href={`/projects/${info.name}`}>
                  <li className="flex">
                    <Image
                      src={info.image_thumb}
                      alt={info.title}
                      width={500}
                      height={500}
                      className="w-full rounded-lg border-2 border-black object-center dark:border-white"
                    />
                  </li>
                </NavLink>
                <li
                  className="mt-4 flex w-full flex-col  gap-2 h-48 
                "
                >
                  <h1
                    className="mt-2 text-2xl font-semibold md:text-4xl border-b-2 border-black
                   dark:border-gray-400 dark:text-gray-200"
                  >
                    {t(`${info.name}.title`)}
                  </h1>
                  <p className="text-lg font-medium md:text-xl dark:text-gray-200">
                    {t(`${info.name}.subtitle`)}
                  </p>
                  <h2 className="text-sm font-medium md:text-lg dark:text-gray-200">
                    {t(`${info.name}.description`)}
                  </h2>
                </li>
                <div
                  className=" flex items-start  justify-start gap-6   
                w-full border-t pt-6 border-black dark:border-gray-400"
                >
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
  );
};
