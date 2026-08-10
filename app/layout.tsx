import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { PetroHeader } from "@/components/layout/PetroHeader";
import { PetroFooter } from "@/components/layout/PetroFooter";
import { HashScrollHandler } from "@/components/layout/HashScrollHandler";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_TITLE,
  SITE_URL,
} from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const TITLE = SITE_TITLE;
const DESCRIPTION = SITE_DESCRIPTION;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Petro Solutions",
  },
  description: DESCRIPTION,
  keywords: [
    "petroleum equipment",
    "fuel dispensers",
    "gas station service",
    "petroleum installation",
    "fuel station construction",
    "POS systems",
    "merchant services",
    "petroleum maintenance",
    "Doral",
    "Miami",
    "gasoline retail support",
    "C-store equipment",
    "environmental monitoring",
    "tank installation",
  ],
  authors: [{ name: "Petro Solutions" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_US",
    images: [
      {
        url: SITE_OG_IMAGE,
        width: 2048,
        height: 1152,
        alt: "Petro Solutions — fueling station forecourt at twilight",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [SITE_OG_IMAGE],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <HashScrollHandler />
        <PetroHeader />
        <main className="flex-1">{children}</main>
        <PetroFooter />
      </body>
    </html>
  );
}
