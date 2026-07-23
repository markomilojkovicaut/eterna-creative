import { cn } from "@/lib/utils";

/**
 * Compact single-phone calculator preview for Resources nav + homepage bento.
 */
export function CalculatorPhonePreview({
  className,
  maxWidthClass = "max-w-[160px]",
}: {
  className?: string;
  maxWidthClass?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-soft border border-border-dark bg-bg-base",
        maxWidthClass,
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#1F1145]/80 via-bg-base to-bg-card" />
      <div className="relative flex h-full items-end justify-center px-3 pb-3 pt-3 sm:px-4">
        <div className="relative z-[1] h-full w-[min(72%,7.5rem)] overflow-hidden rounded-[0.75rem] border border-border-dark bg-bg-card shadow-[0_10px_24px_rgba(31,17,69,0.5)]">
          <div className="flex h-full flex-col bg-gradient-to-b from-bg-base via-[#12082a] to-[#1F1145] p-2 pt-2.5">
            <div className="mx-auto mb-1.5 h-1 w-[30%] rounded-full bg-black" />
            <p className="text-center text-[6px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
              Estimate
            </p>
            <p className="mt-1 text-center font-heading text-[11px] font-bold text-text-heading">
              €18–32k
            </p>
            <div className="mt-2 flex flex-1 items-end gap-0.5 px-0.5">
              {[40, 58, 48, 72, 64].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-[1px] bg-gradient-to-t from-brand-purple to-brand-pink opacity-85"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="mt-2 rounded-sm bg-white px-1 py-1 text-center text-[6px] font-semibold text-bg-base">
              3 min
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
