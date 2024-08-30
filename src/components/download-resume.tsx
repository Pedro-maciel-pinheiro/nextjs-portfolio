import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { GoDownload } from "react-icons/go";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";
import { download_text } from "@/constant/download-text";

export const DownloadResume = () => {
  const t = useTranslations("resume");
  const [resumeLanguage, setResumeLanguage] = useState(false);
  return (
    <div className="relative h-auto w-fit">
      <Button
        onClick={() => setResumeLanguage((prev) => !prev)}
        className="flex h-9 w-fit gap-1 rounded-md border border-white
         bg-black transition-colors duration-500 hover:bg-blue-600
          hover:text-white dark:border-white dark:bg-white dark:hover:bg-blue-600
           dark:hover:text-white"
      >
        <p className="mt-2 text-lg font-semibold">{t("download")}</p>
        <GoDownload size={18} />
      </Button>
      {resumeLanguage && (
        <motion.div
          onClick={() => setResumeLanguage(false)}
          initial={"hidden"}
          animate={"visible"}
          variants={fadeIn(0.1)}
          className="b bg- absolute mt-1 flex h-16 w-full flex-col rounded-sm text-white dark:text-black"
        >
          {download_text.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              download={item.href}
              target="blank"
              className="my-1 flex h-9 w-full items-center justify-center gap-1 rounded-md border bg-black transition-colors duration-300 hover:bg-blue-600 hover:text-white dark:border-white dark:bg-white dark:hover:bg-blue-600 dark:hover:text-white"
            >
              <p className="mt-2">{t(item.title)}</p>
              <Image
                src={item.flag}
                alt={item.title}
                width={32}
                height={32}
                className="absolute right-0 mx-2 "
              />
            </Link>
          ))}
        </motion.div>
      )}
    </div>
  );
};
