import type { Metadata } from "next";

import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { SectionHeading } from "@/components/ui";
import { Section } from "@/components/layout/Section";
import { caseStudies } from "@/lib/case-studies";
import { HEADER_OFFSET_CLASS } from "@/lib/layout-constants";

export const metadata: Metadata = {
  title: "Portfolio | Eterna",
  description:
    "Case studies from products we validated, designed, and built with founders - from MVP to traction.",
};

export default function PortfolioPage() {
  return (
    <main className={HEADER_OFFSET_CLASS}>
      <Section>
        <SectionHeading
          label="Case studies"
          lines={[
            { text: "Products we've", variant: "default" },
            { text: "built and launched", variant: "gradient" },
          ]}
          subheading={
            <>
              Real products, real founders, real outcomes - same methodology
              every time: validated, designed, and built to scale.
            </>
          }
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} study={study} />
          ))}
        </div>
      </Section>
    </main>
  );
}
