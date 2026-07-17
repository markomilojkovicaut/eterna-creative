import { cn } from "@/lib/utils";
import type { FounderJourneyPhase } from "@/lib/founder-journey";

/** Shared x-position: line and nodes center on this point. */
export const TIMELINE_RAIL_LEFT = "left-3";

const haloClasses: Record<FounderJourneyPhase, string> = {
  neutral: "bg-text-heading/15",
  challenge: "bg-brand-danger/20",
};

const dotClasses: Record<FounderJourneyPhase, string> = {
  neutral: "size-2 bg-text-heading",
  challenge: "size-2.5 bg-brand-danger shadow-[0_0_10px_rgba(232,83,83,0.45)]",
};

/** Rail node: halo ring and dot centered on the timeline line. */
export function TimelineMarker({
  phase,
  className,
}: {
  phase: FounderJourneyPhase;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "absolute top-0 flex size-5 -translate-x-1/2 items-center justify-center",
        TIMELINE_RAIL_LEFT,
        className
      )}
      aria-hidden
    >
      <span
        className={cn("absolute inset-0 rounded-full", haloClasses[phase])}
      />
      <span className={cn("relative z-10 rounded-full", dotClasses[phase])} />
    </span>
  );
}
