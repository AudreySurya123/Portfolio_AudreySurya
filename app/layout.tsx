import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import { IntroLoader } from "@/components/IntroLoader";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Audrey Surya | Product-minded developer",
  description: "Portfolio of Audrey Surya, a developer building thoughtful digital products.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}><IntroLoader /><SmoothScroll>{children}</SmoothScroll></body>
    </html>
  );
}
