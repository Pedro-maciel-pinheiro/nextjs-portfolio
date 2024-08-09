"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";

export const ChangeLanguage = () => {
  const [isPanding, startTransition] = useTransition();
  const router = useRouter();
  const localPath = useLocale();
  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <select
      defaultValue={localPath}
      onChange={onSelectChange}
      disabled={isPanding}
      className="bg-transparent dark:bg-black/60  font-semibold border-none text-sm"
    >
      <option  value="en">EN</option>
      <option  value="pt">PT</option>
      <option  value="jp">JP</option>
    </select>
  );
};
