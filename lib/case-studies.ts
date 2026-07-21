import type { PortfolioItem } from "@/lib/types";

export interface CaseStudy extends PortfolioItem {
  id: string;
  /** CSS gradient fallback when coverImage is missing. */
  imageGradient: string;
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
    results:
      "Launched a functional MVP with profiles, networking, and community features. Founder validated demand with real users before scaling investment.",
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
    results:
      "Delivered a production-ready community platform on timeline. Enabled the founder to onboard early members and iterate from real usage.",
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
    results:
      "Inventory management became at least 50% faster. The team stopped losing track of who sold or bought what across locations.",
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
    results:
      "336 users converted in four months with a focused MVP. Validated core workflows before expanding feature scope.",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}
