import React, { MouseEventHandler } from "react";

import { Button } from "./ui/button";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

interface MaskButtonProps {
  linkBasePath: string;
  title: string;
  btnColor: string;
  target: string;
  handleclick?: MouseEventHandler<HTMLButtonElement>;
  disable?: boolean;
}

const MaskButton = ({
  title,
  btnColor,
  handleclick,
  linkBasePath,
  target,
  disable,
}: MaskButtonProps) => {

  const t = useTranslations("project")
  return (
    <Link href={linkBasePath} className="" target={target}>
      <Button
        disabled={disable}
        onClick={handleclick}
        className={`relative z-20 w-28 overflow-hidden border-2 shadow-xl 
          transition-all duration-1000 after:absolute after:bottom-0 after:right-full
           after:h-[50px] after:w-[400px] after:translate-y-2 after:rounded-tr-full
            after:duration-1000 hover:after:translate-x-full active:translate-y-1 ${btnColor} `}
      >
        <p className="absolute z-10 mt-1">{t(title)}</p>
      </Button>
    </Link>
  );
};

export default MaskButton;
