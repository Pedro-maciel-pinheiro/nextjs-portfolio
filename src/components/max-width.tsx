import { cn } from "@/lib/utils";
import { MaxWidthProps } from "@/types";
import React from "react";

export default function MaxWidth({ children, className }: MaxWidthProps) {
  return (
    <div
      className={cn(
        "mx-auto px-4 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
