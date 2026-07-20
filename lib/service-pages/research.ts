import type { ServicePageContent } from "@/lib/service-page-types";

export const researchPage: ServicePageContent = {
  slug: "research",
  hero: {
    label: "Research & validation",
    lines: [
      { text: "Test your idea before", variant: "default" },
      { text: "you spend on development", variant: "gradient" },
    ],
    subheading:
      "Most products fail not because they were built badly, but because nobody checked if anyone wanted them first. We fix that before it is expensive.",
    stats: [
      { num: "2 wk", label: "From idea to first real data" },
      { num: "€500", label: "Starting price for setup" },
      { num: "0", label: "Lines of code written yet" },
    ],
    secondaryCta: { label: "See packages", href: "#packages" },
  },
  problem: {
    title: "Building the wrong thing is the most expensive mistake a founder makes",
    body: "Most founders skip validation because it feels like a detour. It is not. It is the only way to know whether the next months and five figures of development go toward something people actually want.",
    cards: [
      {
        title: "You save months of wasted development",
        body: "Two weeks of validation costs a fraction of two months building something nobody wants. The data tells you what to build before you pay to build it.",
      },
      {
        title: "You learn exactly who your user is",
        body: "Interviews and survey data reveal the real ICP, not the one you assumed. That changes positioning, features, and messaging before a line of code.",
      },
      {
        title: "You start with a warm audience",
        body: "A waitlist of real interested users beats a finished app with no one to show it to. Validation gives you proof and an audience on launch day.",
      },
    ],
  },
  included: {
    title: "Everything you need to test before you build",
    description:
      "From research to a live waitlist collecting real signups - all the pieces of proper validation in one place.",
    items: [
      {
        title: "Market research & ICP",
        body: "Market scan, competitive landscape, and ideal customer profile. Who has the problem, how badly, and are they reachable?",
        tags: ["Desk research", "ICP", "Competitors"],
      },
      {
        title: "Hypothesis & success criteria",
        body: "We define what validated means before anything goes live: signup target, conversion rate, and timeline - agreed upfront.",
        tags: ["Clear criteria", "Measurable"],
      },
      {
        title: "Landing page + copywriting",
        body: "High-converting validation page with full copy, branding, and design. Built to communicate the value prop and capture signups.",
        tags: ["Custom design", "Full copy"],
      },
      {
        title: "Waitlist system",
        body: "Not just an email field. Confirmation emails, referral mechanics, segmentation, and a dashboard of signups in real time.",
        tags: ["Email capture", "Referral loop"],
      },
      {
        title: "Analytics & tracking",
        body: "Visitor tracking, conversion funnel, traffic sources, and drop-off points from day one.",
        tags: ["GA4", "Funnel tracking"],
      },
      {
        title: "Survey & user interviews",
        body: "Embedded survey for qualitative data. Interview guide and process so you or we go deeper with the most engaged signups.",
        tags: ["Survey", "Interview guide"],
      },
    ],
  },
  differentiator: {
    title: "Not a feeling. A defined verdict.",
    body: "Success conditions are agreed at the start, so the result is objective - not a judgment call.",
    items: [
      {
        title: "Signup target",
        body: "Minimum waitlist signups within an agreed window.",
      },
      {
        title: "Conversion rate",
        body: "Landing page conversion above an agreed threshold.",
      },
      {
        title: "Interview minimum",
        body: "At least N qualifying user interviews completed.",
      },
      {
        title: "Pain confirmation",
        body: "Most interviewees confirm the problem is a real pain point.",
      },
    ],
  },
  process: {
    title: "From hypothesis to verdict in 2 weeks",
    description:
      "Every step produces a clear output that feeds the next. At the end you get a decision - not just data.",
    steps: [
      {
        title: "Strategy & research",
        description:
          "Map the market, define ICP, research competitors. Define the hypothesis and agree success criteria before anything is built.",
        outcome: "Hypothesis document + success conditions",
      },
      {
        title: "Landing page + waitlist",
        description:
          "Full landing page with copy, branding, and design. Waitlist with confirmation, segmentation, and analytics - live within week one.",
        outcome: "Live page + waitlist + analytics",
      },
      {
        title: "Traffic + surveys",
        description:
          "You or we drive traffic. Survey goes to every signup. We monitor daily and flag anything that needs adjusting.",
        outcome: "Signup data + survey responses",
      },
      {
        title: "Interviews",
        description:
          "We structure interviews with the most engaged signups. You or we conduct them - this is where the real insights live.",
        outcome: "Transcripts + insight summary",
      },
      {
        title: "Verdict + recommendation",
        description:
          "Results measured against pre-defined criteria. Validated or not, with clear explanation and recommended next step.",
        outcome: "Full report and next steps",
      },
    ],
  },
  packages: {
    title: "Start small. Learn fast.",
    description: "Three tiers - from a minimum viable validation to full process with traffic.",
    tiers: [
      {
        name: "Starter",
        tagline: "Minimum viable validation. Live landing page and waitlist. You drive the traffic.",
        price: "€500–€800",
        features: [
          "Hypothesis definition session",
          "Success criteria agreed upfront",
          "Landing page with full copy + branding",
          "Waitlist system setup",
          "Analytics + conversion tracking",
          "Basic survey on signup",
          "Validation verdict report",
          "1-week delivery",
        ],
      },
      {
        name: "Full Validation",
        tagline:
          "Complete process: research, landing page, waitlist, surveys, and interview setup.",
        price: "€1,500–€2,500",
        featured: true,
        features: [
          "Everything in Starter",
          "Market research + competitive landscape",
          "ICP definition and targeting",
          "In-depth landing page with design system",
          "Referral mechanics on waitlist",
          "User interview guide + scheduling",
          "Insight synthesis report",
          "2-week delivery",
          "Recommendation on next steps",
        ],
      },
      {
        name: "Validation + Traffic",
        tagline:
          "Full validation plus a social push to drive real strangers to the waitlist.",
        price: "€2,500–€4,000",
        features: [
          "Everything in Full Validation",
          "Social content campaign (4 weeks)",
          "LinkedIn + Instagram outreach to ICP",
          "Paid ads setup (budget separate)",
          "We run interviews (up to 10)",
          "Full interview synthesis",
          "Go/no-go recommendation with data",
          "Bridge to App Launch Blueprint",
        ],
      },
    ],
  },
  faq: {
    title: "Things founders always ask",
    items: [
      {
        q: "What if my idea is too early for a landing page?",
        a: "It is almost never too early. If you can describe the problem in one sentence and who it is for, you can validate. We have seen pages convert before the product name was final.",
      },
      {
        q: "What if nobody signs up?",
        a: "That is the point. A failed validation is the best few thousand you will spend. It tells you messaging, audience, or problem intensity was wrong - all fixable. Six months building something nobody wants is not.",
      },
      {
        q: "Do you drive traffic to the waitlist?",
        a: "In Starter and Full Validation, traffic is yours (network, social, community). Validation + Traffic adds a social campaign and ICP outreach. Paid ads available with budget handled separately.",
      },
      {
        q: "How do you define if something is validated?",
        a: "Success criteria are agreed before launch: signup target, conversion rate, interview minimum, qualitative threshold. Met means validated. Not met means we tell you why and what to change.",
      },
      {
        q: "What happens after validation?",
        a: "If validated, next step is the App Launch Blueprint, then build. If not, you get a clear recommendation to change, retest, or pivot. You never leave empty-handed.",
      },
    ],
  },
  finalCta: {
    title: "Have an idea? Let's find out if it is real.",
    body: "One free call. We look at your idea, tell you what validation approach makes sense, and what it costs. No commitment.",
  },
  relatedEngineIds: ["research", "architecture"],
  relatedLinks: [{ label: "App Launch Blueprint", href: "/blueprint" }],
};
