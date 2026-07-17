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

export function Section({
  children,
  className,
  background = "base",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("py-section", backgroundClasses[background], className)}
    >
      <div className={LAYOUT_OUTER_CLASS}>
        <div className={LAYOUT_INNER_CLASS}>{children}</div>
      </div>
    </section>
  );
}
