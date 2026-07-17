import type { Metadata } from "next";
import { HEADER_OFFSET_CLASS } from "@/lib/layout-constants";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Portfolio | Eterna",
  description:
    "Case studies from startups we helped launch on Bubble.io - from MVP to traction.",
};

export default function PortfolioPage() {
  return (
    <main className={HEADER_OFFSET_CLASS}>
      <Section>
        <h1 className="font-heading text-display-md text-text-heading">
          Portfolio
        </h1>
        <p className="mt-4 max-w-2xl text-body-md text-text-body">
          Real products we shipped with founders - marketplaces, SaaS tools, and
          mobile-first apps built on Bubble.io.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card hover glow="purple" className="p-6">
            <Badge variant="pink">Tag</Badge>
            <p className="mt-4 text-body-md text-text-body">
              Case studies will appear here once connected to your CMS.
            </p>
          </Card>
        </div>
      </Section>
    </main>
  );
}
