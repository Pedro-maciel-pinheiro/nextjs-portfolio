import image_shopify from '@/assets/shopify.png'
import image_payload from '@/assets/payload.png'
import image_filter from '@/assets/filter.png'
import image_valorant from '@/assets/valorant.png'

import { FaReact, FaCcStripe } from 'react-icons/fa'

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiPayloadcms,
  SiTrpc,
  SiExpress,
  SiMongodb,
  SiShadcnui,
  SiReactquery,
} from 'react-icons/si'

import { ProjectProps, SkillsProps } from '@/types'
import { FaShopify } from 'react-icons/fa6'

export const Skill_data_Payload_project: SkillsProps[] = [
  {
    name: 'React',
    logo: FaReact,
    href: 'https://react.dev/',
    text_style: 'hover:text-blue-500',
  },
  {
    name: 'Next.js',
    logo: SiNextdotjs,
    href: 'https://nextjs.org/',
    text_style: 'hover:text-gray-300',
  },
  {
    name: 'Payload',
    logo: SiPayloadcms,
    href: 'https://payloadcms.com/',
    text_style: 'hover:text-gray-500',
  },
  {
    name: 'TypeScript',
    logo: SiTypescript,
    href: 'https://www.typescriptlang.org/',
    text_style: 'hover:text-blue-500',
  },
  {
    name: 'tRPC',
    logo: SiTrpc,
    href: 'https://trpc.io/',
    text_style: 'hover:text-cyan-500',
  },
  {
    name: 'Express',
    logo: SiExpress,
    href: 'https://expressjs.com',
    text_style: 'hover:text-gray-500',
  },
  {
    name: 'Mongodb',
    logo: SiMongodb,
    href: 'https://www.mongodb.com',
    text_style: 'hover:text-green-500',
  },
  {
    name: 'Tailwind',
    logo: SiTailwindcss,
    href: 'https://tailwindcss.com/docs/installation',
    text_style: 'hover:text-blue-500',
  },
  {
    name: 'Framer',
    logo: SiFramer,
    href: 'https://www.framer.com/motion/',
    text_style: 'hover:text-pink-500',
  },
  {
    name: 'Shadcn/ui',
    logo: SiShadcnui,
    href: 'https://ui.shadcn.com/',
    text_style: 'hover:text-grey-500',
  },
  {
    name: 'Stripe',
    logo: FaCcStripe,
    href: 'https://stripe.com',
    text_style: 'hover:text-purple-400',
  },
] as const

export const Skill_data_Shopify_project: SkillsProps[] = [
  {
    name: 'React',
    logo: FaReact,
    href: 'https://react.dev/',
    text_style: 'hover:text-blue-500',
  },
  {
    name: 'Next.js',
    logo: SiNextdotjs,
    href: 'https://nextjs.org/',
    text_style: 'hover:text-gray-300',
  },

  {
    name: 'TypeScript',
    logo: SiTypescript,
    href: 'https://www.typescriptlang.org/',
    text_style: 'hover:text-blue-500',
  },

  {
    name: 'Tailwind',
    logo: SiTailwindcss,
    href: 'https://tailwindcss.com/docs/installation',
    text_style: 'hover:text-blue-500',
  },
  {
    name: 'Framer',
    logo: SiFramer,
    href: 'https://www.framer.com/motion/',
    text_style: 'hover:text-pink-500',
  },
  {
    name: 'Shopify',
    logo: FaShopify,
    href: 'https://www.shopify.com/br',
    text_style: 'hover:text-shopify',
  },
  {
    name: 'Shadcn/ui',
    logo: SiShadcnui,
    href: 'https://ui.shadcn.com/',
    text_style: 'hover:text-grey-500',
  },
] as const

