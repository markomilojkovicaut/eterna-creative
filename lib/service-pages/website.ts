import type { ServicePageContent } from "@/lib/service-page-types";

export const websitePage: ServicePageContent = {
  slug: "website",
  hero: {
    label: "Website",
    lines: [
      { text: "Websites that", variant: "default" },
      { text: "convert visitors into customers", variant: "gradient" },
    ],
    subheading:
      "Strategy, design, copywriting, and development in one place. High-converting marketing sites on Webflow and Bubble that rank, load fast, and sell your product.",
    stats: [
      { num: "2 wk", label: "Landing page delivery" },
      { num: "4 wk", label: "Full site delivery" },
      { num: "100%", label: "You edit it after launch" },
    ],
    secondaryCta: { label: "See packages", href: "#packages" },
  },
  problem: {
    title: "Not all websites are built equal",
    body: "Bubble is right when you are building a product. Webflow is right when you are marketing it. We know when to use which - and how to connect them.",
    cards: [
      {
        title: "Bubble: product & app",
        body: "Users log in, create accounts, submit data, interact. Auth, databases, workflows, and logic a marketing site cannot touch.",
      },
      {
        title: "Webflow: marketing & conversion",
        body: "Pixel-perfect design, animations, top SEO, sub-second loads. Your team edits content without touching code.",
      },
      {
        title: "Hybrid: our specialty",
        body: "Marketing on Webflow, app on Bubble. Click Sign Up on the Webflow site, land inside the Bubble app. Site that converts, product that works.",
      },
    ],
  },
  included: {
    title: "The full picture. Nothing left out.",
    description:
      "A website without strategy is a digital brochure. We bring strategy, copy, design, and development together so every element earns its place.",
    items: [
      {
        title: "Website strategy & funnels",
        body: "Before design, we map the customer journey. Who lands, what they need to see, where they convert. Every page has a job.",
        tags: ["Funnel mapping", "ICP", "CTA strategy"],
      },
      {
        title: "Copywriting",
        body: "Every word: headlines, subheadings, features, FAQs, CTAs. Sounds like your brand, moves people from curious to convinced.",
        tags: ["All pages", "Brand voice"],
      },
      {
        title: "UI/UX design",
        body: "High-end visual design with animations, custom components, and a design system for every screen. Built for your brand.",
        tags: ["Custom design", "Animations"],
      },
      {
        title: "Development",
        body: "Webflow or Bubble depending on needs. Clean, fast, maintainable. Edit content yourself after launch.",
        tags: ["Webflow", "Bubble", "CMS"],
      },
      {
        title: "SEO foundation",
        body: "Technical SEO from day one: structured data, meta tags, page speed, sitemap, keyword-aware structure.",
        tags: ["On-page SEO", "Speed"],
      },
      {
        title: "Lead magnets & capture",
        body: "Email forms, gated content, waitlist pages, lead magnet delivery wired to your email platform.",
        tags: ["Lead forms", "Email"],
      },
    ],
  },
  differentiator: {
    title: "We build the site and write the words",
    body: "Most agencies hand you a beautiful site with placeholder copy. We do not. Strategy and copy come before design, every time.",
    items: [
      {
        title: "Copy before design",
        body: "All copy written and approved first. Design wraps around words that already work.",
      },
      {
        title: "Strategy is not optional",
        body: "Journey mapping and funnel strategy before a pixel is designed.",
      },
      {
        title: "We know your product",
        body: "If we built your app, we know users, value prop, and model. Better site, less briefing.",
      },
      {
        title: "Built to rank from day one",
        body: "SEO baked into structure, hierarchy, metadata, performance, and technical setup.",
      },
      {
        title: "Design that earns trust",
        body: "Premium custom design. Visitors judge your product by your website.",
      },
      {
        title: "You own it after launch",
        body: "CMS, hosting, domain yours. Walkthrough + docs. Team updates without calling us.",
      },
    ],
  },
  process: {
    title: "Strategy first. Then every pixel.",
    steps: [
      {
        title: "Strategy & sitemap",
        description:
          "Customer journey, funnel structure, page hierarchy, key messages per page. You approve before design.",
        outcome: "Week 1",
      },
      {
        title: "Copy first",
        description:
          "All copy written before design. Headlines, body, CTAs approved. Design wraps around words that work.",
        outcome: "Week 1–2",
      },
      {
        title: "Design sprint",
        description:
          "Full visual design including animations, hover states, mobile. Consolidated feedback, then final approval.",
        outcome: "Week 2–3",
      },
      {
        title: "Build & SEO",
        description:
          "Webflow or Bubble, CMS configured, SEO foundation, analytics, forms connected.",
        outcome: "Week 3–4",
      },
      {
        title: "Launch & handover",
        description:
          "Live on your domain, CMS walkthrough, documentation so your team manages independently.",
        outcome: "Week 4",
      },
    ],
  },
  packages: {
    title: "Three types of sites. Clear pricing.",
    tiers: [
      {
        name: "Landing Page",
        tagline: "One page that does one job: convert visitors into leads or signups.",
        price: "€1,500–€2,500",
        features: [
          "Strategy and funnel mapping",
          "Full copywriting (all sections)",
          "Custom design with animations",
          "Built on Webflow or Bubble",
          "Lead capture + email integration",
          "On-page SEO setup",
          "Mobile responsive",
          "About 2-week delivery",
        ],
      },
      {
        name: "Marketing Site",
        tagline:
          "Full 5–10 page site that tells your story, builds trust, and converts at every stage.",
        price: "€3,500–€6,000",
        featured: true,
        features: [
          "Everything in Landing Page",
          "5–10 pages",
          "Full design system",
          "Scroll animations and micro-interactions",
          "Social proof architecture",
          "Analytics setup",
          "Full SEO foundation + sitemap",
          "About 4-week delivery",
        ],
      },
      {
        name: "Full Site + CMS",
        tagline:
          "Scalable site your team can run and grow, with blog, case studies, and full content control.",
        price: "€6,000–€10,000+",
        features: [
          "Everything in Marketing Site",
          "Full CMS setup",
          "Blog with custom post templates",
          "Case studies / portfolio section",
          "Team and careers pages",
          "Lead magnets with delivery automation",
          "Advanced SEO (structured data)",
          "Editor training + documentation",
          "Content strategy for first 3 months",
          "4–6 week delivery",
        ],
      },
    ],
  },
  faq: {
    title: "Things people always ask",
    items: [
      {
        q: "Webflow or Bubble - which is right for my site?",
        a: "Pure marketing (no accounts, no dynamic app features): Webflow almost always. Better SEO, speed, design control. Forms to a database or part of an app: Bubble may fit. We decide on the strategy call.",
      },
      {
        q: "Do you write all the copy or do I provide it?",
        a: "We write everything: headlines, paragraphs, CTAs, meta. We interview you for product, market, and tone. You approve before design.",
      },
      {
        q: "Can you connect the website to my existing Bubble app?",
        a: "Yes. Webflow as marketing front-end, Bubble for auth and the app. Land on Webflow, click Get Started, arrive inside Bubble.",
      },
      {
        q: "Can I edit the site myself after launch?",
        a: "Yes - that is a requirement. Proper CMS so your team updates copy, posts, and images without a developer. Full handover and documentation.",
      },
      {
        q: "What if I need a landing page now and the full site later?",
        a: "Common and smart. We build the landing page with full-site architecture in mind so it extends without a rebuild.",
      },
    ],
  },
  finalCta: {
    title: "Your website should be your best salesperson",
    body: "One free call about what you are building and what your site needs to do. No commitment, honest advice.",
  },
  relatedEngineIds: ["acquisition", "activation"],
};
