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
    title: "App Launch Blueprint session",
    description:
      "If there's a clear match, we move into the Blueprint phase. We go deep with you on features, user flows, integrations, and goals. This isn't a questionnaire - it's a structured working session where we extract everything needed to scope your product accurately and strategically.",
    tags: ["Feature mapping", "Requirements deep-dive", "Goals & metrics"],
    free: true,
  },
  {
    id: "blueprint",
    number: "03",
    phase: "Blueprint",
    title: "We build your App Launch Blueprint document",
    description:
      "This is our signature deliverable - and it's what separates us from every other studio. Before a single line of code, you get a complete strategic and technical plan. No ambiguity. No surprises.",
    tags: [
      "Strategic document",
      "Hero screen design",
      "Full app map",
      "€800 value - yours free",
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
