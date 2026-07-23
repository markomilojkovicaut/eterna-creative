import { Reveal } from "@/components/ui/Reveal";
import { SecondaryCtaLink } from "@/components/ui/SecondaryCtaLink";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";

export function CaseStudySoftCta() {
  return (
    <section className="bg-bg-base py-12">
      <div className={LAYOUT_OUTER_CLASS}>
        <div className={LAYOUT_INNER_CLASS}>
          <Reveal>
            <div className="rounded-soft border border-border-dark bg-bg-card/30 px-6 py-8 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:px-8">
              <div className="min-w-0 max-w-xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-purple-light">
                  Free tool
                </p>
                <p className="mt-2 font-heading text-heading-sm font-bold text-text-heading">
                  Have an idea in mind? Try our App Cost calculator
                </p>
                <p className="mt-2 text-body-sm text-text-sub">
                  Instant results · 100% free · Takes ~3 minutes
                </p>
              </div>
              <SecondaryCtaLink href="/calculator" className="mt-5 shrink-0 sm:mt-0">
                Open calculator
              </SecondaryCtaLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
