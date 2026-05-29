export const siteConfig = {
  name: "PersonalPlaner",
  tagline: "Personalplanung & Zeitkonten für Schweizer KMU",
  description:
    "Dienste planen, Wünsche koordinieren, Zeitsaldo und Ferien verwalten – alles in einer modernen Web-App für Teams und Betriebe.",
  appUrl: process.env.NEXT_PUBLIC_APP_URL ?? "https://github.com/Andruuid/PersonalPlanerMVP",
  contactEmail: "hello@personalplaner.ch",
  nav: [
    { label: "Funktionen", href: "#funktionen" },
    { label: "Ablauf", href: "#ablauf" },
    { label: "Zeitkonten", href: "#zeitkonten" },
  ],
} as const;