export const Skill_data_Filter_project: SkillsProps[] = [
  {
    name: 'React',
    logo: FaReact,
    href: 'https://react.dev/',
    text_style: 'hover:text-blue-500',
  },
  {
    name: 'Next.js',
    logo: SiNextdotjs,
    href: 'https://nextjs.org/',
    text_style: 'hover:text-gray-300',
  },
  {
    name: 'TypeScript',
    logo: SiTypescript,
    href: 'https://www.typescriptlang.org/',
    text_style: 'hover:text-blue-500',
  },
  {
    name: 'Tailwind',
    logo: SiTailwindcss,
    href: 'https://tailwindcss.com/docs/installation',
    text_style: 'hover:text-blue-500',
  },
  {
    name: 'React-Query',
    logo: SiReactquery,
    href: 'https://tanstack.com/query/latest/docs/framework/react/overview',
    text_style: 'hover:text-red-400',
  },
  {
    name: 'Shadcn/ui',
    logo: SiShadcnui,
    href: 'https://ui.shadcn.com/',
    text_style: 'hover:text-grey-500',
  },
  
]
export const Skill_data_Valorant_project: SkillsProps[] = [
  {
    name: 'React',
    logo: FaReact,
    href: 'https://react.dev/',
    text_style: 'hover:text-blue-500',
  },
  {
    name: 'Next.js',
    logo: SiNextdotjs,
    href: 'https://nextjs.org/',
    text_style: 'hover:text-gray-300',
  },
  {
    name: 'TypeScript',
    logo: SiTypescript,
    href: 'https://www.typescriptlang.org/',
    text_style: 'hover:text-blue-500',
  },
  {
    name: 'Tailwind',
    logo: SiTailwindcss,
    href: 'https://tailwindcss.com/docs/installation',
    text_style: 'hover:text-blue-500',
  },
  {
    name: 'Framer',
    logo: SiFramer,
    href: 'https://www.framer.com/motion/',
    text_style: 'hover:text-pink-500',
  },
]

export const project_info: ProjectProps[] = [
  {
    id: 1,
    name: 'perfect-shine-payload',
    title: 'project-title-1',
    link_website: 'https://perfect-shine-production.up.railway.app/',
    link_github: 'https://github.com/Pedro-maciel-pinheiro/perfect-shine',
    image_thumb: image_payload,
    video: '/video/payload.mkv',
    data: Skill_data_Payload_project,
    technologies: 'technologies-project-1',
    button_text_online: 'button-text-online',
    button_text_github: 'button-text-github',
    button_text_detail: 'button-text-detail',
  },
  {
    id: 2,
    name: 'perfect-shine-clothes-shopify',
    title: 'project-title-2',
    link_website: 'https://perfect-shine-clothes-shop.vercel.app/',
    link_github: 'https://github.com/Pedro-maciel-pinheiro/Perfect-shine-clothes-shop',
    image_thumb: image_shopify,
    video: '/video/shopify.mkv',
    data: Skill_data_Shopify_project,
    technologies: 'technologies-project-2',
    button_text_online: 'button-text-online',
    button_text_github: 'button-text-github',
    button_text_detail: 'button-text-detail',
  },
  {
    id: 3,
    name: 'filter-react-query',
    title: 'project-title-3',
    link_website: 'https://react-query-filter-one.vercel.app/',
    link_github: 'https://github.com/Pedro-maciel-pinheiro/react-query-filter',
    image_thumb: image_filter,
    video: '/video/filter.mkv',
    data: Skill_data_Filter_project,
    technologies: 'technologies-project-3',
    button_text_online: 'button-text-online',
    button_text_github: 'button-text-github',
    button_text_detail: 'button-text-detail',
  },
  {
    id: 4,
    name: 'valorant-api',
    title: 'project-title-4',
    link_website: 'https://valorant-api-practice.vercel.app/',
    link_github: 'https://github.com/Pedro-maciel-pinheiro/valorant-api-practice',
    image_thumb: image_valorant,
    video: '/video/valorant.mkv',
    data: Skill_data_Valorant_project,
    technologies: 'technologies-project-4',
    button_text_online: 'button-text-online',
    button_text_github: 'button-text-github',
    button_text_detail: 'button-text-detail',
  },
]
