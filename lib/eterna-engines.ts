export interface EternaEngine {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  /** Extra explanatory blocks shown in the popup. */
  details: string[];
  /** Short outcome line under the details. */
  outcome: string;
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
    details: [
      "We run discovery interviews and competitive teardown so the problem is real, not assumed.",
      "You leave with a clear ICP, positioning draft, and a go / no-go recommendation before build spend.",
      "Validation is scored against willingness to pay and distribution access - not vanity interest.",
    ],
    outcome:
      "Outcome: a locked strategy brief you can build against - or walk away from without sunk cost.",
    icon: "research",
  },
  {
    id: "architecture",
    number: "02",
    title: "Product engineering",
    subtitle: "Design for your stage, not a hypothetical future",
    highlight: true,
    description:
      "Data model, tech stack, design craft, and scope locked before build starts. Stage-appropriate - not over-engineered, not under-built.",
    details: [
      "Architecture matches your stage: shippable in weeks, extensible without a rewrite six months later.",
      "UX and UI are designed around the one activation moment that proves value, not a kitchen-sink feature list.",
      "Scope is cut ruthlessly so engineering time goes to the path to revenue, not speculative platforms.",
    ],
    outcome:
      "Outcome: a build plan with stack, screens, and milestones that survive contact with real users.",
    icon: "architecture",
  },
  {
    id: "acquisition",
    number: "03",
    title: "User acquisition",
    subtitle: "Build the audience before you build the product",
    description:
      "Distribution is the moat. Pre-MVP audience building, channel testing, and the acquisition systems that compound over time.",
    details: [
      "We identify 1-2 channels you can actually own - content, community, partnerships, or paid - and test them early.",
      "Messaging and offers are validated with the same ICP from Engine 01 before ads or launch noise.",
      "Acquisition systems are instrumented so you know cost per activated user, not just clicks.",
    ],
    outcome:
      "Outcome: a repeatable acquisition loop you can scale after retention is proven.",
    icon: "acquisition",
  },
  {
    id: "activation",
    number: "04",
    title: "Activation & onboarding",
    subtitle: "Get users to the AHA in under 60 seconds",
    description:
      "First-session UX designed around the single action that separates retained users from churned. Measured before launch, not after.",
    details: [
      "Onboarding is designed as a product, not a tutorial dump - one path to the AHA moment.",
      "We define the activation event and instrument it before launch so week-one silence is diagnosable.",
      "Friction, empty states, and first-value moments are reviewed with real users, not assumed.",
    ],
    outcome:
      "Outcome: users who reach value fast enough to come back without being begged.",
    icon: "activation",
  },
  {
    id: "retention",
    number: "05",
    title: "Retention & engagement",
    subtitle: "Fix the bucket before you fill it",
    description:
      "Cohort analysis, lifecycle emails, re-engagement - designed as a system before acquisition spend goes up. Stop the leak first.",
    details: [
      "Cohorts tell you who stays and why they leave - before you increase spend into a leaky bucket.",
      "Lifecycle messaging and in-product loops are designed around habits, not blast campaigns.",
      "We prioritize the few retention levers that move your North Star, not a laundry list of features.",
    ],
    outcome:
      "Outcome: a product people return to - so growth spend compounds instead of evaporates.",
    icon: "retention",
  },
  {
    id: "analytics",
    number: "06",
    title: "Analytics & feedback",
    subtitle: "Know what's actually happening, not what you think",
    description:
      "North Star metric defined, event taxonomy live from day one, loops running. Decisions from data, not gut - under runway pressure.",
    details: [
      "Event taxonomy and dashboards ship with the product - not as a post-launch cleanup project.",
      "North Star and input metrics are agreed so the team argues from the same scoreboard.",
      "Feedback loops (support, interviews, product analytics) feed the next build cycle every sprint.",
    ],
    outcome:
      "Outcome: decisions you can defend when runway is short and opinions are loud.",
    icon: "analytics",
  },
];
