import Image from "next/image";
import Link from "next/link";

import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { HeroPhones } from "@/components/ui/HeroPhones";
import { LabelPill } from "@/components/ui/LabelPill";
import {
  displayHeadingTypeClasses,
  heroH1LineClasses,
} from "@/lib/heading-styles";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { heroProductRail } from "@/lib/products";
import { cn } from "@/lib/utils";

function ClutchStars({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)} aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-brand-pink-light"
        >
          <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 7.1-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

/**
 * Hero layout: left stack (pill → H1 → products rail → CTA),
 * right proof strip, phones bottom-left. No long subheading.
 */
export function Hero() {
  return (
    <section className="relative h-screen min-h-[840px] overflow-hidden bg-bg-base">
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        priority
        className="pointer-events-none -scale-x-100 object-cover object-left opacity-90"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-scanlines opacity-60"
        aria-hidden
      />

      <div
        className={cn(
          "relative z-10 flex h-full min-h-0 flex-col",
          LAYOUT_OUTER_CLASS
        )}
      >
        <div
          className={cn(
            "grid h-full min-h-0 grid-rows-[auto_1fr_auto] gap-8 pt-[120px]",
            "lg:grid-cols-12 lg:gap-x-8",
            LAYOUT_INNER_CLASS
          )}
        >
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:row-start-1 lg:items-start lg:text-left">
            <LabelPill>AI-native product studio</LabelPill>

            <h1 className={cn("mt-6 overflow-visible", displayHeadingTypeClasses)}>
              <span className={cn(heroH1LineClasses, "text-text-heading")}>
                Idea to revenue
              </span>
              <span
                className={cn(
                  heroH1LineClasses,
                  "mt-0.5 pb-1 text-gradient-hero"
                )}
              >
                the whole journey
              </span>
            </h1>

            <nav
              aria-label="Products"
              className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-body-sm font-medium text-text-sub lg:justify-start sm:text-body-md"
            >
              {heroProductRail.map((item, index) => (
                <span key={item.id} className="inline-flex items-center gap-2">
                  {index > 0 ? (
                    <span className="text-brand-purple-light/50" aria-hidden>
                      ·
                    </span>
                  ) : null}
                  <Link
                    href={item.href}
                    className="text-text-sub no-underline transition-colors hover:text-text-heading"
                  >
                    {item.label}
                  </Link>
                </span>
              ))}
            </nav>

            <CallToActionLink href="/book" className="mt-8">
              Book a strategy call
            </CallToActionLink>
          </div>

          <div className="flex flex-col items-center justify-start gap-3 text-center lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:items-end lg:justify-center lg:text-right">
            <div className="flex flex-wrap items-center justify-center gap-3 text-[16px] lg:justify-end">
              <span className="inline-flex items-center gap-2 text-text-heading">
                <span className="lowercase">bubble</span>
                <span className="relative top-px text-[14px] font-semibold uppercase tracking-wide text-brand-purple-light">
                  Partner
                </span>
              </span>
              <span className="h-4 w-px bg-border-strong" aria-hidden />
              <span className="flex items-center gap-2">
                <span className="font-semibold text-text-heading">Clutch</span>
                <ClutchStars />
              </span>
            </div>
          </div>

          <div className="flex w-full justify-center lg:col-span-7 lg:row-start-3 lg:justify-start lg:self-end">
            <HeroPhones />
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 z-[14] h-[140px] w-full bg-gradient-to-t from-bg-base to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 z-[15] h-[140px] w-full bg-gradient-to-t from-brand-purple-dark to-transparent opacity-50"
        aria-hidden
      />

      <div
        className="absolute bottom-0 left-0 z-20 h-1 w-full bg-hero-gradient"
        aria-hidden
      />
    </section>
  );
}
