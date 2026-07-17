import Image from "next/image";

import { cn } from "@/lib/utils";

const gradientClasses = {
  none: "",
  section:
    "absolute inset-0 bg-gradient-to-r from-bg-base/20 via-transparent to-bg-base/80",
  panel:
    "absolute inset-0 bg-gradient-to-r from-bg-base/30 via-transparent to-bg-base/70",
} as const;

const objectPositionClasses = {
  left: "object-left",
  right: "object-right",
  "bottom-right": "object-right object-bottom",
} as const;

export type DarkSectionBackdropGradient = keyof typeof gradientClasses;

export interface DarkSectionBackdropProps {
  /** Flip hero-bg horizontally (Eterna system, partners panel). */
  flip?: boolean;
  /** Flip hero-bg vertically (Services section). */
  flipVertical?: boolean;
  objectPosition?: keyof typeof objectPositionClasses;
  gradient?: DarkSectionBackdropGradient;
  className?: string;
}

/**
 * Shared dark-section background: hero-bg image, scanlines, optional vignette gradient.
 * Parent must be `relative` with `overflow-hidden` when used inside a panel.
 */
export function DarkSectionBackdrop({
  flip = false,
  flipVertical = false,
  objectPosition = "left",
  gradient = "section",
  className,
}: DarkSectionBackdropProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
      aria-hidden
    >
      <Image
        src="/images/hero-bg.png"
        alt=""
        fill
        className={cn(
          "object-cover opacity-90",
          flip && "-scale-x-100",
          flipVertical && "-scale-y-100",
          objectPositionClasses[objectPosition]
        )}
      />
      <div className="absolute inset-0 bg-scanlines opacity-60" />
      {gradient !== "none" && (
        <div className={gradientClasses[gradient]} aria-hidden />
      )}
    </div>
  );
}
