

import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Home");

  return (
    <div
      className={`flex items-center 
      justify-center transition-all duration-300
     min-h-screen w-full 
     `}
    >
      <div
        className="w-full h-full mx-auto max-w-7xl
        
        flex items-center justify-center rounded-lg
        backdrop-blur-sm bg-white/80  dark:bg-black/80"
      >
        <div className="flex flex-col w-full h-96 text-black dark:text-white">
          <h1>{t("title")}</h1>
          <p>{t("description")}</p>
        </div>

        
      </div>
    </div>
  );
}
