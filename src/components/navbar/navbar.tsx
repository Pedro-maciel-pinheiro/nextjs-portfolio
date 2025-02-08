"use client";
import LanguageSelector from "../language-selector";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import ThemeSwitch from "../theme/theme-switch";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { Nav_links } from "@/constant/nav-links";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section";
import MobileNav from "./mobile";

const Navbar = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const animationDelay = 0.5;

  const menu = Nav_links;

  const t = useTranslations("nav");
  return (
    <>
      <nav className="sticky top-0 z-50 h-auto w-full">
        <motion.div
          initial={"hidden"}
          animate={"visible"}
          className={`relative items-center justify-center bg-white/90 dark:bg-black/95`}
        >
          <div className="block lg:hidden">
            <MobileNav menu={menu} />
          </div>
          <div className="relative mx-auto hidden h-12 md:max-w-3xl lg:block lg:max-w-5xl xl:max-w-6xl">
            <Link
              href={"/"}
              target="blank"
              className="absolute z-50 flex h-12 items-center font-semibold"
            >
              <motion.h1 variants={slideInFromTop(0.5)} className="text-lg">
                Maciel Pinheiro
              </motion.h1>
            </Link>
            <ul className="relative z-40 flex h-12 items-center justify-center gap-5 font-semibold">
              {menu.map((link, index) => (
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
                    className={clsx(
                      `font-bold transition-colors duration-500`,
                      {
                        "text-black dark:text-white":
                          link.title === activeSection,
                      },
                    )}
                  >
                    {t(link.title)}
                  </Link>
                  {link.title === activeSection && (
                    <motion.span
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 30,
                      }}
                      className="absolute mt-4 h-[2px] w-full rounded-full bg-blue-500"
                    />
                  )}
                </motion.li>
              ))}
              <motion.div
                variants={slideInFromTop(0.5)}
                className="absolute right-0 flex w-28 items-center justify-end gap-2"
              >
                <span className="mt-1">
                  <LanguageSelector />
                </span>
                <span>
                  <ThemeSwitch />
                </span>
              </motion.div>
            </ul>
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default Navbar;
