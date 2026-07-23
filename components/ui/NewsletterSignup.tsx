"use client";

import { DarkSectionBackdrop } from "@/components/ui/DarkSectionBackdrop";
import { newsletterCopy } from "@/lib/footer";
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

        <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            name="email"
            placeholder={newsletterCopy.placeholder}
            className={cn(
              "min-w-0 flex-1 rounded-soft border border-border-dark bg-bg-base/60 px-4 py-2.5",
              "text-body-sm text-text-heading placeholder:text-text-muted",
              "outline-none transition-colors focus:border-border-strong"
            )}
            aria-label="Email address"
          />
          <button
            type="submit"
            className={cn(
              "inline-flex size-10 shrink-0 items-center justify-center rounded-soft",
              "border border-border-dark bg-bg-card/80 text-brand-purple-light",
              "transition-colors hover:border-border-strong hover:bg-bg-card"
            )}
            aria-label="Subscribe"
          >
            <span aria-hidden>→</span>
          </button>
        </form>

        <p className="mt-2.5 text-[13px] leading-relaxed text-text-sub">
          {newsletterCopy.subline}
        </p>
      </div>
    </div>
  );
}
