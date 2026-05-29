import type { Metadata } from "next";
import { LandingPageTemplate } from "@/components/seo/landing-page-template";
import { createPageMetadata } from "@/lib/seo/metadata";
import { getLandingPage } from "@/lib/seo/pages/content";

export function buildLandingPage(slug: string) {
  const page = getLandingPage(slug);

  if (!page) {
    throw new Error(`Unknown landing page slug: ${slug}`);
  }

  const resolvedPage = page;

  const metadata: Metadata = createPageMetadata({
    title: resolvedPage.title,
    description: resolvedPage.description,
    path: resolvedPage.path,
    keywords: [...resolvedPage.keywords],
  });

  function Page() {
    return <LandingPageTemplate page={resolvedPage} />;
  }

  return { metadata, Page };
}
