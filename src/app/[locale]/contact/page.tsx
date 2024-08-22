"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast, Toaster } from "sonner";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";
import { useInViewHook } from "@/hooks/in-view";
import { fadeIn, slideInFromBottom } from "@/utils/motion";
import { social_media } from "@/constant/social";
import Link from "next/link";

export default function Contact() {
  const { ref, inView } = useInViewHook();
  const t = useTranslations("contact");
  const animationDelay = 1;
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
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex min-h-screen w-full flex-col items-center justify-center bg-primary dark:bg-black/80"
      >
        <motion.div variants={slideInFromBottom(0.6)}>
          <h1 className="mt-16 mb-4 md:mb-16 text-4xl font-semibold lg:text-6xl">
            {t("main-title")}
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromBottom(0.8)}
          className="mb-4 grid h-full w-full max-w-[90%] grid-cols-1 items-center justify-center rounded-lg border-2 border-black bg-white p-2 dark:border-white dark:bg-black/50 md:h-[600px] xl:max-w-7xl md:grid-cols-2"
        >
          <form
            onSubmit={handleSubmit}
            className="flex h-full w-full max-w-xl flex-col items-center justify-center gap-3 rounded-lg bg-black font-semibold text-white dark:text-white"
          >
            <h1 className="mb-8 text-2xl">{t("subtitle")}</h1>
            <div className="flex w-64 flex-col items-start justify-center gap-4 md:w-96">
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
              className="mt-4 w-64 bg-white font-bold text-black
               dark:bg-white dark:text-black md:w-96 mb-4 md:mb-0"
            >
              {t("button")}
            </Button>
          </form>

          <div className="h-full w-full ">
            <h1 className="mb-4 mt-12 text-center text-2xl font-semibold md:mb-0">
              {t("social")}
            </h1>
            <div className="flex w-full flex-col items-center justify-evenly gap-3 md:h-96 md:gap-0">
              {social_media.map((social, index) => (
                <motion.div
                  ref={ref}
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
                    className="navHover flex w-48 items-center gap-2 rounded-lg border-2 border-black p-1 dark:border-white"
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
