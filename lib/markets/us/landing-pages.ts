import type { LandingPageContent } from "@/lib/markets/types";

export const usLandingPages: Record<string, LandingPageContent> = {
  "restaurant-employee-scheduling": {
    path: "/restaurant-employee-scheduling",
    title: "Restaurant Staff Scheduling Software – Shift Scheduling for Restaurants",
    description:
      "Restaurant staff scheduling software for US restaurants, cafés, and bars. Build weekly shifts, track hours and PTO, and support overtime and Fair Workweek workflows.",
    keywords: [
      "restaurant staff scheduling software",
      "restaurant employee scheduling",
      "restaurant scheduling software",
      "shift scheduling for restaurants",
    ],
    h1: "Restaurant staff scheduling software for restaurants and cafés",
    intro:
      "In restaurants, shifts change daily, time-off requests pile up before holidays, and overtime creeps in on busy weekends. EasyTeamPlan helps US restaurants, cafés, and bars build staff schedules online — without spreadsheets or group chats.",
    sections: [
      {
        heading: "Common scheduling challenges in restaurants",
        paragraphs: [
          "AM, PM, and weekend shifts have to be filled fast. At the same time, time-off requests, call-outs, and swap requests pile up. If you still plan in a spreadsheet, you lose hours every week and risk miscommunication on the floor.",
          "EasyTeamPlan shows coverage, open requests, and scheduled-vs-actual right in the weekly grid — so you spot gaps before service starts.",
        ],
      },
      {
        heading: "Weekly scheduling with shift templates",
        paragraphs: [
          "Save AM and PM shifts as templates and drag them into the week. Manage multiple locations and holiday calendars centrally — handy for groups with more than one location or seasonal hours.",
          "Once published, every team member sees the current schedule on their phone.",
        ],
      },
      {
        heading: "Stay ahead of overtime and Fair Workweek rules",
        paragraphs: [
          "Long service nights add up. EasyTeamPlan flags hours over 40 in a workweek (FLSA) and helps you post schedules in advance — useful if you operate in a jurisdiction with predictive scheduling or Fair Workweek rules.",
        ],
      },
      {
        heading: "Track hours and PTO fairly",
        paragraphs: [
          "Overtime from late shifts is captured in the hours balance. PTO accruals and remaining days stay transparent — for you and your team. That builds trust instead of end-of-month disputes.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/staff-scheduling-software", label: "Staff scheduling software" },
      { href: "/shift-scheduling-software", label: "Shift scheduling software" },
      { href: "/pto-time-off-tracking", label: "PTO & time-off tracking" },
      { href: "/pricing", label: "Pricing & plans" },
    ],
  },
  "retail-employee-scheduling": {
    path: "/retail-employee-scheduling",
    title: "Retail Staff Scheduling Software – Shift Scheduling for Stores",
    description:
      "Retail staff scheduling software for US stores and boutiques. Build shifts, manage availability, track hours and PTO, and support overtime and Fair Workweek workflows.",
    keywords: [
      "retail staff scheduling software",
      "retail employee scheduling",
      "retail scheduling software",
      "employee scheduling for stores",
    ],
    h1: "Retail staff scheduling software for stores, boutiques, and shops",
    intro:
      "Small stores often run on part-time staff, changing hours, and time off during peak season. EasyTeamPlan is staff scheduling software for US retail — from the boutique to the specialty shop.",
    sections: [
      {
        heading: "Challenges in retail",
        paragraphs: [
          "You need more staff on weekends and less in the slow season. Time-off requests cluster around school breaks and holidays. Spreadsheets and sticky notes cost time and lead to timekeeping mistakes.",
        ],
      },
      {
        heading: "Weekly scheduling for part-time teams",
        paragraphs: [
          "Plan shifts on a weekly grid and see at a glance whether you have enough sales staff scheduled. Shift templates for regular and extended hours save repetitive work.",
          "Employees see their schedule on mobile — handy for part-timers and seasonal help.",
        ],
      },
      {
        heading: "Time off during peak season",
        paragraphs: [
          "Requests are captured centrally and handled in the planning context. You keep track of who's available and when — even when several people request time off at once.",
        ],
      },
      {
        heading: "Hours and overtime for small teams",
        paragraphs: [
          "Even small teams can lose track of scheduled vs. actual hours. EasyTeamPlan keeps hours and PTO in one place — no separate spreadsheets — and flags overtime over 40 hours in a workweek.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/staff-scheduling-software", label: "Staff scheduling software" },
      { href: "/employee-scheduling-app", label: "Employee scheduling app" },
      { href: "/excel-schedule-alternative", label: "Excel schedule alternative" },
      { href: "/pricing", label: "Transparent pricing" },
    ],
  },
  "staff-scheduling-software": {
    path: "/staff-scheduling-software",
    title: "Staff Scheduling Software for Small Businesses",
    description:
      "Staff scheduling software for US small businesses. Build weekly schedules, manage availability and time-off requests, track hours and PTO, and reduce spreadsheet work.",
    keywords: [
      "staff scheduling software",
      "small business staff scheduling",
      "team scheduling software",
      "employee scheduling software",
    ],
    h1: "Staff scheduling software for small business teams",
    intro:
      "EasyTeamPlan gives small businesses a simple way to plan staff schedules, publish shifts, manage requests, and keep hours visible — without rebuilding the week in Excel every time something changes.",
    sections: [
      {
        heading: "Plan every shift in one place",
        paragraphs: [
          "Build the weekly schedule on a clear grid, use shift templates for repeat work, and see coverage before you publish. It works for restaurants, retail stores, salons, clinics, and local service teams.",
          "When the schedule is ready, your team can see the current version on their phone. No screenshots, no outdated PDFs, and no wondering which spreadsheet is final.",
        ],
      },
      {
        heading: "Manage availability, time off, and swaps",
        paragraphs: [
          "Availability, PTO, and shift-swap requests belong next to the schedule. EasyTeamPlan keeps requests in context so managers can make faster, fairer decisions without searching through texts or email.",
        ],
      },
      {
        heading: "Track hours before payroll",
        paragraphs: [
          "Scheduled vs. actual hours, overtime flags, and PTO balances stay connected to the schedule. That gives owners and managers a cleaner handoff before payroll and fewer month-end corrections.",
        ],
      },
      {
        heading: "Built for small business scheduling",
        paragraphs: [
          "You do not need an enterprise HR suite to run a good schedule. EasyTeamPlan is designed for small teams that need practical staff scheduling, transparent hours, and simple pricing.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/shift-scheduling-software", label: "Shift scheduling software" },
      { href: "/employee-scheduling-app", label: "Employee scheduling app" },
      { href: "/guides/how-to-make-a-work-schedule", label: "Guide: how to make a work schedule" },
    ],
  },
  "excel-schedule-alternative": {
    path: "/excel-schedule-alternative",
    title: "Excel Schedule Alternative – Employee Scheduling Without Spreadsheets",
    description:
      "An Excel work schedule alternative for US small businesses: staff schedules, hours, and PTO in one cloud app. No formulas, no version chaos.",
    keywords: [
      "excel schedule alternative",
      "employee scheduling without spreadsheets",
      "work schedule maker",
    ],
    h1: "Excel schedule alternative — employee scheduling without spreadsheet chaos",
    intro:
      "Many small businesses start with Excel — and end up with multiple file versions, forgotten time off, and requests over text. EasyTeamPlan is the simple alternative: scheduling, hours, and PTO in one cloud app.",
    sections: [
      {
        heading: "Why Excel hits its limits for scheduling",
        paragraphs: [
          "Spreadsheets are great for lists, not for live scheduling. Every change creates another version, employees cannot see the schedule live, and time-off requests live outside the sheet. Mistakes with overtime and remaining PTO become much easier to miss.",
        ],
      },
      {
        heading: "What scheduling software does better",
        paragraphs: [
          "With EasyTeamPlan you build the weekly schedule by drag-and-drop in the browser. The team sees shifts on their phone, submits requests right in the app, and you approve in context — all in one place.",
        ],
      },
      {
        heading: "Track hours and PTO automatically",
        paragraphs: [
          "Instead of manual formulas, EasyTeamPlan calculates scheduled vs. actual and hours balances after the week closes. PTO accruals and remaining days are always visible — for managers and employees.",
        ],
      },
      {
        heading: "Cost compared",
        paragraphs: [
          "Excel is free but costs time. EasyTeamPlan starts at $2.99 per employee per month — for a team of 10 that's $29.90 a month. Cancel anytime, no setup fee.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/staff-scheduling-software", label: "Staff scheduling software" },
      { href: "/shift-scheduling-software", label: "Shift scheduling software" },
      { href: "/restaurant-employee-scheduling", label: "Restaurant scheduling" },
      { href: "/guides/how-to-make-a-work-schedule", label: "Guide: how to make a work schedule" },
    ],
  },
  "shift-scheduling-software": {
    path: "/shift-scheduling-software",
    title: "Shift Scheduling Software – Weekly Scheduling Online",
    description:
      "Shift scheduling software for US small businesses: drag-and-drop weekly schedules, mobile team view, hours, and PTO. Cloud scheduling from $2.99 per employee.",
    keywords: [
      "shift scheduling software",
      "weekly employee scheduling",
      "cloud scheduling software",
    ],
    h1: "Shift scheduling software for US small businesses — weekly scheduling online",
    intro:
      "EasyTeamPlan is shift scheduling software for businesses that need to plan fast and reconcile hours fairly. Build the weekly schedule online, publish it to your team, and keep hours and PTO in view.",
    sections: [
      {
        heading: "Drag-and-drop weekly scheduling",
        paragraphs: [
          "Plan shifts on a weekly grid — with coverage overview, KPIs, and a clear status from draft to published. Shift templates cut repetitive work.",
        ],
      },
      {
        heading: "A schedule for the whole team",
        paragraphs: [
          "Employees see the current schedule anytime on their phone. Time off, availability, and shift requests are submitted directly — no email ping-pong.",
        ],
      },
      {
        heading: "Multiple locations and holidays",
        paragraphs: [
          "Manage locations, shift templates, and holiday calendars centrally. Ideal for businesses with more than one site in the US.",
        ],
      },
      {
        heading: "Built-in hours and overtime",
        paragraphs: [
          "Scheduling and hours belong together. After the week closes, balances post automatically — with overtime, PTO, and manual adjustments included.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/staff-scheduling-software", label: "Staff scheduling software" },
      { href: "/employee-scheduling-app", label: "Employee scheduling app" },
      { href: "/retail-employee-scheduling", label: "Retail scheduling" },
      { href: "/fair-workweek-scheduling-software", label: "Fair Workweek compliance" },
    ],
  },
  "pto-time-off-tracking": {
    path: "/pto-time-off-tracking",
    title: "PTO & Time-Off Tracking – Requests, Approvals, and Balances",
    description:
      "PTO and time-off tracking for US teams: requests, approvals, and remaining balances in one app. Part of EasyTeamPlan — scheduling and time off together.",
    keywords: [
      "PTO tracking",
      "time off tracking software",
      "employee time off management",
    ],
    h1: "PTO & time-off tracking — requests, balances, and approvals",
    intro:
      "Time off is part of scheduling. With EasyTeamPlan, employees submit requests digitally, see remaining PTO clearly, and managers decide right in the schedule — fair and trackable.",
    sections: [
      {
        heading: "Requests without the email chaos",
        paragraphs: [
          "Time-off and availability requests land centrally on the planning board. No digging through inboxes, no forgotten texts — everything in one place.",
        ],
      },
      {
        heading: "Approve in the planning context",
        paragraphs: [
          "You instantly see whether you have enough coverage on a day before approving a request. Approvals and denials are logged and audit-ready.",
        ],
      },
      {
        heading: "PTO accruals and balances",
        paragraphs: [
          "PTO accruals, used days, and remaining balances are visible to managers and employees. No year-end disputes because numbers in a spreadsheet were stale.",
        ],
      },
      {
        heading: "Scheduling and time off in one app",
        paragraphs: [
          "Scheduling and time off are connected — because they belong together day to day. EasyTeamPlan unites both in one cloud app for US small businesses.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/restaurant-employee-scheduling", label: "Restaurant scheduling" },
      { href: "/shift-scheduling-software", label: "Shift scheduling software" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  "employee-scheduling-app": {
    path: "/employee-scheduling-app",
    title: "Employee Scheduling App – Mobile Team Scheduling",
    description:
      "Employee scheduling app for US small businesses: team schedules, time-off requests, and hours on any phone. Web app and mobile view for your staff.",
    keywords: [
      "employee scheduling app",
      "shift scheduling app",
      "mobile employee scheduling",
      "team scheduling app",
    ],
    h1: "Employee scheduling app — schedules and requests on the phone",
    intro:
      "Your team wants to see the schedule without sitting at a computer. EasyTeamPlan offers a mobile employee view: schedules, time-off requests, and hours — right on their phone, no app store required.",
    sections: [
      {
        heading: "The schedule, always on hand",
        paragraphs: [
          "Employees see the published weekly schedule anytime — even on the go. Changes after publishing show up instantly, with no new PDFs or screenshots.",
        ],
      },
      {
        heading: "Submit requests on mobile",
        paragraphs: [
          "Time off, availability, and shift requests can be submitted directly. Managers handle requests on the desktop in the planning context — fast and without switching tools.",
        ],
      },
      {
        heading: "Transparent hours and PTO",
        paragraphs: [
          "Scheduled vs. actual hours, remaining PTO, and weekly balances are visible to employees. Transparency builds trust and cuts down questions to owners and managers.",
        ],
      },
      {
        heading: "A web app, not a complicated install",
        paragraphs: [
          "EasyTeamPlan runs in the browser — on desktop and phone. No heavy IT setup, ideal for small businesses without an IT department.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/shift-scheduling-software", label: "Shift scheduling software" },
      { href: "/pto-time-off-tracking", label: "PTO & time off" },
      { href: "/pricing", label: "Pricing from $2.99" },
    ],
  },
  "fair-workweek-scheduling-software": {
    path: "/fair-workweek-scheduling-software",
    title: "Fair Workweek Scheduling Software – Predictive Scheduling Compliance",
    description:
      "Fair Workweek scheduling software for US shift employers. Post schedules in advance, track changes and predictability pay, and keep audit-ready records.",
    keywords: [
      "Fair Workweek scheduling software",
      "predictive scheduling software",
      "predictive scheduling compliance",
    ],
    h1: "Fair Workweek scheduling software — predictive scheduling compliance",
    intro:
      "A growing number of US jurisdictions require covered employers to give shift workers advance notice of their schedules. EasyTeamPlan helps you post schedules early, track changes, and keep the records these rules may require.",
    sections: [
      {
        heading: "What are Fair Workweek (predictive scheduling) laws?",
        paragraphs: [
          "Predictive scheduling laws — often called Fair Workweek rules — can require covered employers to give employees their schedules in advance, pay “predictability pay” for late changes, and avoid back-to-back “clopening” shifts without enough rest in between.",
          "Rules and coverage thresholds vary by jurisdiction, industry, employer size, and location. This page is general information, not legal advice — check the rules that apply in your city and state.",
        ],
      },
      {
        heading: "Post schedules in advance",
        paragraphs: [
          "Build and publish the weekly schedule early so employees get the notice these laws require. EasyTeamPlan records when a schedule is published and tracks every change made afterward.",
        ],
      },
      {
        heading: "Track changes and predictability pay",
        paragraphs: [
          "When a schedule changes after it's posted, EasyTeamPlan keeps a clear, auditable record — so you can identify changes that may trigger predictability pay and document them.",
        ],
      },
      {
        heading: "Keep audit-ready records",
        paragraphs: [
          "Federal FLSA recordkeeping expects accurate hours and pay records (commonly retained for two to three years). EasyTeamPlan keeps schedules, edits, and hours in one place so you're ready if you're ever asked.",
          "Because local predictive scheduling rules can change, audit-ready history matters: every published schedule, request, approval, and edit should be easy to find.",
        ],
      },
    ],
    relatedLinks: [
      { href: "/shift-scheduling-software", label: "Shift scheduling software" },
      { href: "/restaurant-employee-scheduling", label: "Restaurant scheduling" },
      { href: "/faq", label: "FAQ" },
    ],
  },
};
