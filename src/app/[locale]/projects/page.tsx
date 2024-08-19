"use client";
import { ProjectShowCase } from "@/components/skills/relume";
import { motion } from "framer-motion";
import React from "react";

export default function Projects() {
  return (
    <div
      className="min-h-screen w-full bg-primary
         dark:bg-black/80"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeIn", duration: 1 }}
      >
        <ProjectShowCase />
      </motion.div>
    </div>
  );
}
