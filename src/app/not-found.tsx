"use client";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <html className="flex flex-col gap-2 items-center justify-center text-3xl text-black dark:text-white h-screen">
      <body className=" flex flex-col gap-2 items-center justify-center">
        <h1>404</h1>
        Something went wrong
        <Link href={"/en"}>back to main page</Link>
      </body>
    </html>
  );
}
