import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { DarkSectionBackdrop, SectionHeading } from "@/components/ui";
import { SecondaryCtaLink } from "@/components/ui/SecondaryCtaLink";
import { SectionPullQuote } from "@/components/ui/SectionPullQuote";
import { caseStudies } from "@/lib/case-studies";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { quoteInCaseStudies } from "@/lib/section-quotes";
import { cn } from "@/lib/utils";

export function CaseStudies() {
  return (
    <section className="relative overflow-hidden bg-bg-base py-section">
      <DarkSectionBackdrop objectPosition="right" gradient="section" />

      <div className={cn("relative z-10", LAYOUT_OUTER_CLASS)}>
        <div className={LAYOUT_INNER_CLASS}>
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

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>

          <SectionPullQuote
            quote={quoteInCaseStudies}
            className="mt-10 lg:mt-14"
          />

          <div className="mt-10 flex justify-center lg:mt-14">
            <SecondaryCtaLink href="/portfolio">
              View all case studies
            </SecondaryCtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
