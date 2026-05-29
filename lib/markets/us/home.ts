import type { HomeContent } from "@/lib/markets/types";

export const usHome: HomeContent = {
  hero: {
    badge: "Built for US small businesses",
    titleLead:
      "Employee scheduling for U.S. small businesses — shifts, time tracking and PTO",
    titleHighlight: "made simple",
    leadSuffix:
      "No more spreadsheet chaos or scattered group texts — just a clear flow from the weekly schedule to hours and time off.",
    primaryCta: "Join the waitlist",
    secondaryCta: "Request a demo",
    highlights: [
      "Drag-and-drop scheduling — build a week in minutes, not hours",
      "Time off, availability and hours tracked in real time",
      "Team app: schedules and requests on every phone",
      "Multiple locations — plan and manage from one place",
      "Audit-ready history — every change is logged",
      "Stay ahead of overtime and Fair Workweek rules",
    ],
    preview: {
      eyebrow: "Weekly schedule",
      title: "Week 22 · Austin location",
      statusBadge: "Draft",
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      rows: [
        {
          name: "Ava K.",
          shifts: ["morning", "morning", "off", "morning", "morning", "off", "off"],
        },
        {
          name: "Marcus H.",
          shifts: ["late", "off", "late", "late", "off", "morning", "off"],
        },
        {
          name: "Lena M.",
          shifts: ["off", "morning", "morning", "off", "late", "off", "off"],
        },
      ],
      shiftLabels: { morning: "AM", late: "PM" },
      metrics: [
        { label: "Coverage", value: "94%" },
        { label: "Open requests", value: "3" },
        { label: "Sched/Actual", value: "✓" },
      ],
      floatLeft: { label: "Hours balance wk 22", value: "+4h 30" },
      floatRight: { label: "Status", value: "Week published" },
    },
  },
  problem: {
    heading:
      "Why spreadsheets and group texts no longer cut it for scheduling",
    paragraphs: [
      "In a restaurant, retail shop, salon, or clinic, too much runs on guesswork: shifts in spreadsheets, time-off requests over text, overtime in a separate file. It costs hours, creates miscommunication, and makes payroll error-prone.",
      "EasyTeamPlan brings scheduling, time off, and hours into one cloud app — built for teams of 5+ that don't need heavy HR software, just a schedule that works day to day.",
    ],
    links: [
      { label: "See features", href: "/#funktionen" },
      { label: "Hours & time off", href: "/#zeitkonten" },
    ],
  },
  features: {
    eyebrow: "Features",
    heading: "Shift scheduling for restaurants, retail, and services",
    intro:
      "Whether you run a café, a boutique, a salon, or a clinic: EasyTeamPlan combines shift scheduling, team communication, and time tracking in one interface — with no training weeks and no IT department.",
    items: [
      {
        title: "Drag-and-drop weekly scheduling",
        description:
          "Build the weekly schedule on a grid — with coverage overview, KPIs, and a clear status from draft to published.",
      },
      {
        title: "Team app for schedules and requests",
        description:
          "Your team sees shifts and hours anytime on their phone. Time off, availability, and shift-swap requests are submitted right in the app — no email ping-pong.",
      },
      {
        title: "Hours, overtime, and PTO tracking",
        description:
          "Scheduled vs. actual hours, PTO balances, and overtime are tracked automatically — including manual edits and flags for hours over 40 in a workweek (FLSA).",
      },
      {
        title: "Multiple locations and holidays",
        description:
          "Manage locations, shift templates, and holiday calendars centrally — ideal for businesses with more than one site.",
      },
      {
        title: "Approve time-off and availability",
        description:
          "Requests show up right on the planning board. You decide in context — with a clear, auditable history of every change.",
      },
      {
        title: "Fair Workweek & audit-ready records",
        description:
          "Role-based access, two-week advance schedules, and recordkeeping that helps you stay compliant with overtime and predictive scheduling laws.",
      },
    ],
  },
  workflow: {
    eyebrow: "How it works",
    heading: "How employee scheduling works in four steps",
    intro:
      "EasyTeamPlan mirrors how your business actually runs: plan, communicate, decide — and reconcile hours cleanly at the end.",
    steps: [
      {
        number: "01",
        title: "Set up your team",
        description:
          "Add employees, roles, locations, and shift templates once — the foundation for every week.",
      },
      {
        number: "02",
        title: "Plan and publish the week",
        description:
          "Assign shifts on a drag-and-drop grid, check coverage, and publish the schedule to your team.",
      },
      {
        number: "03",
        title: "Handle requests",
        description:
          "Time-off and availability requests land right on the planning board. You decide in context — no switching tools.",
      },
      {
        number: "04",
        title: "Reconcile hours",
        description:
          "After the week closes, balances post automatically. Edits stay logged and audit-ready.",
      },
    ],
    adminTitle: "For managers",
    adminBenefits: [
      "Less manual rework",
      "Clear weekly status & ownership",
      "Full history of every change",
    ],
    employeeTitle: "For employees",
    employeeBenefits: [
      "Schedule on their phone anytime",
      "Submit time off & availability on mobile",
      "Transparent hours & PTO balances",
    ],
  },
  accounts: {
    eyebrow: "Time & hours",
    heading: "Track hours, overtime, and PTO without spreadsheets",
    intro:
      "Instead of scattered files, EasyTeamPlan keeps hours, PTO, overtime, and adjustments in one place — with automatic weekly posting and a full change history.",
    items: [
      {
        name: "Hours balance",
        description: "Over- and under-hours tracked by scheduled vs. actual, every week.",
      },
      {
        name: "PTO & time off",
        description: "Accruals, used days, and remaining balance always clear.",
      },
      {
        name: "Overtime (FLSA)",
        description: "Flag hours over 40 in a workweek and keep overtime in check.",
      },
      {
        name: "Audit log",
        description: "Every entry and schedule change stays audit-ready.",
      },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    heading: "Simple pricing for small US teams",
    intro:
      "From $2.99 per employee per month — no hidden fees, cancel anytime. Example: 10 employees = $29.90 per month.",
    popularBadge: "Most popular",
    planCta: "Join the waitlist – from {price}/employee",
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Frequently asked questions about employee scheduling",
    intro:
      "Answers about scheduling, time tracking, PTO, and pricing — for US small businesses.",
    footerLeading: "Find more answers on the ",
    footerLinkLabel: "FAQ page",
    footerTrailing: ".",
  },
  cta: {
    eyebrow: "Early access",
    heading: "Ready for simple scheduling without spreadsheets?",
    intro:
      "Join the waitlist — we'll let you know the moment EasyTeamPlan is available for your business.",
    finePrint: "No credit card required · No commitment · Unsubscribe anytime",
  },
};
