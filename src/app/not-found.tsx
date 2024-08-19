"use client";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <html className="flex h-screen flex-col items-center justify-center gap-2 text-3xl text-black dark:text-white">
      <body className="flex flex-col items-center justify-center gap-2">
        <h1>404</h1>
        Something went wrong
        <Link href={"/en"}>back to main page</Link>
      </body>
    </html>
  );
}
