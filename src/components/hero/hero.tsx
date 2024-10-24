"use client";
import {
  fadeIn,
  slideInFromBottom,
  slideInFromLeft,
  slideInFromTop,
} from "@/utils/motion";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { SpinAnimation } from "@/components/spin-animation";
import { DownloadResume } from "@/components/download-resume";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useSectionInView } from "@/hooks/hooks";

export default function Hero() {
  const { ref } = useSectionInView("home");
  const t = useTranslations("home");

  return (
    <>
      <motion.section 
         ref={ref}
        initial="hidden"
        whileInView={"visible"}
        id="home"
        viewport={{once:true}}
        className="flex min-h-screen w-full items-center justify-center
         "
      >
        <motion.div variants={fadeIn(0.1)} className="relative grid h-auto  mx-auto
        min-h-[400px] content-between gap-2    md:grid-cols-2 md:content-center">
          <SpinAnimation />

          <motion.div className="mt-40 md:mt-0 flex flex-col gap-4 md:gap-0
          items-center md:items-start justify-center
            font-semibold  mx-auto md:mx-0">
            <motion.h1 variants={slideInFromTop(0.2)} className="text-5xl md:text-6xl mx-1">
            {t("title-h1")}
            </motion.h1>
            <motion.h2
              variants={slideInFromLeft(0.5)}
              className="mx-2 text-xl  md:text-4xl"
            >
              {t("title-h2")}
            </motion.h2>
            <motion.h3
              variants={slideInFromBottom(0.8)}
              className="mx-2 text-[15px]  md:text-3xl flex "
            >
              {t("subtitle-h2")}
            </motion.h3>

            <motion.div 
            variants={slideInFromBottom(1)}
            className="mt-4 flex flex-col md:flex-row items-center justify-center gap-3 mx-2 ">
              <DownloadResume />{" "}
              <div className="flex items-center gap-2">
                {" "}
                <Link
                  href={"https://www.linkedin.com/in/jpmp1998/"}
                  target="blank"
                  className="hover:text-blue-500"
                >
                  <FaLinkedin size={40} className="" />
                </Link>
                <Link
                  href={"https://github.com/Pedro-maciel-pinheiro"}
                  target="blank"
                  className="hover:text-purple-600"
                >
                  <FaGithub size={40} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
}
