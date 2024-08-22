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
      <nav className="fixed z-30 h-10 w-full">
        <div
          className={`relative mx-auto hidden items-center justify-center rounded-md px-4 transition-all duration-1000 lg:flex ${
            navScroll
              ? "mt-0 h-12 max-w-7xl bg-white dark:bg-black"
              : "mt-1 h-8 max-w-6xl"
          }`}
        >
          <Link
            href={"https://www.linkedin.com/in/jpmp1998/"}
            target="blank"
            className="absolute left-0 z-10 px-2 font-bold uppercase"
          >
            <h1>Maciel Pinheiro</h1>
          </Link>
          <ul className="z-10 flex items-center justify-center gap-5 font-semibold">
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

          <div className="absolute flex w-full items-center justify-end px-2 gap-3">
            <LanguageSelector />
            <ThemeSwitch />

            <div>
              <DownloadResume />
            </div>
          </div>
        </div>
      </nav>

      <nav className="-z-50 block lg:hidden">
        <div className="fixed z-40 flex h-12 w-full items-center justify-between bg-white backdrop-blur-3xl dark:bg-black/80">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setNavIsOpen((prev) => !prev)}
              className="block cursor-pointer lg:hidden"
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
        <nav className="fixed z-30 mt-6">
          <motion.section
            initial="hidden"
            animate={navIsOpen ? "visible" : "hidden"}
            variants={fadeIn(0.1)}
            className="absolute mt-8 flex h-96 w-40 flex-col items-center justify-center gap-3 rounded-xl border-2 border-white bg-black text-white dark:border-black dark:bg-white dark:text-black"
          >
            <motion.ul
              onClick={() => setNavIsOpen(false)}
              className="z-10 mt-2 flex w-32 flex-col items-center justify-center gap-5 font-semibold"
            >
              {Nav_links.map((item, index) => (
                <motion.li
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    navIsOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: index * animationDelay, duration: 0.3 }}
                  className="w-full rounded-full p-1 text-center shadow shadow-white dark:shadow-black"
                >
                  <Link href={item.href} key={item.title}>
                    {t(item.title)}
                  </Link>
                </motion.li>
              ))}
              <motion.div variants={fadeIn(2)} className="rounded-full">
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
