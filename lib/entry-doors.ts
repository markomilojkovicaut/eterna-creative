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
      "We validate it, plan it, and build it - from free Launch Plan to live product.",
    ctaLabel: "See the Blueprint",
    href: "/blueprint",
  },
  {
    id: "migrate",
    title: "I'm outgrowing no-code",
    description:
      "Migrate your Bubble app to custom code you own - cleanly, no rebuild chaos.",
    ctaLabel: "See how migration works",
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
  {
    id: "vibecode",
    title: "I need to rescue vibecode",
    description:
      "Turn AI-generated prototypes into production software you can ship and maintain.",
    ctaLabel: "See how rescue works",
    href: "/rescue-vibecode",
  },
];
