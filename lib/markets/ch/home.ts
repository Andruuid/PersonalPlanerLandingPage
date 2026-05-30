import type { HomeContent } from "@/lib/markets/types";

export const chHome: HomeContent = {
  hero: {
    badge: "Für Schweizer KMU entwickelt",
    titleLead:
      "Personalplanung für Schweizer KMU – Dienstplan, Ferien und Zeitsaldo",
    titleHighlight: "so einfach wie nie",
    leadSuffix:
      "Kein Excel-Chaos, keine verstreuten WhatsApp-Wünsche – sondern ein klarer Ablauf von der Wochenplanung bis zum Zeitkonto.",
    primaryCta: "Kostenlos vormerken",
    secondaryCta: "Demo anfragen",
    highlights: [
      "Schichtplan per Drag-and-Drop – Woche in Minuten statt Stunden",
      "Ferien, Absenzen und Zeitsaldo in Echtzeit",
      "Mitarbeiter-App: Schichtplan und Anträge jederzeit auf dem Handy",
      "Mehrere Standorte und Betriebe – zentral planen und verwalten",
      "Revisionssichere Historie – jede Änderung nachvollziehbar",
      "Datenschutz und rollenbasierte Rechte für Ihr Team",
    ],
    preview: {
      eyebrow: "Wochenplanung",
      title: "KW 22 · Standort Zürich",
      statusBadge: "Entwurf",
      days: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
      rows: [
        {
          name: "Anna K.",
          shifts: ["morning", "morning", "off", "morning", "morning", "off", "off"],
        },
        {
          name: "Marco H.",
          shifts: ["late", "off", "late", "late", "off", "morning", "off"],
        },
        {
          name: "Lina M.",
          shifts: ["off", "morning", "morning", "off", "late", "off", "off"],
        },
      ],
      shiftLabels: { morning: "Früh", late: "Spät" },
      metrics: [
        { label: "Besetzung", value: "94%" },
        { label: "Offene Wünsche", value: "3" },
        { label: "Soll/Ist", value: "✓" },
      ],
      floatLeft: { label: "Zeitsaldo KW 22", value: "+4h 30" },
      floatRight: { label: "Status", value: "Woche veröffentlicht" },
    },
  },
  problem: {
    heading:
      "Warum Excel und WhatsApp bei der Schichtplanung nicht mehr reichen",
    paragraphs: [
      "In einer Boutique, einem Uhrenshop, einem Restaurant oder einem Coiffeursalon läuft vieles über Zuruf: Schichten in Excel, Ferienwünsche per WhatsApp, Überstunden in einer separaten Tabelle. Das kostet Zeit, führt zu Missverständnissen und macht die Abrechnung fehleranfällig.",
      "easyplan bringt Dienstplan, Ferienplanung und Zeitsaldo in eine Cloud-Lösung – entwickelt für Betriebe ab 2 Mitarbeitenden, die keine komplexe HR-Software brauchen, sondern einen Plan, der im Alltag funktioniert.",
    ],
    links: [
      { label: "Funktionen ansehen", href: "/#funktionen" },
      { label: "Zeitsaldo und Ferien", href: "/#zeitkonten" },
    ],
  },
  features: {
    eyebrow: "Funktionen",
    heading: "Schichtplanung für Detailhandel, Gastronomie und Dienstleistung",
    intro:
      "Ob Boutique, Schmuckladen, Restaurant oder Coiffeursalon: easyplan verbindet Schichtplanung, Mitarbeiterkommunikation und Zeitkonten in einer Oberfläche – ohne Schulungswochen und ohne IT-Abteilung.",
    items: [
      {
        title: "Wochenplanung per Drag-and-Drop",
        description:
          "Erstellen Sie den Wochendienstplan im Raster – mit Besetzungsübersicht, KPIs und klarem Status von Entwurf bis Veröffentlichung.",
      },
      {
        title: "Mitarbeiter-App für Schichtplan und Anträge",
        description:
          "Ihr Team sieht Schichten und Zeitkonten jederzeit auf dem Smartphone. Ferien, Absenzen und Teilzeitausgleich-Wünsche (TZT) lassen sich direkt melden – ohne E-Mail-Pingpong.",
      },
      {
        title: "Zeitsaldo, Ferien und Abwesenheiten",
        description:
          "Soll- und Ist-Zeiten, Ferienanspruch und Überzeitausgleich (UEZ) werden automatisch gebucht – inklusive manueller Korrekturen und Jahreswechsel nach Schweizer Praxis.",
      },
      {
        title: "Mehrere Standorte und Feiertage",
        description:
          "Verwalten Sie Filialen, Dienstvorlagen und kantonale Feiertagskalender zentral – ideal für Betriebe mit mehr als einem Standort.",
      },
      {
        title: "Ferien- und Absenzwünsche genehmigen",
        description:
          "Anträge erscheinen direkt im Planungsboard. Sie entscheiden im Kontext – mit nachvollziehbarer Historie aller Änderungen.",
      },
      {
        title: "Datenschutz & revisionssichere Historie",
        description:
          "Rollenbasierte Rechte, getrennte Mandanten und DSGVO-konforme Export- sowie Löschanfragen – damit Sie und Ihr Team sicher planen können.",
      },
    ],
  },
  workflow: {
    eyebrow: "Ablauf",
    heading: "So funktioniert die Mitarbeiterplanung in vier Schritten",
    intro:
      "easyplan spiegelt den echten Betriebsalltag: Planen, kommunizieren, entscheiden – und am Ende sauber abrechnen.",
    steps: [
      {
        number: "01",
        title: "Stammdaten erfassen",
        description:
          "Mitarbeitende, Pensum, Standorte und Dienstvorlagen einmal anlegen – die Basis für jede Woche.",
      },
      {
        number: "02",
        title: "Woche planen und veröffentlichen",
        description:
          "Schichten im Drag-and-Drop-Raster zuweisen, Besetzung prüfen und den Plan fürs Team freigeben.",
      },
      {
        number: "03",
        title: "Wünsche bearbeiten",
        description:
          "Ferien- und Absenzanträge landen direkt im Planungsboard. Sie entscheiden im Kontext – ohne Medienbruch.",
      },
      {
        number: "04",
        title: "Zeitkonten aktualisieren",
        description:
          "Nach Wochenabschluss werden Salden automatisch gebucht. Korrekturen bleiben revisionssicher nachvollziehbar.",
      },
    ],
    adminTitle: "Für Admins",
    adminBenefits: [
      "Weniger manuelle Nacharbeit",
      "Klare Wochenstatus & Verantwortlichkeiten",
      "Volle Historie aller Änderungen",
    ],
    employeeTitle: "Für Mitarbeitende",
    employeeBenefits: [
      "Schichtplan jederzeit auf dem Smartphone",
      "Absenzen & Wünsche mobil melden",
      "Transparente Kontostände",
    ],
  },
  accounts: {
    eyebrow: "Zeitkonten",
    heading: "Zeitsaldo und Ferienplanung ohne Excel-Tabellen",
    intro:
      "Statt verstreuter Tabellen führt easyplan Zeitsaldo, Ferien, Überstunden und Zeitausgleich zentral – mit automatischen Wochenbuchungen und vollständiger Änderungshistorie.",
    items: [
      {
        name: "Zeitsaldo",
        description: "Über- und Unterstunden transparent nach Soll/Ist pro Woche.",
      },
      {
        name: "Ferien",
        description: "Ferienanspruch, Bezüge und Resttage immer nachvollziehbar.",
      },
      {
        name: "UEZ & TZT",
        description: "Überstunden und Zeitausgleich nach Schweizer Praxis abbilden.",
      },
      {
        name: "Audit-Log",
        description: "Jede Buchung und jede Planänderung bleibt revisionssicher.",
      },
    ],
  },
  pricing: {
    eyebrow: "Preisgestaltung",
    heading: "Transparente Preise für kleine Teams in der Schweiz",
    intro:
      "Ab CHF 3.90 pro Mitarbeiter und Monat – ohne versteckte Kosten, monatlich kündbar. Beispiel: 3 Mitarbeitende = CHF 11.70 pro Monat.",
    popularBadge: "Am beliebtesten",
    planCta: "Jetzt vormerken – ab {price}/MA",
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Häufige Fragen zur Personalplanung Software",
    intro:
      "Antworten zu Dienstplan, Ferienplanung und Kosten – für Schweizer KMU.",
    footerLeading: "Weitere Antworten finden Sie auf der ",
    footerLinkLabel: "FAQ-Seite",
    footerTrailing: ".",
  },
  cta: {
    eyebrow: "Early Access",
    heading: "Bereit für einfache Personalplanung ohne Excel?",
    intro:
      "Tragen Sie sich unverbindlich ein – wir informieren Sie, sobald easyplan für Ihren Betrieb verfügbar ist.",
    finePrint: "Keine Kreditkarte nötig · Unverbindlich · Jederzeit abmeldbar",
  },
};
