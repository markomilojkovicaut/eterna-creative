export interface EternaEngine {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: "research" | "architecture" | "acquisition" | "activation" | "retention" | "analytics";
  highlight?: boolean;
}

export const eternaEngines: EternaEngine[] = [
  {
    id: "research",
    number: "01",
    title: "Strategy and validation",
    subtitle: "Plan, research and test before code",
    description:
      "GTM plan and 30+ real user interviews before a line of code. ICP defined, PMF signal measured, and strategy locked - not gut feel.",
    icon: "research",
  },
  {
    id: "architecture",
    number: "02",
    title: "Product architecture",
    subtitle: "Design for your stage, not a hypothetical future",
    highlight: true,
    description:
      "Data model, tech stack, and scope defined before build starts. Stage-appropriate - not over-engineered, not under-built.",
    icon: "architecture",
  },
  {
    id: "acquisition",
    number: "03",
    title: "User acquisition",
    subtitle: "Build the audience before you build the product",
    description:
      "Distribution is the moat. Pre-MVP audience building, channel testing, and the acquisition systems that compound over time.",
    icon: "acquisition",
  },
  {
    id: "activation",
    number: "04",
    title: "Activation & onboarding",
    subtitle: "Get users to the AHA in under 60 seconds",
    description:
      "First-session UX designed around the single action that separates retained users from churned. Measured before launch, not after.",
    icon: "activation",
  },
  {
    id: "retention",
    number: "05",
    title: "Retention & engagement",
    subtitle: "Fix the bucket before you fill it",
    description:
      "Cohort analysis, lifecycle emails, re-engagement - designed as a system before acquisition spend goes up. Stop the leak first.",
    icon: "retention",
  },
  {
    id: "analytics",
    number: "06",
    title: "Analytics & feedback",
    subtitle: "Know what's actually happening, not what you think",
    description:
      "North Star metric defined, event taxonomy live from day one, loops running. Decisions from data, not gut - under runway pressure.",
    icon: "analytics",
  },
];
