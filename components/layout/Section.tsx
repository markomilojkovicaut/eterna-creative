import { Reveal } from "@/components/ui/Reveal";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { cn } from "@/lib/utils";

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "base" | "surface" | "purple-dark" | "none";
  id?: string;
  /** Disable default scroll reveal (rare). */
  reveal?: boolean;
}

const backgroundClasses: Record<
  NonNullable<SectionProps["background"]>,
  string
> = {
  base: "bg-bg-base",
  surface: "bg-bg-surface text-text-ink-sub",
  "purple-dark": "bg-brand-purple-dark",
  none: "bg-transparent",
};

/**
 * Page section with default Reveal so non-homepage pages get the same motion language.
 */
export function Section({
  children,
  className,
  background = "base",
  id,
  reveal = true,
}: SectionProps) {
  const inner = (
    <div className={LAYOUT_OUTER_CLASS}>
      <div className={LAYOUT_INNER_CLASS}>{children}</div>
    </div>
  );

  return (
    <section
      id={id}
      className={cn("py-section", backgroundClasses[background], className)}
    >
      {reveal ? <Reveal>{inner}</Reveal> : inner}
    </section>
  );
}
