"use client";

import { cn } from "@/lib/utils";

export type ProductDeviceVariant = "application" | "automation" | "website";

/**
 * Three on-brand phones with a continuous explode/float loop.
 * Hover deepens the spread. Used on hero; single devices reuse screens elsewhere.
 */
export function HeroPhones({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "group relative mx-auto aspect-[16/11] w-full max-w-xl lg:max-w-2xl",
        className
      )}
      tabIndex={0}
      aria-label="Product previews on three phones"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-[55%] h-[40%] w-[70%] -translate-x-1/2 rounded-full bg-brand-purple/25 blur-3xl animate-phone-screen-pulse"
        aria-hidden
      />

      <PhoneFrame
        className={cn(
          "absolute left-[8%] top-[12%] z-[1] w-[42%] origin-bottom",
          "animate-phone-float-left",
          "group-hover:[animation-play-state:paused] group-hover:-translate-x-[26%] group-hover:-translate-y-[14%] group-hover:-rotate-[30deg]",
          "group-focus-within:[animation-play-state:paused] group-focus-within:-translate-x-[26%] group-focus-within:-translate-y-[14%] group-focus-within:-rotate-[30deg]",
          "transition-transform duration-500 ease-out motion-reduce:animate-none motion-reduce:transition-none"
        )}
        style={{ animationDelay: "0s" }}
      >
        <PhoneScreenAutomations live />
      </PhoneFrame>

      <PhoneFrame
        className={cn(
          "absolute right-[8%] top-[12%] z-[1] w-[42%] origin-bottom",
          "animate-phone-float-right",
          "group-hover:[animation-play-state:paused] group-hover:translate-x-[26%] group-hover:-translate-y-[14%] group-hover:rotate-[30deg]",
          "group-focus-within:[animation-play-state:paused] group-focus-within:translate-x-[26%] group-focus-within:-translate-y-[14%] group-focus-within:rotate-[30deg]",
          "transition-transform duration-500 ease-out motion-reduce:animate-none motion-reduce:transition-none"
        )}
        style={{ animationDelay: "0.35s" }}
      >
        <PhoneScreenWebsite live />
      </PhoneFrame>

      <PhoneFrame
        className={cn(
          "absolute left-1/2 top-[4%] z-[2] w-[46%] origin-bottom",
          "animate-phone-float-center",
          "group-hover:[animation-play-state:paused] group-hover:-translate-y-[18%] group-hover:scale-[1.1]",
          "group-focus-within:[animation-play-state:paused] group-focus-within:-translate-y-[18%] group-focus-within:scale-[1.1]",
          "transition-transform duration-500 ease-out motion-reduce:animate-none motion-reduce:transition-none"
        )}
        style={{ animationDelay: "0.7s" }}
      >
        <PhoneScreenApplication live />
      </PhoneFrame>
    </div>
  );
}

/** Single product device for cards / service heroes. */
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
        "relative mx-auto",
        size === "sm" ? "w-[120px]" : "w-[160px]",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-x-2 bottom-0 h-1/3 rounded-full bg-brand-purple/30 blur-2xl animate-phone-screen-pulse"
        aria-hidden
      />
      <PhoneFrame className="relative w-full animate-phone-float-solo motion-reduce:animate-none">
        {variant === "application" ? (
          <PhoneScreenApplication live />
        ) : variant === "automation" ? (
          <PhoneScreenAutomations live />
        ) : (
          <PhoneScreenWebsite live />
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
        "overflow-hidden rounded-[1.35rem] border border-border-dark bg-bg-card shadow-[0_20px_50px_rgba(31,17,69,0.45)]",
        "ring-1 ring-brand-purple-light/15",
        className
      )}
      style={style}
    >
      <div className="relative aspect-[9/19] w-full bg-bg-base">
        <div
          className="absolute left-1/2 top-2 z-10 h-4 w-[28%] -translate-x-1/2 rounded-full bg-black"
          aria-hidden
        />
        <div className="absolute inset-0 pt-7">{children}</div>
      </div>
    </div>
  );
}

