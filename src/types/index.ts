import { StaticImageData } from 'next/image'
import { IconType } from 'react-icons/lib'

export type NavlinksProps = {
  title: string
  href: string
}

export type MenuProps = {
  menu: NavlinksProps[]
}

export type MaxWidthProps = {
  children: React.ReactNode
  className?: string
}

export type ProjectProps = {
  id: number
  name: string
  title: string
  link_website: string
  link_github: string
  image_thumb: string | StaticImageData
  video: string
  data: SkillsProps[]
  button_text_online: string
  button_text_github?: string
  button_text_detail?: string
  technologies: string
}

export type SkillsProps = {
  name: string
  logo: IconType
  href: string
  text_style: string
}

export type SearchParamsProps = {
  params: {
    project_name: string
  }
}

export type VideoPlayerProps = {
  videoSrc: string
  className?: string
}
