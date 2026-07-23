import type { PortfolioItem } from "@/lib/types";
import type { ProductId } from "@/lib/products";

export type CaseStudyProductType = ProductId;

export interface CaseStudyOutcome {
  value: string;
  label: string;
}

export interface CaseStudyBulletBlock {
  title?: string;
  body: string;
  bullets?: string[];
}

export interface CaseStudyFeature {
  title: string;
  body: string;
}

export interface CaseStudyReviewSource {
  label: string;
  href: string;
}

export interface CaseStudyQuote {
  /** Full testimonial (bottom quote block). */
  quote: string;
  /**
   * Shorter mid-page pull quote — must differ from `quote`.
   * Omit to hide the pull quote (avoids duplication).
   */
  pullQuote?: string;
  name: string;
  role: string;
  avatarSrc?: string;
  /** Clutch / Upwork / etc. */
  reviewSource?: CaseStudyReviewSource;
}

export interface CaseStudyRoles {
  weOwned: string[];
  clientOwned: string[];
}

export interface CaseStudyClosing {
  title: string;
  body: string;
}

/** Media slot — null/missing src renders a labeled placeholder. */
export interface CaseStudyMedia {
  src?: string | null;
  alt: string;
  kind?: "cover" | "device" | "gallery" | "homepage" | "placeholder";
  label?: string;
}

/** Website recipe: key marketing pages. */
export interface CaseStudyPage {
  title: string;
  body: string;
  media?: CaseStudyMedia;
}

/** Automation recipe: workflow steps. */
export interface CaseStudyWorkflowStep {
  title: string;
  body: string;
}

/**
 * One case study = one product lane (application | website | automation).
 * Dual-product clients get two studies linked via siblingSlug.
 */
export interface CaseStudy extends PortfolioItem {
  id: string;
  productType: CaseStudyProductType;
  imageGradient: string;
  outcomes: CaseStudyOutcome[];
  solutionType: string;
  timeline: string;
  category: string;
  location: string;
  year: string;
  challenge: CaseStudyBulletBlock;
  overview: CaseStudyBulletBlock;
  solution: CaseStudyBulletBlock;
  features: CaseStudyFeature[];
  impact: string[];
  services: string[];
  technologies: string[];
  quote?: CaseStudyQuote;
  closing?: CaseStudyClosing;
  /** Extra screens beyond cover (application / shared). */
  gallery?: string[];
  heroMedia?: CaseStudyMedia | null;
  homepageImage?: string | null;
  solutionMedia?: CaseStudyMedia | null;
  featuresMedia?: CaseStudyMedia[];
  /** Cross-link when client has another product study. */
  siblingSlug?: string;
  siblingLabel?: string;
  /** Public company / product site (aside CTA). Falls back to liveUrl. */
  companyUrl?: string;
  /** Company or founder LinkedIn. */
  linkedinUrl?: string;
  /** Extra screens for results/tech band. */
  resultsMedia?: CaseStudyMedia[];
  /** Loom / YouTube / Vimeo product walkthrough. */
  productVideoUrl?: string;
  /** Who owned what on the engagement. */
  roles?: CaseStudyRoles;
  /** Website recipe extras */
  pages?: CaseStudyPage[];
  seoCro?: CaseStudyBulletBlock;
  /** Automation recipe extras */
  workflowSteps?: CaseStudyWorkflowStep[];
  beforeAfter?: { before: string; after: string };
}

export function getHeroMedia(study: CaseStudy): CaseStudyMedia {
  if (study.heroMedia) return study.heroMedia;
  return {
    src: study.coverImage || null,
    alt: `${study.client} product`,
    kind: "cover",
    label: "Product UI",
  };
}

export function getSolutionMedia(study: CaseStudy): CaseStudyMedia {
  if (study.solutionMedia) return study.solutionMedia;
  return {
    src: study.gallery?.[0] ?? study.coverImage ?? null,
    alt: `${study.client} solution`,
    kind: "device",
    label: "Solution preview",
  };
}

export function getGalleryMedia(study: CaseStudy): CaseStudyMedia[] {
  if (study.featuresMedia && study.featuresMedia.length > 0) {
    return study.featuresMedia;
  }
  const fromGallery = (study.gallery ?? []).map((src, i) => ({
    src,
    alt: `${study.client} screen ${i + 1}`,
    kind: "gallery" as const,
    label: "Product screen",
  }));
  if (fromGallery.length > 0) return fromGallery;
  return [
    {
      src: null,
      alt: `${study.client} screen`,
      kind: "placeholder",
      label: "Product screen",
    },
    {
      src: null,
      alt: `${study.client} mobile`,
      kind: "placeholder",
      label: "Mobile",
    },
    {
      src: null,
      alt: `${study.client} desktop`,
      kind: "placeholder",
      label: "Desktop",
    },
  ];
}

export function studyShowsHomepage(study: CaseStudy): boolean {
  return (
    study.productType === "website" ||
    study.services.some((s) => s.toLowerCase() === "website")
  );
}

export function getHomepageMedia(study: CaseStudy): CaseStudyMedia {
  return {
    src: study.homepageImage ?? null,
    alt: `${study.client} homepage`,
    kind: "homepage",
    label: "Homepage",
  };
}

