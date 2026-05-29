# PersonalPlaner Landing Page

Moderne Marketing-Landing-Page für [PersonalPlaner](https://github.com/Andruuid/PersonalPlanerMVP) – Personalplanung & Zeitkonten für Schweizer KMU.

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

Optional kann die URL zur Live-App gesetzt werden:

```env
NEXT_PUBLIC_APP_URL=https://ihre-app-url.ch
```

Standardmässig verweisen die Buttons auf das PersonalPlanerMVP-Repository.

### Warteliste (Formspree)

Das Kontaktformular sendet E-Mail-Adressen clientseitig direkt an [Formspree](https://formspree.io) – ohne eigenes Backend, SMTP oder API-Route. Weiterleitung und Benachrichtigungen werden im Formspree-Dashboard konfiguriert (Form → Notification Email).

```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/ihre-form-id
```

Lokal in `.env.local` (siehe `.env.local.example`), in Production in den Hosting-Settings (z. B. Vercel).

**Formspree-Setup:**

1. Account auf [formspree.io](https://formspree.io) anlegen
2. Neues Formular erstellen
3. Notification-E-Mail auf die Zieladresse setzen
4. Form-ID in `NEXT_PUBLIC_FORMSPREE_ENDPOINT` eintragen

Ohne gesetzte Env-Variable simuliert das Formular lokal einen erfolgreichen Versand (Dev-Fallback).

Statische `mailto:`-Links (z. B. `hello@personalplaner.ch`) können unabhängig davon über Domain-Alias/Weiterleitung beim E-Mail-Provider eingerichtet werden.

## Skripte

| Befehl | Beschreibung |
| ------ | ------------ |
| `npm run dev` | Entwicklungsserver starten |
| `npm run build` | Produktions-Build erstellen |
| `npm run start` | Produktions-Server starten |
| `npm run lint` | ESLint ausführen |

## Deployment

Das Projekt ist als statische Next.js-App konzipiert und kann z. B. auf Vercel oder Netlify deployt werden.
