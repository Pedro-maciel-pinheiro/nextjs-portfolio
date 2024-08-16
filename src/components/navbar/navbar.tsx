"use client";
import LanguageSelector from "../language-selector";
import { Link } from "@/navigation";

import { useTranslations } from "next-intl";
import ThemeSwitch from "../theme-switch";
import { useEffect, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { DownloadResume } from "./download-resume";
import { motion } from "framer-motion";
import { fadeIn, slideInFromBottom, slideInFromLeft } from "@/utils/motion";
import { ModeToggle } from "../mode-toggle";
import { Nav_links } from "@/constant/nav-links";

const Navbar = () => {
  const [navScroll, setNavScroll] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);
  const animationDelay = 0.5;

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
      <nav className="w-full  fixed z-30  h-10 ">
        <div className="hidden md:block absolute z-20 right-0">
          <DownloadResume />
        </div>

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

      <nav className="block lg:hidden -z-50">
        <div className="flex justify-between items-center fixed z-40 bg-white dark:bg-black/80 backdrop-blur-3xl w-full h-12">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setNavIsOpen((prev) => !prev)}
              className="cursor-pointer  block lg:hidden"
            >
              <Hamburger toggled={navIsOpen} />
            </button>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSelector />
            <ModeToggle />
          </div>
        </div>
      </nav>

      {navIsOpen && (
        <nav className="">
          <motion.section
            initial="hidden"
            animate={navIsOpen ? "visible" : "hidden"}
            variants={fadeIn(0.1)}
            className="rounded-xl bg-black dark:bg-white border-2 text-white dark:text-black 
           border-white dark:border-black w-40 h-96 mt-8 absolute flex flex-col  gap-3 items-center justify-center"
          >
            <motion.ul
              onClick={() => setNavIsOpen(false)}
              className="flex flex-col gap-5 items-center mt-2
              w-32    justify-center font-semibold z-10  "
            >
              {Nav_links.map((item, index) => (
                <motion.li
                   key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    navIsOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: index * animationDelay, duration: 0.3 }}
                  className="w-full p-1  rounded-full text-center shadow shadow-white dark:shadow-black "
                >
                  <Link href={item.href} key={item.title}>
                    {t(item.title)}
                  </Link>
                </motion.li>
              ))}
              <motion.div variants={fadeIn(2)} className=" rounded-full">
                <DownloadResume />
              </motion.div>
            </motion.ul>
          </motion.section>
        </nav>
      )}
    </>
  );
};

export default Navbar;
