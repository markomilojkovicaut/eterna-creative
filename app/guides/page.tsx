import type { Metadata } from "next";
import { HEADER_OFFSET_CLASS } from "@/lib/layout-constants";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Guides | Eterna",
  description:
    "Step-by-step guides for building, launching, and growing Bubble.io products.",
};

export default function GuidesPage() {
  return (
    <main className={HEADER_OFFSET_CLASS}>
      <Section>
        <h1 className="font-heading text-display-md text-text-heading">
          Guides
        </h1>
        <p className="mt-4 max-w-2xl text-body-md text-text-body">
          In-depth how-tos for founders and builders - workflows, architecture,
          and launch checklists for Bubble.io.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card hover className="p-6">
            <Badge variant="purple">Difficulty</Badge>
            <p className="mt-4 text-body-md text-text-body">
              Guides will appear here once connected to your CMS.
            </p>
          </Card>
        </div>
      </Section>
    </main>
  );
}
