import type { Metadata } from "next";

import { TemplateShopCard } from "@/components/templates/TemplateShopCard";
import { ContentHubShell } from "@/components/layout/ContentHubShell";
import { templates } from "@/lib/templates-content";

export const metadata: Metadata = {
  title: "Templates | Eterna",
  description:
    "Premium Bubble templates from Eterna — order ready-made landing pages and full apps, customize, and ship faster.",
};

export default function TemplatesPage() {
  return (
    <ContentHubShell
      label="Shop"
      lines={[{ text: "Templates", variant: "default" }]}
      subheading="Premium Bubble templates with an Order button — preview, buy, then customize with us if you want."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {templates.map((template) => (
          <TemplateShopCard key={template.slug} template={template} />
        ))}
      </div>
    </ContentHubShell>
  );
}
