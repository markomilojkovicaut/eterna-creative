import { toolStackItems, type ToolStackItem } from "@/lib/tool-stack";

/** Map case-study technology labels → tool stack entries (for logos). */
const techAliases: Record<string, string> = {
  bubble: "bubble",
  "bubble.io": "bubble",
  notion: "notion",
  brevo: "brevo",
  openai: "openai",
  "llm api": "openai",
  "openai llm api": "openai",
  vimeo: "vimeo",
  figma: "figma",
  posthog: "posthog",
  n8n: "n8n",
  claude: "claude",
  cursor: "cursor",
};

export function resolveTechnologyTools(names: string[]): ToolStackItem[] {
  const seen = new Set<string>();
  const out: ToolStackItem[] = [];

  for (const name of names) {
    const key = name.trim().toLowerCase();
    const id = techAliases[key] ?? toolStackItems.find(
      (t) => t.name.toLowerCase() === key || t.id === key
    )?.id;

    if (!id || seen.has(id)) {
      if (!id && !seen.has(key)) {
        seen.add(key);
        out.push({
          id: key.replace(/\s+/g, "-"),
          name,
          group: "platforms",
        });
      }
      continue;
    }

    const tool = toolStackItems.find((t) => t.id === id);
    if (tool) {
      seen.add(id);
      out.push(tool);
    }
  }

  return out;
}
