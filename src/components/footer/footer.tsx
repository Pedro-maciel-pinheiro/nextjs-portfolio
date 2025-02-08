import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-5 rounded border-t-2 border-black bg-primary p-10 text-black backdrop-blur-lg dark:border-white dark:bg-black/80 dark:text-white">
      <aside className="flex flex-col items-center justify-center text-lg font-bold text-black dark:text-white">
        <span>João Pedro Maciel Pinheiro</span>
        <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-sm text-transparent transition-all duration-300 hover:bg-gradient-to-l md:text-lg">
          {" "}
          Front-end Devoloper & Web designer
        </span>
      </aside>
    </footer>
  );
}

export default Footer;
