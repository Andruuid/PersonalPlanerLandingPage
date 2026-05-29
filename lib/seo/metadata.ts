import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
}: PageMetadataOptions): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${siteConfig.url}${canonicalPath === "/" ? "" : canonicalPath}`;
  const fullTitle =
    canonicalPath === "/" ? siteConfig.title : `${title} | ${siteConfig.name}`;

  return {
    title: canonicalPath === "/" ? siteConfig.title : title,
    description,
    keywords: keywords ?? [...siteConfig.keywords],
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: "de_CH",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export const homeMetadata = createPageMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
});
