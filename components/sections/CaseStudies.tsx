import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { DarkSectionBackdrop, SectionHeading } from "@/components/ui";
import { SecondaryCtaLink } from "@/components/ui/SecondaryCtaLink";
import { caseStudies } from "@/lib/case-studies";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
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
                Check successful stories about powerful digital products we
                made. Across different industries, different founders, and
                different stages. All built with the same no-code-first
                approach.
              </>
            }
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>

          <div className="mt-section flex justify-center">
            <SecondaryCtaLink href="/portfolio">
              View all case studies
            </SecondaryCtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
