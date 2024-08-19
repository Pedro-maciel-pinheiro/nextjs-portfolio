"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import {
  projects_images_eco,
} from "@/constant/projects-images";
import { useTranslations } from "next-intl";
import { useInViewHook } from "@/hooks/in-view";
import { motion } from "framer-motion";
import { fadeIn, slideInFromBottom, slideInFromRight } from "@/utils/motion";
import MaskButton from "@/components/mask-button";
import { Link } from "@/navigation";

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
      {/* images */}
      <div className="backdrop-blur-sm  dark:backdrop-blur-none dark:bg-black/50 
      flex flex-col xl:flex-row w-full h-full items-center justify-between">
        <motion.div
          variants={fadeIn(1)}
          className="max-w-[100%]  overflow-hidden"
        >
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
            {projects_images_eco.map((item, index) => (
              <SwiperSlide key={index} className="p-2 ">
                <Link
                  href={"https://dev-market-redux.vercel.app/"}
                  target="blank"
                >
                  <Image
                    src={item.image}
                    alt="projects images"
                    width={1200}
                    height={1200}
                    className="object-cover md:h-[555px] rounded-2xl"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        {/* description */}
        <div className="flex flex-col items-center justify-center w-full   ">
          <motion.div
            variants={slideInFromRight(0.5)}
            className=" h-full w-full lg:w-[635px]  
          mx-auto  border-black dark:border-white rounded-lg
           text-center md:text-start lg:p-4 mt-2 mb-2 lg:md:0 lg:mt-0"
          >
            <h3
              className="text-2xl md:text-4xl
             font-semibold mb-4 text-center"
            >
              Next.js E-commerce
            </h3>
            <p className="font-medium text-sm md:text-[16px] mt-1 mb-4">{t("info-text-1")}</p>
            <p className="font-medium hidden md:block text-[16px]">{t("info-text-2")}</p>

            <div
              className="flex flex-col justify-center items-center mt-2
             w-full h-full  border-t-2 border-black dark:border-white"
            >
              <h3 className="text-lg md:text-2xl font-semibold mt-4">
                {t("title-h3")}
              </h3>
              <motion.section className="grid grid-cols-3 md:flex  items-center justify-start text-sm gap-8 mt-8">
               
                
              </motion.section>
            </div>
            <motion.div
              variants={slideInFromBottom(1)}
              className="flex  w-full h-full items-center justify-evenly mt-8"
            >
              <MaskButton
                title={"Live"}
                btnColor={
                  "font-semibold text-white dark:text-black bg-black dark:bg-white after:bg-blue-500 dark:hover:text-white w-36"
                }
                linkBasePath={"https://dev-market-redux.vercel.app/"}
                target={"blank"}
              />
              <MaskButton
                title={"Learn more"}
                btnColor={
                  "font-semibold text-white dark:text-black bg-black dark:bg-white after:bg-blue-500 dark:hover:text-white w-36"
                }
                linkBasePath={"/projects/project-1"}
                target={""}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
