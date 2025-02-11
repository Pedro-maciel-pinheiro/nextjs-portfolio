import { IconType } from "react-icons/lib";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsappSquare,
  FaPhoneVolume,
} from "react-icons/fa";
import { FaSquarePhone } from "react-icons/fa6";

interface SocialProps {
  title: string;
  icon: IconType;
  href: string;
  style: string;
}

export const social_media: SocialProps[] = [
  {
    title: "Linkedin",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/jpmp1998/",
    style: "hover:text-blue-500 hover:border-blue-500",
  },
  {
    title: "Github",
    icon: FaGithub,
    href: "https://github.com/Pedro-maciel-pinheiro",
    style: "hover:text-purple-600 hover:border-purple-600",
  },
  {
    title: "Whatsapp",
    icon: FaWhatsappSquare,
    href: "https://web.whatsapp.com/send?phone=5561998516239",
    style: "hover:text-green-500 hover:border-green-500",
  },
  {
    title: "55+ 61 99851-6239",
    icon: FaSquarePhone,
    href: "",
    style: "hover:text-green-600 hover:border-green-500",
  },
];
