import type { SecurityPageContent } from "@/lib/markets/types";

export const chSecurity: SecurityPageContent = {
  metaTitle: "Sicherheit & Vertrauen",
  metaDescription:
    "Sicherheit, Datenschutz und Transparenz bei easyplan – Infrastruktur in der Schweiz/EU, DSG/DSGVO, Tests und Audit-Logs für Schweizer KMU.",
  metaKeywords: [
    "Datenschutz Software Schweiz",
    "DSG DSGVO Personalplanung",
    "Sicherheit Cloud Dienstplan",
    "Audit Log Schichtplan",
  ],
  breadcrumb: "Sicherheit",
  hero: {
    title: "Sicherheit, Transparenz & Schweizer Sorgfalt",
    subline:
      "easyplan ist bewusst einfach gebaut. Was nicht nötig ist, sammeln wir nicht. Was wir speichern, schützen wir.",
    updateNotePrefix: "Diese Seite wird regelmässig aktualisiert. Stand:",
  },
  sections: [
    {
      id: "infrastruktur",
      eyebrow: "Infrastruktur",
      heading: "Datensicherheit & Infrastruktur",
      columns: 3,
      cards: [
        {
          icon: "mapPin",
          title: "Serverstandort",
          description:
            "Daten werden ausschliesslich in der Schweiz / EU gespeichert (ISO-zertifizierte Rechenzentren). Kein Datenexport in Drittländer.",
        },
        {
          icon: "lock",
          title: "Verschlüsselung",
          description:
            "TLS 1.3 für alle Verbindungen. Datenbanken & Backups werden at-rest verschlüsselt (AES-256).",
        },
        {
          icon: "refreshCw",
          title: "Backups & Verfügbarkeit",
          description:
            "Tägliche inkrementelle Backups mit 30-Tage-Retention. Geplante Wartung wird 48h im Voraus kommuniziert.",
        },
      ],
    },
    {
      id: "compliance",
      eyebrow: "Compliance",
      heading: "Compliance & Datenschutz (DSG/DSGVO)",
      columns: 2,
      cards: [
        {
          icon: "download",
          title: "Datenhoheit",
          description:
            "Exportiere alle Personen- & Zeitdaten jederzeit als CSV/JSON (Art. 20 DSGVO / Art. 13 DSG – Recht auf Datenportabilität).",
        },
        {
          icon: "trash2",
          title: "Löschrecht",
          description:
            "Vollständiges Löschen von Mandanten- & Nutzerdaten auf Anfrage innerhalb von 14 Tagen (Art. 17 DSGVO – Recht auf Löschung).",
        },
        {
          icon: "users",
          title: "Rollen & Rechte",
          description:
            "Granulare Zugriffskontrollen (Admin / Führung / Mitarbeitende). Optional: 2FA über TOTP.",
        },
        {
          icon: "fileText",
          title: "Rechtsgrundlage",
          description:
            "Verarbeitungsverzeichnis, AV-Vertrag & Standardvertragsklauseln auf Anfrage. Keine Profilbildung oder Third-Party-Tracking.",
        },
      ],
    },
    {
      id: "qualitaet",
      eyebrow: "Qualität",
      heading: "Qualität, Tests & Transparenz",
      columns: 2,
      cards: [
        {
          icon: "flaskConical",
          title: "Automatisierte Tests",
          description:
            "Jeder Release durchläuft CI/CD mit {testCount} Unit-, Integration- & E2E-Tests.",
          showCoverageBadge: true,
        },
        {
          icon: "alertCircle",
          title: "Bekannte Grenzen",
          description:
            "Wir dokumentieren bewusst, was (noch) nicht abgedeckt ist.",
          hrefKey: "knownLimitations",
          hrefLabel: "Known Limitations",
        },
        {
          icon: "activity",
          title: "Monitoring",
          description:
            "Echtzeit-Alerting bei Fehlern. Reaktionszeit bei kritischen Issues: <4h.",
        },
        {
          icon: "bug",
          title: "Bug-Reporting",
          description:
            "Findest du einen Fehler? Melde ihn direkt an security@personalplaner.ch. Wir antworten innerhalb von 24h.",
        },
      ],
    },
    {
      id: "audit",
      eyebrow: "Audit",
      heading: "Audit & Nachvollziehbarkeit",
      columns: 3,
      cards: [
        {
          icon: "scrollText",
          title: "Audit-Log",
          description:
            "Jede Änderung an Plänen, Anträgen oder Konten wird protokolliert (Wer, Wann, Was, Vorher/Nachher). Exportierbar für Prüfungen.",
        },
        {
          icon: "archive",
          title: "Aufbewahrung",
          description:
            "Soft-Delete mit 10-Jahre-Archiv gemäss Schweizer Aufbewahrungspflichten.",
        },
        {
          icon: "search",
          title: "Self-Service",
          description:
            "Admins filtern Logs nach Datum, Nutzer oder Entität. Keine versteckte Blackbox.",
        },
      ],
    },
  ],
  contact: {
    title: "Sicherheitskontakt",
    responsibleTemplate:
      "Verantwortlich für Datenschutz & Sicherheit: {dataProtectionOfficer}",
    email: "security@personalplaner.ch",
    pgpNote: "PGP-Key auf Anfrage.",
    slaCritical:
      "Kritische Sicherheitsmeldungen: Antwort <4h, Patch <72h.",
    slaGeneral: "Allgemeine Anfragen: <48h.",
  },
  disclaimer:
    "Hinweis: Diese Beschreibung dient der Transparenz. Für rechtlich bindende Auskünfte bitte unser Impressum oder den Datenschutzbeauftragten kontaktieren.",
};
