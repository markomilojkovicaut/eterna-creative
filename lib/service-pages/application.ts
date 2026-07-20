import type { ServicePageContent } from "@/lib/service-page-types";

export const applicationPage: ServicePageContent = {
  slug: "application",
  hero: {
    label: "Application",
    lines: [
      { text: "From idea to", variant: "default" },
      { text: "live app in 6 weeks", variant: "gradient" },
    ],
    subheading:
      "We build real web and mobile applications - AI-assisted custom by default, Bubble when the stage calls for it. Spec first, flat price, engineered to scale.",
    stats: [
      { num: "6 wk", label: "Typical MVP timeline" },
      { num: "€5k", label: "Starting investment" },
      { num: "15+", label: "Products shipped" },
    ],
    secondaryCta: { label: "See packages", href: "#packages" },
  },
  problem: {
    title: "Built for people who build things",
    body: "Founders with a validated idea, creators with an audience, businesses stuck on spreadsheets. If you can describe what it needs to do, we figure out how to build it smart.",
    cards: [
      {
        title: "Founders",
        body: "Validated idea, need an MVP fast. Blueprint to launched product without burning runway.",
      },
      {
        title: "Creators",
        body: "Audience ready for a product: membership platforms, course apps, community tools.",
      },
      {
        title: "Businesses",
        body: "Processes on spreadsheets and manual work. Internal tools, client portals, automation that sticks.",
      },
      {
        title: "Hubs & organizations",
        body: "Accelerators, communities, networks. Platforms that connect members and manage programs at scale.",
      },
    ],
  },
  included: {
    title: "Any app. Any complexity.",
    description:
      "We have built across industries and app types. Describe what it needs to do - we figure out how to build it smart.",
    items: [
      {
        title: "Marketplaces",
        body: "Two-sided platforms with listings, messaging, payments, reviews, and trust systems.",
        tags: ["Multi-role"],
      },
      {
        title: "SaaS platforms",
        body: "Subscription tools with dashboards, user management, billing, and the core workflow customers pay for.",
        tags: ["Stripe billing"],
      },
      {
        title: "Booking & scheduling",
        body: "Service booking, appointments, resource allocation with calendar sync and payments.",
        tags: ["API integrations"],
      },
      {
        title: "Course & learning",
        body: "Content delivery, progress tracking, certificates, community, subscription or one-time payments.",
        tags: ["Video + content"],
      },
      {
        title: "Community & social",
        body: "Networks, member portals, and niche communities with profiles, feeds, messaging, events.",
        tags: ["Real-time"],
      },
      {
        title: "Internal tools & CRMs",
        body: "Replace spreadsheets with real software: client management, workflows, reporting, team tools.",
        tags: ["Automation"],
      },
    ],
  },
  differentiator: {
    title: "Faster to build. Easier to change.",
    body: "We choose the stack for your stage - Bubble when speed and iteration win, custom when you need ownership and scale. AI is built in, not bolted on.",
    comparisonLabels: { us: "Eterna", them: "Traditional" },
    comparison: [
      { label: "MVP timeline", us: "6 weeks", them: "6 months" },
      { label: "Starting cost", us: "€5,000", them: "€30,000+" },
      { label: "Design included", us: "Yes", them: "Extra" },
      { label: "Strategy included", us: "Yes", them: "Extra" },
      { label: "Easy to modify later", us: "Yes", them: "Costly" },
      { label: "AI integrations", us: "Built in", them: "Complex" },
    ],
    items: [
      {
        title: "Ship in weeks, not months",
        body: "Traditional MVP: 6–12 months. We deliver in about 6 weeks with the same craft.",
      },
      {
        title: "Built to evolve",
        body: "User feedback turns into changes in days, not weeks - whether Bubble or owned code.",
      },
      {
        title: "Backend power when needed",
        body: "Complex logic, large datasets, external integrations - Xano or custom backends as required.",
      },
      {
        title: "AI native",
        body: "OpenAI, Claude, and other APIs in app logic: recommendations, content, predictions, document processing.",
      },
    ],
  },
  process: {
    title: "A process built for real launches",
    description:
      "No vague timelines. No disappearing developers. You know what happens at every step.",
    steps: [
      {
        title: "App Launch Blueprint",
        description:
          "User flows, feature prioritization, tech stack, first hero screen. Free, upfront, no commitment.",
        outcome: "Week 0 - Free",
      },
      {
        title: "Design & database",
        description:
          "Full UI/UX, responsive layouts, design system, data model and privacy rules. You approve screens before build.",
        outcome: "Weeks 1–2",
      },
      {
        title: "Development & integrations",
        description:
          "Build, APIs, payments, auth, workflows. Weekly demos so you see real progress.",
        outcome: "Weeks 3–5",
      },
      {
        title: "QA, launch & handover",
        description:
          "Cross-device testing, bug fixes, performance, store submission if needed. Docs and training.",
        outcome: "Week 6 - Live",
      },
    ],
  },
  packages: {
    title: "Three project sizes. One team.",
    description: "Priced by complexity and value - scoped after your free Launch Plan.",
    tiers: [
      {
        name: "Launch",
        tagline: "Validate your idea with a real, working product. Fast.",
        price: "From €5,000",
        features: [
          "App Launch Blueprint (free upfront)",
          "Up to 3 user roles",
          "Core feature set (MoSCoW Scope 1)",
          "UI/UX design included",
          "Authentication + user management",
          "1 payment integration",
          "Mobile responsive",
          "About 6-week delivery",
        ],
      },
      {
        name: "Scale",
        tagline: "A complete platform with the features that make users stay and pay.",
        price: "From €10,000",
        featured: true,
        features: [
          "Everything in Launch",
          "Up to 5 user roles",
          "Advanced features (Scopes 1 + 2)",
          "Multiple API integrations",
          "Admin dashboard + analytics",
          "AI integration",
          "PWA mobile app",
          "Push notifications",
          "Workflow automation",
          "8–10 week delivery",
        ],
      },
      {
        name: "Platform",
        tagline: "Full-scale product with everything needed to run a serious business.",
        price: "From €20,000",
        features: [
          "Everything in Scale",
          "5+ user roles, complex permissions",
          "Full feature set",
          "External database when needed",
          "Native app (App Store + Google Play)",
          "Advanced AI features",
          "Real-time features + messaging",
          "Custom analytics + reporting",
          "Post-launch support plan",
          "10+ week delivery",
        ],
      },
    ],
  },
  faq: {
    title: "Things people always ask us",
    items: [
      {
        q: "Is Bubble good enough for a real product?",
        a: "Yes for many early and growth-stage products. When custom is the better fit, we say so. We have shipped 15+ apps including platforms with 1,000+ users.",
      },
      {
        q: "What if I want to switch to custom code later?",
        a: "Your data is yours and can be exported. Many apps stay on Bubble permanently. If you outgrow it, a validated product and user base make migration worth it - see our Migration service.",
      },
      {
        q: "Can you build a mobile app, not just a web app?",
        a: "Yes. PWAs that install like native on iOS and Android, with push and offline. For true native we handle App Store and Google Play when scoped.",
      },
      {
        q: "How does the 6-week timeline actually work?",
        a: "Week 0: free Blueprint. Weeks 1–2: design and database. Weeks 3–5: development with weekly demos. Week 6: QA and launch. Timeline holds because we scope tightly before build.",
      },
      {
        q: "What if I need changes after launch?",
        a: "Post-launch Care and Growth retainers cover maintenance, features, and optimization. You also get access to make small content changes yourself.",
      },
    ],
  },
  finalCta: {
    title: "Ready to build a product you own?",
    body: "Book a free strategy call, or start with the App Launch Blueprint. First step costs nothing.",
  },
  relatedEngineIds: ["architecture", "activation", "retention"],
  relatedLinks: [
    { label: "Bubble migration", href: "/migration" },
    { label: "App Launch Blueprint", href: "/blueprint" },
  ],
};
