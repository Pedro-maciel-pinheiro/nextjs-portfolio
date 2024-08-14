"use client"
import { motion } from "framer-motion";
import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary
         dark:bg-black/80 w-full">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 1 }}
        className="flex flex-col w-full items-center justify-center gap-2 "
      >
        <h1 className="text-6xl">Contact</h1>
      </motion.div>
    </div>
  );
}