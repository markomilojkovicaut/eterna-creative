import type { Metadata } from "next";

import { Section } from "@/components/layout/Section";
import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { HEADER_OFFSET_CLASS } from "@/lib/layout-constants";

export const metadata: Metadata = {
  title: "Careers | Eterna",
  description:
    "Careers at Eterna Creative - join a founder-led product studio when roles open.",
};

export default function CareersPage() {
  return (
    <main className={HEADER_OFFSET_CLASS}>
      <Section>
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
          Company
        </p>
        <h1 className="mt-3 font-heading text-display-md text-text-heading">
          Careers
        </h1>
        <p className="mt-4 max-w-2xl text-body-md text-text-body">
          No jobs active right now. Check back later, or reach out if you think
          you&apos;d be a strong fit for a senior product engineering role.
        </p>
        <CallToActionLink href="/book" className="mt-8">
          Book a strategy call
        </CallToActionLink>
      </Section>
    </main>
  );
}
