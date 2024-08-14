import image_1 from "@/assets/projetc-1.png";
import image_2 from "@/assets/project-2.png";
import image_3 from "@/assets/project-3.png";
import image_4 from "@/assets/project-4.png";
import image_5 from "@/assets/pic_1.png";
import image_6 from "@/assets/pic_2.png";
import image_7 from "@/assets/pic_3.png";
import image_8 from "@/assets/pic_4.png";
import { StaticImageData } from "next/image";
import { SkillDataProps } from "./icons-index";

import { FaReact } from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiShadcnui,
  SiFramer,
} from "react-icons/si";
import { TbBrandHeadlessui } from "react-icons/tb";

interface ImagesProps {
  id: string;
  image: StaticImageData;
}

export const projects_images_eco: ImagesProps[] = [
  {
    id: "1",
    image: image_1,
  },
  {
    id: "2",
    image: image_2,
  },
  {
    id: "3",
    image: image_3,
  },
  {
    id: "4",
    image: image_4,
  },
];
export const projects_images_phone: ImagesProps[] = [
  {
    id: "1",
    image: image_5,
  },
  {
    id: "2",
    image: image_6,
  },
  {
    id: "3",
    image: image_7,
  },
  {
    id: "4",
    image: image_8,
  },
];
export const projects_tools_eco: SkillDataProps[] = [
  {
    skill_name: "React",
    Image: FaReact,
    href: "https://react.dev/",
    text_style: "hover:text-blue-500",
  },
  {
    skill_name: "Next.js",
    Image: SiNextdotjs,
    href: "https://nextjs.org/",
    text_style: "",
  },
  {
    skill_name: "Redux",
    Image: SiRedux,
    href: "https://redux.js.org/",
    text_style: "hover:text-purple-300",
  },
  {
    skill_name: "Type Script",
    Image: SiTypescript,
    href: "https://www.typescriptlang.org/",
    text_style: "hover:text-blue-500",
  },
  {
    skill_name: "Tailwind",
    Image: SiTailwindcss,
    href: "https://tailwindcss.com/",
    text_style: "hover:text-cyan-500",
  },
  {
    skill_name: "Shadcn/ui",
    Image: SiShadcnui,
    href: "https://ui.shadcn.com/",
    text_style: " hover:text-white",
  },
  {
    skill_name: "Framer",
    Image: SiFramer,
    href: "https://www.framer.com/motion/",
    text_style: "hover:text-pink-500",
  },
];

export const projects_tools_phone: SkillDataProps[] = [
  {
    skill_name: "React",
    Image: FaReact,
    href: "https://react.dev/",
    text_style: "hover:text-blue-500",
  },
  {
    skill_name: "Next.js",
    Image: SiNextdotjs,
    href: "https://nextjs.org/",
    text_style: "",
  },
  {
    skill_name: "Headlessui",
    Image: TbBrandHeadlessui,
    href: "https://headlessui.com/",
    text_style: "hover:bg-black hover:text-white",
  },
  {
    skill_name: "Framer",
    Image: SiFramer,
    href: "https://www.framer.com/motion/",
    text_style: "hover:text-pink-500",
  },
  {
    skill_name: "Type Script",
    Image: SiTypescript,
    href: "https://www.typescriptlang.org/",
    text_style: "hover:text-blue-500",
  },
  {
    skill_name: "Tailwind",
    Image: SiTailwindcss,
    href: "https://tailwindcss.com/",
    text_style: "hover:text-cyan-500",
  },
  {
    skill_name: "Shadcn/ui",
    Image: SiShadcnui,
    href: "https://ui.shadcn.com/",
    text_style: " hover:text-white",
  },
];
