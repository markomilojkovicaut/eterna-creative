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
  title: "Product cost calculator | Eterna",
  description:
    "Estimate application, automation, or website investment before you commit - then book a free Launch Plan for a firm flat price.",
};

export default function CalculatorPage() {
  return (
    <main className={HEADER_OFFSET_CLASS}>
      <section className="relative overflow-hidden bg-bg-base pb-section pt-section">
        <DarkSectionBackdrop {...sectionBackdropPresets.investment} />

        <div className={cn("relative z-10", LAYOUT_OUTER_CLASS)}>
          <div className={LAYOUT_INNER_CLASS}>
            <SectionHeading
              label="Tool"
              lines={[
                { text: "Product cost", variant: "default" },
                { text: "calculator", variant: "gradient" },
              ]}
              subheading={
                <>
                  Pick Application, Automation, or Website - then tune the
                  inputs that matter for that product. Get a range and timeline
                  before the call.
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
