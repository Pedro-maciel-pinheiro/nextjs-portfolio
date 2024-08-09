import ThemeSwitch from "./theme-switch";
import { ChangeLanguage } from "./change-language";
import { Link } from "@/navigation";
import { ModeToggle } from "./mode-toggle";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("nav");
  return (
    <>
      <nav className="w-full h-10 fixed  ">
        <div
          className="flex backdrop-blur-lg bg-white/50 dark:bg-black/60 rounded-full px-4
      items-center justify-between max-w-7xl mx-auto mt-2"
        >
          <div className="uppercase font-bold">
            <h1>Maciel Pinheiro</h1>
          </div>
          <ul className="flex gap-8 items-center 
          justify-center font-medium ">
            <li className="navHover">
              <Link href={"/"}>{t("home")}</Link>
            </li>
            <li className="navHover">
              <Link href={"/projects"}>{t("projects")}</Link>
            </li>
            <li className="navHover">
              <Link href={"/about"}>{t("about")}</Link>
            </li>
            <li
              className="flex items-center"
            >
              <ChangeLanguage />
              <ModeToggle />
            </li>
          </ul>
        </div>
      </nav>

      <div className="fixed z-50 flex items-center  h-10 justify-end  max-w-[90%]"></div>
    </>
  );
};

export default Navbar;
