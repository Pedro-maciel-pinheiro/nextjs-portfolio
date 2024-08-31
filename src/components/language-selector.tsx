"use client";
import { fadeIn } from "@/utils/motion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function LanguageSelector() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1] || "en";

  const handleLanguageChange = (locale: string) => {
    setIsDropDownOpen(false);
    const newPath = `/${locale}${pathname.slice(3)}`;
    router.push(newPath);
  };
  return (
    <div className="relative w-10">
      <button
        onClick={() => setIsDropDownOpen(!isDropDownOpen)}
        className="  flex items-center bg-transparent 
        font-bold border-none text-sm"
      >
        {currentLocale.toUpperCase()}{" "}
        <span>
          <ChevronDownIcon  className="text-black dark:text-white"/>
        </span>
      </button>
      {isDropDownOpen && (
        <motion.div initial="hidden" animate="visible" variants={fadeIn(0.1)} className="absolute right-0 mt-3 bg-white dark:bg-black/80 rounded-lg shadow-lg z-10">
          <ul className="flex flex-col text-sm rounded-lg ">
            <li
              onClick={() => handleLanguageChange("en")}
              className={`hover:bg-slate-100 dark:hover:bg-slate-900 px-4 py-2 cursor-pointer font-bold rounded-lg${
                currentLocale === "en" ? " text-red-500" : ""
              }`}
            >
              EN
            </li>
            <li
              onClick={() => handleLanguageChange("pt")}
              className={`hover:bg-slate-100 dark:hover:bg-slate-900 px-4 py-2 cursor-pointer font-bold rounded-lg${
                currentLocale === "pt" ? " text-red-500" : ""
              }`}
            >
              PT
            </li>
            <li
              onClick={() => handleLanguageChange("jp")}
              className={`hover:bg-slate-100 dark:hover:bg-slate-900 px-4 py-2 cursor-pointer font-bold rounded-lg${
                currentLocale === "jp" ? " text-red-500" : ""
              }`}
            >
              JP
            </li>
          </ul>
        </motion.div>
      )}
    </div>
  );
}
