"use client";

import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { DarkSectionBackdrop } from "@/components/ui/DarkSectionBackdrop";
import { newsletterCopy } from "@/lib/footer";
import { ctaSizeClasses } from "@/lib/cta-styles";
import { sectionBackdropPresets } from "@/lib/section-backdrops";
import { cn } from "@/lib/utils";

export function NewsletterSignup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-full min-h-0 flex-col overflow-hidden rounded-soft border border-border-dark",
        className
      )}
    >
      <DarkSectionBackdrop {...sectionBackdropPresets.investment} />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-16 bg-gradient-to-b from-transparent to-bg-base sm:h-20"
        aria-hidden
      />

      <div className="relative z-10 flex h-full flex-col justify-center p-5 sm:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-purple-light">
          {newsletterCopy.eyebrow}
        </p>
        <h3 className="mt-1.5 font-heading text-heading-sm font-bold tracking-[-0.02em] text-text-heading">
          {newsletterCopy.title}
        </h3>

        <form
          className="mt-5 flex flex-col gap-2.5"
          onSubmit={(e) => e.preventDefault()}
        >
          <label className="sr-only" htmlFor="newsletter-email">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            placeholder={newsletterCopy.placeholder}
            className={cn(
              "min-h-[40px] w-full rounded-soft border border-border-dark bg-bg-base/70 px-4",
              "text-body-sm text-text-heading placeholder:text-text-muted",
              "outline-none transition-[border-color,box-shadow]",
              "focus:border-brand-purple-light/50 focus:shadow-[0_0_0_3px_rgba(184,184,255,0.18)]"
            )}
            autoComplete="email"
          />
          <button
            type="submit"
            className={cn(
              "inline-flex w-full items-center justify-center rounded-soft bg-text-heading font-semibold !text-bg-base",
              "transition-opacity hover:opacity-90",
              ctaSizeClasses.default
            )}
          >
            Subscribe
            <ArrowUpRight className="!text-bg-base" />
          </button>
        </form>

        <p className="mt-3 text-[13px] leading-relaxed text-text-sub">
          {newsletterCopy.subline}
        </p>
      </div>
    </div>
  );
}