function PhoneScreenApplication({ live }: { live?: boolean }) {
  return (
    <div className="flex h-full flex-col bg-gradient-to-b from-[#0a0a12] via-bg-base to-[#1F1145]/80 px-3 pb-3">
      <p className="text-[7px] font-semibold uppercase tracking-[0.14em] text-brand-purple-light">
        Application
      </p>
      <p className="mt-1 font-heading text-[11px] font-bold leading-tight text-text-heading">
        Live product dashboard
      </p>
      <div className="mt-3 grid grid-cols-2 gap-1.5">
        {["Users", "MRR", "Retention", "NPS"].map((label) => (
          <div
            key={label}
            className={cn(
              "rounded-soft border border-border-dark bg-bg-card/60 px-1.5 py-1.5",
              live && "animate-phone-screen-pulse"
            )}
          >
            <p className="text-[6px] uppercase tracking-wide text-text-muted">
              {label}
            </p>
            <p className="mt-0.5 font-heading text-[10px] font-bold text-text-heading">
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
      <div className="mt-3 flex-1 rounded-soft border border-border-dark bg-bg-card/40 p-2">
        <div className="flex h-full items-end gap-1">
          {[40, 55, 48, 70, 62, 85, 78].map((h, i) => (
            <div
              key={i}
              className={cn(
                "flex-1 origin-bottom rounded-sm bg-gradient-to-t from-brand-purple to-brand-pink opacity-80",
                live && "animate-phone-bar-rise"
              )}
              style={{
                height: `${h}%`,
                animationDelay: live ? `${i * 0.12}s` : undefined,
              }}
            />
          ))}
        </div>
      </div>
      <div className="mt-2 rounded-soft bg-white px-2 py-1.5 text-center text-[8px] font-semibold text-bg-base">
        Open app
      </div>
    </div>
  );
}

function PhoneScreenAutomations({ live }: { live?: boolean }) {
  return (
    <div className="flex h-full flex-col bg-[#07070c] px-3 pb-3">
      <p className="text-[7px] font-semibold uppercase tracking-[0.14em] text-brand-pink">
        Automations
      </p>
      <p className="mt-1 font-heading text-[11px] font-bold leading-tight text-text-heading">
        Agent workflow
      </p>
      <div className="mt-3 flex flex-1 flex-col gap-1.5">
        {[
          { t: "Trigger", d: "New lead in CRM" },
          { t: "AI agent", d: "Qualify + draft reply" },
          { t: "Action", d: "Push to Slack + CRM" },
        ].map((step, i) => (
          <div
            key={step.t}
            className={cn(
              "flex items-start gap-1.5",
              live && "animate-phone-screen-pulse"
            )}
            style={{ animationDelay: live ? `${i * 0.4}s` : undefined }}
          >
            <span className="mt-1 size-1.5 shrink-0 rounded-full bg-brand-purple-light" />
            <div className="min-w-0 flex-1 rounded-soft border border-border-dark bg-bg-card/50 px-1.5 py-1">
              <p className="text-[6px] font-semibold uppercase tracking-wide text-brand-purple-light">
                {String(i + 1).padStart(2, "0")} · {step.t}
              </p>
              <p className="text-[8px] text-text-sub">{step.d}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 rounded-soft border border-brand-purple/40 bg-brand-purple/20 px-2 py-1.5 text-center text-[8px] font-semibold text-brand-purple-light">
        Running · 99.2% uptime
      </div>
    </div>
  );
}

function PhoneScreenWebsite({ live }: { live?: boolean }) {
  return (
    <div className="flex h-full flex-col bg-bg-base px-3 pb-3">
      <p className="text-[7px] font-semibold uppercase tracking-[0.14em] text-brand-purple-light">
        Website
      </p>
      <div
        className={cn(
          "mt-2 flex-1 overflow-hidden rounded-soft border border-border-dark bg-gradient-to-br from-[#1F1145] via-bg-base to-bg-card p-2.5",
          live && "animate-phone-screen-pulse"
        )}
      >
        <p className="font-heading text-[12px] font-bold leading-tight text-text-heading">
          Idea to <span className="text-gradient-hero">revenue</span>
        </p>
        <p className="mt-1 text-[7px] leading-snug text-text-sub">
          Convert visitors with a clear story and craft that scales.
        </p>
        <div className="mt-3 h-12 rounded-soft bg-gradient-to-r from-brand-purple/40 to-brand-pink/40" />
        <div className="mt-2 space-y-1">
          <div className="h-1.5 w-full rounded-full bg-white/10" />
          <div className="h-1.5 w-[80%] rounded-full bg-white/10" />
          <div className="h-1.5 w-[60%] rounded-full bg-white/10" />
        </div>
      </div>
      <div className="mt-2 rounded-soft bg-white px-2 py-1.5 text-center text-[8px] font-semibold text-bg-base">
        Book a strategy call
      </div>
    </div>
  );
}
