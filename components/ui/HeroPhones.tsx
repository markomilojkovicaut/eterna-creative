"use client";

import { cn } from "@/lib/utils";

/**
 * Three on-brand phone mockups. Idle: tight fan. Hover/focus: exploded spread.
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
      {/* Left — Automations */}
      <PhoneFrame
        className={cn(
          "absolute left-[8%] top-[12%] z-[1] w-[42%] origin-bottom",
          "-rotate-[14deg] transition-transform duration-500 ease-out",
          "group-hover:-translate-x-[18%] group-hover:-translate-y-[6%] group-hover:-rotate-[22deg]",
          "group-focus-within:-translate-x-[18%] group-focus-within:-translate-y-[6%] group-focus-within:-rotate-[22deg]",
          "motion-reduce:transition-none"
        )}
      >
        <PhoneScreenAutomations />
      </PhoneFrame>

      {/* Right — Website */}
      <PhoneFrame
        className={cn(
          "absolute right-[8%] top-[12%] z-[1] w-[42%] origin-bottom",
          "rotate-[14deg] transition-transform duration-500 ease-out",
          "group-hover:translate-x-[18%] group-hover:-translate-y-[6%] group-hover:rotate-[22deg]",
          "group-focus-within:translate-x-[18%] group-focus-within:-translate-y-[6%] group-focus-within:rotate-[22deg]",
          "motion-reduce:transition-none"
        )}
      >
        <PhoneScreenWebsite />
      </PhoneFrame>

      {/* Center — Application */}
      <PhoneFrame
        className={cn(
          "absolute left-1/2 top-[4%] z-[2] w-[46%] -translate-x-1/2 origin-bottom",
          "transition-transform duration-500 ease-out",
          "group-hover:-translate-y-[10%] group-hover:scale-[1.04]",
          "group-focus-within:-translate-y-[10%] group-focus-within:scale-[1.04]",
          "motion-reduce:transition-none"
        )}
      >
        <PhoneScreenApplication />
      </PhoneFrame>
    </div>
  );
}

function PhoneFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[1.35rem] border border-border-dark bg-bg-card shadow-[0_20px_50px_rgba(31,17,69,0.45)]",
        "ring-1 ring-brand-purple-light/10",
        className
      )}
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

function PhoneScreenApplication() {
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
            className="rounded-soft border border-border-dark bg-bg-card/60 px-1.5 py-1.5"
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
              className="flex-1 rounded-sm bg-gradient-to-t from-brand-purple to-brand-pink opacity-80"
              style={{ height: `${h}%` }}
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

function PhoneScreenAutomations() {
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
          <div key={step.t} className="flex items-start gap-1.5">
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

function PhoneScreenWebsite() {
  return (
    <div className="flex h-full flex-col bg-bg-base px-3 pb-3">
      <p className="text-[7px] font-semibold uppercase tracking-[0.14em] text-brand-purple-light">
        Website
      </p>
      <div className="mt-2 flex-1 overflow-hidden rounded-soft border border-border-dark bg-gradient-to-br from-[#1F1145] via-bg-base to-bg-card p-2.5">
        <p className="font-heading text-[12px] font-bold leading-tight text-text-heading">
          Idea to{" "}
          <span className="text-gradient-hero">revenue</span>
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
