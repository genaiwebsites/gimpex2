import type { Metadata } from "next";
import { Sora, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/siteConfig";
import { LayoutShell } from "@/components/layout/LayoutShell";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

import { JsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Tea Processing Machinery Suppliers, Kolkata`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL("https://gimpexoverseas.com"),
  keywords: [
    "tea machinery supplier",
    "tea processing machinery",
    "Kolkata tea machinery supplier",
    "rotorvane supplier",
    "terman ctc supplier",
    "continuous fermenting machine",
    "microwave dryer tea",
    "tea colour sorter",
    "tea bag machine",
    "tea processing plant supplier",
    "orthodox tea machinery supplier",
    "CTC tea machinery supplier",
    "Star Export House",
    "ISO 9001 tea machinery",
    "tea machine dealer India",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gimpexoverseas.com",
    title: `${siteConfig.name} — Tea Processing Machinery Suppliers, Kolkata`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero/tea-machinery-plant-hero.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Tea Processing Machinery`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Tea Processing Machinery Suppliers`,
    description: siteConfig.description,
    images: ["/images/hero/tea-machinery-plant-hero.jpg"],
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
      data-theme="blue"
      suppressHydrationWarning
      className={`${sora.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <JsonLd />
      </head>
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
