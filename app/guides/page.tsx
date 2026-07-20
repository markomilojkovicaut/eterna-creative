import type { Metadata } from "next";
import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui";
import { Section } from "@/components/layout/Section";
import { guides } from "@/lib/guides-content";
import { HEADER_OFFSET_CLASS } from "@/lib/layout-constants";

export const metadata: Metadata = {
  title: "Guides | Eterna",
  description:
    "Step-by-step guides for building, launching, and growing products you own.",
};

export default function GuidesPage() {
  return (
    <main className={HEADER_OFFSET_CLASS}>
      <Section>
        <SectionHeading
          label="Guides"
          lines={[{ text: "How-to playbooks", variant: "default" }]}
          subheading="In-depth guides for founders and builders - workflows, architecture, and launch checklists."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
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
      </Section>
    </main>
  );
}
