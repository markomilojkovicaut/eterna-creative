export type FounderPrincipleId =
  | "direct-access"
  | "certified-engineers"
  | "bad-idea"
  | "own-products"
  | "invest";

export interface FounderPrinciple {
  id: FounderPrincipleId;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageSrc?: string;
  /** Tailwind gradient classes when no photo is provided. */
  gradientClass?: string;
  /** Vertical offset for staggered layout. */
  staggerClass: string;
}

export const markoImageSrc = "/images/team/marko.png";

export const studioPrincipleLabel = "Eterna principle";

export const founderBio =
  "I'm Marko. With a small senior team beside me, we've built our own products, made expensive mistakes, and taken revenue share bets on founders we believed in. That's not something agencies would do. We've been in your shoes - now it's our turn to help.";

export const bubblePartnerHref = "https://bubble.io/partners";

export const bubblePartnerLabel =
  "Bubble partner - for existing apps and migration work";

export const founderPrinciples: FounderPrinciple[] = [
  {
    id: "direct-access",
    title: "Direct founder access on every project",
    description:
      "You work with me, not an account manager. I'm in the details, making decisions, and reachable anytime.",
  },
  {
    id: "certified-engineers",
    title: "Senior engineers only",
    description:
      "Small team means we only take projects we can fully resource with senior people. No filler hires, no handoff waste.",
  },
  {
    id: "bad-idea",
    title: "We'll tell you when something's a bad idea",
    description:
      "We've seen what kills products. We'd rather push back early and save you €20K than execute something that won't work.",
  },
  {
    id: "own-products",
    title: "We build our own products too",
    description:
      "zonikai, testaimodels, and more - we run AI products ourselves. Same craft, same reliability bar we bring to client work.",
  },
  {
    id: "invest",
    title: "We sometimes invest in your products",
    description:
      "For founders with a validated idea and real conviction, we sometimes offer to co-invest, and become tech co-founder.",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: "marko",
    name: "Marko",
    role: "Founder, Eterna Studio",
    imageSrc: markoImageSrc,
    staggerClass: "lg:translate-y-0",
  },
  {
    id: "artur",
    name: "Artur",
    role: "Lead engineer",
    imageSrc: "/images/team/artur.png",
    staggerClass: "lg:translate-y-8",
  },
  {
    id: "violeta",
    name: "Violeta",
    role: "Marketing director",
    imageSrc: "/images/team/violeta.png",
    staggerClass: "lg:translate-y-4",
  },
];
