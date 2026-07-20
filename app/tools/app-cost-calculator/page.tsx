import type { Metadata } from "next";

import { AppCostCalculator } from "@/components/tools/AppCostCalculator";
import { DarkSectionBackdrop, SectionHeading } from "@/components/ui";
import {
  HEADER_OFFSET_CLASS,
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { cn } from "@/lib/utils";
import { sectionBackdropPresets } from "@/lib/section-backdrops";

export const metadata: Metadata = {
  title: "App cost calculator | Eterna",
  description:
    "Estimate app build scope and budget before you commit - then book a free Launch Plan for a firm flat price.",
};

export default function AppCostCalculatorPage() {
  return (
    <main className={HEADER_OFFSET_CLASS}>
      <section className="relative overflow-hidden bg-bg-base pb-section pt-section">
        <DarkSectionBackdrop {...sectionBackdropPresets.investment} />

        <div className={cn("relative z-10", LAYOUT_OUTER_CLASS)}>
          <div className={LAYOUT_INNER_CLASS}>
            <SectionHeading
              label="Tool"
              lines={[
                { text: "App cost", variant: "default" },
                { text: "calculator", variant: "gradient" },
              ]}
              subheading={
                <>
                  Ballpark your investment before booking a call. Adjust type,
                  complexity, AI, integrations, and roles - then get a range and
                  timeline.
                </>
              }
            />
            <div className="mt-12">
              <AppCostCalculator />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
