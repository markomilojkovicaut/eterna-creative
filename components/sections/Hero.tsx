"use client";

import Image from "next/image";
import Link from "next/link";

import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { HeroPhones, HeroPhones3D } from "@/components/ui/HeroPhones";
import { LabelPill } from "@/components/ui/LabelPill";
import { Reveal } from "@/components/ui/Reveal";
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

/** Centered hero with Fab-style load stagger. */
export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-bg-base">
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
          "relative z-10 flex min-h-screen flex-col",
          LAYOUT_OUTER_CLASS
        )}
      >
        <div
          className={cn(
            "flex flex-1 flex-col items-center px-0 pb-8 pt-[120px] text-center",
            LAYOUT_INNER_CLASS
          )}
        >
          <div className="flex w-full max-w-[760px] shrink-0 flex-col items-center">
            <Reveal immediate className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <LabelPill>AI-native product studio</LabelPill>
              <span className="hidden h-4 w-px bg-border-strong sm:block" aria-hidden />
              <span className="inline-flex items-center gap-2 text-[14px] sm:text-[15px]">
                <span className="font-semibold text-text-heading">Clutch</span>
                <ClutchStars />
              </span>
              <span className="hidden h-4 w-px bg-border-strong sm:block" aria-hidden />
              <Link
                href="/blog/best-use-of-ai-award"
                className="text-[14px] font-semibold text-brand-purple-light no-underline transition-colors hover:text-text-heading sm:text-[15px]"
              >
                Best Use of AI
              </Link>
            </Reveal>

            <Reveal immediate delay={90}>
              <h1
                className={cn(
                  "mt-6 overflow-visible",
                  displayHeadingTypeClasses
                )}
              >
                <span className={cn(heroH1LineClasses, "text-text-heading")}>
                  From idea to revenue.
                </span>
                <span
                  className={cn(
                    heroH1LineClasses,
                    "mt-0.5 pb-1 text-gradient-hero"
                  )}
                >
                  Built to compound, not just launch.
                </span>
              </h1>
            </Reveal>

            <Reveal immediate delay={160}>
              <nav
                aria-label="Products"
                className="mt-5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-body-sm font-medium text-text-sub sm:text-body-md"
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
            </Reveal>

            <Reveal immediate delay={230}>
              <CallToActionLink href="/book" className="relative z-20 mt-8">
                Book a strategy call
              </CallToActionLink>
            </Reveal>
          </div>

          <Reveal
            immediate
            delay={320}
            className="relative z-0 mt-[80px] flex w-full max-w-md flex-col items-center justify-end gap-10 lg:max-w-lg"
          >
            <HeroPhones className="w-full" />
            <HeroPhones3D className="w-full" />
          </Reveal>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 z-[14] h-[100px] w-full bg-gradient-to-t from-bg-base to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 z-[15] h-[100px] w-full bg-gradient-to-t from-brand-purple-dark to-transparent opacity-40"
        aria-hidden
      />

      <div
        className="absolute bottom-0 left-0 z-20 h-1 w-full bg-hero-gradient"
        aria-hidden
      />
    </section>
  );
}
