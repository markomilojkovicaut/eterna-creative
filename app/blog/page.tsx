import type { Metadata } from "next";
import { HEADER_OFFSET_CLASS } from "@/lib/layout-constants";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Blog | Eterna",
  description:
    "Practical insights for startup founders building and launching Bubble.io MVPs.",
};

export default function BlogPage() {
  return (
    <main className={HEADER_OFFSET_CLASS}>
      <Section>
        <h1 className="font-heading text-display-md text-text-heading">
          Blog
        </h1>
        <p className="mt-4 max-w-2xl text-body-md text-text-body">
          Founder-focused articles on no-code product development, launch
          strategy, and scaling on Bubble.io.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card hover className="p-6">
            <Badge variant="muted">Category</Badge>
            <p className="mt-4 text-body-md text-text-body">
              Posts will appear here once connected to your CMS.
            </p>
          </Card>
        </div>
      </Section>
    </main>
  );
}
