import type { PricingPlan } from "@/lib/markets/types";

export const chPricing: PricingPlan[] = [
  {
    name: "Starter",
    price: "3.90",
    priceCurrency: "CHF",
    subtitle: "Pro Mitarbeiter / Monat",
    note: "Mind. 3 Mitarbeitende",
    description:
      "Für kleine Teams mit einfacher Dienstplanung und grundlegenden Zeitkonten.",
    features: [
      "Intuitive Wochenplanung",
      "Mitarbeitersicht & Anträge",
      "Zeitsaldo, Ferien & Soll/Ist",
      "UEZ, TZT & erweiterte Zeitlogik",
      "Audit-Log & revisionssichere Historie",
      "Standorte & Feiertage",
      "Genehmigungs-Workflow",
      "Konflikt-Check vor Veröffentlichung (Ferien, Soll/Ist, Qualifikationen)",
      "Hilfecenter und E-Mail-Support",
    ],
    popular: false,
  },
  {
    name: "Plus",
    price: "4.90",
    priceCurrency: "CHF",
    subtitle: "Pro Mitarbeiter / Monat",
    note: "Mind. 6 Mitarbeitende",
    description:
      "Für Teams, die planen, kontrollieren und mit KI-Unterstützung schneller zum optimalen Wochenplan kommen wollen.",
    features: [
      "Alles aus Starter",
      "KI-Wochenplan-Generator (Entwurf aus Verfügbarkeit, Skills & Sollstunden)",
      "Smarte Schicht-Empfehlungen (Lücken, Doppelbelegungen, Ruhezeiten)",
      "Planungs-Analyse: Überstunden-Trends, Ferienrisiko & Team-Auslastung",
      "Multi-Standort & Dienstvorlagen",
      "Export & Integrationen",
      "Priorisierter Support",
    ],
    popular: true,
  },
];
