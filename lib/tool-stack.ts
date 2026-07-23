export interface ToolStackItem {
  id: string;
  name: string;
  /** Omit or leave unset for placeholder monogram until asset is added. */
  logoSrc?: string;
  group: ToolStackGroupId;
}

export type ToolStackGroupId =
  | "ai-build"
  | "platforms"
  | "design-product"
  | "ship"
  | "growth";

export type ToolStackSectionId = "product-building" | "design-growth";

export interface ToolStackSubgroup {
  id: ToolStackGroupId;
  label: string;
}

export interface ToolStackSection {
  id: ToolStackSectionId;
  label: string;
  subgroups: ToolStackSubgroup[];
}

/** Two top-level sections for the homepage tool stack. */
export const toolStackSections: ToolStackSection[] = [
  {
    id: "product-building",
    label: "Product building tech",
    subgroups: [
      { id: "ai-build", label: "AI & build" },
      { id: "platforms", label: "Platforms" },
      { id: "ship", label: "Ship" },
    ],
  },
  {
    id: "design-growth",
    label: "Design and growth tech",
    subgroups: [
      { id: "design-product", label: "Design & product" },
      { id: "growth", label: "Growth" },
    ],
  },
];

/** @deprecated Prefer toolStackSections - kept for any leftover callers. */
export const toolStackGroups: {
  id: ToolStackGroupId;
  label: string;
}[] = [
  { id: "ai-build", label: "AI & build" },
  { id: "platforms", label: "Platforms" },
  { id: "design-product", label: "Design & product" },
  { id: "ship", label: "Ship" },
  { id: "growth", label: "Growth" },
];

/**
 * Studio tool set. New logos: drop white-on-transparent PNGs at
 * /public/images/tools/{id}.png and set logoSrc.
 */
export const toolStackItems: ToolStackItem[] = [
  // AI & build
  { id: "claude", name: "Claude", logoSrc: "/images/tools/claude.png", group: "ai-build" },
  { id: "cursor", name: "Cursor", logoSrc: "/images/tools/cursor.png", group: "ai-build" },
  { id: "nextjs", name: "Next.js", group: "ai-build" },
  { id: "typescript", name: "TypeScript", group: "ai-build" },
  { id: "tailwind", name: "Tailwind CSS", group: "ai-build" },

  // Platforms
  { id: "bubble", name: "Bubble", logoSrc: "/images/tools/bubble.png", group: "platforms" },
  { id: "xano", name: "Xano", group: "platforms" },
  { id: "n8n", name: "n8n", logoSrc: "/images/tools/n8n.png", group: "platforms" },
  { id: "openai", name: "OpenAI", logoSrc: "/images/tools/openai.png", group: "platforms" },
  { id: "vimeo", name: "Vimeo", logoSrc: "/images/tools/vimeo.png", group: "platforms" },

  // Design & product
  { id: "figma", name: "Figma", logoSrc: "/images/tools/figma.png", group: "design-product" },
  { id: "posthog", name: "PostHog", logoSrc: "/images/tools/posthog.png", group: "design-product" },
  { id: "notion", name: "Notion", logoSrc: "/images/tools/notion.png", group: "design-product" },

  // Ship
  { id: "github", name: "GitHub", group: "ship" },
  { id: "vercel", name: "Vercel", group: "ship" },
  { id: "railway", name: "Railway", group: "ship" },

  // Growth
  { id: "linkedin", name: "LinkedIn", logoSrc: "/images/tools/linkedin.png", group: "growth" },
  { id: "brevo", name: "Brevo", logoSrc: "/images/tools/brevo.png", group: "growth" },
  { id: "buffer", name: "Buffer", group: "growth" },
];

export function toolsByGroup(groupId: ToolStackGroupId): ToolStackItem[] {
  return toolStackItems.filter((tool) => tool.group === groupId);
}

export function toolsForSection(sectionId: ToolStackSectionId): ToolStackItem[] {
  const section = toolStackSections.find((s) => s.id === sectionId);
  if (!section) return [];
  const ids = new Set(section.subgroups.map((g) => g.id));
  return toolStackItems.filter((tool) => ids.has(tool.group));
}
