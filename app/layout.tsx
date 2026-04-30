import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { PetroHeader } from "@/components/layout/PetroHeader";
import { PetroFooter } from "@/components/layout/PetroFooter";

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

const SITE_URL = "https://petrosolutions.com";
const TITLE = "Petro Solutions | Petroleum Equipment, Service & Installation";
const DESCRIPTION =
  "Petro Solutions provides sales, service, and installation of petroleum equipment — fuel storage tanks, dispensers, ATGs, POS, and forecourt systems — paired with merchant services through Orion Merchant Solutions. Serving Florida and Louisiana with nationwide shipping.";

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
    siteName: "Petro Solutions",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
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
        <PetroHeader />
        <main className="flex-1">{children}</main>
        <PetroFooter />
      </body>
    </html>
  );
}
