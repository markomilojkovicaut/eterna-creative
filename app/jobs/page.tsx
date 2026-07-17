import type { Metadata } from "next";
import { HEADER_OFFSET_CLASS } from "@/lib/layout-constants";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/layout/Section";

export const metadata: Metadata = {
  title: "Jobs | Eterna",
  description:
    "Join Eterna - help startup founders ship world-class Bubble.io products.",
};

export default function JobsPage() {
  return (
    <main className={HEADER_OFFSET_CLASS}>
      <Section>
        <h1 className="font-heading text-display-md text-text-heading">
          Careers
        </h1>
        <p className="mt-4 max-w-2xl text-body-md text-text-body">
          We are a remote-friendly team of Bubble builders, designers, and
          strategists obsessed with founder outcomes.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <Card hover className="p-6">
            <Badge variant="purple">Role type</Badge>
            <p className="mt-4 text-body-md text-text-body">
              Open roles will appear here once connected to your CMS.
            </p>
          </Card>
        </div>
      </Section>
    </main>
  );
}
