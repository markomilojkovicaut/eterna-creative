import { cn } from "@/lib/utils";

const baseTextClasses =
  "font-heading text-[10px] font-semibold uppercase leading-none tracking-[0.12em]";

export interface SectionLabelProps {
  children: React.ReactNode;
  /** `light` for surface sections; `dark` for dark sections. */
  tone?: "light" | "dark";
  className?: string;
}

/** Section label — gradient accent rail + uppercase type (default site-wide). */
export function SectionLabel({
  children,
  tone = "light",
  className,
}: SectionLabelProps) {
  const textColor =
    tone === "light" ? "text-brand-purple" : "text-brand-purple-light";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-3",
        baseTextClasses,
        textColor,
        className
      )}
    >
      <span
        className="h-4 w-[2px] shrink-0 rounded-full bg-hero-gradient"
        aria-hidden
      />
      {children}
    </span>
  );
}
