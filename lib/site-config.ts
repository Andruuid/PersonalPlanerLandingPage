export const siteConfig = {
  name: "easyplan",
  tagline: "Personalplanung & Zeitkonten für Schweizer KMU",
  title: "Personalplanung Software Schweiz – Dienstplan & Ferien",
  description:
    "Schichtplan, Ferien und Zeitsaldo in einer App – ohne Excel. easyplan vereinfacht die Personalplanung für Schweizer KMU. Jetzt unverbindlich vormerken.",
  leadDescription:
    "Planen Sie Schichten per Drag-and-Drop, koordinieren Sie Ferien- und Absenzwünsche und behalten Sie Zeitsaldo und Überstunden im Blick – alles in einer modernen Cloud-App, die Ihr Team auch auf dem Smartphone nutzt.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.easyplaner.ch",
  contactEmail: "hello@personalplaner.ch",
  formspreeEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "",
  source: "easyplaner.ch",
  nav: [
    { label: "Funktionen", href: "/#funktionen" },
    { label: "Ablauf", href: "/#ablauf" },
    { label: "Zeitkonten", href: "/#zeitkonten" },
    { label: "Preisgestaltung", href: "/#preisgestaltung" },
    { label: "FAQ", href: "/#faq" },
  ],
  footerNav: [
    { label: "FAQ", href: "/faq" },
    { label: "Preise", href: "/preise" },
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
  keywords: [
    "Personalplanung Software",
    "Dienstplan Software",
    "Schichtplan Software",
    "Personalplanung Schweiz",
    "Mitarbeiterplanung App",
    "Zeitsaldo Software",
    "Ferienplanung Mitarbeiter",
    "Personalplanung KMU",
    "Excel Dienstplan Alternative",
    "Cloud Dienstplan",
  ],
} as const;
