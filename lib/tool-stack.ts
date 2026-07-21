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
 * Studio tool set. New logos: drop PNGs at /images/tools/{id}.png and set logoSrc.
 */
export const toolStackItems: ToolStackItem[] = [
  // AI & build
  { id: "claude", name: "Claude", logoSrc: "/images/tools/claude.png", group: "ai-build" },
  { id: "cursor", name: "Cursor", logoSrc: "/images/tools/cursor.png", group: "ai-build" },
  { id: "nextjs", name: "Next.js", group: "ai-build" },
  { id: "tailwind", name: "Tailwind CSS", group: "ai-build" },

  // Platforms
  { id: "bubble", name: "Bubble", logoSrc: "/images/tools/bubble.png", group: "platforms" },
  { id: "xano", name: "Xano", group: "platforms" },
  { id: "n8n", name: "n8n", logoSrc: "/images/tools/n8n.png", group: "platforms" },

  // Design & product
  { id: "figma", name: "Figma", logoSrc: "/images/tools/figma.png", group: "design-product" },
  { id: "posthog", name: "PostHog", logoSrc: "/images/tools/posthog.png", group: "design-product" },
  { id: "notion", name: "Notion", logoSrc: "/images/tools/notion.png", group: "design-product" },

  // Ship
  { id: "github", name: "GitHub", group: "ship" },
  { id: "vercel", name: "Vercel", group: "ship" },

  // Growth
  { id: "linkedin", name: "LinkedIn", logoSrc: "/images/tools/linkedin.png", group: "growth" },
  { id: "brevo", name: "Brevo", logoSrc: "/images/tools/brevo.png", group: "growth" },
];

export function toolsByGroup(groupId: ToolStackGroupId): ToolStackItem[] {
  return toolStackItems.filter((tool) => tool.group === groupId);
}
