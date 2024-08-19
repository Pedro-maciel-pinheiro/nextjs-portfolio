import { IoShieldCheckmark } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { TbBrandReactNative, TbBrandHeadlessui } from "react-icons/tb";
import {
  SiJavascript,
  SiTypescript,
  SiReactquery,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiGithub,
  SiShadcnui,
  SiFramer,
  SiSwiper,
  SiMongodb,
  SiCss3,
  SiWebflow,
} from "react-icons/si";
import { AiFillDatabase } from "react-icons/ai";
import { IconType } from "react-icons/lib";

export interface SkillDataProps {
  skill_name: string;
  Image: IconType;
  href: string;
  text_style:string
}

export const Skill_data: SkillDataProps[] = [
  {
    skill_name: "React",
    Image: FaReact,
    href: "https://react.dev/",
    text_style:"hover:text-blue-500"
  },
  {
    skill_name: "Query",
    Image: SiReactquery,
    href: "https://tanstack.com/query/latest/docs/framework/react/overview",
    text_style:"hover:text-red-400"
  },
  {
    skill_name: "Redux",
    Image: SiRedux,
    href: "https://redux.js.org/",
    text_style:"hover:text-purple-300"
  },
  {
    skill_name: "Native",
    Image: TbBrandReactNative,
    href: "https://reactnative.dev/",
    text_style:"hover:text-blue-500"
  },
  {
    skill_name: "Next.js",
    Image: SiNextdotjs,
    href: "https://nextjs.org/",
    text_style:""
  },
  {
    skill_name: "Next-Auth",
    Image: IoShieldCheckmark,
    href: "https://next-auth.js.org/",
    text_style:"hover:text-pink-500"
  },
  {
    skill_name: "Java Script",
    Image: SiJavascript,
    href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    text_style:"hover:text-yellow-400"
  },
  {
    skill_name: "Type Script",
    Image: SiTypescript,
    href: "https://www.typescriptlang.org/",
    text_style:"hover:text-blue-500"
  },
  {
    skill_name: "CSS",
    Image: SiCss3,
    href: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
    text_style:"hover:text-blue-500"
  },
  {
    skill_name: "Tailwind",
    Image: SiTailwindcss,
    href: "https://tailwindcss.com/",
    text_style:"hover:text-cyan-500"
  },
  {
    skill_name: "Github",
    Image: SiGithub,
    href: "https://github.com/Pedro-maciel-pinheiro",
    text_style:"hover:text-purple-500"
  },
  {
    skill_name: "Shadcn/ui",
    Image: SiShadcnui,
    href: "https://ui.shadcn.com/",
    text_style:"hover:bg-black hover:text-white"
  },
  {
    skill_name: "Headlessui",
    Image: TbBrandHeadlessui,
    href: "https://headlessui.com/",
    text_style:"hover:bg-black hover:text-white"
  },
  {
    skill_name: "Framer",
    Image: SiFramer,
    href: "https://www.framer.com/motion/",
    text_style:"hover:text-pink-500"
  },
  {
    skill_name: "Swiper",
    Image: SiSwiper,
    href: "https://swiperjs.com/",
    text_style:"hover:text-blue-600"
  },
  {
    skill_name: "WebFlow",
    Image: SiWebflow,
    href: "https://webflow.com/",
    text_style:"hover:text-blue-600"
  },
  {
    skill_name: "Mongodb",
    Image: SiMongodb,
    href: "https://www.mongodb.com",
    text_style:"hover:text-green-500"
  },
  {
    skill_name: "Neon-tech",
    Image: AiFillDatabase,
    href: "https://neon.tech/",
    text_style:"hover:text-green-400"
  },
];
export const Skill_data_1: SkillDataProps[] = [
  {
    skill_name: "React",
    Image: FaReact,
    href: "https://react.dev/",
    text_style:"hover:text-blue-500"
  },
  {
    skill_name: "Query",
    Image: SiReactquery,
    href: "https://tanstack.com/query/latest/docs/framework/react/overview",
    text_style:"hover:text-red-400"
  },
  {
    skill_name: "Redux",
    Image: SiRedux,
    href: "https://redux.js.org/",
    text_style:"hover:text-purple-300"
  },
  {
    skill_name: "Native",
    Image: TbBrandReactNative,
    href: "https://reactnative.dev/",
    text_style:"hover:text-blue-500"
  },
  {
    skill_name: "Next.js",
    Image: SiNextdotjs,
    href: "https://nextjs.org/",
    text_style:""
  },
  {
    skill_name: "Next-Auth",
    Image: IoShieldCheckmark,
    href: "https://next-auth.js.org/",
    text_style:"hover:text-pink-500"
  },
  {
    skill_name: "Java Script",
    Image: SiJavascript,
    href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    text_style:"hover:text-yellow-400"
  },
  {
    skill_name: "Type Script",
    Image: SiTypescript,
    href: "https://www.typescriptlang.org/",
    text_style:"hover:text-blue-500"
  },
  {
    skill_name: "CSS",
    Image: SiCss3,
    href: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
    text_style:"hover:text-blue-500"
  },
  
];
export const Skill_data_2: SkillDataProps[] = [
  
  {
    skill_name: "Tailwind",
    Image: SiTailwindcss,
    href: "https://tailwindcss.com/",
    text_style:"hover:text-cyan-500"
  },
  {
    skill_name: "Github",
    Image: SiGithub,
    href: "https://github.com/Pedro-maciel-pinheiro",
    text_style:"hover:text-purple-500"
  },
  {
    skill_name: "Shadcn/ui",
    Image: SiShadcnui,
    href: "https://ui.shadcn.com/",
    text_style:"hover:bg-black hover:text-white"
  },
  {
    skill_name: "Headlessui",
    Image: TbBrandHeadlessui,
    href: "https://headlessui.com/",
    text_style:"hover:bg-black hover:text-white"
  },
  {
    skill_name: "Framer",
    Image: SiFramer,
    href: "https://www.framer.com/motion/",
    text_style:"hover:text-pink-500"
  },
  {
    skill_name: "Swiper",
    Image: SiSwiper,
    href: "https://swiperjs.com/",
    text_style:"hover:text-blue-600"
  },
  {
    skill_name: "WebFlow",
    Image: SiWebflow,
    href: "https://webflow.com/",
    text_style:"hover:text-blue-600"
  },
  {
    skill_name: "Mongodb",
    Image: SiMongodb,
    href: "https://www.mongodb.com",
    text_style:"hover:text-green-500"
  },
  {
    skill_name: "Neon-tech",
    Image: AiFillDatabase,
    href: "https://neon.tech/",
    text_style:"hover:text-green-400"
  },
];
