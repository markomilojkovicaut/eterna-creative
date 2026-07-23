export const bookPageMeta = {
  title: "Book a strategy call | Eterna",
  description:
    "Free 15-minute strategy call with Eterna - qualify fit, scope, and next steps for your product.",
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
      "You leave with a clear sense of what to build first, what to defer, and whether custom code or no-code fits.",
  },
  {
    id: "next",
    title: "Book the Scope Session",
    description:
      "If there is a fit, we schedule a free 1-hour Scope Session for another day - where we produce your Launch Plan.",
  },
];

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
