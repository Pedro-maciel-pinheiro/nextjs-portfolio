"use client";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import { projects_icons_phone, projects_images_phone } from "@/constant/projects-images";
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
      className="w-full h-full"
    >
      {/* images */}
      <div className="backdrop-blur-sm  dark:backdrop-blur-none dark:bg-black/50 flex flex-col xl:flex-row w-full h-full items-center justify-between">
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
            {projects_images_phone.map((item, index) => (
              <SwiperSlide key={index} className="p-4 ">
                <Link href={"https://phone-shop-mu.vercel.app/"} target="blank">
                  <Image
                    src={item.image}
                    alt="projects images"
                    width={1200}
                    height={1200}
                    className="object-cover lg:h-[555px] rounded-2xl"
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
        {/* description */}
        <div className="flex flex-col items-center justify-center w-full h-full  ">
          <motion.div
            variants={slideInFromRight(0.5)}
            className=" h-full w-full lg:w-[635px]  
          mx-auto  border-black dark:border-white  rounded-lg
           text-center md:text-start lg:p-4 mt-2 mb-2 lg:md:0 lg:mt-0"
          >
            <h3 className="text-2xl md:text-4xl
             font-semibold mb-4 text-center">
              Next.js Phone Shop
            </h3>
            <p className="font-medium mb-4 mt-1  text-sm md:text-[16px]">{t("info-text-3")}</p>
            <p className="font-medium hidden md:block md:text-[16px]">{t("info-text-4")}</p>

            <div className="flex flex-col justify-center items-center 
             w-full h-full mt-2 border-t-2 border-black dark:border-white">
              <h3 className="text-lg md:text-2xl font-semibold mt-4">{t("title-h3")}</h3>
              <motion.section className="grid grid-cols-3 md:flex  items-center justify-start text-sm gap-8 mt-8">
                {projects_icons_phone.map((item, index) => (
                  <motion.div
                    key={item.skill_name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                    }
                    transition={{ delay: index * animationDelay, duration: 2 }}
                    className="flex flex-col items-center  cursor-pointer  text-[12px] md:text-sm "
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
              className="flex  w-full  items-center justify-evenly mt-8"
            >
              <MaskButton
                title={"Live"}
                btnColor={
                  "font-semibold text-white dark:text-black bg-black dark:bg-white after:bg-blue-500 dark:hover:text-white w-36"
                }
                linkBasePath={"https://phone-shop-mu.vercel.app/"}
                target={"blank"}
              />
              <MaskButton
                title={"Learn more"}
                btnColor={
                  "font-semibold text-white dark:text-black bg-black dark:bg-white after:bg-blue-500 dark:hover:text-white w-36"
                }
                linkBasePath={"/projects/project-2"}
                target={""}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
