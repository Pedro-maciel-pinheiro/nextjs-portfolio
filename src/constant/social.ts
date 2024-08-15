import { IconType } from "react-icons/lib";
import { FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

interface SocialProps {
  title: string;
  icon: IconType;
  href: string;
  style:string
}

export const social_media: SocialProps[] = [
  {
    title: "Linkedin",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/jpmp1998/",
    style:"hover:text-blue-500"
  },
  {
    title: "Github",
    icon: FaGithub,
    href: "https://github.com/Pedro-maciel-pinheiro",
    style:"hover:text-purple-600"
  },
  {
    title: "Whatsapp",
    icon: FaWhatsappSquare,
    href: "https://web.whatsapp.com/send?phone=5561998516239",
    style:"hover:text-green-500"
  },
 
];
