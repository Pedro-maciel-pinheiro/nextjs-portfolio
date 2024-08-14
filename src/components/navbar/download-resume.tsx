import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { GoDownload } from "react-icons/go";

export const DownloadResume = () => {
  return (
    <Link
      href={"/cv.pdf"}
      download={"/cv.pdf"}
      target="blank"
      className="flex items-center absolute z-20 right-0 justify-end p-1"
    >
      <Button
        className="text-white dark:text-white bg-black dark:bg-transparent
    font-semibold rounded-full flex gap-2 items-center 
    transition-colors duration-300 text-sm
     hover:text-white hover:bg-blue-700 hover:dark:bg-blue-700 hover:dark:text-white"
      >
        <GoDownload size={20} /> Resume
      </Button>
    </Link>
  );
};
