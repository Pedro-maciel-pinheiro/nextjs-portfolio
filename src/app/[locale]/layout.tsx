import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pedro Maciel Pinheiro",
  description: "My Portfolio",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale} className={inter.className} suppressHydrationWarning>
      <body className="bg-fixed ">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            <Navbar />
            {children}
            <Footer/>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
