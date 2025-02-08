import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { languages } from "./constant/language";

export const locales = languages;
export const localePrefix = "always";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales, localePrefix });
