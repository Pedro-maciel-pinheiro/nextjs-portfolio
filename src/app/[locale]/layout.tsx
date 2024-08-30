import type { Metadata } from "next";
import { Anek_Devanagari } from "next/font/google";
import "../globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import ActiveSectionContextProvider from "@/context/active-section";
import { siteMetadata } from "@/constant/metadata";

const anek = Anek_Devanagari({ subsets: ["latin"] });

export const metadata: Metadata = siteMetadata

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale} className={anek.className} suppressHydrationWarning>
      <ActiveSectionContextProvider>
        <body className="bg-fixed">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NextIntlClientProvider messages={messages}>
              <Navbar />
              {children}
              <Footer />
            </NextIntlClientProvider>
          </ThemeProvider>
        </body>
      </ActiveSectionContextProvider>
    </html>
  );
}
