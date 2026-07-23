import type { Metadata } from "next";

import { ContentHubShell } from "@/components/layout/ContentHubShell";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Portfolio | Eterna",
  description:
    "Case studies from products we validated, designed, and built with founders - from MVP to traction.",
};

export default function PortfolioPage() {
  return (
    <ContentHubShell
      label="Case studies"
      lines={[
        { text: "Products we've", variant: "default" },
        { text: "built and launched", variant: "gradient" },
      ]}
      subheading={
        <>
          Real products, real founders, real outcomes - same Eterna Method every
          time: validated, designed, and built to scale.
        </>
      }
    >
      <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>
    </ContentHubShell>
  );
}
