import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="footer footer-center bg-primary dark:bg-black/80 backdrop-blur-lg
    text-black dark:text-white rounded p-10 border-t-2 border-black dark:border-white"
    >
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link
            href={"https://www.linkedin.com/in/jpmp1998/"}
            target="blank"
            className=" hover:text-blue-500 "
          >
            <FaLinkedin size={40} />
          </Link>
          <Link
            href={"https://github.com/Pedro-maciel-pinheiro"}
            target="blank"
            className=" hover:text-purple-600 "
          >
            <FaGithub size={40} />
          </Link>
          <Link
            href={"https://web.whatsapp.com/send?phone=5561998516239"}
            target="blank"
            className=" hover:text-green-600 "
          >
            <FaWhatsappSquare size={40} />
          </Link>
        </div>
      </nav>
      <aside
        className="text-lg font-bold text-black dark:text-white"
      >
        <span>Pedro Maciel Pinheiro</span>
        <span className="bg-gradient-to-r hover:bg-gradient-to-l
            transition-all duration-300 
             from-purple-500 to-blue-500 bg-clip-text text-transparent"> Front-end Devoloper & Web designer</span>
      </aside>
    </footer>
  );
}

export default Footer;
