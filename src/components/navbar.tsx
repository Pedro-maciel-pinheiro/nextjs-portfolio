import React from "react";
import ThemeSwitch from "./theme-switch";
import { ChangeLanguage } from "./change-language";

export const Navbar = () => {
  return (
    <div
      className="flex items-center fixed z-10
    justify-center  w-full h-10 backdrop-blur-3xl "
    >
      <div className="flex items-center gap-5 justify-center w-full max-w-xl
       text-black font-semibold dark:text-white
       h-10  bg-white/80 dark:bg-black/80 rounded-full mx-auto mt-4">
          <ThemeSwitch/>

          <ChangeLanguage />
       </div>
    </div>
  );
};
