import {
  DarkAccordion,
  DarkSectionBackdrop,
  SectionHeading,
  TeamMemberCard,
} from "@/components/ui";
import { QuoteIcon } from "@/components/ui/QuoteIcon";
import {
  founderBio,
  founderPrinciples,
  studioPrincipleLabel,
  teamMembers,
} from "@/lib/founder-studio";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { cn } from "@/lib/utils";

export function FounderLedStudio() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-bg-base pt-section pb-section"
    >
      <DarkSectionBackdrop objectPosition="right" gradient="section" />

      <div className={cn("relative z-10", LAYOUT_OUTER_CLASS)}>
        <div className={LAYOUT_INNER_CLASS}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12 xl:gap-16">
            <div className="min-w-0 max-w-[400px]">
              <SectionHeading
                label="Founder-led studio"
                lines={[
                  { text: "We've been", variant: "default" },
                  { text: "on your side", variant: "gradient" },
                ]}
                titleMaxWidth="max-w-none"
              />

              <p className="mt-6 text-body-md leading-relaxed text-text-body">
                {founderBio}
              </p>

              <div className="mt-8">
                <p className="font-heading text-body-md font-bold text-text-heading">
                  Marko
                </p>
                <p className="text-body-sm text-text-sub">
                  Founder, Eterna Studio
                </p>
              </div>
            </div>

            <DarkAccordion items={founderPrinciples} />
          </div>

          <div className="mt-section grid w-full grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-6 lg:gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>

          <div className="relative mt-section overflow-hidden rounded-soft border border-border-dark bg-bg-card/30">
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-purple-dark via-bg-base to-bg-base"
              aria-hidden
            />

            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              <QuoteIcon className="mb-6" />
              <blockquote className="max-w-[880px] font-heading text-[1.25rem] font-normal leading-[1.35] tracking-[-0.02em] text-text-heading sm:text-[1.5rem] lg:text-[1.75rem]">
                &ldquo;The best products aren&apos;t built by the biggest teams
                or the deepest pockets. They&apos;re built by people who{" "}
                <span className="text-gradient-hero font-bold">validate</span>{" "}
                before they code,{" "}
                <span className="text-gradient-hero font-bold">ship</span> before
                they&apos;re ready,{" "}
                <span className="text-gradient-hero font-bold">obsess</span> about
                user experience and{" "}
                <span className="text-gradient-hero font-bold">iterate</span>{" "}
                faster than anyone else can react.&rdquo;
              </blockquote>
              <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
                {studioPrincipleLabel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
