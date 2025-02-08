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
import MaxWidth from "../max-width";

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
        viewport={{ once: true }}
        className="flex h-full min-h-screen w-full items-center justify-center overflow-hidden"
      >
        <motion.div
          variants={fadeIn(0.1)}
          className="mt-28 grid h-full w-full place-content-center gap-40 md:mt-0 md:grid-cols-2 md:place-content-between md:gap-0"
        >
          <div className="relative flex items-center justify-center">
            <SpinAnimation />
          </div>

          <motion.div className="flex w-full flex-col items-center gap-2">
            <div className="flex flex-col items-center md:items-start">
              <motion.h1
                variants={slideInFromTop(0.2)}
                className="mx-1 text-5xl md:text-6xl"
              >
                {t("title-h1")}
              </motion.h1>
              <motion.h2
                variants={slideInFromLeft(0.5)}
                className="mx-2 text-2xl md:text-3xl"
              >
                {t("title-h2")}
              </motion.h2>
              <motion.h3
                variants={slideInFromBottom(0.8)}
                className="mx-2 flex text-xl md:text-3xl"
              >
                {t("subtitle-h2")}
              </motion.h3>
              <motion.div
                variants={slideInFromBottom(1)}
                className="mx-2 mt-4 flex flex-col items-center justify-center gap-3 md:flex-row"
              >
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
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
}
