export const pricingPlans = [
  {
    name: "Starter",
    price: "2.90",
    priceCurrency: "CHF",
    subtitle: "Pro Mitarbeiter / Monat",
    note: "Jederzeit kündbar",
    description:
      "Für kleine Teams mit einfacher Dienstplanung und grundlegenden Zeitkonten.",
    features: [
      "Intuitive Wochenplanung",
      "Mitarbeitersicht & Anträge",
      "Zeitsaldo, Ferien & Soll/Ist",
      "Standorte & Feiertage",
      "Genehmigungs-Workflow",
      "Hilfecenter und E-Mail-Support",
    ],
    popular: false,
  },
  {
    name: "Plus",
    price: "3.90",
    priceCurrency: "CHF",
    subtitle: "Pro Mitarbeiter / Monat",
    note: "Mind. 10 Mitarbeiter",
    description:
      "Für Teams, bei denen Personalplanung, Zeitkonten und Abrechnung nahtlos zusammenspielen müssen.",
    features: [
      "Alles aus Starter",
      "UEZ, TZT & erweiterte Zeitlogik",
      "Audit-Log & revisionssichere Historie",
      "Multi-Standort & Dienstvorlagen",
      "Export & Integrationen",
      "Priorisierter Support",
    ],
    popular: true,
  },
] as const;
