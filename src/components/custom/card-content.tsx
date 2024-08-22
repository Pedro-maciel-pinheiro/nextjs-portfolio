import { SkillDataProps } from "@/constant/icons-index";
import { ImagesProps } from "@/constant/projects-images";
import { Link } from "@/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import MaskButton from "../mask-button";
import { useInViewHook } from "@/hooks/in-view";
import { slideInFromBottom, slideInFromLeft, slideInFromRight } from "@/utils/motion";

interface CardProps {
  title: string;
  icons: SkillDataProps[];
  videopath: string;
  videolink: string;
  project_info_1: string;
  project_info_2: string;
  href_1: string;
  href_2: string;
}

export const CardContent = ({
  title,
  icons,
  videopath,
  videolink,
  project_info_1,
  project_info_2,
  href_1,
  href_2,
}: CardProps) => {
  const { ref, inView } = useInViewHook();
  const t = useTranslations("project");
  const animationDelay = 0.5;

  return (
    <div className="w-full h-full pt-5 ">
      {/* project video / links */}
      <motion.div
        ref={ref}
        initial={"hidden"}
        animate={inView ? "visible" : "hidden"}
        className="gap-5 w-full h-full grid grid-cols-1 lg:grid-cols-2 
        container content-center  items-stretch"
      >
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col justify-between w-full h-full"
        >
          <Link href={videolink} target="blank">
            <video
              src={videopath}
              autoPlay
              loop
              muted
              className="rounded-xl border-2 border-black dark:border-white "
            />
          </Link>
          <div
            className="flex flex-col items-center justify-end w-full h-full  rounded-xl mt-4 lg:mt-0
           border-black dark:border-white "
          >
            <div className="flex flex-col w-full  gap-1 items-center justify-center ">
              <h3 className="text-lg md:text-2xl font-semibold text-center ">
                {t("title-h3")}
              </h3>
              <div className="flex justify-center md:justify-evenly items-center w-full h-20 gap-3">
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
        <motion.div variants={slideInFromRight(0.5)}
          className="flex flex-col justify-between w-full h-full
        items-center max-w-xl md:max-w-2xl mx-auto "
        >
          <h1 className="text-lg md:text-3xl lg:text-3xl font-semibold mb-2">
            {title}
          </h1>
          <div className="flex  flex-col md:ml-12 h-48 md:h-72  gap-2   overflow-y-scroll  font-medium">
            <p className="text-sm+ lg:text-lg">{t(project_info_1)}</p>
            <p className="text-sm+ lg:text-lg hidden md:block">
              {t(project_info_2)}
            </p>
          </div>

          <div className="w-full h-full md:h-auto flex flex-col justify-center gap-1">
            <h3 className="text-lg md:text-2xl font-semibold text-center mt-4">
              {t("title-h3")}
            </h3>
            <div className=" flex flex-wrap items-center justify-center gap-6 h-20">
              {icons.map((icon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                  }
                  transition={{ delay: index * animationDelay, duration: 1 }}
                >
                  <Link
                    href={icon.href}
                    className="flex flex-col items-center text-center text-sm"
                  >
                    <icon.Image className={`${icon.text_style}`} size={30} />
                    <p className="text-[12px] ">{icon.skill_name}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
