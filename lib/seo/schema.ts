import { faqItems } from "@/lib/seo/faq-data";
import { pricingPlans } from "@/lib/seo/pricing-data";
import { siteConfig } from "@/lib/site-config";
import { market } from "@/lib/markets";

type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.contactEmail,
    description: siteConfig.description,
    areaServed: {
      "@type": "Country",
      name: siteConfig.areaServedCountry,
    },
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.inLanguage,
  };
}

export function softwareApplicationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, iOS, Android",
    description: siteConfig.description,
    url: siteConfig.url,
    offers: pricingPlans.map((plan) => ({
      "@type": "Offer",
      name: plan.name,
      price: plan.price,
      priceCurrency: plan.priceCurrency,
      description: plan.description,
      url: `${siteConfig.url}${market.ui.pricingPage.path}`,
    })),
    areaServed: {
      "@type": "Country",
      name: siteConfig.areaServedCountry,
    },
  };
}

export function faqPageSchema(items = faqItems): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function globalSchemas(): JsonLd[] {
  return [organizationSchema(), websiteSchema(), softwareApplicationSchema()];
}
