import {
  DarkSectionBackdrop,
  type DarkSectionBackdropProps,
} from "@/components/ui/DarkSectionBackdrop";
import { cn } from "@/lib/utils";

export interface BorderedDarkPanelProps {
  children: React.ReactNode;
  className?: string;
  /** 16px mobile / 40px desktop inner padding. */
  padded?: boolean;
  /** Optional contained backdrop inside the panel (Eterna system). */
  backdrop?: DarkSectionBackdropProps;
}

/**
 * Bordered dark-section container capped at content width.
 * Uses `border-border-dark` and `rounded-soft`.
 */
export function BorderedDarkPanel({
  children,
  className,
  padded = true,
  backdrop,
}: BorderedDarkPanelProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-content overflow-hidden rounded-soft border border-border-dark",
        padded && "p-4 lg:p-10",
        className
      )}
    >
      {backdrop && <DarkSectionBackdrop {...backdrop} />}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
