import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

export interface LabelPillProps {
  children: React.ReactNode;
  className?: string;
  variant?: "dark" | "light";
}

/** @deprecated Use `SectionLabel` — kept as alias for existing imports. */
export function LabelPill({
  children,
  className,
  variant = "dark",
}: LabelPillProps) {
  return (
    <SectionLabel
      tone={variant === "light" ? "light" : "dark"}
      className={cn(className)}
    >
      {children}
    </SectionLabel>
  );
}
