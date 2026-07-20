import type { Metadata } from "next";
import Link from "next/link";

import { ContentHubShell } from "@/components/layout/ContentHubShell";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { guides } from "@/lib/guides-content";

export const metadata: Metadata = {
  title: "Guides | Eterna",
  description:
    "Step-by-step guides for building, launching, and growing products you own.",
};

export default function GuidesPage() {
  return (
    <ContentHubShell
      label="Guides"
      lines={[{ text: "How-to playbooks", variant: "default" }]}
      subheading="In-depth guides for founders and builders - workflows, architecture, and launch checklists."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {guides.map((guide) => (
          <Link key={guide.slug} href={`/guides/${guide.slug}`} className="no-underline">
            <Card hover className="h-full p-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="purple">{guide.category}</Badge>
                <Badge variant="muted">{guide.difficulty}</Badge>
              </div>
              <h2 className="mt-4 font-heading text-heading-sm font-bold text-text-heading">
                {guide.title}
              </h2>
              <p className="mt-3 text-body-md text-text-body">{guide.excerpt}</p>
            </Card>
          </Link>
        ))}
      </div>
    </ContentHubShell>
  );
}
