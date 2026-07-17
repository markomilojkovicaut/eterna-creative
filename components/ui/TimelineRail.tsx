import { TIMELINE_RAIL_LEFT } from "@/components/ui/TimelineMarker";
import { cn } from "@/lib/utils";

const variantClasses = {
  solid: "bg-border-dark",
  "challenge-gradient":
    "bg-gradient-to-b from-border-dark from-0% via-border-dark via-[30%] to-brand-danger/50 to-[68%] via-border-dark via-[78%] to-border-dark to-100%",
} as const;

export type TimelineRailVariant = keyof typeof variantClasses;

export interface TimelineRailProps {
  variant?: TimelineRailVariant;
  className?: string;
}

/** Vertical timeline line aligned with `TimelineMarker` circles. */
export function TimelineRail({
  variant = "solid",
  className,
}: TimelineRailProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute top-0 bottom-0 w-px -translate-x-1/2",
        variantClasses[variant],
        TIMELINE_RAIL_LEFT,
        className
      )}
      aria-hidden
    />
  );
}
