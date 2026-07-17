import type { Metadata } from "next";
import { HEADER_OFFSET_CLASS } from "@/lib/layout-constants";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Templates | Eterna",
  description:
    "Starter Bubble.io templates to accelerate your MVP - free and premium options.",
};

export default function TemplatesPage() {
  return (
    <main className={HEADER_OFFSET_CLASS}>
      <Section>
        <h1 className="font-heading text-display-md text-text-heading">
          Templates
        </h1>
        <p className="mt-4 max-w-2xl text-body-md text-text-body">
          Pre-built Bubble foundations for common startup use cases - customize
          and ship in days, not months.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card hover glow="pink" className="p-6">
            <Badge variant="pink">Tag</Badge>
            <p className="mt-4 text-body-md text-text-body">
              Templates will appear here once connected to your CMS.
            </p>
          </Card>
        </div>
      </Section>
    </main>
  );
}
