import type { PortfolioItem } from "@/lib/types";

export interface CaseStudyOutcome {
  value: string;
  label: string;
}

export interface CaseStudySection {
  heading: string;
  body: string;
}

export interface CaseStudy extends PortfolioItem {
  id: string;
  /** CSS gradient fallback when coverImage is missing. */
  imageGradient: string;
  /** Hard outcomes shown on homepage cards (Parallel-style). */
  outcomes: CaseStudyOutcome[];
  /** Optional short subtitle under the title. */
  subtitle?: string;
  /** Narrative sections (Challenge / What we built / How we shipped). */
  sections?: CaseStudySection[];
  /** Extra product screens beyond the cover. */
  gallery?: string[];
  /** Capability chips migrated from Bubble hashtags. */
  services?: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "publiclink",
    slug: "publiclink",
    client: "PublicLink",
    tags: ["MVP application", "Community", "8 weeks"],
    title:
      "PublicLink case study: building Europe's first Public Sector professional network",
    description:
      "A professional network for public sector leaders - scoped, designed, and shipped as an MVP in eight weeks.",
    imageGradient:
      "linear-gradient(135deg, #1F1145 0%, #3d2066 55%, #b8b8ff 100%)",
    coverImage: "/images/case-studies/publiclink.png",
    liveUrl: "",
    outcomes: [
      { value: "8 weeks", label: "MVP to launch" },
      { value: "Live", label: "Founder validation" },
    ],
    results:
      "Launched a functional MVP with profiles, networking, and community features in eight weeks. Founder validated demand with real users before scaling investment.",
    sections: [
      {
        heading: "Challenge",
        body: "Public sector leaders lacked a dedicated professional network. The founder needed a credible MVP fast - enough product to validate demand without overbuilding.",
      },
      {
        heading: "What we built",
        body: "Profiles, networking, and community features scoped for an eight-week MVP - designed and shipped as a focused first version ready for real users.",
      },
    ],
  },
  {
    id: "prosafenet",
    slug: "prosafenet",
    client: "ProSafeNet",
    tags: ["Full-app development", "Community", "8 weeks"],
    title:
      "ProSafeNet case study: Building the world's first global Safety Professional Network",
    description:
      "Global safety professional network - full application build with community and content features.",
    imageGradient:
      "linear-gradient(135deg, #0a0a12 0%, #1a1040 50%, #8585ff 80%)",
    coverImage: "/images/case-studies/prosafenet.png",
    liveUrl: "",
    outcomes: [
      { value: "3k+", label: "Users in 6 months" },
      { value: "$1.5k", label: "Sponsor MRR" },
      { value: "$7k+", label: "Sponsor revenue" },
    ],
    results:
      "Grew to 3k+ users in six months with one major sponsor. Earned $7k+ from that sponsor relationship, now paying $1.5k MRR - a production community platform with real revenue, not just launch metrics.",
    sections: [
      {
        heading: "Challenge",
        body: "Safety professionals needed a global home for networking and content - not another generic social feed. The product had to earn trust and support sponsorship early.",
      },
      {
        heading: "What we built",
        body: "A full community application with profiles, networking, and content features - built to ship and grow into a sponsor-backed network.",
      },
    ],
  },
  {
    id: "tap-group",
    slug: "tap-group",
    client: "TapGroup",
    tags: ["MVP development", "Dashboard", "3 weeks"],
    title:
      "How TapGroup eliminated manual inventory tracking and increased efficiency by 50%",
    description:
      "Inventory and sales tracking app that replaced spreadsheets and manual reconciliation.",
    imageGradient:
      "linear-gradient(135deg, #1F1145 0%, #2a1860 45%, #8585ff 100%)",
    coverImage: "/images/case-studies/tap-group.png",
    liveUrl: "",
    outcomes: [
      { value: "50%", label: "Faster inventory" },
      { value: "3 weeks", label: "MVP shipped" },
    ],
    results:
      "Inventory management became at least 50% faster. The team stopped losing track of who sold or bought what across locations.",
    sections: [
      {
        heading: "Challenge",
        body: "Manual inventory and sales tracking across locations meant lost records and slow reconciliation. Spreadsheets could not keep up.",
      },
      {
        heading: "What we built",
        body: "An inventory and sales tracking MVP that replaced spreadsheets - shipped in three weeks so the team could operate from one source of truth.",
      },
    ],
  },
  {
    id: "facelessstar",
    slug: "facelessstar",
    client: "FacelessStar",
    tags: ["MVP development", "AI-powered tools", "3 weeks"],
    title:
      "How FacelessStar used AI tools to convert 336 users in four months",
    description:
      "AI-powered creator tools shipped fast for early traction and conversion experiments.",
    imageGradient:
      "linear-gradient(135deg, #12082a 0%, #1F1145 40%, #cb80ff 100%)",
    coverImage: "/images/case-studies/facelessstar.png",
    liveUrl: "",
    outcomes: [
      { value: "336", label: "Users in 4 months" },
      { value: "3 weeks", label: "MVP shipped" },
    ],
    results:
      "336 users converted in four months with a focused MVP. Validated core workflows before expanding feature scope.",
    sections: [
      {
        heading: "Challenge",
        body: "The founder needed AI-powered creator tools in market quickly - enough product to convert early users and learn what to build next.",
      },
      {
        heading: "What we built",
        body: "A focused AI MVP shipped in three weeks, tuned for conversion experiments rather than a bloated feature set.",
      },
    ],
  },
  {
    id: "razmeni",
    slug: "razmeni",
    client: "Razmeni",
    tags: ["Marketplace", "MVP + Growth", "Community"],
    title: "Razmeni - Parents marketplace",
    subtitle:
      "A community-driven platform for parents to exchange preloved children items effortlessly.",
    description:
      "Razmeni.rs is a no-code marketplace that empowers parents to exchange unused items, fostering sustainability and community connection.",
    imageGradient:
      "linear-gradient(135deg, #1a0f2e 0%, #2d1b4e 50%, #b8b8ff 100%)",
    coverImage: "/images/case-studies/razmeni.png",
    liveUrl: "https://www.razmeni.rs",
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
    results:
      "Razmeni now serves over 1,000 active users, creating a positive impact on families and the environment.",
    sections: [
      {
        heading: "Challenge",
        body: "Parents needed a friendly way to exchange unused children's items - with trust, discovery, and a community feel that generic marketplaces miss.",
      },
      {
        heading: "What we built",
        body: "A responsive marketplace with intuitive listing, exchange, and discovery flows - designed for parents and built for community-driven use.",
      },
      {
        heading: "How we shipped",
        body: "From concept to launch we handled the full product lifecycle: research, pixel-perfect design, core marketplace features, and a scalable Bubble backend.",
      },
    ],
    services: [
      "UI/UX Design",
      "Web Development",
      "Branding",
      "Product Management",
      "Digital Marketing",
      "Landing Page",
    ],
  },
  {
    id: "pets-pilots",
    slug: "pets-pilots",
    client: "Pets Pilots",
    tags: ["Booking", "MVP", "Marketplace"],
    title: "Pets Pilots - Pet Transport App",
    subtitle:
      "A modern platform for booking pet transport services across Europe, designed with convenience and care in mind.",
    description:
      "Pets Pilots connects pet owners with reliable transportation services across Europe - advanced booking, status tracking, and secure payments.",
    imageGradient:
      "linear-gradient(135deg, #0f1a2e 0%, #1a2a4a 45%, #8585ff 100%)",
    coverImage: "/images/case-studies/pets-pilots.png",
    liveUrl: "",
    gallery: ["/images/case-studies/pets-pilots-1.png"],
    outcomes: [
      { value: "EU", label: "Transport booking" },
      { value: "MVP", label: "Shipped end-to-end" },
    ],
    results:
      "A streamlined platform that simplifies logistics, saves time, and enhances trust between pet owners and transport providers.",
    sections: [
      {
        heading: "Challenge",
        body: "Pet owners needed a trustworthy way to find and book safe transport across Europe. Drivers needed a clear path to earn - without chaotic back-and-forth.",
      },
      {
        heading: "What we built",
        body: "An intuitive booking experience with advanced booking, status tracking, and secure payments - plus request posting, provider vetting, and reviews.",
      },
      {
        heading: "How we shipped",
        body: "From concept to launch we ran research, designed a pixel-perfect UI, and built scalable marketplace features optimized for mobile performance.",
      },
    ],
    services: [
      "UI/UX Design",
      "Web Development",
      "App Development",
      "Branding",
      "Responsive Design",
      "Landing Page",
    ],
  },
  {
    id: "stretchwell",
    slug: "stretchwell",
    client: "StretchWell",
    tags: ["Courses", "Fitness", "Digital product"],
    title: "StretchWell - Application for stretching",
    subtitle:
      "How we helped turn a premium in-person stretching service into a scalable global app.",
    description:
      "StretchWell's premium in-person method, productized as a global app with free programs and premium courses - built in Bubble with Vimeo video delivery.",
    imageGradient:
      "linear-gradient(135deg, #1a1220 0%, #3d2040 50%, #cb80ff 100%)",
    coverImage: "/images/case-studies/stretchwell.jpg",
    liveUrl: "",
    gallery: [
      "/images/case-studies/stretchwell-2.jpg",
      "/images/case-studies/stretchwell-3.jpg",
    ],
    outcomes: [
      { value: "Global", label: "Digital reach" },
      { value: "Premium", label: "Course model" },
    ],
    results:
      "Users can join free stretching programs instantly, upgrade to premium courses (knees, back, hips, and more), and access the brand anywhere in the world.",
    sections: [
      {
        heading: "Challenge",
        body: "StretchWell had built one of the top in-person stretching experiences in Serbia. The next step: serve a global audience without diluting the premium feel.",
      },
      {
        heading: "What we built",
        body: "A scalable wellness app with free programs, premium course upgrades, and on-brand UX - video delivery via Vimeo on a Bubble foundation.",
      },
      {
        heading: "What's next",
        body: "Certification, sharing, personalized programs, native apps, and continued global growth - the app is the foundation of a new wellness channel, not just a tool.",
      },
    ],
    services: [
      "UI/UX Design",
      "Web Development",
      "App Development",
      "Responsive Design",
      "SEO",
      "Landing Page",
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}

/** Bubble URL path → Next portfolio slug (for redirects). */
export const bubbleCaseStudyRedirects: Record<string, string> = {
  publiclink: "publiclink",
  prosafenet: "prosafenet",
  "tap-group": "tap-group",
  facelessstar: "facelessstar",
  razmeni: "razmeni",
  "razmeni-parents-marketplace": "razmeni",
  "pets-pilots": "pets-pilots",
  "pets-pilots-pet-transport-booking-app": "pets-pilots",
  stretchwell: "stretchwell",
  "stretchwell-application-for-stretching": "stretchwell",
};
