export const siteConfig = {
  name: "PersonalPlaner",
  tagline: "Personalplanung & Zeitkonten für Schweizer KMU",
  description:
    "Dienste planen, Wünsche koordinieren, Zeitsaldo und Ferien verwalten – alles in einer modernen Web-App, die Admins und Mitarbeitende auch mobil nutzen können.",
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://github.com/Andruuid/PersonalPlanerMVP",
  contactEmail: "hello@personalplaner.ch",
  formspreeEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "",
  source: "personalplaner.ch",
  nav: [
    { label: "Funktionen", href: "#funktionen" },
    { label: "Ablauf", href: "#ablauf" },
    { label: "Zeitkonten", href: "#zeitkonten" },
  ],
} as const;
