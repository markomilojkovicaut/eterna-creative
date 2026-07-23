import { cn } from "@/lib/utils";

/**
 * Compact hero-style phone trio used for Product cost calculator previews
 * (Resources nav dropdown + homepage resources bento).
 */
export function CalculatorPhonePreview({
  className,
  maxWidthClass = "max-w-[200px]",
}: {
  className?: string;
  maxWidthClass?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-[16/9] w-full overflow-hidden rounded-soft border border-border-dark bg-bg-base",
        maxWidthClass,
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#1F1145]/80 via-bg-base to-bg-card" />
      <div className="relative flex h-full items-end justify-center gap-2 px-4 pb-3 pt-4">
        <div className="h-[78%] w-[28%] -rotate-[6deg] overflow-hidden rounded-[0.55rem] border border-border-dark bg-bg-card shadow-[0_8px_20px_rgba(31,17,69,0.4)]">
          <div className="flex h-full flex-col gap-0.5 bg-gradient-to-b from-[#0a0a12] to-[#1F1145]/70 p-1 pt-2">
            <div className="h-0.5 w-[50%] rounded-full bg-brand-purple-light/50" />
            <div className="mt-0.5 flex-1 rounded-sm bg-bg-base/40" />
            <div className="h-1 rounded-sm bg-white/90" />
          </div>
        </div>
        <div className="relative z-[1] h-[92%] w-[34%] overflow-hidden rounded-[0.6rem] border border-border-dark bg-bg-card shadow-[0_10px_24px_rgba(31,17,69,0.5)]">
          <div className="flex h-full flex-col bg-gradient-to-b from-bg-base via-[#12082a] to-[#1F1145] p-1.5 pt-2">
            <div className="mx-auto mb-1 h-1 w-[28%] rounded-full bg-black" />
            <p className="text-center text-[5px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
              Estimate
            </p>
            <p className="mt-0.5 text-center font-heading text-[9px] font-bold text-text-heading">
              €18–32k
            </p>
            <div className="mt-1 flex flex-1 items-end gap-0.5 px-0.5">
              {[40, 58, 48, 72, 64].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-[1px] bg-gradient-to-t from-brand-purple to-brand-pink opacity-85"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="mt-1 rounded-sm bg-white px-1 py-0.5 text-center text-[5px] font-semibold text-bg-base">
              3 min
            </div>
          </div>
        </div>
        <div className="h-[78%] w-[28%] rotate-[6deg] overflow-hidden rounded-[0.55rem] border border-border-dark bg-bg-card shadow-[0_8px_20px_rgba(31,17,69,0.4)]">
          <div className="flex h-full flex-col gap-0.5 bg-[#07070c] p-1 pt-2">
            <div className="h-0.5 w-[40%] rounded-full bg-brand-pink/60" />
            <div className="mt-0.5 space-y-0.5">
              <div className="h-1.5 rounded-sm border border-border-dark bg-bg-card/60" />
              <div className="h-1.5 rounded-sm border border-border-dark bg-bg-card/60" />
              <div className="h-1.5 rounded-sm border border-border-dark bg-bg-card/60" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
