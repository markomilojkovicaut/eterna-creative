import Link from "next/link";

import {
  DarkAccordion,
  DarkSectionBackdrop,
  SectionHeading,
  TeamMemberCard,
} from "@/components/ui";
import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { QuoteIcon } from "@/components/ui/QuoteIcon";
import {
  bubblePartnerHref,
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

              <div className="mt-6 flex flex-col gap-3 rounded-soft border border-border-dark bg-bg-card/40 p-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:p-5">
                <p className="text-body-sm text-text-sub">
                  Check our official Bubble partner profile
                </p>
                <Link
                  href={bubblePartnerHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "inline-flex shrink-0 items-center justify-center gap-2 rounded-soft border border-border-dark",
                    "bg-bg-card/60 px-5 py-[10px] text-body-md font-medium text-text-heading",
                    "no-underline transition-colors hover:border-border-strong hover:bg-bg-card/80"
                  )}
                >
                  Open
                  <ArrowUpRight className="!text-brand-purple-light" />
                </Link>
              </div>
            </div>

            <DarkAccordion items={founderPrinciples} />
          </div>

          <div className="mt-section grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:items-end lg:gap-5">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>

          {/* 120px gap; +4rem on lg accounts for Jovana's translate-y-16 stagger */}
          <div className="relative mt-section lg:mt-[calc(7.5rem+4rem)] overflow-hidden rounded-soft border border-border-dark bg-bg-card/30">
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
