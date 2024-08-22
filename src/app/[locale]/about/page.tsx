"use client";

import { useInViewHook } from "@/hooks/in-view";
import {
  fadeIn,
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const t = useTranslations("about")
  const { ref, inView } = useInViewHook();
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="flex min-h-screen w-full flex-col items-center justify-around md:justify-center
       bg-primary dark:bg-black/80"
    >
      <motion.div variants={slideInFromTop(0.2)} className="mt-16 xl:mt-0 md:mb-16 ">
        <h1 className="text-3xl md:text-4xl  xl:text-6xl font-semibold">{t("title")}</h1>
      </motion.div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 1 }}
        className="mx-auto grid w-full h-full max-w-[90%] 
        flex-col content-center gap-8 rounded-lg border-2
         border-black p-8 backdrop-blur-sm dark:border-white  
         md:h-[600px] lg:max-w-[90%] xl:max-w-7xl lg:grid-cols-2 "
      >
        <div className="">
          <motion.div
            variants={fadeIn(1)}
            className="flex h-full w-full flex-col items-center justify-center "
          >
            <Link
              href={"https://www.linkedin.com/in/jpmp1998/"}
              className="card-wrapper h-[300px] w-[300px] rounded-full md:h-[400px] md:w-[400px] "
            >
              <Image
                src={"/img/avatar.jpg"}
                alt="avatar"
                width={300}
                height={300}
                className="absolute z-10 rounded-full transition-all duration-500 
                hover:scale-105 md:h-[400px] md:w-[400px]"
              />
            </Link>
          </motion.div>
        </div>
        <div className="flex h-full w-full flex-col items-center 
        justify-center gap-4 overflow-hidden  md:text-justify font-semibold">
          <motion.h1
            variants={slideInFromTop(1)}
            className="w-full text-start text-xl md:text-2xl font-bold"
          >
            João pedro Maciel Pinheiro
          </motion.h1>

          <motion.h2
            variants={slideInFromLeft(1.4)}
            className="w-full text-start"
          >
           {t("subtitle")}
          </motion.h2>
          <motion.p variants={slideInFromRight(1.8)}>
           {t("lorem")}
          </motion.p>
          <motion.p
            variants={slideInFromRight(2.2)}
            className="hidden md:block"
          >
            
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  );
}

