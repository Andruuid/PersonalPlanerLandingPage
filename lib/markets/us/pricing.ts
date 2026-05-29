import type { PricingPlan } from "@/lib/markets/types";

// NOTE: USD prices are placeholders pending final confirmation (competitive vs
// When I Work ~$2.50 and Deputy ~$5 per user/month).
export const usPricing: PricingPlan[] = [
  {
    name: "Starter",
    price: "2.99",
    priceCurrency: "USD",
    subtitle: "Per employee / month",
    note: "Cancel anytime",
    description:
      "For small teams that need simple scheduling and basic time tracking.",
    features: [
      "Intuitive weekly scheduling",
      "Employee app & requests",
      "Hours, PTO & scheduled/actual",
      "Locations & holidays",
      "Approval workflow",
      "Help center and email support",
    ],
    popular: false,
  },
  {
    name: "Plus",
    price: "4.99",
    priceCurrency: "USD",
    subtitle: "Per employee / month",
    note: "Min. 10 employees",
    description:
      "For teams where scheduling, time tracking, and payroll need to work seamlessly together.",
    features: [
      "Everything in Starter",
      "Overtime & advanced time logic",
      "Audit log & compliant history",
      "Multi-location & shift templates",
      "Exports & integrations",
      "Priority support",
    ],
    popular: true,
  },
];
