export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  tags: string[];
  title: string;
  /** CSS gradient for placeholder hero until assets are added. */
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
    imageGradient:
      "linear-gradient(135deg, #1F1145 0%, #3d2066 55%, #b8b8ff 100%)",
  },
  {
    id: "prosafenet",
    slug: "prosafenet",
    client: "ProSafeNet",
    tags: ["Full-app development", "Community", "8 weeks"],
    title:
      "ProSafeNet case study: Building the world's first global Safety Professional Network",
    imageGradient:
      "linear-gradient(135deg, #0a0a12 0%, #1a1040 50%, #8585ff 80%)",
  },
  {
    id: "tap-group",
    slug: "tap-group",
    client: "TapGroup",
    tags: ["MVP development", "Dashboard", "3 weeks"],
    title:
      "How TapGroup eliminated manual inventory tracking and increased efficiency by 50%",
    imageGradient:
      "linear-gradient(135deg, #1F1145 0%, #2a1860 45%, #8585ff 100%)",
  },
  {
    id: "facelessstar",
    slug: "facelessstar",
    client: "FacelessStar",
    tags: ["MVP development", "AI-powered tools", "3 weeks"],
    title:
      "How FacelessStar used AI tools to convert 336 users in four months",
    imageGradient:
      "linear-gradient(135deg, #12082a 0%, #1F1145 40%, #cb80ff 100%)",
  },
];
