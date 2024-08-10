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

interface SkillDataProps {
  skill_name: string;
  Image: IconType;
  href: string;
}

export const Skill_data: SkillDataProps[] = [
  {
    skill_name: "React",
    Image: FaReact,
    href: "https://react.dev/",
  },
  {
    skill_name: "Query",
    Image: SiReactquery,
    href: "https://tanstack.com/query/latest/docs/framework/react/overview",
  },
  {
    skill_name: "Redux",
    Image: SiRedux,
    href: "https://redux.js.org/",
  },
  {
    skill_name: "Native",
    Image: TbBrandReactNative,
    href: "https://reactnative.dev/",
  },
  {
    skill_name: "Next",
    Image: SiNextdotjs,
    href: "https://nextjs.org/",
  },
  {
    skill_name: "Next-Auth",
    Image: IoShieldCheckmark,
    href: "https://next-auth.js.org/",
  },
  {
    skill_name: "Java Script",
    Image: SiJavascript,
    href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
  },
  {
    skill_name: "Type Script",
    Image: SiTypescript,
    href: "https://www.typescriptlang.org/",
  },
  {
    skill_name: "CSS",
    Image: SiCss3,
    href: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
  },
  {
    skill_name: "Tailwind",
    Image: SiTailwindcss,
    href: "https://tailwindcss.com/",
  },
  {
    skill_name: "Github",
    Image: SiGithub,
    href: "https://github.com/Pedro-maciel-pinheiro",
  },
  {
    skill_name: "Shadcn/ui",
    Image: SiShadcnui,
    href: "https://ui.shadcn.com/",
  },
  {
    skill_name: "Headlessui",
    Image: TbBrandHeadlessui,
    href: "https://headlessui.com/",
  },
  {
    skill_name: "Framer",
    Image: SiFramer,
    href: "https://www.framer.com/motion/",
  },
  {
    skill_name: "Swiper",
    Image: SiSwiper,
    href: "https://swiperjs.com/",
  },
  {
    skill_name: "WebFlow",
    Image: SiWebflow,
    href: "https://webflow.com/",
  },
  {
    skill_name: "Mongodb",
    Image: SiMongodb,
    href: "https://www.mongodb.com",
  },
  {
    skill_name: "Neon-tech",
    Image: AiFillDatabase,
    href: "https://neon.tech/",
  },
];
