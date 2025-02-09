import { IoShieldCheckmark } from "react-icons/io5";
import image_valorant from "@/assets/project-1.webp";
import image_ecomme from "@/assets/project-2.png";
import image_phone from "@/assets/project-3.png";

import { FaReact, FaCcStripe } from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiSwiper,
} from "react-icons/si";

import { ProjectProps, SkillsProps } from "@/types";

export const Skill_data_valorant: SkillsProps[] = [
  {
    name: "React",
    logo: FaReact,
    href: "https://react.dev/",
    text_style: "hover:text-blue-500",
  },
  {
    name: "Next.js",
    logo: SiNextdotjs,
    href: "https://nextjs.org/",
    text_style: "hover:text-gray-300",
  },
  {
    name: "Payload",
    logo: SiPayloadcms,
    href: "https://payloadcms.com/",
    text_style: "hover:text-gray-500",
  },
  {
    name: "TypeScript",
    logo: SiTypescript,
    href: "https://www.typescriptlang.org/",
    text_style: "hover:text-blue-500",
  },
  {
    name: "tRPC",
    logo: SiTrpc,
    href: "https://trpc.io/",
    text_style: "hover:text-cyan-500",
  },
  {
    name: "Express",
    logo: SiExpress,
    href: "https://expressjs.com",
    text_style: "hover:text-gray-500",
  },
  {
    name: "Mongodb",
    logo: SiMongodb,
    href: "https://www.mongodb.com",
    text_style: "hover:text-green-500",
  },
  {
    name: "Tailwind",
    logo: SiTailwindcss,
    href: "https://tailwindcss.com/docs/installation",
    text_style: "hover:text-blue-500",
  },
  {
    name: "Framer",
    logo: SiFramer,
    href: "https://www.framer.com/motion/",
    text_style: "hover:text-pink-500",
  },
  {
    name: "Stripe",
    logo: FaCcStripe,
    href: "https://stripe.com",
    text_style: "hover:text-blue-500",
  },
] as const;

export const project_info: ProjectProps[] = [
  {
    id: 1,
    name: "perfect-shine-payload",
    title: "project-title-1",
    link_website: "https://perfect-shine-production.up.railway.app/",
    link_github: "https://github.com/Pedro-maciel-pinheiro/perfect-shine",
    image_thumb: image_payload,
    video: "/video/gtr-mkv.mkv",
    data: Skill_data_valorant,
    technologies: "technologies-project-1",
    button_text_online: "button-text-online",
    button_text_github: "button-text-github",
    button_text_detail: "button-text-detail",
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
