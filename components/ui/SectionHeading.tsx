import { LabelPill } from "@/components/ui/LabelPill";
import { displayHeadingTypeClasses } from "@/lib/heading-styles";
import { cn } from "@/lib/utils";

export type SectionHeadingLineVariant = "default" | "gradient";

export interface SectionHeadingLine {
  text: string;
  variant?: SectionHeadingLineVariant;
}

const lineVariantClasses: Record<SectionHeadingLineVariant, string> = {
  default:
    "block text-display-md text-text-heading sm:text-display-lg",
  gradient:
    "block overflow-visible bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text pb-1 text-display-md text-transparent sm:text-display-lg",
};

export interface SectionHeadingProps {
  label: string;
  labelVariant?: "dark" | "light";
  lines: SectionHeadingLine[];
  /** Right-aligned subcopy on desktop, left on mobile. */
  subheading?: React.ReactNode;
  /** Two-column label + title / subheading layout (Eterna system). */
  split?: boolean;
  className?: string;
  titleClassName?: string;
  titleMaxWidth?: string;
  subheadingMaxWidth?: string;
}

export function SectionHeading({
  label,
  labelVariant = "dark",
  lines,
  subheading,
  split = false,
  className,
  titleClassName,
  titleMaxWidth = "max-w-[640px]",
  subheadingMaxWidth = "max-w-[420px]",
}: SectionHeadingProps) {
  const title = (
    <h2
      className={cn(
        "overflow-visible",
        displayHeadingTypeClasses,
        titleMaxWidth,
        titleClassName
      )}
    >
      {lines.map((line, index) => (
        <span
          key={line.text}
          className={cn(
            lineVariantClasses[line.variant ?? "default"],
            index > 0 && "mt-0.5"
          )}
        >
          {line.text}
        </span>
      ))}
    </h2>
  );

  if (split) {
    return (
      <div className={className}>
        <LabelPill variant={labelVariant}>{label}</LabelPill>
        <div className="mt-3 grid gap-8 lg:grid-cols-2 lg:items-end lg:gap-12">
          {title}
          {subheading && (
            <p
              className={cn(
                subheadingMaxWidth,
                "text-left text-body-md leading-relaxed text-text-sub lg:ml-auto lg:text-right lg:justify-self-end"
              )}
            >
              {subheading}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <LabelPill variant={labelVariant}>{label}</LabelPill>
      <div className="mt-3">{title}</div>
      {subheading && (
        <p
          className={cn(
            "mt-3 text-body-md leading-relaxed text-text-sub",
            subheadingMaxWidth
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
