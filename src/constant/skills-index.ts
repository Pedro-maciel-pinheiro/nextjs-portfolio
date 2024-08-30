import { FaReact } from "react-icons/fa";
import {
  SiReactquery,
  SiRedux,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiTailwindcss,
  SiGithub,
  SiShadcnui,
  SiFramer,
  SiSwiper,
  SiWebflow,
  SiMongodb,
} from "react-icons/si";
import { TbBrandReactNative, TbBrandHeadlessui } from "react-icons/tb";
import { IoShieldCheckmark } from "react-icons/io5";
import { AiFillDatabase } from "react-icons/ai";
import React from "react";

export const Skill_data_1 = [
  {
    name: "React",
    logo: React.createElement(FaReact),
    href: "https://react.dev/",
    text_style: "hover:text-blue-500",
  },
  {
    name: "Query",
    logo: React.createElement(SiReactquery),
    href: "https://tanstack.com/query/latest/docs/framework/react/overview",
    text_style: "hover:text-red-400",
  },
  {
    name: "Redux",
    logo: React.createElement(SiRedux),
    href: "https://redux.js.org/",
    text_style: "hover:text-purple-300",
  },
  {
    name: "Native",
    logo: React.createElement(TbBrandReactNative),
    href: "https://reactnative.dev/",
    text_style: "hover:text-blue-500",
  },
  {
    name: "Next.js",
    logo: React.createElement(SiNextdotjs),
    href: "https://nextjs.org/",
    text_style: "",
  },
  {
    name: "Next-Auth",
    logo: React.createElement(IoShieldCheckmark),
    href: "https://next-auth.js.org/",
    text_style: "hover:text-pink-500",
  },
  {
    name: "JavaScript",
    logo: React.createElement(SiJavascript),
    href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    text_style: "hover:text-yellow-400",
  },
  {
    name: "TypeScript",
    logo: React.createElement(SiTypescript),
    href: "https://www.typescriptlang.org/",
    text_style: "hover:text-blue-500",
  },
  {
    name: "CSS",
    logo: React.createElement(SiCss3),
    href: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
    text_style: "hover:text-blue-500",
  },
] as const;

export const Skill_data_2 = [
  {
    name: "Tailwind",
    logo: React.createElement(SiTailwindcss),
    href: "https://tailwindcss.com/",
    text_style: "hover:text-cyan-500",
  },
  {
    name: "Github",
    logo: React.createElement(SiGithub),
    href: "https://github.com/Pedro-maciel-pinheiro",
    text_style: "hover:text-purple-500",
  },
  {
    name: "Shadcn/ui",
    logo: React.createElement(SiShadcnui),
    href: "https://ui.shadcn.com/",
    text_style: "hover:bg-black hover:text-white",
  },
  {
    name: "Headlessui",
    logo: React.createElement(TbBrandHeadlessui),
    href: "https://headlessui.com/",
    text_style: "hover:bg-black hover:text-white",
  },
  {
    name: "Framer",
    logo: React.createElement(SiFramer),
    href: "https://www.framer.com/motion/",
    text_style: "hover:text-pink-500",
  },
  {
    name: "Swiper",
    logo: React.createElement(SiSwiper),
    href: "https://swiperjs.com/",
    text_style: "hover:text-blue-600",
  },
  {
    name: "WebFlow",
    logo: React.createElement(SiWebflow),
    href: "https://webflow.com/",
    text_style: "hover:text-blue-600",
  },
  {
    name: "Mongodb",
    logo: React.createElement(SiMongodb),
    href: "https://www.mongodb.com",
    text_style: "hover:text-green-500",
  },
  {
    name: "Neon-tech",
    logo: React.createElement(AiFillDatabase),
    href: "https://neon.tech/",
    text_style: "hover:text-green-400",
  },
] as const;
