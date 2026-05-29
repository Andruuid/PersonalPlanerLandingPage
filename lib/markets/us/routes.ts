import type { SitemapRoute } from "@/lib/markets/types";

export const usSitemapRoutes: SitemapRoute[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  {
    path: "/restaurant-employee-scheduling",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/retail-employee-scheduling",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  { path: "/excel-schedule-alternative", priority: 0.9, changeFrequency: "monthly" },
  { path: "/shift-scheduling-software", priority: 0.9, changeFrequency: "monthly" },
  {
    path: "/fair-workweek-scheduling-software",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  { path: "/pto-time-off-tracking", priority: 0.8, changeFrequency: "monthly" },
  { path: "/employee-scheduling-app", priority: 0.8, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.8, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
  {
    path: "/guides/how-to-make-a-work-schedule",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  { path: "/privacy-policy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
];
