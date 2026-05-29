import type { UiContent } from "@/lib/markets/types";

export const usUi: UiContent = {
  waitlist: {
    emailPlaceholder: "you@email.com",
    emailLabel: "Email",
    industryLabel: "Industry",
    industryPlaceholder: "Industry (optional)",
    industries: [
      "Restaurants",
      "Retail",
      "Healthcare",
      "Hospitality",
      "Services",
      "Other",
    ],
    teamSizeLabel: "Team size",
    teamSizePlaceholder: "Team size (optional)",
    teamSizes: ["1–5", "6–10", "11–20", "21–50", "50+"],
    teamSizeSuffix: "employees",
    submit: "Join the waitlist",
    submitting: "Sending …",
    successTitle: "Thanks! We'll be in touch soon.",
    successSubtitle: "You're on the waitlist.",
    errorInvalidEmail: "Please enter a valid email address.",
    errorSendFailed: "Couldn't send ({status}). Please try again.",
    errorNetwork:
      "Network error. Please check your connection and try again.",
  },
  header: {
    ctaButton: "Request a demo",
    menuOpen: "Open menu",
    menuClose: "Close menu",
  },
  landingTemplate: {
    breadcrumbHome: "Home",
    relatedHeading: "Keep reading",
    ctaHeading: "Ready for simple employee scheduling?",
    ctaText:
      "Join the waitlist — we'll let you know the moment EasyTeamPlan is available for your business.",
    ctaButton: "Join the waitlist",
  },
  faqPage: {
    metaTitle: "FAQ – Employee Scheduling Software for US Small Businesses",
    metaDescription:
      "Answers about shift scheduling, time tracking, PTO, overtime, Fair Workweek compliance, and pricing — common questions about EasyTeamPlan.",
    metaKeywords: [
      "employee scheduling software FAQ",
      "shift scheduling questions",
      "Fair Workweek scheduling software",
    ],
    breadcrumb: "FAQ",
    h1: "Frequently asked questions about employee scheduling",
    intro:
      "Everything about scheduling, time tracking, PTO, overtime, and pricing — for restaurants, retail, and services across the US.",
    ctaTitle: "Still have questions?",
    ctaText: "Join the waitlist — we'll get back to you.",
    ctaButton: "Join the waitlist",
  },
  pricingPage: {
    path: "/pricing",
    metaTitle: "Pricing – Employee Scheduling Software from $2.99",
    metaDescription:
      "Transparent pricing for employee scheduling software in the US. Starter from $2.99, Plus from $4.99 per employee — cancel anytime.",
    metaKeywords: [
      "employee scheduling software pricing",
      "shift scheduling software cost",
      "scheduling app price",
    ],
    breadcrumb: "Pricing",
    h1: "Pricing for employee scheduling software",
    intro:
      "Simple, fair pricing for US small businesses — no setup fees and no hidden costs. You pay per employee per month.",
    bottomCta: "Join the waitlist",
  },
};
