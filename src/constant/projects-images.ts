import { IoShieldCheckmark } from "react-icons/io5";
import image_valorant from "@/assets/project-1.webp";
import image_ecomme from "@/assets/project-2.png";
import image_phone from "@/assets/project-3.png";

import { FaReact } from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiShadcnui,
  SiFramer,
  SiSwiper,
} from "react-icons/si";

import React from "react";
import { AiFillDatabase } from "react-icons/ai";
import { StaticImageData } from "next/image";

type ProjectProps = {
  id: number;
  tagline: string;
  title: string;
  description: string;
  title_button: string;
  images: string | StaticImageData;
  project_link: string;
  data: SkillsProps[];
};

type SkillsProps = {
  name: string;
  logo: React.ReactNode;
  href: string;
  text_style: string;
};
export const Skill_data_valorant: SkillsProps[] = [
  {
    name: "React",
    logo: React.createElement(FaReact),
    href: "https://react.dev/",
    text_style: "hover:text-blue-500",
  },
  {
    name: "Next.js",
    logo: React.createElement(SiNextdotjs),
    href: "https://nextjs.org/",
    text_style: "",
  },
  {
    name: "TypeScript",
    logo: React.createElement(SiTypescript),
    href: "https://www.typescriptlang.org/",
    text_style: "hover:text-blue-500",
  },
  {
    name: "Tailwindcss",
    logo: React.createElement(SiTailwindcss),
    href: "https://tailwindcss.com/docs/installation",
    text_style: "hover:text-blue-500",
  },
  {
    name: "Framer",
    logo: React.createElement(SiFramer),
    href: "https://www.framer.com/motion/",
    text_style: "hover:text-pink-500",
  },
] as const;

export const Skill_data_ecommerce: SkillsProps[] = [
  {
    name: "React",
    logo: React.createElement(FaReact),
    href: "https://react.dev/",
    text_style: "hover:text-blue-500",
  },
  {
    name: "Redux",
    logo: React.createElement(SiRedux),
    href: "https://redux.js.org/",
    text_style: "hover:text-purple-300",
  },

  {
    name: "Next.js",
    logo: React.createElement(SiNextdotjs),
    href: "https://nextjs.org/",
    text_style: "",
  },

  {
    name: "TypeScript",
    logo: React.createElement(SiTypescript),
    href: "https://www.typescriptlang.org/",
    text_style: "hover:text-blue-500",
  },
  {
    name: "Tailwindcss",
    logo: React.createElement(SiTailwindcss),
    href: "https://tailwindcss.com/docs/installation",
    text_style: "hover:text-blue-500",
  },

  {
    name: "Neon-db",
    logo: React.createElement(AiFillDatabase),
    href: "https://neon.tech/",
    text_style: "hover:text-green-400",
  },
];

export const Skill_data_phoneshop: SkillsProps[] = [
  {
    name: "React",
    logo: React.createElement(FaReact),
    href: "https://react.dev/",
    text_style: "hover:text-blue-500",
  },
  {
    name: "Next.js",
    logo: React.createElement(SiNextdotjs),
    href: "https://nextjs.org/",
    text_style: "",
  },
  {
    name: "TypeScript",
    logo: React.createElement(SiTypescript),
    href: "https://www.typescriptlang.org/",
    text_style: "hover:text-blue-500",
  },
  {
    name: "Tailwindcss",
    logo: React.createElement(SiTailwindcss),
    href: "https://tailwindcss.com/docs/installation",
    text_style: "hover:text-blue-500",
  },
  {
    name: "Framer",
    logo: React.createElement(SiFramer),
    href: "https://www.framer.com/motion/",
    text_style: "hover:text-pink-500",
  },
] as const;

export const project_info: ProjectProps[] = [
  {
    id: 1,
    tagline: "tagline-1",
    title: "main-title-1",
    description: "info-text-1",
    title_button: "button-text",
    images: image_valorant,
    project_link: " https://valorant-api-practice.vercel.app/ ",
    data: Skill_data_valorant,
  },
  {
    id: 2,
    tagline: "tagline-1",
    title: "main-title-2",
    description: "info-text-2",
    title_button: "button-text",
    images: image_ecomme,
    project_link: "https://dev-market-redux.vercel.app/",
    data: Skill_data_ecommerce,
  },
  {
    id: 3,
    tagline: "tagline-2",
    title: "main-title-3",
    description: "info-text-3",
    title_button: "button-text",
    images: image_phone,
    project_link: "https://phone-shop-mu.vercel.app",
    data: Skill_data_phoneshop,
  },
];
