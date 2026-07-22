"use client";

import { cn } from "@/lib/utils";

export type ProductDeviceVariant = "application" | "automation" | "website";

/**
 * Subtle looping phone trio for the hero.
 * Gentle breathe + tiny explode (~4%). Never overlaps the CTA above.
 */
export function HeroPhones({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "group relative mx-auto aspect-[16/10] w-full max-w-md lg:max-w-lg",
        className
      )}
      aria-label="Product previews on three phones"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-[60%] h-[28%] w-[55%] -translate-x-1/2 rounded-full bg-brand-purple/15 blur-3xl"
        aria-hidden
      />

      <PhoneFrame
        className={cn(
          "absolute left-[10%] top-[14%] z-[1] w-[40%] origin-bottom",
          "-rotate-[6deg] animate-phone-float-left",
          "group-hover:-translate-x-[4%] group-hover:-translate-y-[2%] group-hover:-rotate-[8deg]",
          "transition-transform duration-700 ease-out motion-reduce:animate-none"
        )}
      >
        <PhoneScreenAutomations />
      </PhoneFrame>

      <PhoneFrame
        className={cn(
          "absolute right-[10%] top-[14%] z-[1] w-[40%] origin-bottom",
          "rotate-[6deg] animate-phone-float-right",
          "group-hover:translate-x-[4%] group-hover:-translate-y-[2%] group-hover:rotate-[8deg]",
          "transition-transform duration-700 ease-out motion-reduce:animate-none"
        )}
      >
        <PhoneScreenWebsite />
      </PhoneFrame>

      <PhoneFrame
        className={cn(
          "absolute left-1/2 top-[6%] z-[2] w-[44%] origin-bottom",
          "animate-phone-float-center",
          "group-hover:-translate-y-[3%] group-hover:scale-[1.03]",
          "transition-transform duration-700 ease-out motion-reduce:animate-none"
        )}
      >
        <PhoneScreenApplication />
      </PhoneFrame>
    </div>
  );
}

/** Static product device for cards / service heroes - no motion. */
export function ProductDevicePreview({
  variant,
  className,
  size = "md",
}: {
  variant: ProductDeviceVariant;
  className?: string;
  size?: "sm" | "md";
}) {
  return (
    <div
      className={cn(
        "relative",
        size === "sm" ? "w-[100px]" : "w-[140px]",
        className
      )}
    >
      <PhoneFrame className="relative w-full">
        {variant === "application" ? (
          <PhoneScreenApplication />
        ) : variant === "automation" ? (
          <PhoneScreenAutomations />
        ) : (
          <PhoneScreenWebsite />
        )}
      </PhoneFrame>
    </div>
  );
}

function PhoneFrame({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[1.25rem] border border-border-dark bg-bg-card shadow-[0_16px_40px_rgba(31,17,69,0.35)]",
        "ring-1 ring-brand-purple-light/10",
        className
      )}
      style={style}
    >
      <div className="relative aspect-[9/19] w-full bg-bg-base">
        <div
          className="absolute left-1/2 top-2 z-10 h-3.5 w-[28%] -translate-x-1/2 rounded-full bg-black"
          aria-hidden
        />
        <div className="absolute inset-0 pt-6">{children}</div>
      </div>
    </div>
  );
}

function PhoneScreenApplication() {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[#0a0a12] via-bg-base to-[#1F1145]/80 px-2.5 pb-2.5">
      <p className="text-[6px] font-semibold uppercase tracking-[0.14em] text-brand-purple-light">
        Application
      </p>
      <p className="mt-1 font-heading text-[10px] font-bold leading-tight text-text-heading">
        Live product dashboard
      </p>
      <div className="mt-2 grid grid-cols-2 gap-1">
        {["Users", "MRR", "Retention", "NPS"].map((label) => (
          <div
            key={label}
            className="rounded-soft border border-border-dark bg-bg-card/60 px-1.5 py-1"
          >
            <p className="text-[5px] uppercase tracking-wide text-text-muted">
              {label}
            </p>
            <p className="mt-0.5 font-heading text-[9px] font-bold text-text-heading">
              {label === "Users"
                ? "12.4k"
                : label === "MRR"
                  ? "$48k"
                  : label === "Retention"
                    ? "64%"
                    : "72"}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-2 flex-1 rounded-soft border border-border-dark bg-bg-card/40 p-1.5">
        <div className="flex h-full items-end gap-0.5">
          {[40, 55, 48, 70, 62, 85, 78].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-gradient-to-t from-brand-purple to-brand-pink opacity-80"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
      <div className="mt-1.5 rounded-soft bg-white px-2 py-1 text-center text-[7px] font-semibold text-bg-base">
        Open app
      </div>
    </div>
  );
}

function PhoneScreenAutomations() {
  return (
    <div className="flex h-full flex-col bg-[#07070c] px-2.5 pb-2.5">
      <p className="text-[6px] font-semibold uppercase tracking-[0.14em] text-brand-pink">
        Automations
      </p>
      <p className="mt-1 font-heading text-[10px] font-bold leading-tight text-text-heading">
        Agent workflow
      </p>
      <div className="mt-2 flex flex-1 flex-col gap-1">
        {[
          { t: "Trigger", d: "New lead in CRM" },
          { t: "AI agent", d: "Qualify + draft reply" },
          { t: "Action", d: "Push to Slack + CRM" },
        ].map((step, i) => (
          <div key={step.t} className="flex items-start gap-1">
            <span className="mt-1 size-1 shrink-0 rounded-full bg-brand-purple-light" />
            <div className="min-w-0 flex-1 rounded-soft border border-border-dark bg-bg-card/50 px-1.5 py-1">
              <p className="text-[5px] font-semibold uppercase tracking-wide text-brand-purple-light">
                {String(i + 1).padStart(2, "0")} · {step.t}
              </p>
              <p className="text-[7px] text-text-sub">{step.d}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-1.5 rounded-soft border border-brand-purple/40 bg-brand-purple/20 px-2 py-1 text-center text-[7px] font-semibold text-brand-purple-light">
        Running · 99.2% uptime
      </div>
    </div>
  );
}

function PhoneScreenWebsite() {
  return (
    <div className="flex h-full flex-col bg-bg-base px-2.5 pb-2.5">
      <p className="text-[6px] font-semibold uppercase tracking-[0.14em] text-brand-purple-light">
        Website
      </p>
      <div className="mt-1.5 flex-1 overflow-hidden rounded-soft border border-border-dark bg-gradient-to-br from-[#1F1145] via-bg-base to-bg-card p-2">
        <p className="font-heading text-[11px] font-bold leading-tight text-text-heading">
          Idea to <span className="text-gradient-hero">revenue</span>
        </p>
        <p className="mt-1 text-[6px] leading-snug text-text-sub">
          Convert visitors with a clear story and craft that scales.
        </p>
        <div className="mt-2 h-10 rounded-soft bg-gradient-to-r from-brand-purple/40 to-brand-pink/40" />
        <div className="mt-1.5 space-y-1">
          <div className="h-1 w-full rounded-full bg-white/10" />
          <div className="h-1 w-[80%] rounded-full bg-white/10" />
          <div className="h-1 w-[60%] rounded-full bg-white/10" />
        </div>
      </div>
      <div className="mt-1.5 rounded-soft bg-white px-2 py-1 text-center text-[7px] font-semibold text-bg-base">
        Book a strategy call
      </div>
    </div>
  );
}
