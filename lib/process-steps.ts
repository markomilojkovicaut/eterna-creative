export interface ProcessStep {
  id: string;
  number: string;
  phase: string;
  title: string;
  description: string;
  tags: string[];
  free?: boolean;
  /** Guide/Blog-style gradient panel background. */
  gradientBackground?: boolean;
}

export const processSteps: ProcessStep[] = [
  {
    id: "discovery",
    number: "01",
    phase: "Discovery",
    title: "Book a free 15-minute strategy call",
    description:
      "No pitch decks. No sales pressure. This is a direct conversation with Marko to see if we're actually the right fit for each other - ambition, timeline, scope, and budget. If we're not the right match, we'll tell you and point you somewhere better. If we are, we move fast.",
    tags: ["15 minutes", "Direct with founder", "Free, no commitment"],
    free: true,
  },
  {
    id: "scoping",
    number: "02",
    phase: "Scoping",
    title: "Scope Session",
    description:
      "If there's a clear match, we move into a 1-hour deep dive. We go deep with you on features, user flows, integrations, and goals. This isn't a questionnaire - it's a structured working session where we extract everything needed to scope your product accurately and strategically.",
    tags: ["Feature mapping", "App/page map", "Goals & metrics"],
    free: true,
  },
  {
    id: "blueprint",
    number: "03",
    phase: "Blueprint",
    title: "We deliver your Blueprint",
    description:
      "Before any build commitment, you get a clear plan: app/page map, hero preview, flat investment, and timeline. No ambiguity on what you're buying. No surprises.",
    tags: [
      "Hero screen design",
      "Full app map",
      "Flat price & timeline",
    ],
    free: true,
  },
  {
    id: "build",
    number: "04",
    phase: "Build",
    title: "Kickoff, design & engineering - with full visibility",
    gradientBackground: true,
    description:
      "Once you approve the Blueprint and sign the contract, we kick off with a deep session to collect content, visuals, and brand direction. Then we build. Design and development run in parallel on smaller projects, or with a clickable prototype on larger ones. Either way, you're never left guessing.",
    tags: [
      "Notion client portal",
      "Weekly progress videos",
      "Mobile-optimized",
      "Scalable",
    ],
  },
  {
    id: "launch",
    number: "05",
    phase: "Launch",
    title: "Testing, launch, and going live",
    description:
      "When the build is complete, we run thorough testing across all features, devices, and browsers. Then we connect your domain, configure hosting, and hand you the keys. Launch is a milestone we plan for - not an afterthought.",
    tags: ["Full QA testing", "Domain & hosting setup", "Training and docs"],
  },
  {
    id: "post-launch",
    number: "06",
    phase: "Post-launch",
    title: "We stay close - iterations, growth, and beyond",
    description:
      "Launching is the start, not the end. We stay engaged with monthly iteration cycles - fixing, optimizing, and pivoting based on what real users are telling you. And because we're a full-spectrum studio, we don't stop at the product.",
    tags: [
      "Monthly iteration plans",
      "Marketing support",
      "Analytics",
      "Investor intros",
    ],
  },
];
