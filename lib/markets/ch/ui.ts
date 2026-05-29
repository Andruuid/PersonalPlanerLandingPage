import type { UiContent } from "@/lib/markets/types";

export const chUi: UiContent = {
  waitlist: {
    emailPlaceholder: "ihre@email.ch",
    emailLabel: "E-Mail",
    industryLabel: "Branche",
    industryPlaceholder: "Branche (optional)",
    industries: [
      "Detailhandel",
      "Gastronomie",
      "Dienstleistung",
      "Coiffeur / Beauty",
      "Sonstiges",
    ],
    teamSizeLabel: "Teamgrösse",
    teamSizePlaceholder: "Teamgrösse (optional)",
    teamSizes: ["1–5", "6–10", "11–20", "21–50", "50+"],
    teamSizeSuffix: "Mitarbeitende",
    submit: "Kostenlos vormerken",
    submitting: "Wird gesendet …",
    successTitle: "Danke! Wir melden uns bald bei Ihnen.",
    successSubtitle: "Sie sind auf der Warteliste eingetragen.",
    errorInvalidEmail: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
    errorSendFailed: "Senden fehlgeschlagen ({status}). Bitte erneut versuchen.",
    errorNetwork:
      "Netzwerkfehler. Bitte prüfen Sie Ihre Verbindung und versuchen Sie es erneut.",
  },
  header: {
    ctaButton: "Demo anfragen",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schliessen",
  },
  landingTemplate: {
    breadcrumbHome: "Startseite",
    relatedHeading: "Weiterlesen",
    ctaHeading: "Bereit für einfache Personalplanung?",
    ctaText:
      "Tragen Sie sich unverbindlich ein – wir informieren Sie, sobald easyplan für Ihren Betrieb verfügbar ist.",
    ctaButton: "Kostenlos vormerken",
  },
  faqPage: {
    metaTitle: "FAQ – Personalplanung Software für Schweizer KMU",
    metaDescription:
      "Antworten zu Dienstplan Software, Ferienplanung, Kosten und Mitarbeiter-App – häufige Fragen zu easyplan für Schweizer KMU.",
    metaKeywords: [
      "Personalplanung Software FAQ",
      "Dienstplan Software Schweiz",
      "Mitarbeiterplanung Fragen",
    ],
    breadcrumb: "FAQ",
    h1: "Häufige Fragen zur Personalplanung Software",
    intro:
      "Alles Wichtige zu Dienstplan, Ferienplanung, Zeitsaldo und Kosten – für Detailhandel, Gastronomie und Dienstleistung in der Schweiz.",
    ctaTitle: "Noch Fragen?",
    ctaText: "Tragen Sie sich unverbindlich ein – wir melden uns bei Ihnen.",
    ctaButton: "Kostenlos vormerken",
  },
  pricingPage: {
    path: "/preise",
    metaTitle: "Preise – Personalplanung Software ab CHF 2.90",
    metaDescription:
      "Transparente Preise für Personalplanung Software in der Schweiz. Starter ab CHF 2.90, Plus ab CHF 3.90 pro Mitarbeiter – monatlich kündbar.",
    metaKeywords: [
      "Personalplanung Software Preise",
      "Dienstplan Software Kosten Schweiz",
      "Schichtplan Software Preis",
    ],
    breadcrumb: "Preise",
    h1: "Preise für Personalplanung Software in der Schweiz",
    intro:
      "Einfache, faire Preise für Schweizer KMU – ohne Einrichtungsgebühr und ohne versteckte Kosten. Sie zahlen pro Mitarbeiter und Monat.",
    bottomCta: "Jetzt unverbindlich vormerken",
  },
};
