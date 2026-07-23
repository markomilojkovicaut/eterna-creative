export interface EntryDoor {
  id: string;
  title: string;
  description: string;
  ctaLabel: string;
  href: string;
}

export const entryDoors: EntryDoor[] = [
  {
    id: "idea",
    title: "I have an idea",
    description:
      "We validate it, plan it, and build it - from free Blueprint to live product.",
    ctaLabel: "See the Blueprint",
    href: "/blueprint",
  },
  {
    id: "rescue",
    title: "I'm stuck on no-code or vibecode",
    description:
      "Migrate Bubble apps or rescue AI-generated prototypes into production code you own - cleanly, without rebuild chaos.",
    ctaLabel: "See how rescue works",
    href: "/migration",
  },
  {
    id: "automate",
    title: "I'm running a business",
    description:
      "AI automations and agents (n8n) that cut manual work and run themselves.",
    ctaLabel: "Automate a workflow",
    href: "/services/automation",
  },
];
