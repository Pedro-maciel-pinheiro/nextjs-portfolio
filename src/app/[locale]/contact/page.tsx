"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import { useInViewHook } from "@/hooks/in-view";
import { fadeIn } from "@/utils/motion";
import { social_media } from "@/constant/social";
import Link from "next/link";

export default function Contact() {
  const { ref, inView } = useInViewHook();
  const t = useTranslations("contact");
  const animationDelay = 0.5
  async function handleSubmit(event: any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7b98b54d-38bd-4e39-9225-6d19bb280ce5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      toast.success("Your message has been sent successfully");
      console.log(result);
    } else {
      toast.error("Something went wrong");
    }
  }

  return (
    <>
      <motion.section
        ref={ref}
        initial={"hidden"}
        animate={inView ? "visible" : "hidden"}
        className="bg-primary dark:bg-black/80 flex flex-col items-center 
      justify-center min-h-screen w-full "
      >
        <h1 className="text-4xl lg:text-6xl font-semibold mb-4">
          {t("main-title")}
        </h1>
        <motion.div
          variants={fadeIn(1)}
          className="flex items-center 
        justify-center w-full max-w-7xl h-full md:h-[600px] border-2
         border-black dark:border-white rounded-lg bg-white dark:bg-black/50 p-2"
        >
          <form
            onSubmit={handleSubmit}
            className="w-full h-full flex flex-col gap-3 items-center justify-center 
             max-w-xl text-white dark:text-white font-semibold  rounded-lg bg-black"
          >
            <h1 className="text-2xl mb-8">{t("subtitle")}</h1>
            <div className=" flex flex-col items-start justify-center gap-4 w-96">
              <Label>{t("name")}</Label>
              <Input
                type="text"
                name="name"
                placeholder={t("name")}
                required
                className="bg-white text-black"
              />
              <Label>{t("email")}</Label>
              <Input
                type="email"
                name="email"
                placeholder={t("email")}
                required
                className="bg-white text-black"
              />
              <Label>{t("type")}</Label>
              <Textarea
                name="message"
                placeholder={t("type")}
                className="h-36 bg-white text-black"
              />
            </div>
            <Button
              type="submit"
              className="bg-white text-black dark:bg-white dark:text-black 
             w-96 mt-4 font-bold"
            >
              {t("button")}
            </Button>
          </form>

          <div className="w-full h-full  ">
            <h1 className="text-center text-2xl mt-12 font-semibold">
            {t("social")}
            </h1>
            <div className="flex flex-col items-center justify-evenly w-full h-96 ">
              {social_media.map((social,index) => (
                <motion.div
                  key={social.title}
                  initial={{ opacity: 0, x: 120 }}
                  animate={
                    inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 120 }
                  }
                  transition={{ delay: index * animationDelay, duration: 2 }}
                >
                  <Link
                    href={social.href}
                    target="blank"
                    className="flex  gap-2 w-48 p-1 items-center rounded-lg
                    border-2 border-black dark:border-white navHover"
                  >
                    <social.icon size={40} className={`${social.style}`} />
                    <span>{social.title}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.section>
      <Toaster position="top-center" />
    </>
  );
}
