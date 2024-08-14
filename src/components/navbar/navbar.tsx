"use client";
import LanguageSelector from "../language-selector";
import { Link } from "@/navigation";

import { useTranslations } from "next-intl";
import ThemeSwitch from "../theme-switch";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";
import { DownloadResume } from "./download-resume";

const Navbar = () => {
  const [navScroll, setNavScroll] = useState(false);

  useEffect(() => {
    const changeWhileScroll = () => {
      if (window.scrollY >= 5) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeWhileScroll);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", changeWhileScroll);
      }
    };
  }, []);
  const t = useTranslations("nav");
  return (
    <>
      <nav className="w-full  fixed z-50  h-10 ">
        <DownloadResume/>

        <div
          className={`transition-all duration-1000 
        hidden    lg:flex  rounded-md px-4 relative
      items-center justify-center  mx-auto  ${
        navScroll
          ? " max-w-7xl bg-white/90 dark:bg-black/90  h-12 mt-0"
          : " max-w-6xl h-8 mt-1"
      }`}
        >
          <Link
            href={"https://www.linkedin.com/in/jpmp1998/"}
            target="blank"
            className="uppercase font-bold absolute left-0 px-2 z-10"
          >
            <h1>Maciel Pinheiro</h1>
          </Link>
          <ul
            className="flex gap-5 items-center 
          justify-center font-semibold z-10"
          >
            <li className="navHover">
              <Link href={"/"}>{t("home")}</Link>
            </li>
            <li className="navHover">
              <Link href={"/skills"}>{t("skills")}</Link>
            </li>
            <li className="navHover">
              <Link href={"/projects"}>{t("projects")}</Link>
            </li>
            <li className="navHover">
              <Link href={"/about"}>{t("about")}</Link>
            </li>
            <li className="navHover">
              <Link href={"/contact"}>{t("contact")}</Link>
            </li>
          </ul>

          <div className="flex items-center absolute w-full justify-end px-2">
            <LanguageSelector />
            <ThemeSwitch />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
