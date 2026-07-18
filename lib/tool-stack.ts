export interface ToolStackItem {
  id: string;
  name: string;
  logoSrc?: string;
}

export const toolStackItems: ToolStackItem[] = [
  { id: "bubble", name: "Bubble", logoSrc: "/images/tools/bubble.png" },
  { id: "n8n", name: "n8n", logoSrc: "/images/tools/n8n.png" },
  { id: "claude", name: "Claude", logoSrc: "/images/tools/claude.png" },
  { id: "cursor", name: "Cursor", logoSrc: "/images/tools/cursor.png" },
  { id: "claude-code", name: "Claude Code", logoSrc: "/images/tools/claude.png" },
  { id: "figma", name: "Figma", logoSrc: "/images/tools/figma.png" },
  { id: "posthog", name: "Posthog", logoSrc: "/images/tools/posthog.png" },
  { id: "linkedin", name: "LinkedIn", logoSrc: "/images/tools/linkedin.png" },
  { id: "brevo", name: "Brevo", logoSrc: "/images/tools/brevo.png" },
  { id: "notion", name: "Notion", logoSrc: "/images/tools/notion.png" },
];
