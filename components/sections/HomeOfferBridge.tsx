import { Section } from "@/components/layout/Section";
import { LightEditorialDisplay } from "@/components/ui/LightEditorialDisplay";
import {
  lightEditorialAccentLineClasses,
  lightEditorialLineClasses,
} from "@/lib/heading-styles";
import { cn } from "@/lib/utils";

const failureModes = [
  {
    number: "01",
    title: "Validation theater",
    line: "Friends love it. Real buyers never show.",
  },
  {
    number: "02",
    title: "Build before distribution",
    line: "Product ships. Audience system does not.",
  },
  {
    number: "03",
    title: "Spend into a leak",
    line: "Ads rise. Retention was never designed.",
  },
] as const;

/**
 * Light bridge between Start here and Challenges.
 * Teases the failure modes the challenges section expands.
 */
export function HomeOfferBridge() {
  return (
    <Section background="surface" className="!py-16 text-text-ink-sub sm:!py-20">
      <div className="mx-auto max-w-[920px]">
        <div className="max-w-[560px]">
          <LightEditorialDisplay className="text-[28px] sm:text-[32px] lg:text-[32px]">
            <span className={lightEditorialLineClasses}>
              Before the engines,
            </span>{" "}
            <span className={lightEditorialAccentLineClasses}>
              name the failure modes.
            </span>
          </LightEditorialDisplay>
          <p className="mt-4 max-w-[440px] text-body-md leading-relaxed text-text-ink-sub">
            Most products stall for the same three reasons. We built the
            methodology around them - so your build does not repeat the pattern.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-border-muted sm:overflow-hidden sm:rounded-soft sm:border sm:border-border-muted">
          {failureModes.map((mode, index) => (
            <div
              key={mode.number}
              className={cn(
                "relative flex flex-col gap-3 rounded-soft border border-border-muted bg-bg-muted/60 p-5 sm:rounded-none sm:border-0 sm:bg-transparent sm:p-6",
                index === 0 && "sm:pl-6"
              )}
            >
              <span className="absolute left-0 top-5 hidden h-8 w-1 bg-brand-purple-light sm:block" aria-hidden />
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-purple">
                {mode.number}
              </p>
              <h3 className="font-heading text-[18px] font-bold leading-snug text-text-ink">
                {mode.title}
              </h3>
              <p className="text-body-sm leading-relaxed text-text-ink-sub">
                {mode.line}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
