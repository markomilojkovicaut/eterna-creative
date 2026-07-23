export type ResourceType =
  | "tool"
  | "template"
  | "guide"
  | "blog"
  | "product";

export type ResourceBentoVariant =
  | "default"
  | "gradient"
  | "gradient-purple"
  | "dark";

export interface ResourceItem {
  id: string;
  type: ResourceType;
  title: string;
  href: string;
  variant?: ResourceBentoVariant;
  /** Optional preview image (featured dark tiles). */
  imageSrc?: string;
  imageAlt?: string;
  /** Optional short description for larger tiles. */
  description?: string;
  /** Tailwind placement on the 4-column bento grid (lg+). */
  gridClass: string;
  minHeightClass?: string;
}

export const resourceItems: ResourceItem[] = [
  {
    id: "app-cost-calculator",
    type: "tool",
    title: "Product cost calculator",
    href: "/tools/app-cost-calculator",
    variant: "dark",
    imageSrc: "/images/resources/app-cost-calculator.png",
    imageAlt: "Product cost calculator preview",
    description:
      "Estimate build scope and budget before you commit to a full roadmap.",
    gridClass: "lg:col-span-2 lg:row-span-2",
    minHeightClass: "min-h-[220px] lg:min-h-0",
  },
  {
    id: "animated-landing",
    type: "template",
    title: "Animated landing page",
    href: "/templates/animated-landing-page",
    gridClass: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: "feature-matrix",
    type: "guide",
    title: "Feature prioritization matrix",
    href: "/guides/feature-prioritization-matrix",
    description:
      "Score ideas by impact and effort so you ship what matters first.",
    gridClass: "lg:col-span-1 lg:row-span-2",
    minHeightClass: "min-h-[200px] lg:min-h-0",
  },
  {
    id: "mvp-timeline",
    type: "blog",
    title: "MVP timeline: idea to launch",
    href: "/blog/no-code-mvp-timeline",
    gridClass: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: "nocode-vs-fullcode",
    type: "blog",
    title: "Custom vs no-code: when each wins",
    href: "/blog/no-code-vs-full-code",
    gridClass: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: "all-guides",
    type: "guide",
    title: "All guides",
    href: "/guides",
    variant: "gradient",
    description: "Step-by-step playbooks for founders and builders.",
    gridClass: "lg:col-span-2 lg:row-span-1",
    minHeightClass: "min-h-[180px]",
  },
  {
    id: "launch-checklist",
    type: "guide",
    title: "MVP launch checklist",
    href: "/guides/mvp-launch-checklist",
    gridClass: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: "scope-estimator",
    type: "tool",
    title: "App scope estimator",
    href: "/tools/bubble-scope-estimator",
    gridClass: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: "hire-agency",
    type: "blog",
    title: "When to hire a dev agency",
    href: "/blog/when-to-hire-dev-agency",
    gridClass: "lg:col-span-1 lg:row-span-1",
  },
  {
    id: "all-blog",
    type: "blog",
    title: "All blog posts",
    href: "/blog",
    variant: "gradient",
    description: "Founder-focused articles on building and shipping products.",
    gridClass: "lg:col-span-2 lg:row-span-1",
    minHeightClass: "min-h-[168px]",
  },
];

export const resourceTypeLabels: Record<ResourceType, string> = {
  tool: "Tool",
  template: "Template",
  guide: "Guide",
  blog: "Blog",
  product: "Product",
};
