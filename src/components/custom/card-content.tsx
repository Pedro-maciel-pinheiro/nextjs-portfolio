import { Link } from "@/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import MaskButton from "../mask-button";

import {
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
} from "@/utils/motion";

interface CardProps {
  title: string;

  videopath: string;
  videolink: string;
  project_info_1: string;
  project_info_2: string;
  href_1: string;
  href_2: string;
}

export const CardContent = ({
  title,

  videopath,
  videolink,
  project_info_1,
  project_info_2,
  href_1,
  href_2,
}: CardProps) => {
  const t = useTranslations("project");
  const animationDelay = 0.5;

  return (
    <div className="h-full w-full pt-5">
      {/* project video / links */}
      <motion.div
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: true }}
        className="container grid h-full w-full grid-cols-1 content-center items-stretch gap-5 lg:grid-cols-2"
      >
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex h-full w-full flex-col justify-between"
        >
          <Link href={videolink} target="blank">
            <video
              src={videopath}
              autoPlay
              loop
              muted
              className="rounded-xl border-2 border-black dark:border-white"
            />
          </Link>
          <div className="mt-4 flex h-full w-full flex-col items-center justify-end rounded-xl border-black dark:border-white lg:mt-0">
            <div className="flex w-full flex-col items-center justify-center gap-1">
              <h3 className="text-center text-lg font-semibold md:text-2xl">
                {t("title-h3")}
              </h3>
              <div className="flex h-20 w-full items-center justify-center gap-3 md:justify-evenly">
                <MaskButton
                  title={t("button-text")}
                  btnColor={
                    "w-64 md:w-96 bg-black dark:bg-white after:bg-blue-500 hover:text-white font-semibold"
                  }
                  linkBasePath={href_1}
                  target={"blank"}
                />
              </div>
            </div>
          </div>
        </motion.div>
        {/* project information */}
        <motion.div
          variants={slideInFromRight(0.5)}
          className="mx-auto flex h-full w-full max-w-xl flex-col items-center justify-between md:max-w-2xl"
        >
          <h1 className="mb-2 text-lg font-semibold md:text-3xl lg:text-3xl">
            {title}
          </h1>
          <div className="flex h-48 flex-col gap-2 overflow-y-scroll font-medium md:ml-12 md:h-72">
            <p className="text-sm+ lg:text-lg">{t(project_info_1)}</p>
            <p className="text-sm+ hidden md:block lg:text-lg">
              {t(project_info_2)}
            </p>
          </div>

          <div className="flex h-full w-full flex-col justify-center gap-1 md:h-auto">
            <h3 className="mt-4 text-center text-lg font-semibold md:text-2xl">
              {t("title-h3")}
            </h3>
            <div className="flex h-20 flex-wrap items-center justify-center gap-6"></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
