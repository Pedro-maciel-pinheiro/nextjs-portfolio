"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import { projects_images, projects_tools } from "@/constant/projects-images";
import { useTranslations } from "next-intl";
import { useInViewHook } from "@/hooks/in-view";
import { motion } from "framer-motion";
import { fadeIn, slideInFromRight } from "@/utils/motion";

export const ProjectEcommerce = () => {
  const t = useTranslations("project");
  const { ref, inView } = useInViewHook();
  const animationDelay = 0.5;
  return (
    <motion.div
      ref={ref}
      initial={"hidden"}
      animate={inView ? "visible" : "hidden"}
      className="w-full h-full"
    >
      <div className="flex  w-full h-full items-center justify-between">
        <motion.div variants={fadeIn(1)} className="max-w-[80%]  overflow-hidden">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay, EffectFade]}
            className="mySwiper "
          >
            {projects_images.map((item, index) => (
              <SwiperSlide key={index} className="p-[2px] ">
                <Image
                  src={item.image}
                  alt="projects images"
                  width={1000}
                  height={1000}
                  className=" h-[524px] rounded-sm"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <div className="flex flex-col items-center justify-center w-full h-full  ">
          <motion.div
            variants={slideInFromRight(0.5)}
            className="backdrop-blur-2xl h-full w-[635px]  
          mx-auto  border-black dark:border-white shadow-md rounded-lg p-4"
          >
            <h3 className="text-4xl font-semibold mb-8">Next.js Ecommerce</h3>
            <p className="font-medium ">{t("info-text-1")}</p>
            <p className="font-medium mt-2">{t("info-text-2")}</p>

            <div className="flex flex-col  w-full h-full mt-2 border-t-2 border-black dark:border-white">
              <h3 className="text-2xl font-semibold mt-4">{t("title-h3")}</h3>
              <motion.section className="flex items-center justify-start text-sm gap-8 mt-8">
                {projects_tools.map((item, index) => (
                  <motion.div
                    key={item.skill_name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                    }
                    transition={{ delay: index * animationDelay, duration: 2 }}
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <item.Image size={35} className={`${item.text_style}`} />
                    <span>{item.skill_name}</span>
                  </motion.div>
                ))}
              </motion.section>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
