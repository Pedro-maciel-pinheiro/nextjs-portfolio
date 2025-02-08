"use client";
import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LanguageSelector from "../language-selector";
import ThemeSwitch from "../theme/theme-switch";
import { Squash as Hamburger } from "hamburger-react";
import Link from "next/link";
import { MenuProps } from "@/types";

export default function MobileNav({ menu }: MenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const closeIsOpen = () => setIsOpen(false);

  return (
    <>
      <nav className="flex h-12 items-center justify-between">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger className="flex h-8 w-8 items-center">
            <Hamburger size={30} toggled={isOpen} />
          </SheetTrigger>
          <SheetContent side={"left"} className="border-white/50 bg-black/90">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <ul className="mt-4 flex flex-col gap-2">
              {menu.map((link) => (
                <li key={link.title} className="mt-3 border-b uppercase">
                  <Link href={link.href} className="" onClick={closeIsOpen}>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
        <div className="flex items-center p-3">
          <div className="mt-1">
            <LanguageSelector />
          </div>
          <ThemeSwitch />
        </div>
      </nav>
    </>
  );
}
