"use client";
import LanguageSelector from "../language-selector";
import { Link } from "@/navigation";

import { useTranslations } from "next-intl";
import ThemeSwitch from "../theme-switch";
import { useEffect, useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

import { motion } from "framer-motion";
import {
  fadeIn,
  fadeInFromNegativeX,
  fadeInFromX,
  slideInFromTop,
} from "@/utils/motion";
import { ModeToggle } from "../mode-toggle";
import { Nav_links } from "@/constant/nav-links";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section";

const Navbar = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
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
        <motion.div
          initial={"hidden"}
          animate={"visible"}
          className={`relative mx-auto hidden items-center justify-center rounded-md px-4 transition-all duration-1000 lg:flex ${
            navScroll
              ? "mt-0 h-12 max-w-7xl bg-white/90 backdrop-blur-sm dark:bg-black/90"
              : "mt-1 h-8 max-w-6xl"
          }`}
        >
          <Link
            href={"https://www.linkedin.com/in/jpmp1998/"}
            target="blank"
            className="absolute left-0 z-10 px-2 font-bold uppercase"
          >
            <motion.h1 variants={slideInFromTop(0.5)}>
              Maciel Pinheiro
            </motion.h1>
          </Link>
          <ul className="z-10 mt-2 flex items-center justify-center gap-5 font-semibold">
            {Nav_links.map((link, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * animationDelay, duration: 0.8 }}
                className="relative flex items-center text-gray-700 dark:text-gray-300"
              >
                <Link
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.title),
                      setTimeOfLastClick(Date.now());
                  }}
                  className={clsx(`font-bold transition-colors duration-500`, {
                    "text-black dark:text-white": link.title === activeSection,
                  })}
                >
                  {t(link.title)}
                </Link>
                {link.title === activeSection && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 280, damping: 30 }}
                    className="absolute mt-4 h-[2px] w-full rounded-full bg-blue-500"
                  />
                )}
              </motion.li>
            ))}
          </ul>
          <motion.div
            variants={slideInFromTop(0.5)}
            className="absolute flex w-full items-center justify-end gap-3 px-2"
          >
            <span className="mt-1">
              <LanguageSelector />
            </span>
            <span>
              <ThemeSwitch />
            </span>
          </motion.div>
        </motion.div>
      </nav>

      <nav className="-z-50 block lg:hidden">
        <div className="fixed z-50 flex h-12 w-full items-center justify-between bg-white/90 backdrop-blur-3xl dark:bg-black/80">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setNavIsOpen((prev) => !prev)}
              className="block cursor-pointer lg:hidden"
            >
              <Hamburger toggled={navIsOpen} />
            </button>
          </div>

          <div className="mx-3 flex items-center gap-4">
            <LanguageSelector />

            <ThemeSwitch />
          </div>
        </div>
      </nav>

      {navIsOpen && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0,
            duration: 0.5,
            type: "spring",
            stiffness: 20,
            damping: 5,
            mass: 0.5,
          }}
          className="fixed z-40 flex min-h-screen w-full backdrop-blur-3xl"
        >
          <ul
            onClick={() => setNavIsOpen(false)}
            className="my-20 flex w-full flex-col gap-3 text-2xl"
          >
            {Nav_links.map((link, index) => (
              <motion.li
                key={index}
                initial={"hidden"}
                whileInView={"visible"}
                custom={index}
                variants={fadeInFromNegativeX}
                className="w-full"
              >
                <Link
                  href={link.href}
                  className="flex h-16 w-full items-end border-b"
                >
                  <p className="mx-2 font-semibold uppercase">{link.title}</p>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}
    </>
  );
};

export default Navbar;
