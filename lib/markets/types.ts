import type { MarketId } from "@/lib/market";

export type NavItem = { label: string; href: string };

// ---------------------------------------------------------------------------
// Site config (the public `siteConfig` shape, market-aware)
// ---------------------------------------------------------------------------

export type MarketConfig = {
  market: MarketId;
  name: string;
  /** Two-tone wordmark, e.g. "easy" + "plan". */
  wordmark: { first: string; second: string };
  logoAriaLabel: string;
  tagline: string;
  title: string;
  description: string;
  leadDescription: string;
  url: string;
  contactEmail: string;
  formspreeEndpoint: string;
  source: string;
  /** Open Graph locale, e.g. "de_CH" / "en_US". */
  locale: string;
  /** <html lang> value, e.g. "de-CH" / "en-US". */
  htmlLang: string;
  /** schema.org inLanguage, e.g. "de-CH" / "en-US". */
  inLanguage: string;
  /** schema.org areaServed country name, e.g. "Switzerland" / "United States". */
  areaServedCountry: string;
  /** ISO currency for pricing, e.g. "CHF" / "USD". */
  currency: string;
  nav: NavItem[];
  footerNav: NavItem[];
  footerNote: string;
  keywords: string[];
  og: { alt: string; brand: string; title: string; subtitle: string };
};

// ---------------------------------------------------------------------------
// Home page sections
// ---------------------------------------------------------------------------

export type HeroPreview = {
  eyebrow: string;
  title: string;
  statusBadge: string;
  days: string[];
  rows: { name: string; shifts: ("morning" | "late" | "off")[] }[];
  shiftLabels: { morning: string; late: string };
  metrics: { label: string; value: string }[];
  floatLeft: { label: string; value: string };
  floatRight: { label: string; value: string };
};

export type HeroContent = {
  badge: string;
  titleLead: string;
  titleHighlight: string;
  leadSuffix: string;
  primaryCta: string;
  secondaryCta: string;
  highlights: string[];
  preview: HeroPreview;
};

export type ProblemContent = {
  heading: string;
  paragraphs: string[];
  links: NavItem[];
};

export type FeatureItem = { title: string; description: string };

export type FeaturesContent = {
  eyebrow: string;
  heading: string;
  intro: string;
  /** Order matches the icon list in the component. */
  items: FeatureItem[];
};

export type WorkflowStep = { number: string; title: string; description: string };

export type WorkflowContent = {
  eyebrow: string;
  heading: string;
  intro: string;
  steps: WorkflowStep[];
  adminTitle: string;
  adminBenefits: string[];
  employeeTitle: string;
  employeeBenefits: string[];
};

export type AccountItem = { name: string; description: string };

export type AccountsContent = {
  eyebrow: string;
  heading: string;
  intro: string;
  /** Order matches the icon/tone list in the component. */
  items: AccountItem[];
};

export type PricingSectionContent = {
  eyebrow: string;
  heading: string;
  intro: string;
  popularBadge: string;
  /** Per-plan CTA template; "{price}" is replaced with the formatted price. */
  planCta: string;
};

export type FaqSectionContent = {
  eyebrow: string;
  heading: string;
  intro: string;
  footerLeading: string;
  footerLinkLabel: string;
  footerTrailing: string;
};

export type CtaContent = {
  eyebrow: string;
  heading: string;
  intro: string;
  finePrint: string;
};

export type HomeContent = {
  hero: HeroContent;
  problem: ProblemContent;
  features: FeaturesContent;
  workflow: WorkflowContent;
  accounts: AccountsContent;
  pricing: PricingSectionContent;
  faq: FaqSectionContent;
  cta: CtaContent;
};

// ---------------------------------------------------------------------------
// Shared UI chrome + simple pages
// ---------------------------------------------------------------------------

export type WaitlistFormContent = {
  emailPlaceholder: string;
  emailLabel: string;
  industryLabel: string;
  industryPlaceholder: string;
  industries: string[];
  teamSizeLabel: string;
  teamSizePlaceholder: string;
  teamSizes: string[];
  teamSizeSuffix: string;
  submit: string;
  submitting: string;
  successTitle: string;
  successSubtitle: string;
  errorInvalidEmail: string;
  /** "{status}" is replaced with the HTTP status code. */
  errorSendFailed: string;
  errorNetwork: string;
};

export type HeaderContent = {
  ctaButton: string;
  menuOpen: string;
  menuClose: string;
};

export type FooterContent = {
  contactLabel: string;
};

export type SectionIdsContent = {
  features: string;
  workflow: string;
  accounts: string;
  pricing: string;
  faq: string;
};

export type LandingTemplateContent = {
  breadcrumbHome: string;
  relatedHeading: string;
  ctaHeading: string;
  ctaText: string;
  ctaButton: string;
};

export type FaqPageContent = {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  breadcrumb: string;
  h1: string;
  intro: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
};

export type PricingPageContent = {
  path: string;
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  breadcrumb: string;
  h1: string;
  intro: string;
  bottomCta: string;
};

export type SecurityIconKey =
  | "mapPin"
  | "lock"
  | "refreshCw"
  | "download"
  | "trash2"
  | "users"
  | "fileText"
  | "flaskConical"
  | "alertCircle"
  | "activity"
  | "bug"
  | "scrollText"
  | "archive"
  | "search";

export type SecurityCardContent = {
  icon: SecurityIconKey;
  title: string;
  /** May include {testCount} and {coveragePercent} placeholders. */
  description: string;
  showCoverageBadge?: boolean;
  hrefKey?: "knownLimitations";
  hrefLabel?: string;
};

export type SecuritySectionContent = {
  id: string;
  eyebrow: string;
  heading: string;
  columns: 2 | 3;
  cards: SecurityCardContent[];
};

export type SecurityPageContent = {
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
  breadcrumb: string;
  hero: {
    title: string;
    subline: string;
    updateNotePrefix: string;
  };
  sections: SecuritySectionContent[];
  contact: {
    title: string;
    responsibleTemplate: string;
    email: string;
    pgpNote: string;
    slaCritical: string;
    slaGeneral: string;
  };
  disclaimer: string;
};

export type UiContent = {
  waitlist: WaitlistFormContent;
  header: HeaderContent;
  footer: FooterContent;
  sectionIds: SectionIdsContent;
  landingTemplate: LandingTemplateContent;
  faqPage: FaqPageContent;
  pricingPage: PricingPageContent;
};

// ---------------------------------------------------------------------------
// Data collections
// ---------------------------------------------------------------------------

export type LandingPageSection = {
  heading: string;
  paragraphs: string[];
};

export type LandingPageContent = {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  h1: string;
  intro: string;
  sections: LandingPageSection[];
  relatedLinks: { href: string; label: string }[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  priceCurrency: string;
  subtitle: string;
  note: string;
  description: string;
  features: string[];
  popular: boolean;
};

export type SitemapRoute = {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
};

// ---------------------------------------------------------------------------
// The full per-market bundle
// ---------------------------------------------------------------------------

export type Market = {
  config: MarketConfig;
  home: HomeContent;
  ui: UiContent;
  landingPages: Record<string, LandingPageContent>;
  faq: FaqItem[];
  pricing: PricingPlan[];
  sitemapRoutes: SitemapRoute[];
  /** CH market only — security & trust page. */
  security?: SecurityPageContent;
};
