"use client";

import { useMediaQuery } from "@relume_io/relume-ui";
import {
  MotionValue,
  useMotionValue,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  projects_icons_eco,
  projects_icons_phone,
} from "@/constant/projects-images";
import Link from "next/link";
import { SkillDataProps } from "@/constant/icons-index";
import { useInViewHook } from "@/hooks/in-view";
import { fadeIn, slideInFromTop } from "@/utils/motion";
import MaskButton from "../mask-button";

type ImageProps = {
  src: string;
  alt?: string;
};

type FeatureSectionProps = {
  tagline: string;
  heading: string;
  description: string;
  button_title: string;
  linkPath: string;
  image: ImageProps;
  iconlinks: SkillDataProps[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  featureSections: FeatureSectionProps[];
};

export type ProjectShowCaseProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

const calculateScales = (
  totalSections: number,
  scrollYProgress: MotionValue<number>,
) => {
  return Array.from({ length: totalSections }, (_, index) => {
    const sectionFraction = 1 / totalSections;
    const start = sectionFraction * index;
    const end = sectionFraction * (index + 1);

    return index < totalSections - 1
      ? useTransform(scrollYProgress, [start, end], [1, 0.8])
      : useMotionValue(1);
  });
};

export const ProjectShowCase = (props: ProjectShowCaseProps) => {
  const { tagline, heading, description, featureSections } = {
    ...Layout408Defaults,
    ...props,
  } as Props;

  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end 60%"],
  });

  const scales = calculateScales(featureSections.length, scrollYProgress);

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="container text-center">
          <h1 className="mb-5 text-2xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
            {heading}
          </h1>
          <p className="md:text-md mb-20">{description}</p>
        </div>

        <div
          ref={containerRef}
          className="sticky top-0 grid grid-cols-1 gap-6 md:gap-0"
        >
          {featureSections.map((featureSection, index) => (
            <FeatureSection
              key={index}
              {...featureSection}
              scale={scales[index]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureSection = ({
  tagline,
  heading,
  description,
  button_title,
  linkPath,
  image,
  scale,
  index,
  iconlinks,
}: {
  tagline: string;
  heading: string;
  description: string;
  button_title: string;
  linkPath: string;
  image: ImageProps;
  scale: MotionValue<number>;
  index: number;
  iconlinks: SkillDataProps[];
}) => {
  const { ref, inView } = useInViewHook();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const Section = isMobile ? "div" : motion.div;
  const t = useTranslations("project");
  const animationDelay = 0.5;
  const contentOrder =
    !isMobile && index % 2 === 0 ? "order-first" : "order-last";
  const imageOrder =
    !isMobile && index % 2 === 0 ? "order-last" : "order-first";

  return (
    <Section
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="static mb-0 grid h-auto grid-cols-1 content-center items-stretch overflow-hidden rounded-xl border-2 border-black bg-white p-4 dark:border-white dark:bg-black md:sticky md:top-[10%] md:mb-[10vh] md:h-[65vh] lg:grid-cols-2"
      style={{ scale: scale as never }}
    >
      {/* {Information} */}
      <motion.div
        variants={slideInFromTop(0.5)}
        className={clsx(
          "flex flex-col justify-center p-6 md:p-4",
          contentOrder,
        )}
      >
        <p className="mb-2 font-semibold">{t(tagline)}</p>
        <h2 className="mb-5 text-2xl font-bold leading-[1.2] md:mb-6 md:text-4xl lg:text-5xl">
          {heading}
        </h2>
        <p className="text-justify font-semibold ">{t(description)}</p>

        <ul className="mt-6 flex items-center gap-x-4 md:mt-8 md:mb-8">
          {iconlinks.map((item, index) => (
            <motion.li
              key={item.skill_name}
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ delay: index * animationDelay, duration: 1 }}
              className="flex flex-col items-center font-semibold"
            >
              <item.Image size={40} className={`${item.text_style}`} />
              {item.skill_name}
            </motion.li>
          ))}
        </ul>

        <motion.div 
        variants={fadeIn(1)}
        className="flex items-center justify-start ">
          <MaskButton
            linkBasePath={linkPath}
            title={t(button_title)}
            btnColor={"w-56 bg-black dark:bg-white  after:bg-blue-500 hover:text-white rounded-lg font-semibold"}
            target={"blank"}
          />
        </motion.div>
      </motion.div>
      {/* {Images} */}
      <motion.div
        variants={slideInFromTop(0.5)}
        className={clsx(
          "flex flex-col items-center justify-center rounded-xl border-2 border-black dark:border-white",
          imageOrder,
        )}
      >
        <Link href={linkPath} target="blank">
          <Image
            src={image.src}
            alt={image.alt as string}
            width={800}
            height={800}
            className="rounded-lg"
          />
        </Link>
      </motion.div>
    </Section>
  );
};

export const Layout408Defaults: ProjectShowCaseProps = {
  tagline: "",
  heading: "My Projects",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  featureSections: [
    {
      tagline: "tagline-1",
      heading: "Next.js E-commerce",
      description: "info-text-1",
      button_title: "button-text",
      iconlinks: projects_icons_eco,
      linkPath: "https://dev-market-redux.vercel.app/",
      image: {
        src: "/img/dev-market.png",
        alt: "Placeholder image 1",
      },
    },
    {
      tagline: "tagline-2",
      heading: "Phone ShowCase",
      description: "info-text-3",
      button_title: "button-text",
      iconlinks: projects_icons_phone,
      linkPath: "https://phone-shop-mu.vercel.app/",
      image: {
        src: "/img/phone.png",
        alt: "Placeholder image 2",
      },
    },
  ],
};
