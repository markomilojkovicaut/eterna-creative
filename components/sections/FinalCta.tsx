import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { DarkSectionBackdrop } from "@/components/ui/DarkSectionBackdrop";
import { displayHeadingTypeClasses } from "@/lib/heading-styles";
import { sectionBackdropPresets } from "@/lib/section-backdrops";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { cn } from "@/lib/utils";

export function FinalCta() {
  return (
    <section className="relative bg-bg-base py-section">
      <div className={LAYOUT_OUTER_CLASS}>
        <div className={LAYOUT_INNER_CLASS}>
          <div className="relative overflow-hidden rounded-soft border border-border-dark">
            <DarkSectionBackdrop {...sectionBackdropPresets.challenges} />

            <div className="relative z-10 flex flex-col items-center px-6 py-[160px] text-center sm:px-10">
              <h2
                className={cn(
                  displayHeadingTypeClasses,
                  "text-display-lg font-bold text-text-heading sm:text-display-xl"
                )}
              >
                Ready to <span className="text-gradient-hero">start?</span>
              </h2>

              <p className="mt-5 max-w-[560px] text-body-md leading-relaxed text-text-sub sm:text-body-lg">
                Your product idea has a window - let&apos;s not waste it. Book a
                free 15-min strategy call and we&apos;ll show you how we would
                build it.
              </p>

              <CallToActionLink href="/book" className="mt-8">
                Book a strategy call
              </CallToActionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
