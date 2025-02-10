// constants/metadata.ts
import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "MP | Portfolio",
  description: "This is my 2025 Porftfolio :) I hope u like it ",
  openGraph: {
    title: "Maciel Pinheiro portfolio in Next.js",
    description: "Discover My porftolio and all my new projects!",
    url: "https://nextjs-portfolio-pedro-maciel.vercel.app",
    type: "website",
    images: [
      {
        url: "/img/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Image",
      },
    ],
    siteName: "MP | Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "MP | Portfolio",
    description: "Discover My porftolio and all my new projects!",
    images: "/img/opengraph-image.png",
  },
};
