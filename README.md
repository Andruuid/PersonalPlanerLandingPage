# easyplan Landing Page

Moderne Marketing-Landing-Page für [easyplan](https://www.easyplaner.ch) – Personalplanung & Zeitkonten für Schweizer KMU.

## Tech-Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS v4
- Lucide Icons

## Schnellstart

```powershell
npm install
npm run dev
```

Die Seite läuft unter [http://localhost:3000](http://localhost:3000).

## Konfiguration

```env
NEXT_PUBLIC_SITE_URL=https://www.easyplaner.ch
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/ihre-form-id
```

Lokal in `.env.local` (siehe `.env.local.example`), in Production in den Hosting-Settings (z. B. Vercel).

### Warteliste (Formspree)

Das Kontaktformular sendet E-Mail-Adressen clientseitig direkt an [Formspree](https://formspree.io) – ohne eigenes Backend, SMTP oder API-Route.

**Formspree-Setup:**

1. Account auf [formspree.io](https://formspree.io) anlegen
2. Neues Formular erstellen
3. Notification-E-Mail auf die Zieladresse setzen
4. Form-ID in `NEXT_PUBLIC_FORMSPREE_ENDPOINT` eintragen

Ohne gesetzte Env-Variable simuliert das Formular lokal einen erfolgreichen Versand (Dev-Fallback).

## SEO

- Sitemap: `/sitemap.xml`
- Robots: `/robots.txt`
- Strukturierte Daten (Organization, SoftwareApplication, FAQPage)
- SEO-Unterseiten für Branchen und Keywords
- Off-Page-Setup: siehe [`docs/SEO-SETUP.md`](docs/SEO-SETUP.md)

Domain-Redirects (301) für `mitarbeiterplaner.ch` / `.info` sind in [`vercel.json`](vercel.json) definiert.

## Skripte

| Befehl | Beschreibung |
| ------ | ------------ |
| `npm run dev` | Entwicklungsserver starten |
| `npm run build` | Produktions-Build erstellen |
| `npm run start` | Produktions-Server starten |
| `npm run lint` | ESLint ausführen |

## Deployment

Das Projekt ist als statische Next.js-App konzipiert und kann z. B. auf Vercel deployt werden. Canonical-Domain: `https://www.easyplaner.ch`.
