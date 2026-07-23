import type { Metadata } from "next";

import { ContentHubShell } from "@/components/layout/ContentHubShell";
import { PortfolioFilterGrid } from "@/components/portfolio/PortfolioFilterGrid";

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
      <PortfolioFilterGrid />
    </ContentHubShell>
  );
}
