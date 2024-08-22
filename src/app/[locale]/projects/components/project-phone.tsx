"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import {
  projects_icons_phone,
  projects_images_phone,
} from "@/constant/projects-images";
import { useTranslations } from "next-intl";
import { useInViewHook } from "@/hooks/in-view";
import { motion } from "framer-motion";
import { fadeIn, slideInFromBottom, slideInFromRight } from "@/utils/motion";
import MaskButton from "@/components/mask-button";
import { Link } from "@/navigation";

export const ProjectPhone = () => {
  const t = useTranslations("project");
  const { ref, inView } = useInViewHook();
  const animationDelay = 0.5;
  return (
    <motion.div
      ref={ref}
      initial={"hidden"}
      animate={inView ? "visible" : "hidden"}
      className="h-full w-full"
    >
      {/* images */}
      <div className="flex h-full w-full flex-col items-center justify-between backdrop-blur-sm dark:bg-black/50 dark:backdrop-blur-none xl:flex-row">
        <motion.div
          variants={fadeIn(1)}
          className="max-w-[100%] overflow-hidden"
        >
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay, EffectFade]}
            className="mySwiper"
          >
            {projects_images_phone.map((item, index) => (
              <SwiperSlide key={index} className="p-4">
                <Link href={"https://phone-shop-mu.vercel.app/"} target="blank">
                  <Image
                    src={item.image}
                    alt="projects images"
                    width={1200}
                    height={1200}
                    className="rounded-2xl object-cover lg:h-[555px]"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        {/* description */}
        <div className="flex h-full w-full flex-col items-center justify-center">
          <motion.div
            variants={slideInFromRight(0.5)}
            className="lg:md:0 mx-auto mb-2 mt-2 h-full w-full rounded-lg border-black text-center dark:border-white md:text-start lg:mt-0 lg:w-[635px] lg:p-4"
          >
            <h3 className="mb-4 text-center text-2xl font-semibold md:text-4xl">
              Next.js Phone Shop
            </h3>
            <p className="mb-4 mt-1 text-sm font-medium md:text-[16px]">
              {t("info-text-3")}
            </p>
            <p className="hidden font-medium md:block md:text-[16px]">
              {t("info-text-4")}
            </p>

            <div className="mt-2 flex h-full w-full flex-col items-center justify-center border-t-2 border-black dark:border-white">
              <h3 className="mt-4 text-lg font-semibold md:text-2xl">
                {t("title-h3")}
              </h3>
              <motion.section className="mt-8 grid grid-cols-3 items-center justify-start gap-8 text-sm md:flex">
                {projects_icons_phone.map((item, index) => (
                  <motion.div
                    key={item.skill_name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                    }
                    transition={{ delay: index * animationDelay, duration: 2 }}
                    className="flex cursor-pointer flex-col items-center text-[12px] md:text-sm"
                  >
                    <Link href={item.href} target="blank">
                      <item.Image
                        size={35}
                        className={`${item.text_style} rounded-md`}
                      />
                    </Link>
                    <span>{item.skill_name}</span>
                  </motion.div>
                ))}
              </motion.section>
            </div>
            <motion.div
              variants={slideInFromBottom(1)}
              className="mt-8 flex w-full items-center justify-evenly"
            >
              <MaskButton
                title={t("button-text")}
                btnColor={
                  "font-semibold text-white dark:text-black bg-black dark:bg-white after:bg-blue-500 dark:hover:text-white w-36"
                }
                linkBasePath={"https://phone-shop-mu.vercel.app/"}
                target={"blank"}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
