import { DarkSectionBackdrop, SectionHeading } from "@/components/ui";
import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { SolutionCard } from "@/components/ui/SolutionCard";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { solutions } from "@/lib/solutions";
import { cn } from "@/lib/utils";

export function Solutions() {
  return (
    <section id="who-we-serve" className="relative overflow-hidden bg-bg-base pt-section">
      <DarkSectionBackdrop
        flipVertical
        objectPosition="bottom-right"
        gradient="section"
      />

      <div className={cn("relative z-10 pb-section", LAYOUT_OUTER_CLASS)}>
        <div className={LAYOUT_INNER_CLASS}>
          <SectionHeading
            split
            label="Who we serve"
            lines={[
              { text: "One studio for", variant: "default" },
              { text: "different clients", variant: "gradient" },
            ]}
            titleMaxWidth="max-w-[560px]"
            subheadingMaxWidth="max-w-[420px]"
            subheading="Different goals, different stages, same commitment. Tell us where you are and we'll show you how we build with you."
          />

          <div className="mt-14 overflow-hidden rounded-soft border border-border-dark lg:mt-16">
            <div className="grid divide-y divide-border-dark lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              {solutions.map((solution) => (
                <SolutionCard key={solution.id} solution={solution} />
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center lg:mt-12">
            <CallToActionLink href="/book">Book a strategy call</CallToActionLink>
          </div>
        </div>
      </div>

      <div className="relative z-20 h-1 w-full bg-hero-gradient" aria-hidden />
    </section>
  );
}
