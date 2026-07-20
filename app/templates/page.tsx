import type { Metadata } from "next";
import Link from "next/link";

import { ContentHubShell } from "@/components/layout/ContentHubShell";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { templates } from "@/lib/templates-content";

export const metadata: Metadata = {
  title: "Templates | Eterna",
  description:
    "Starter templates to accelerate your MVP - customize and ship faster.",
};

export default function TemplatesPage() {
  return (
    <ContentHubShell
      label="Templates"
      lines={[{ text: "Ship faster", variant: "default" }]}
      subheading="Pre-built foundations for common startup use cases - customize and launch in days, not months."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <Link
            key={template.slug}
            href={`/templates/${template.slug}`}
            className="no-underline"
          >
            <Card hover glow="pink" className="h-full p-6">
              <div className="flex flex-wrap gap-2">
                {template.tags.map((tag) => (
                  <Badge key={tag} variant="pink">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h2 className="mt-4 font-heading text-heading-sm font-bold text-text-heading">
                {template.title}
              </h2>
              <p className="mt-3 text-body-md text-text-body">
                {template.description}
              </p>
            </Card>
          </Link>
        ))}
      </div>
    </ContentHubShell>
  );
}
