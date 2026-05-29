import type { Metadata } from "next";
import { Geist_Mono, Inter, Nunito } from "next/font/google";
import { JsonLd } from "@/components/seo/json-ld";
import { homeMetadata } from "@/lib/seo/metadata";
import { globalSchemas } from "@/lib/seo/schema";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunito = Nunito({
  subsets: ["latin", "latin-ext"],
  weight: ["700"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  ...homeMetadata,
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de-CH"
      className={`${inter.variable} ${geistMono.variable} ${nunito.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <JsonLd data={globalSchemas()} />
        {children}
      </body>
    </html>
  );
}
