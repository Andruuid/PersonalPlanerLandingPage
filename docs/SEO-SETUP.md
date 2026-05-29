# SEO Setup – easyplaner.ch

Anleitung für Off-Page-SEO, Google Search Console und laufendes Monitoring.

## 1. Google Search Console (Woche 1)

1. Öffnen Sie [Google Search Console](https://search.google.com/search-console)
2. Property hinzufügen: **URL-Präfix** `https://www.easyplaner.ch`
3. Verifizierung via DNS-TXT oder HTML-Tag (Vercel/Hosting)
4. Sitemap einreichen: `https://www.easyplaner.ch/sitemap.xml`
5. Indexierung anfordern für:
   - `/`
   - `/dienstplan-gastronomie`
   - `/personalplanung-detailhandel`
   - `/excel-dienstplan-alternative`
   - `/schichtplan-software`
   - `/faq`
   - `/preise`

### Weitere Domains überwachen

Nach Aktivierung der 301-Redirects in `vercel.json`:

- Domain-Property für `mitarbeiterplaner.ch` und `mitarbeiterplaner.info` anlegen
- Prüfen, dass Redirects auf `www.easyplaner.ch` zeigen

## 2. Domain-Konsolidierung

Alle Domains müssen auf dem Hosting-Provider auf dasselbe Vercel-Projekt zeigen:

| Domain | DNS |
|--------|-----|
| `www.easyplaner.ch` | CNAME → Vercel |
| `easyplaner.ch` | A/ALIAS → Vercel (Redirect via vercel.json) |
| `mitarbeiterplaner.ch` | CNAME → Vercel |
| `mitarbeiterplaner.info` | CNAME → Vercel |

Redirects sind in [`vercel.json`](vercel.json) definiert.

## 3. Umgebungsvariable

In Production setzen:

```env
NEXT_PUBLIC_SITE_URL=https://www.easyplaner.ch
```

## 4. Rechtliches vervollständigen

Vor Go-Live in [`app/(marketing)/impressum/page.tsx`](app/(marketing)/impressum/page.tsx) und [`app/(marketing)/datenschutz/page.tsx`](app/(marketing)/datenschutz/page.tsx) Platzhalter ersetzen:

- Firmenname, Rechtsform, Adresse
- UID / Handelsregister
- Verantwortliche Person
- Hosting-Anbieter
- Formspree AVV / Datentransfer

## 5. Content-Marketing (monatlich)

Weitere Ratgeber-Artikel unter `app/(marketing)/ratgeber/` anlegen:

| Artikel | Ziel-Keyword |
|---------|-------------|
| Excel vs. Dienstplan-Software | Excel Dienstplan Alternative |
| Ferienplanung für kleine Teams | Ferienplanung Mitarbeiter |
| Zeitsaldo verstehen | Zeitsaldo Software |

Jeder Artikel: 1.200+ Wörter, interne Links zu Produktseiten, in `lib/seo/routes.ts` eintragen.

## 6. Backlinks Schweiz

- [Swiss Made Software](https://www.swissmadesoftware.org/) – Eintrag prüfen
- Branchenverbände (Gastrosuisse, Detailhandel Schweiz)
- Treuhänder / HR-Berater als Partner
- Pressemitteilung bei Launch

## 7. Monitoring (quartalsweise)

Search Console prüfen:

- **Leistung:** Impressions, CTR, durchschnittliche Position
- **Indexierung:** Abgedeckte Seiten vs. Sitemap
- **Core Web Vitals:** PageSpeed Insights für `/`

Title/Description iterieren bei CTR < 2% bei hohen Impressions.

## 8. Analytics (optional, DSG-konform)

- [Plausible](https://plausible.io) oder GA4 mit Cookie-Banner
- Keine personenbezogenen Daten ohne Einwilligung
