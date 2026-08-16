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
    default: `${siteConfig.name} — Tea Processing Machinery, Kolkata`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL("https://gimpexoverseas.com"),
  keywords: [
    "tea machinery",
    "tea processing machinery",
    "Kolkata tea machinery",
    "rotorvane",
    "terman ctc",
    "continuous fermenting machine",
    "microwave dryer",
    "tea colour sorter",
    "tea bag machine",
    "tea processing plant",
    "orthodox tea machinery",
    "CTC tea machinery",
    "Star Export House",
    "ISO 9001 tea machinery",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gimpexoverseas.com",
    title: `${siteConfig.name} — Tea Processing Machinery, Kolkata`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Tea Processing Machinery`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Tea Processing Machinery`,
    description: siteConfig.description,
    images: ["https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=1200&h=630&q=85"],
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
