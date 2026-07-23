import { QuoteIcon } from "@/components/ui/QuoteIcon";
import { Reveal } from "@/components/ui/Reveal";
import { ReviewAvatar } from "@/components/ui/ReviewAvatar";
import type { CaseStudyQuote as Quote } from "@/lib/case-studies";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";

export function CaseStudyQuote({ quote }: { quote: Quote }) {
  return (
    <section className="bg-bg-base pb-section">
      <div className={LAYOUT_OUTER_CLASS}>
        <div className={LAYOUT_INNER_CLASS}>
          <Reveal>
            <figure className="relative overflow-hidden rounded-soft border border-border-dark bg-bg-card/25 px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-purple-dark/35 via-transparent to-transparent"
                aria-hidden
              />
              <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
                <div className="min-w-0 max-w-[720px]">
                  <QuoteIcon className="mb-5" />
                  <blockquote className="font-heading text-[1.25rem] font-normal leading-[1.35] tracking-[-0.02em] text-text-heading sm:text-[1.5rem] lg:text-[1.625rem]">
                    &ldquo;{quote.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption className="flex shrink-0 items-center gap-3 lg:flex-col lg:items-end lg:text-right">
                  <ReviewAvatar
                    name={quote.name}
                    src={quote.avatarSrc}
                    size="md"
                  />
                  <div className="min-w-0">
                    <p className="font-heading text-body-sm font-bold text-text-heading">
                      {quote.name}
                    </p>
                    <p className="text-body-sm text-text-sub">{quote.role}</p>
                  </div>
                </figcaption>
              </div>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
