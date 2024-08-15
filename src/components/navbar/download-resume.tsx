import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { GoDownload } from "react-icons/go";
import { useTranslations } from "next-intl";

export const DownloadResume = () => {
  const t = useTranslations("nav")
  return (
    <Link
      href={"/cv.pdf"}
      download={"/cv.pdf"}
      target="blank"
      className="flex items-center  right-0 justify-end p-1"
    >
      <Button
        className="text-white dark:text-black bg-black dark:bg-white
    font-semibold rounded-full flex gap-2 items-center shadow-white dark:shadow-black
    transition-colors duration-300 text-sm
     hover:text-white hover:bg-blue-700 hover:dark:bg-blue-700 hover:dark:text-white"
      >
        <GoDownload size={20} /> {t("resume")}
      </Button>
    </Link>
  );
};
