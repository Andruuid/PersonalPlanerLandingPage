export type SitemapRoute = {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "yearly";
};

export const sitemapRoutes: SitemapRoute[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/dienstplan-gastronomie", priority: 0.9, changeFrequency: "monthly" },
  {
    path: "/personalplanung-detailhandel",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/excel-dienstplan-alternative",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  { path: "/schichtplan-software", priority: 0.9, changeFrequency: "monthly" },
  {
    path: "/ferienplanung-mitarbeiter",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/mitarbeiterplanung-app",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  { path: "/preise", priority: 0.8, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
  { path: "/ratgeber/dienstplan-erstellen-kmu", priority: 0.7, changeFrequency: "monthly" },
  { path: "/impressum", priority: 0.3, changeFrequency: "yearly" },
  { path: "/datenschutz", priority: 0.3, changeFrequency: "yearly" },
];
