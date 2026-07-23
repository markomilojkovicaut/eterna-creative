import { QuoteIcon } from "@/components/ui/QuoteIcon";
import { Reveal } from "@/components/ui/Reveal";
import { ReviewAvatar } from "@/components/ui/ReviewAvatar";
import type { CaseStudyQuote as Quote } from "@/lib/case-studies";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";

/** Compact left-aligned pull quote (~50% width) to break full-bleed rhythm. */
export function CaseStudyPullQuote({ quote }: { quote: Quote }) {
  return (
    <section className="bg-bg-base py-10 sm:py-14">
      <div className={LAYOUT_OUTER_CLASS}>
        <div className={LAYOUT_INNER_CLASS}>
          <Reveal>
            <figure className="w-full max-w-xl border-l border-brand-purple-light/40 pl-5 lg:max-w-[50%] sm:pl-6">
              <QuoteIcon className="mb-3 !h-5 !w-5" />
              <blockquote className="font-heading text-[1.05rem] font-normal leading-[1.4] tracking-[-0.015em] text-text-heading sm:text-[1.2rem]">
                &ldquo;{quote.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-2.5">
                <ReviewAvatar
                  name={quote.name}
                  src={quote.avatarSrc}
                  size="sm"
                />
                <div>
                  <p className="font-heading text-body-sm font-bold text-text-heading">
                    {quote.name}
                  </p>
                  <p className="text-[12px] text-text-sub">{quote.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
