"use client";

import { Link, usePathname } from "@/navigation";

export const ChangeLanguage = () => {
  const pathname = usePathname();
  return (
    <div className="flex  gap-4 items-center">
      <Link href={pathname} locale="en">
        EN
      </Link>
      <Link href={pathname} locale="pt">
        PT
      </Link>
      <Link href={pathname} locale="jp">
        JP
      </Link>
    </div>
  );
};