export function getResultsMedia(study: CaseStudy): CaseStudyMedia[] {
  if (study.resultsMedia && study.resultsMedia.length > 0) {
    return study.resultsMedia;
  }
  const fromGallery = (study.gallery ?? []).slice(0, 2).map((src, i) => ({
    src,
    alt: `${study.client} result ${i + 1}`,
    kind: "gallery" as const,
    label: i === 0 ? "Live product" : "Detail",
  }));
  const placeholders: CaseStudyMedia[] = [
    {
      src: null,
      alt: `${study.client} dashboard`,
      kind: "placeholder",
      label: "Dashboard",
    },
    {
      src: null,
      alt: `${study.client} mobile flow`,
      kind: "placeholder",
      label: "Mobile flow",
    },
    {
      src: null,
      alt: `${study.client} detail view`,
      kind: "placeholder",
      label: "Detail view",
    },
  ];
  const merged = [...fromGallery, ...placeholders];
  return merged.slice(0, 4);
}

export const caseStudyProductLabels: Record<CaseStudyProductType, string> = {
  application: "Application",
  website: "Website",
  automation: "Automation",
};

export const caseStudies: CaseStudy[] = [
  {
    id: "publiclink",
    slug: "publiclink",
    client: "PublicLink",
    productType: "application",
    tags: ["MVP application", "Community", "8 weeks"],
    solutionType: "MVP Application",
    timeline: "8 weeks",
    category: "Community",
    location: "Romania",
    year: "2025",
    title:
      "PublicLink case study: building Europe's first Public Sector professional network",
    description:
      "A professional network for public sector leaders - scoped, designed, and shipped as an MVP in eight weeks.",
    imageGradient:
      "linear-gradient(135deg, #1F1145 0%, #3d2066 55%, #b8b8ff 100%)",
    coverImage: "/images/case-studies/publiclink.png",
    liveUrl: "",
    companyUrl: "https://publiclink.eu",
    linkedinUrl: "https://www.linkedin.com/company/publiclink-eu",
    siblingSlug: "publiclink-website",
    siblingLabel: "Website case study",
    roles: {
      weOwned: ["Product", "Design", "Build", "Launch"],
      clientOwned: ["Domain expertise", "Institution relationships", "Go-to-market"],
    },
    outcomes: [
      { value: "150+", label: "Professionals in 60 days" },
      { value: "8 weeks", label: "MVP to launch" },
      { value: "100%", label: "Niche focus" },
    ],
    challenge: {
      title: "A fragmented professional ecosystem",
      body: "The European public sector spans the Commission, Parliament, Council, agencies, and hundreds of international organizations - yet professionals still struggled to network and grow their careers.",
      bullets: [
        "Scattered job platforms across institutional sites and informal networks",
        "No dedicated community for public-sector contractors",
        "Weak talent verification for specialized institutional roles",
        "Networking limited to expensive conferences and personal referrals",
      ],
    },
    overview: {
      title: "Bridging the gap in public-sector networking",
      body: "PublicLink emerged from a clear gap: public-sector professionals - from EU policy advisors to international development consultants - operated in isolation despite shared expertise. We set out to build the first network designed for that community.",
    },
    solution: {
      title: "Building the LinkedIn of public institutions",
      body: "We designed dual experiences for professionals and institutions: profile and job discovery for contractors, talent search and verified posting for organizations - with LinkedIn-assisted onboarding and institutional-grade UX.",
    },
    features: [
      {
        title: "Smart profile builder",
        body: "LinkedIn-assisted setup with public-sector specializations and deep profile customization.",
      },
      {
        title: "Intelligent job search",
        body: "Advanced filtering so professionals find relevant institutional roles faster.",
      },
      {
        title: "Professional feed & messaging",
        body: "Industry insights plus secure messaging between verified professionals and recruiters.",
      },
      {
        title: "Institutional tooling",
        body: "Talent search, job posting, and verified candidate access for organizations.",
      },
    ],
    impact: [
      "150+ pre-screened professionals",
      "Daily user-generated content",
      "Institutional-sector niche focus",
    ],
    results:
      "150+ verified professionals registered within the first 60 days, all working within the public institutional sector. Daily engagement and institutional interest validated demand before scaling investment.",
    services: ["Website", "Web application", "UI/UX Design", "E-mail marketing"],
    technologies: ["Bubble", "Notion"],
    closing: {
      title: "Ready to build your specialized network?",
      body: "PublicLink shows how deeply understanding one professional community can create outsized value, fast. If you're building for a niche that generic networks ignore, we'll help you scope the MVP that proves it.",
    },
    quote: {
      pullQuote:
        "Overall, the team has performed better than any other project I've worked on in the IT industry.",
      quote:
        "An amazing job done by Marko and the team, the quality and timeliness of delivery being absolutely spot-on. More than just delivery itself, I had a great time working with Marko, debating ideas and shaping the product.",
      name: "Radu Antohe",
      role: "Founder, PublicLink",
      avatarSrc: "/images/reviews/radu-antohe.png",
      reviewSource: {
        label: "Clutch review",
        href: "https://clutch.co",
      },
    },
  },
  {
    id: "prosafenet",
    slug: "prosafenet",
    client: "ProSafeNet",
    productType: "application",
    tags: ["Full-app development", "Community", "8 weeks"],
    solutionType: "Full-app development",
    timeline: "8 weeks",
    category: "Community",
    location: "Serbia",
    year: "2025",
    title:
      "ProSafeNet case study: Building the world's first global Safety Professional Network",
    description:
      "Global safety professional network - full application build with community, knowledge, jobs, and events.",
    imageGradient:
      "linear-gradient(135deg, #0a0a12 0%, #1a1040 50%, #8585ff 80%)",
    coverImage: "/images/case-studies/prosafenet.png",
    liveUrl: "",
    companyUrl: "https://prosafenet.com",
    siblingSlug: "prosafenet-website",
    siblingLabel: "Website case study",
    roles: {
      weOwned: ["Product", "Design", "Build", "Email systems"],
      clientOwned: ["Safety domain expertise", "Community leadership", "Partnerships"],
    },
    outcomes: [
      { value: "3k+", label: "Users in 6 months" },
      { value: "$1.5k", label: "Sponsor MRR" },
      { value: "$7k+", label: "Sponsor revenue" },
    ],
    challenge: {
      title: "Safety experts were isolated when crises hit",
      body: "When disasters struck - earthquakes, industrial accidents, emergencies - governments struggled to coordinate. Safety experts who could help stayed siloed by country and discipline, with no unified professional network.",
    },
    overview: {
      title: "From expert practice to global platform",
      body: "Dr. Vladimir M. Cvetkovic, a leading safety and disaster-management expert, needed more than a personal brand site. He needed a living network where safety professionals could share knowledge, find opportunities, and coordinate when it mattered.",
    },
    solution: {
      title: "The LinkedIn of safety professionals - built for crisis contexts",
      body: "We built a full community platform with smart onboarding by discipline, knowledge sharing, jobs, events, messaging, and priority notifications - mobile-first and ready for professional trust.",
    },
    features: [
      {
        title: "Smart onboarding",
        body: "Personalized setup based on professional discipline and experience.",
      },
      {
        title: "Knowledge base",
        body: "Structured content sharing with categorization and search.",
      },
      {
        title: "Jobs & events",
        body: "Opportunity marketplace plus industry event registration and networking.",
      },
      {
        title: "Messaging & alerts",
        body: "Direct professional communication and priority notifications for critical situations.",
      },
    ],
    impact: [
      "600+ safety experts connected globally (first 90 days)",
      "20+ professional avatars",
      "Zero to market leader in 90 days",
    ],
    results:
      "Grew from launch into a production community with 3k+ users in six months, organic professional referrals, and sponsor revenue ($7k+ earned; $1.5k MRR) - proof the network created real value beyond vanity metrics.",
    services: [
      "Website",
      "Web application",
      "Mobile application",
      "UI/UX Design",
      "Product strategy",
      "E-mail marketing",
      "Product analytics",
    ],
    technologies: ["Bubble", "Notion", "Brevo"],
    closing: {
      title: "Ready to build your professional community platform?",
      body: "ProSafeNet proves strategic vision plus focused product craft can create category-defining communities fast. If you're connecting a specialized profession, we'll help you ship the version that earns trust.",
    },
    quote: {
      pullQuote:
        "They have a great team, and they were great! 1000 users in first 3 months, 20% conversion rate, 2 official sponsors inside first 2 months.",
      quote:
        "Working with Eterna transformed my vision into reality faster than I ever imagined possible. What started as an idea to connect safety professionals became a thriving global community.",
      name: "Dr. Vladimir M. Cvetkovic",
      role: "Founder, ProSafeNet",
      avatarSrc: "/images/reviews/vladimir-cvetkovic.png",
      reviewSource: {
        label: "Clutch review",
        href: "https://clutch.co",
      },
    },
  },
  {
    id: "tap-group",
    slug: "tap-group",
    client: "TapGroup",
    productType: "application",
    tags: ["MVP development", "Dashboard", "3 weeks"],
    solutionType: "MVP development",
    timeline: "3 weeks",
    category: "Dashboard",
    location: "Serbia",
    year: "2025",
    title:
      "How TapGroup eliminated manual inventory tracking and increased efficiency by 50%",
    description:
      "Inventory and sales tracking app that replaced spreadsheets and manual reconciliation for an event-operations business.",
    imageGradient:
      "linear-gradient(135deg, #1F1145 0%, #2a1860 45%, #8585ff 100%)",
    coverImage: "/images/case-studies/tap-group.png",
    liveUrl: "",
    siblingSlug: "tap-group-website",
    siblingLabel: "Website case study",
    roles: {
      weOwned: ["Product", "Design", "Build", "Ops workflows"],
      clientOwned: ["Warehouse process knowledge", "Staff rollout", "Inventory rules"],
    },
    beforeAfter: {
      before:
        "Paper logs, WhatsApp notes, missing records - no accountability for who changed stock.",
      after:
        "Real-time inventory with full audit trail - at least 50% faster stock ops.",
    },
    outcomes: [
      { value: "50%", label: "Faster inventory" },
      { value: "3 weeks", label: "MVP shipped" },
    ],
    challenge: {
      title: "Growth outpaced paper inventory",
      body: "TapGroup's paper-based tracking created operational drag as the business scaled across venues.",
      bullets: [
        "Data accuracy issues from manual recording",
        "No accountability for who changed inventory and when",
        "Staff time lost reconciling discrepancies",
        "No real-time visibility across locations",
      ],
    },
    overview: {
      title: "Event operations needed a single source of truth",
      body: "TapGroup provides catering, equipment, and decoration across multiple venues. We built TapAPP - a responsive inventory system matched to their real workflows, not a generic warehouse tool.",
    },
    solution: {
      title: "TapAPP for event-industry inventory",
      body: "A digital platform for real-time stock moves, invitation-based access, mobile warehouse use, and a full audit trail - designed around how TapGroup already worked.",
    },
    features: [
      {
        title: "Real-time inventory tracking",
        body: "Instant updates for additions, transfers, and removals across locations.",
      },
      {
        title: "User management",
        body: "Invitation-based access so only authorized staff can modify inventory.",
      },
      {
        title: "Mobile-responsive ops",
        body: "Full functionality on phones and tablets for on-site warehouse work.",
      },
      {
        title: "Activity logging",
        body: "Complete audit trail with user identity and timestamps on every change.",
      },
    ],
    impact: [
      "Eliminated manual inefficiencies",
      "Positioned for growth",
      "Foundation for wider digital ops",
    ],
    results:
      "Inventory management became at least 50% faster, with real-time visibility and complete history. The team stopped losing track of who sold or bought what across locations.",
    services: ["Website", "Web application", "UI/UX Design", "Product strategy"],
    technologies: ["Bubble", "Brevo"],
    quote: {
      pullQuote:
        "I'm not into apps, but we needed a solution - the TapAPP Marko made solved it easily and our inventory management is at least 50% faster now.",
      quote:
        "The paper tracking system was holding us back - I and colleagues were constantly dealing with missing records and couldn't track who sold or bought what. The TapAPP Marko made solved everything and now we have real-time view and complete history, and our inventory management is 50% faster at least.",
      name: "Boban Miljkovic",
      role: "Owner, TapGroup",
      avatarSrc: "/images/reviews/boban-miljkovic.png",
    },
  },
  {
    id: "facelessstar",
    slug: "facelessstar",
    client: "FacelessStar",
    productType: "application",
    tags: ["MVP development", "AI-powered tools", "3 weeks"],
    solutionType: "MVP Development",
    timeline: "3 weeks",
    category: "AI-Powered Tools",
    location: "Serbia",
    year: "2025",
    title:
      "How FacelessStar used AI tools to convert 336 users in four months",
    description:
      "AI-powered logo and audience tools that unblocked course students and converted free users into paid customers.",
    imageGradient:
      "linear-gradient(135deg, #12082a 0%, #1F1145 40%, #cb80ff 100%)",
    coverImage: "/images/case-studies/facelessstar.png",
    liveUrl: "",
    siblingSlug: "facelessstar-website",
    siblingLabel: "Website case study",
    roles: {
      weOwned: ["Product", "Design", "Build", "Prompt systems"],
      clientOwned: ["Course content", "Audience", "Offer & pricing"],
    },
    beforeAfter: {
      before:
        "Cold visitors and course students froze at setup - logo and audience questions killed momentum.",
      after:
        "Free AI tools unblock the first five minutes; 40% of tool users convert to paid.",
    },
    outcomes: [
      { value: "336", label: "Paid conversions" },
      { value: "40%", label: "Tool → paid rate" },
      { value: "3 weeks", label: "MVP shipped" },
    ],
    challenge: {
      title: "Students stalled before they started",
      body: "FacelessStar's courses were strong, but many students froze at the first steps.",
      bullets: [
        "Audience uncertainty - who to target",
        "Brand identity paralysis - no logo, no channel",
        "Decision overwhelm - too many options, no progress",
      ],
    },
    overview: {
      title: "Unblock the first five minutes",
      body: "FacelessStar teaches entrepreneurs to build and monetize faceless YouTube channels. We shipped a lightweight web app with two AI tools - audience personas and channel logos - as both a student unlock and a lead magnet.",
    },
    solution: {
      title: "Two tools. One bottleneck.",
      body: "FacelessStar AI Tools focuses on the exact hesitation points that killed course momentum - not a bloated creator suite.",
    },
    features: [
      {
        title: "Logo generator",
        body: "Custom channel logos from prompts and preferences.",
      },
      {
        title: "Audience creator",
        body: "Detailed personas through a guided questionnaire.",
      },
      {
        title: "Reliable AI delivery",
        body: "Bubble + OpenAI with tuned prompts, error handling, and fast responses.",
      },
    ],
    impact: [
      "Enhanced course value proposition",
      "Scalable lead generation",
      "Product upsell path into coaching",
    ],
    results:
      "In four months: 840 users accessed the tools; 336 converted to paid courses or coaching (40% conversion). Onboarding friction dropped and free-tool traffic became a real enrollment engine.",
    services: ["Website", "Web application", "UI/UX Design", "Product strategy"],
    technologies: ["Bubble", "OpenAI", "Notion"],
    closing: {
      title: "Ready to turn your AI SaaS idea into a validated business?",
      body: "FacelessStar proves focus beats features. We built an AI MVP for one specific problem - and got traction because of that focus. We'll help you pick the few features that matter for validation.",
    },
    quote: {
      pullQuote:
        "Weekly Loom updates and the Notion portal were a game changer - all decisions, files, tasks in one place. These guys have good processes.",
      quote:
        "I was losing students who'd get stuck on basic setup questions like 'who should my audience be?' and never move forward with my course. The team built these AI tools in 3 weeks that let people get a logo and audience plan in 5 minutes, and suddenly they're excited to start instead of overwhelmed. The results speak for themselves - 40% of tool users convert to paid customers.",
      name: "Stefan Petricevic",
      role: "CEO, FacelessStar",
      avatarSrc: "/images/reviews/stefan-petricevic.png",
    },
  },
  {
    id: "razmeni",
    slug: "razmeni",
    client: "Razmeni",
    productType: "application",
    tags: ["Marketplace", "MVP + Growth", "Community"],
    solutionType: "MVP + Growth",
    timeline: "Marketplace build",
    category: "Marketplace",
    location: "Serbia",
    year: "2024",
    title: "Razmeni - Parents marketplace",
    description:
      "A community marketplace for parents to exchange preloved children's items - designed, built, and grown on Bubble.",
    imageGradient:
      "linear-gradient(135deg, #1a0f2e 0%, #2d1b4e 50%, #b8b8ff 100%)",
    coverImage: "/images/case-studies/razmeni.png",
    liveUrl: "https://www.razmeni.rs",
    companyUrl: "https://www.razmeni.rs",
    roles: {
      weOwned: ["Product", "Design", "Build", "Growth support"],
      clientOwned: ["Community", "Operations", "Local partnerships"],
    },
    gallery: [
      "/images/case-studies/razmeni-1.jpg",
      "/images/case-studies/razmeni-2.jpg",
      "/images/case-studies/razmeni-3.jpg",
      "/images/case-studies/razmeni-4.jpg",
    ],
    outcomes: [
      { value: "1,000+", label: "Active users" },
      { value: "MVP", label: "Marketplace live" },
    ],
    challenge: {
      title: "Parents needed a trusted place to exchange",
      body: "Generic marketplaces missed the trust, discovery, and community feel parents need when exchanging children's items.",
    },
    overview: {
      title: "Sustainability meets community commerce",
      body: "Razmeni.rs helps parents list, exchange, and discover preloved items with an intuitive, responsive experience built for real family life.",
    },
    solution: {
      title: "Full-lifecycle marketplace delivery",
      body: "From research and pixel-perfect UI to core marketplace features and a scalable Bubble backend - one team owned concept through launch.",
    },
    features: [
      {
        title: "Listing & discovery",
        body: "Simple flows for parents to list items and find what they need.",
      },
      {
        title: "Community-first UX",
        body: "Engaging UI designed for trust and repeat exchanges.",
      },
      {
        title: "Responsive web app",
        body: "Seamless experience across phone and desktop.",
      },
    ],
    impact: [
      "1,000+ active users",
      "Community-driven exchanges",
      "Positive family & environmental impact",
    ],
    results:
      "Razmeni now serves over 1,000 active users - a living marketplace that keeps unused items in circulation.",
    services: [
      "UI/UX Design",
      "Web Development",
      "Branding",
      "Product Management",
      "Digital Marketing",
      "Landing Page",
    ],
    technologies: ["Bubble"],
    closing: {
      title: "Want to build your own marketplace?",
      body: "We'll help you scope the MVP that proves liquidity and trust - before you overbuild.",
    },
  },
  {
    id: "pets-pilots",
    slug: "pets-pilots",
    client: "Pets Pilots",
    productType: "application",
    tags: ["Booking", "MVP", "Marketplace"],
    solutionType: "MVP development",
    timeline: "Booking MVP",
    category: "Booking",
    location: "Europe",
    year: "2024",
    title: "Pets Pilots - Pet Transport App",
    description:
      "A booking platform connecting pet owners with reliable transport providers across Europe.",
    imageGradient:
      "linear-gradient(135deg, #0f1a2e 0%, #1a2a4a 45%, #8585ff 100%)",
    coverImage: "/images/case-studies/pets-pilots.png",
    liveUrl: "",
    roles: {
      weOwned: ["Product", "Design", "Build"],
      clientOwned: ["Driver network", "Operations", "Customer support"],
    },
    beforeAfter: {
      before:
        "Chaotic back-and-forth booking and low trust between pet owners and drivers.",
      after:
        "Clear booking, tracking, and reviews - a marketplace loop both sides can trust.",
    },
    gallery: ["/images/case-studies/pets-pilots-1.png"],
    outcomes: [
      { value: "EU", label: "Transport booking" },
      { value: "MVP", label: "Shipped end-to-end" },
    ],
    challenge: {
      title: "Pet transport was stressful and opaque",
      body: "Owners needed trustworthy booking across Europe; drivers needed a clear way to earn - without chaotic back-and-forth.",
    },
    overview: {
      title: "Convenience and care, productized",
      body: "Pets Pilots connects pet owners with vetted transport providers - advanced booking, status tracking, and secure payments.",
    },
    solution: {
      title: "Marketplace booking from research to launch",
      body: "We ran research, designed an approachable UI, and shipped scalable features: request posting, provider vetting, reviews, and mobile-ready performance.",
    },
    features: [
      {
        title: "Advanced booking",
        body: "Clear flows to request and confirm pet transport.",
      },
      {
        title: "Status tracking",
        body: "Owners stay informed without chasing drivers.",
      },
      {
        title: "Trust layer",
        body: "Provider vetting and customer reviews built into the product.",
      },
    ],
    impact: [
      "Simplified pet logistics",
      "Income path for drivers",
      "Higher trust between sides",
    ],
    results:
      "A streamlined platform that simplifies logistics, saves time, and strengthens trust between pet owners and transport providers.",
    services: [
      "UI/UX Design",
      "Web Development",
      "App Development",
      "Branding",
      "Responsive Design",
      "Landing Page",
    ],
    technologies: ["Bubble"],
    closing: {
      title: "Want to build your own booking app?",
      body: "We'll help you validate the marketplace loop - demand, supply, and trust - before you scale features.",
    },
    quote: {
      pullQuote:
        "They were amazing from day 1 - our partner not only in development but also helping us what to build next.",
      quote:
        "Eterna built our app for pet transport, and they were amazing from day 1, and have been our partner not only in development but also helping us what to build next. Highly recommend!",
      name: "Marko Savic",
      role: "Founder, PetsPilots",
      avatarSrc: "/images/reviews/marko-savic.png",
    },
  },
  {
    id: "stretchwell",
    slug: "stretchwell",
    client: "StretchWell",
    productType: "application",
    tags: ["Courses", "Fitness", "Digital product"],
    solutionType: "Digital product",
    timeline: "App launch",
    category: "Courses",
    location: "Serbia → Global",
    year: "2025",
    title: "StretchWell - Application for stretching",
    description:
      "Premium in-person stretching, productized as a global app with free programs and premium courses.",
    imageGradient:
      "linear-gradient(135deg, #1a1220 0%, #3d2040 50%, #cb80ff 100%)",
    coverImage: "/images/case-studies/stretchwell.jpg",
    liveUrl: "",
    roles: {
      weOwned: ["Product", "Design", "Build", "Video delivery"],
      clientOwned: ["Method & content", "Trainers", "Brand"],
    },
    beforeAfter: {
      before:
        "Premium stretching lived in one city - followers abroad couldn't access the method.",
      after:
        "Global app with free programs and premium courses, Vimeo-secured playback inside Bubble.",
    },
    gallery: [
      "/images/case-studies/stretchwell-2.jpg",
      "/images/case-studies/stretchwell-3.jpg",
    ],
    outcomes: [
      { value: "Global", label: "Digital reach" },
      { value: "Premium", label: "Course model" },
    ],
    challenge: {
      title: "A local premium brand wanted global reach",
      body: "StretchWell had one of Serbia's top in-person stretching experiences. The next step: serve a worldwide audience without losing the premium feel.",
    },
    overview: {
      title: "Method → scalable digital product",
      body: "We turned their stretching method into an app with free programs and premium courses - video via Vimeo, craft via Bubble, UX that still feels premium.",
    },
    solution: {
      title: "Foundation for a wellness movement",
      body: "Not just a content dump - a branded product path from free value to paid courses, ready for certification, sharing, and native apps next.",
    },
    features: [
      {
        title: "Free programs",
        body: "Instant access to start stretching anywhere.",
      },
      {
        title: "Premium courses",
        body: "Focused programs for knees, back, hips, and more.",
      },
      {
        title: "On-brand video delivery",
        body: "Vimeo-backed playback inside a Bubble product shell.",
      },
    ],
    impact: [
      "Global access to a local premium method",
      "Free → premium upgrade path",
      "Brand consistency online and offline",
    ],
    results:
      "Users can join free programs instantly, upgrade to premium courses, and access StretchWell anywhere in the world.",
    services: [
      "UI/UX Design",
      "Web Development",
      "App Development",
      "Responsive Design",
      "SEO",
      "Landing Page",
    ],
    technologies: ["Bubble", "Vimeo"],
    closing: {
      title: "Want to turn your physical service into a digital product?",
      body: "We'll help you productize what already works offline - without diluting the brand.",
    },
    quote: {
      pullQuote:
        "The whole process was cool, and the team solved all the technical challenges we worried about, especially around video security.",
      quote:
        "This platform lets us help the thousands of followers who couldn't access our stretching services before - with our own app. The whole process was cool, and the team solved all the technical challenges we worried about, especially around video security.",
      name: "Miloš Djordjevic",
      role: "Founder & CEO, Stretch Well",
      avatarSrc: "/images/reviews/milos-djordjevic.png",
    },
  },
  {
    id: "publiclink-website",
    slug: "publiclink-website",
    client: "PublicLink",
    productType: "website",
    tags: ["Marketing site", "Community", "Launch"],
    solutionType: "Marketing website",
    timeline: "Alongside MVP",
    category: "Community",
    location: "Romania",
    year: "2025",
    title: "PublicLink website - positioning Europe's public-sector network",
    description:
      "Launch site that explains who PublicLink is for and converts professionals and institutions into early members.",
    imageGradient:
      "linear-gradient(135deg, #1F1145 0%, #3d2066 55%, #b8b8ff 100%)",
    coverImage: "/images/case-studies/publiclink.png",
    liveUrl: "https://publiclink.eu",
    companyUrl: "https://publiclink.eu",
    linkedinUrl: "https://www.linkedin.com/company/publiclink-eu",
    siblingSlug: "publiclink",
    siblingLabel: "Application case study",
    roles: {
      weOwned: ["Positioning", "Design", "Build"],
      clientOwned: ["Institution messaging", "Launch channels"],
    },
    outcomes: [
      { value: "Clear", label: "Niche positioning" },
      { value: "Dual", label: "Audience paths" },
    ],
    challenge: {
      title: "A new category needed a sharp first impression",
      body: "PublicLink had to explain a niche network in seconds - without sounding like another generic LinkedIn clone.",
    },
    overview: {
      title: "Site as the front door to the MVP",
      body: "We shaped a marketing site that speaks to professionals and institutions separately, then funnels both into product signup.",
    },
    solution: {
      title: "Relevance-first storytelling",
      body: "Homepage narrative, audience pages, and CTA paths that match how EU-facing talent actually evaluates tools.",
    },
    pages: [
      {
        title: "Home",
        body: "Category claim, dual CTAs, and proof that this network is built for public-sector work.",
      },
      {
        title: "For professionals",
        body: "Jobs, credibility, and community benefits for contractors and advisors.",
      },
      {
        title: "For institutions",
        body: "Talent discovery and verified hiring language for organizations.",
      },
      {
        title: "Join / signup",
        body: "Short path from site intent into the Bubble application.",
      },
    ],
    seoCro: {
      title: "Launch CRO",
      body: "Copy and CTAs tuned for early adoption, not vanity traffic.",
      bullets: [
        "Niche keywords over broad networking terms",
        "Separate CTA paths for people vs institutions",
        "Social proof near the first conversion point",
      ],
    },
    features: [],
    impact: [
      "Clear category story at launch",
      "Conversion path into the MVP",
      "Aligned brand with the product UI",
    ],
    results:
      "The site gave PublicLink a credible front door - visitors understood the niche before they created an account.",
    services: ["Website", "UI/UX Design", "E-mail marketing"],
    technologies: ["Bubble", "Notion"],
    quote: {
      pullQuote:
        "Overall, the team has performed better than any other project I've worked on in the IT industry.",
      quote:
        "An amazing job done by Marko and the team, the quality and timeliness of delivery being absolutely spot-on. More than just delivery itself, I had a great time working with Marko, debating ideas and shaping the product.",
      name: "Radu Antohe",
      role: "Founder, PublicLink",
      avatarSrc: "/images/reviews/radu-antohe.png",
      reviewSource: {
        label: "Clutch review",
        href: "https://clutch.co",
      },
    },
    closing: {
      title: "Need a launch site that matches your MVP?",
      body: "We'll position the category and ship a site that converts the right early users - not everyone.",
    },
  },
  {
    id: "prosafenet-website",
    slug: "prosafenet-website",
    client: "ProSafeNet",
    productType: "website",
    tags: ["Marketing site", "Community", "Sponsors"],
    solutionType: "Marketing website",
    timeline: "Alongside app",
    category: "Community",
    location: "Serbia",
    year: "2025",
    title: "ProSafeNet website - the global safety network's front door",
    description:
      "Marketing site for the world's first global safety professional network - membership, sponsors, and trust.",
    imageGradient:
      "linear-gradient(135deg, #0a0a12 0%, #1a1040 50%, #8585ff 80%)",
    coverImage: "/images/case-studies/prosafenet.png",
    liveUrl: "https://prosafenet.com",
    companyUrl: "https://prosafenet.com",
    siblingSlug: "prosafenet",
    siblingLabel: "Application case study",
    roles: {
      weOwned: ["Positioning", "Design", "Build"],
      clientOwned: ["Expert content", "Sponsor relationships"],
    },
    outcomes: [
      { value: "Trust", label: "Expert brand" },
      { value: "Dual", label: "Member + sponsor paths" },
    ],
    challenge: {
      title: "Experts won't join a vague community page",
      body: "Safety professionals needed proof of seriousness - domain depth, not startup fluff.",
    },
    overview: {
      title: "Credibility before signup",
      body: "The site frames ProSafeNet as a professional hub: knowledge, jobs, events, and crisis-ready collaboration.",
    },
    solution: {
      title: "Expert-led marketing narrative",
      body: "Clear value for practitioners and a sponsor story that supports sustainable growth.",
    },
    pages: [
      {
        title: "Home",
        body: "Global hub positioning with proof points for safety professionals.",
      },
      {
        title: "Features / product",
        body: "Knowledge, jobs, events, and messaging explained without app overwhelm.",
      },
      {
        title: "For sponsors",
        body: "Partnership narrative tied to a high-trust professional audience.",
      },
      {
        title: "Join",
        body: "Direct path into the live Bubble application.",
      },
    ],
    seoCro: {
      title: "Authority + acquisition",
      body: "Pages structured so search and referrals land on a credible story.",
      bullets: [
        "Safety/disaster keywords with expert framing",
        "Sponsor CTA without diluting member trust",
        "Founder authority woven into the brand",
      ],
    },
    features: [],
    impact: [
      "Credible public brand for a niche network",
      "Member and sponsor conversion paths",
      "Consistent story with the product",
    ],
    results:
      "Prospective members and sponsors could evaluate ProSafeNet before creating an account - reducing skepticism at the door.",
    services: ["Website", "UI/UX Design", "E-mail marketing", "Product strategy"],
    technologies: ["Bubble", "Notion", "Brevo"],
    quote: {
      pullQuote:
        "They have a great team, and they were great!",
      quote:
        "Working with Eterna transformed my vision into reality faster than I ever imagined possible. What started as an idea to connect safety professionals became a thriving global community.",
      name: "Dr. Vladimir M. Cvetkovic",
      role: "Founder, ProSafeNet",
      avatarSrc: "/images/reviews/vladimir-cvetkovic.png",
      reviewSource: {
        label: "Clutch review",
        href: "https://clutch.co",
      },
    },
    closing: {
      title: "Building a professional community?",
      body: "We'll help you ship a site that earns expert trust - then convert into the product.",
    },
  },
  {
    id: "tap-group-website",
    slug: "tap-group-website",
    client: "TapGroup",
    productType: "website",
    tags: ["Marketing site", "Ops", "Events"],
    solutionType: "Marketing website",
    timeline: "Alongside MVP",
    category: "Dashboard",
    location: "Serbia",
    year: "2025",
    title: "TapGroup website - event ops brand meets digital inventory",
    description:
      "Web presence for TapGroup's event-equipment business, aligned with the TapAPP inventory system.",
    imageGradient:
      "linear-gradient(135deg, #1F1145 0%, #2a1860 45%, #8585ff 100%)",
    coverImage: "/images/case-studies/tap-group.png",
    liveUrl: "",
    siblingSlug: "tap-group",
    siblingLabel: "Application case study",
    roles: {
      weOwned: ["Positioning", "Design", "Build"],
      clientOwned: ["Service catalog", "Venue relationships"],
    },
    outcomes: [
      { value: "Brand", label: "Ops-ready presence" },
      { value: "Clear", label: "Service story" },
    ],
    challenge: {
      title: "Ops software needed a public face",
      body: "TapGroup's inventory leap was internal - the brand still needed a clean site for clients booking event equipment.",
    },
    overview: {
      title: "One brand across sales and stock",
      body: "We aligned the marketing site with TapAPP so clients see a modern operator, not a paper-era warehouse.",
    },
    solution: {
      title: "Service-led website",
      body: "Focus on catering, equipment, and venues - with a digital ops story that supports trust.",
    },
    pages: [
      {
        title: "Home",
        body: "Event services overview and proof of multi-venue capability.",
      },
      {
        title: "Services / catalog",
        body: "Equipment and catering offerings structured for inquiry.",
      },
      {
        title: "About / trust",
        body: "Operational reliability messaging for event clients.",
      },
      {
        title: "Contact",
        body: "Simple inquiry path for bookings and quotes.",
      },
    ],
    seoCro: {
      title: "Local event demand",
      body: "Pages oriented toward venue and event buyers who need reliable partners.",
      bullets: [
        "Service clarity over feature dumps",
        "Strong contact CTAs",
        "Brand consistency with TapAPP",
      ],
    },
    features: [],
    impact: [
      "Modern brand for an ops-heavy business",
      "Inquiry-ready service pages",
      "Story aligned with digital inventory",
    ],
    results:
      "TapGroup presents as a digitally run event operator - matching the internal leap TapAPP delivered.",
    services: ["Website", "UI/UX Design", "Product strategy"],
    technologies: ["Bubble", "Brevo"],
    quote: {
      pullQuote:
        "I'm not into apps, but we needed a solution - and our inventory management is at least 50% faster now.",
      quote:
        "The paper tracking system was holding us back - I and colleagues were constantly dealing with missing records and couldn't track who sold or bought what. The TapAPP Marko made solved everything and now we have real-time view and complete history, and our inventory management is 50% faster at least.",
      name: "Boban Miljkovic",
      role: "Owner, TapGroup",
      avatarSrc: "/images/reviews/boban-miljkovic.png",
    },
    closing: {
      title: "Ops app + website, same system",
      body: "We'll connect your public brand to the tools your team actually runs on.",
    },
  },
  {
    id: "facelessstar-website",
    slug: "facelessstar-website",
    client: "FacelessStar",
    productType: "website",
    tags: ["Marketing site", "AI tools", "Courses"],
    solutionType: "Marketing website",
    timeline: "Alongside MVP",
    category: "AI-Powered Tools",
    location: "Serbia",
    year: "2025",
    title: "FacelessStar website - turn free AI tools into course demand",
    description:
      "Marketing site and funnel shell around FacelessStar's AI logo and audience tools.",
    imageGradient:
      "linear-gradient(135deg, #12082a 0%, #1F1145 40%, #cb80ff 100%)",
    coverImage: "/images/case-studies/facelessstar.png",
    liveUrl: "",
    siblingSlug: "facelessstar",
    siblingLabel: "Application case study",
    roles: {
      weOwned: ["Funnel UX", "Design", "Build"],
      clientOwned: ["Offer", "Course content", "Ads"],
    },
    outcomes: [
      { value: "Lead", label: "Magnet path" },
      { value: "40%", label: "Tool → paid (product)" },
    ],
    challenge: {
      title: "Tools alone don't sell the course",
      body: "FacelessStar needed a site narrative that moves free-tool users into paid learning - without friction.",
    },
    overview: {
      title: "Funnel site around the AI unlock",
      body: "The website frames the tools as the first win, then the course as the path to a real channel.",
    },
    solution: {
      title: "Lead magnet → offer story",
      body: "Clear homepage promise, tool entry points, and course CTAs that reuse the same brand language as the app.",
    },
    pages: [
      {
        title: "Home",
        body: "Promise for faceless YouTube builders and path into the free tools.",
      },
      {
        title: "AI tools",
        body: "Logo + audience generator explained as a five-minute unlock.",
      },
      {
        title: "Courses / coaching",
        body: "Paid offer pages for users who are ready after the tools.",
      },
      {
        title: "Signup / start",
        body: "Short conversion into the Bubble tool experience.",
      },
    ],
    seoCro: {
      title: "Conversion-first pages",
      body: "Built to support the 40% tool-to-paid motion - not vanity traffic.",
      bullets: [
        "Tool CTAs above the fold",
        "Course upsell after first win language",
        "Simple mobile path for ad traffic",
      ],
    },
    features: [],
    impact: [
      "Clear free → paid narrative",
      "Brand match with AI tools",
      "Funnel ready for paid traffic",
    ],
    results:
      "The site and tools work as one system - visitors get a quick win, then a natural path into FacelessStar courses.",
    services: ["Website", "UI/UX Design", "Product strategy"],
    technologies: ["Bubble", "OpenAI", "Notion"],
    quote: {
      pullQuote:
        "Weekly Loom updates and the Notion portal were a game changer - these guys have good processes.",
      quote:
        "I was losing students who'd get stuck on basic setup questions like 'who should my audience be?' and never move forward with my course. The team built these AI tools in 3 weeks that let people get a logo and audience plan in 5 minutes, and suddenly they're excited to start instead of overwhelmed. The results speak for themselves - 40% of tool users convert to paid customers.",
      name: "Stefan Petricevic",
      role: "CEO, FacelessStar",
      avatarSrc: "/images/reviews/stefan-petricevic.png",
    },
    closing: {
      title: "Want AI tools that feed your offer?",
      body: "We'll design the site and product as one conversion loop - not two disconnected builds.",
    },
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}

export function getCaseStudiesByProductType(
  type: CaseStudyProductType | "all"
): CaseStudy[] {
  if (type === "all") return caseStudies;
  return caseStudies.filter((s) => s.productType === type);
}

/** Bubble URL path → Next portfolio slug (for redirects). */
export const bubbleCaseStudyRedirects: Record<string, string> = {
  publiclink: "publiclink",
  "publiclink-eu-public-sector-network-case-study": "publiclink",
  prosafenet: "prosafenet",
  "prosafenet-global-safety-network-case-study": "prosafenet",
  "tap-group": "tap-group",
  "tapgroup-inventory-management-system-case-study": "tap-group",
  facelessstar: "facelessstar",
  "facelessstar-ai-tools-conversion-case-study": "facelessstar",
  razmeni: "razmeni",
  "razmeni-parents-marketplace": "razmeni",
  "pets-pilots": "pets-pilots",
  "pets-pilots-pet-transport-booking-app": "pets-pilots",
  stretchwell: "stretchwell",
  "stretchwell-application-for-stretching": "stretchwell",
  "publiclink-website": "publiclink-website",
  "prosafenet-website": "prosafenet-website",
  "tap-group-website": "tap-group-website",
  "facelessstar-website": "facelessstar-website",
};
