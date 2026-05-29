import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPageTemplate } from "@/components/seo/landing-page-template";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getLandingPage } from "@/lib/seo/pages/content";

export function buildLandingPage(slug: string) {
  function generateMetadata(): Metadata {
    const page = getLandingPage(slug);
    if (!page) return {};

    return createPageMetadata({
      title: page.title,
      description: page.description,
      path: page.path,
      keywords: [...page.keywords],
    });
  }

  function Page() {
    const page = getLandingPage(slug);
    if (!page) notFound();

    return <LandingPageTemplate page={page} />;
  }

  return { generateMetadata, Page };
}
