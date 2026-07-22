"use client";

import { SectionHeading } from "@/components/ui";
import { DarkFaqAccordion } from "@/components/ui/DarkFaqAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { faqItems } from "@/lib/faq";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { cn } from "@/lib/utils";

export function Faq() {
  return (
    <section className="relative bg-bg-base py-section">
      <div className={cn("relative z-10", LAYOUT_OUTER_CLASS)}>
        <div className={LAYOUT_INNER_CLASS}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            <Reveal>
              <SectionHeading
                label="Questions"
                lines={[
                  { text: "What founders", variant: "default" },
                  { text: "ask us the most", variant: "gradient" },
                ]}
                titleMaxWidth="max-w-[520px]"
              />
            </Reveal>

            <Reveal delay={100}>
              <DarkFaqAccordion items={faqItems} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
