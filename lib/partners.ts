export interface Partner {
  id: string;
  name: string;
  logoSrc: string;
  /** Links to /portfolio/[slug] when set. */
  caseStudySlug?: string;
}

export const partners: Partner[] = [
  {
    id: "publiclink",
    name: "PublicLink",
    logoSrc: "/images/partners/publiclink.png",
    caseStudySlug: "publiclink",
  },
  {
    id: "relative-innovations",
    name: "Relative Innovations",
    logoSrc: "/images/partners/relative-innovations.png",
  },
  {
    id: "prosafenet",
    name: "ProSafeNet",
    logoSrc: "/images/partners/prosafenet.png",
    caseStudySlug: "prosafenet",
  },
  {
    id: "facelessstar",
    name: "FacelessStar",
    logoSrc: "/images/partners/facelessstar.png",
    caseStudySlug: "facelessstar",
  },
  {
    id: "tap-app",
    name: "Tap app",
    logoSrc: "/images/partners/tap-app.png",
    caseStudySlug: "tap-group",
  },
  {
    id: "stretchwell",
    name: "StretchWell",
    logoSrc: "/images/partners/stretchwell.png",
  },
  {
    id: "slikaj-sa-psima",
    name: "Slikaj Sa Psima",
    logoSrc: "/images/partners/slikaj-sa-psima.png",
  },
  {
    id: "pets-pilots",
    name: "Pets Pilots",
    logoSrc: "/images/partners/pets-pilots.png",
  },
  {
    id: "llm-bench",
    name: "LLM Bench",
    logoSrc: "/images/partners/llm-bench.png",
  },
  {
    id: "razmeni",
    name: "Razmeni",
    logoSrc: "/images/partners/razmeni.png",
  },
];
