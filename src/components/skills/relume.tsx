"use client";

import { useMediaQuery } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import {
  MotionValue,
  useMotionValue,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";
import clsx from "clsx";
import MaskButton from "../mask-button";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";

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
      <div className="container mt-8">
        <div className="container text-center">
          <h1 className="mb-5 text-2xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
            {heading}
          </h1>
          <p className="md:text-md">{description}</p>
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
}: {
  tagline: string;
  heading: string;
  description: string;
  button_title: string;
  linkPath: string;
  image: ImageProps;
  scale: MotionValue<number>;
  index: number;
}) => {
  const isMobile = useMediaQuery("(max-width: 767px)");
  const Section = isMobile ? "div" : motion.div;
  const t = useTranslations("project");
  const contentOrder =
    !isMobile && index % 2 === 0 ? "order-first" : "order-last";
  const imageOrder =
    !isMobile && index % 2 === 0 ? "order-last" : "order-first";

  return (
    <Section
      className="static mb-0 grid h-auto grid-cols-1 content-center items-stretch overflow-hidden rounded-xl border-2 border-black bg-white dark:border-white dark:bg-black/40 md:sticky md:top-[10%] md:mb-[10vh] md:h-[60vh] md:grid-cols-2"
      style={{ scale: scale as never }}
    >
      <div
        className={clsx(
          "flex flex-col justify-center p-6 md:p-8 lg:p-12",
          contentOrder,
        )}
      >
        <p className="mb-2 font-semibold">{tagline}</p>
        <h2 className="mb-5 text-2xl font-bold leading-[1.2] md:mb-6 md:text-4xl lg:text-5xl">
          {heading}
        </h2>
        <p>{t(description)}</p>

        <div className="mt-6 flex items-center gap-x-4 md:mt-8"></div>
      </div>
      <div
        className={clsx(
          "flex flex-col items-center justify-center",
          imageOrder,
        )}
      >
        <Image
          src={image.src}
          alt={image.alt as string}
          width={800}
          height={800}
          className="rounded-xl"
        />
      </div>
    </Section>
  );
};

export const Layout408Defaults: ProjectShowCaseProps = {
  tagline: "",
  heading: "My Projects",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  featureSections: [
    {
      tagline: "project 01",
      heading: "Next.js E-commerce",
      description: "info-text-1",
      button_title: "",
      linkPath: "",
      image: {
        src: "/img/projetc-1.png",
        alt: "Placeholder image 1",
      },
    },
    {
      tagline: "project 02",
      heading: "Phone ShowCase",
      description: "info-text-1",
      button_title: "",
      linkPath: "",
      image: {
        src: "/img/projetc-1.png",
        alt: "Placeholder image 2",
      },
    },
  ],
};
