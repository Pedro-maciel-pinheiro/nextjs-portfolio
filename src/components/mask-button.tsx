import React, { MouseEventHandler } from "react";


import { Button } from "./ui/button";
import { Link } from "@/navigation";

interface MaskButtonProps {
  linkBasePath?: any;
  title: string;
  btnColor: string;
  target:string
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
  return (
    <Link href={linkBasePath} className="" target={target}>
      <Button
        disabled={disable}
        onClick={handleclick}
        className={`shadow-xl border-2 z-20 
         duration-1000
         w-28 relative after:h-[50px] after:translate-y-2 
         after:w-72 overflow-hidden
         after:bottom-0 after:right-full
         after:absolute 
         hover:after:translate-x-full 
         after:duration-1000 
         after:rounded-tr-full
         active:translate-y-1 transition-all
         ${btnColor}
         `}
      >
        <p className="absolute z-10 ">{title}</p>
      </Button>
    </Link>
  );
};

export default MaskButton;
