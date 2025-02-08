"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useTranslations } from "next-intl";

import { slideInFromBottom } from "@/utils/motion";
import { social_media } from "@/constant/social";
import Link from "next/link";
import { SectionHeading } from "../section-heading";
import { useSectionInView } from "@/hooks/hooks";
import { toast, useToast } from "../ui/use-toast";
import { title } from "process";

export default function Contact() {
  const { ref } = useSectionInView("contact");
  const t = useTranslations("contact");
  const { toast } = useToast();
  const animationDelay = 0.5;
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
      toast({
        variant: "default",
        description: "Your message has been sent successfully.",
      });
      console.log(result);
    } else {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  }

  return (
    <>
      <motion.section
        ref={ref}
        id="contact"
        initial="hidden"
        whileInView={"visible"}
        viewport={{ once: true }}
        className="flex min-h-screen w-full flex-col items-center justify-center"
      >
        <SectionHeading heading={"title_contact"} />
        <motion.div
          variants={slideInFromBottom(0.8)}
          className="mb-4 grid h-full w-full max-w-[90%] grid-cols-1 content-center rounded-lg border-2 border-white bg-black p-2 dark:border-white dark:bg-black/50 md:h-[550px] md:max-w-3xl md:grid-cols-2 lg:max-w-4xl xl:max-w-5xl"
        >
          <form
            onSubmit={handleSubmit}
            className="flex h-full w-full max-w-xl flex-col items-center justify-center gap-3 rounded-lg bg-black font-semibold text-white dark:text-white sm:mx-0 md:mx-4 lg:mx-0"
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
              className="mb-4 mt-4 w-64 bg-white font-bold text-black dark:bg-white dark:text-black md:mb-0 md:w-96"
            >
              {t("button")}
            </Button>
          </form>

          <div className="h-full w-full">
            <h1 className="mt-2 text-center text-2xl font-semibold md:mb-0">
              {t("social")}
            </h1>
            <div className="mt-12 flex w-full flex-col items-center justify-evenly gap-3 md:h-96 md:gap-0">
              {social_media.map((social, index) => (
                <motion.div key={social.title}>
                  <Link
                    href={social.href}
                    target="blank"
                    className={`navHover flex w-56 items-center gap-2 rounded-lg border-2 border-white p-1`}
                  >
                    <social.icon
                      size={40}
                      className={`text-white ${social.style}`}
                    />
                    <span className="text-white">{social.title}</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}
