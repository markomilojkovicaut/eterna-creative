"use client";

import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { DarkSectionBackdrop, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/ui/Reveal";
import { SecondaryCtaLink } from "@/components/ui/SecondaryCtaLink";
import { SectionPullQuote } from "@/components/ui/SectionPullQuote";
import { caseStudies } from "@/lib/case-studies";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { quoteInCaseStudies } from "@/lib/section-quotes";
import { sectionBackdropPresets } from "@/lib/section-backdrops";
import { cn } from "@/lib/utils";

export function CaseStudies() {
  return (
    <section className="relative overflow-hidden bg-bg-base py-section">
      <DarkSectionBackdrop {...sectionBackdropPresets.challenges} />

      <div className={cn("relative z-10", LAYOUT_OUTER_CLASS)}>
        <div className={LAYOUT_INNER_CLASS}>
          <Reveal>
            <SectionHeading
              label="Case studies"
              lines={[
                { text: "Products we've", variant: "default" },
                { text: "built and launched", variant: "gradient" },
              ]}
              titleMaxWidth="max-w-[560px]"
              subheadingMaxWidth="max-w-[520px]"
              subheading={
                <>
                  Real products, real founders, real outcomes - across industries
                  and stages. Same methodology every time: validated, designed,
                  and built to scale.
                </>
              }
            />
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
            {caseStudies.map((study, index) => (
              <Reveal key={study.id} delay={80 + index * 90}>
                <CaseStudyCard study={study} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <SectionPullQuote
              quote={quoteInCaseStudies}
              className="mt-10 lg:mt-14"
            />
          </Reveal>

          <Reveal delay={160} className="mt-10 flex justify-center lg:mt-14">
            <SecondaryCtaLink href="/portfolio">
              View all case studies
            </SecondaryCtaLink>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
