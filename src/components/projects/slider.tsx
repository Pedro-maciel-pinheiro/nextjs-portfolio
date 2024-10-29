"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { project_info } from "@/constant/projects-images";
import Image from "next/image";
import { SectionHeading } from "../section-heading";
import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";
import { fadeInFromY, slideInFromBottom } from "@/utils/motion";
import { FaChevronRight } from "react-icons/fa";

export const Slider = () => {
  const [slidesPerView, setSlidesPerView] = useState<number>(2);
  const [progress, setProgress] = useState<number>(0);
  const t = useTranslations("project");

  useEffect(() => {
    const updateSlidesPerView = () => {
      const slideResize = window.innerWidth;

      if (slideResize < 1100) {
        setSlidesPerView(1);
        setProgress((1 / project_info.length) * 100);
      } else {
        setSlidesPerView(2);
        setProgress((2 / project_info.length) * 100);
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

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center">
        <SectionHeading heading={"title_project"} />
        <motion.p
          initial="hidden"
          whileInView={"visible"}
          variants={slideInFromBottom(0)}
          className="mb-4 flex items-center justify-center text-lg font-semibold"
        >
          {t("slide")}
          <FaChevronRight className="mb-1 animate-bounce" />
        </motion.p>
      </div>
      <motion.section className="h-auto max-w-4xl overflow-hidden lg:mx-auto">
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          variants={slideInFromBottom(0)}
          className="mx-auto mt-4 h-1 w-full max-w-[80%] overflow-hidden rounded-lg bg-gray-300 mb-10"
        >
          <motion.div
            initial={{ width: `${progress}%` }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-full bg-blue-500"
          />
        </motion.div>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          speed={1200}
          grabCursor={true}
          className={`max-w-[90%]`}
          onSlideChange={handleSlideChange}
        >
          {project_info.map((info, index) => (
            <SwiperSlide key={info.id} className="h-full w-full px-2 py-2">
              <Link
                href={info.project_link}
                target="blank"
                className="flex h-auto w-full flex-col items-center justify-center"
              >
                <motion.ul
                  initial={"hidden"}
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  variants={fadeInFromY}
                  custom={index}
                  className="flex max-w-[90%] cursor-grab flex-col items-center active:cursor-grabbing"
                >
                  <li className="flex">
                    <Image
                      src={info.images}
                      alt={info.title}
                      width={400}
                      height={400}
                      className="rounded-lg border-2 border-black dark:border-white"
                    />
                  </li>
                  <li className="mt-4 flex w-96 max-w-[99%] flex-col items-center justify-center gap-2">
                    <h1 className="mt-2 text-2xl font-medium md:text-3xl">
                      {t(info.title)}
                    </h1>
                    <p className="w-64 text-justify dark:text-white/90 md:w-80">
                      {t(info.description)}
                    </p>
                    <h2 className="text-lg font-medium md:text-xl">
                      {t("title-h3")}
                    </h2>
                    <div className="grid grid-cols-4 gap-1 md:grid-cols-5">
                      {info.data.map((icon) => (
                        <div
                          key={icon.name}
                          className="flex flex-col items-center"
                        >
                          <p className="text-2xl">{icon.logo}</p>
                          <p className="text-sm font-medium">{icon.name}</p>
                        </div>
                      ))}
                    </div>
                  </li>
                </motion.ul>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>
    </>
  );
};
