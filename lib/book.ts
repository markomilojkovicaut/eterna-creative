export const bookPageMeta = {
  title: "Book a strategy call | Eterna",
  description:
    "Free 15-minute strategy call with Eterna - then a Launch Plan for your application, automation, or website before any build commitment.",
};

export const bookExpectations = [
  {
    id: "qualify",
    title: "Qualify fit",
    description:
      "We learn your stage, goals, budget band, and timeline - and whether we are the right studio for the job.",
  },
  {
    id: "map",
    title: "Map the path",
    description:
      "You leave with a clear sense of what to build first (application, automation, or website), what to defer, and the smartest stack for your stage.",
  },
  {
    id: "next",
    title: "Get your Launch Plan",
    description:
      "If there is a fit, we book a free Scope Session and deliver your Launch Plan - map, preview, flat price, timeline - before any build commitment.",
  },
];

/** Product-agnostic Launch Plan outcomes shown on the Book page. */
export const bookLaunchPlanOutcomes = [
  {
    id: "application",
    label: "Application",
    description: "Screen map, hero preview, MVP scope, flat build options.",
  },
  {
    id: "automation",
    label: "Automation",
    description: "Workflow map, systems to connect, timeline, flat price.",
  },
  {
    id: "website",
    label: "Website",
    description: "IA / page map, key page direction, timeline, flat price.",
  },
] as const;

export const calEmbed = {
  namespace: "15min",
  calLink: "eterna/15min",
  elementId: "my-cal-inline-15min",
  origin: "https://app.cal.com",
  scriptSrc: "https://app.cal.com/embed/embed.js",
  externalUrl: "https://cal.com/eterna/15min",
  inlineConfig: {
    layout: "month_view",
    useSlotsViewOnSmallScreen: "true",
  },
  uiConfig: {
    hideEventTypeDetails: false,
    layout: "month_view",
  },
} as const;
