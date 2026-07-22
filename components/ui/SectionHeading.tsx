import { LabelPill } from "@/components/ui/LabelPill";
import { displayHeadingTypeClasses } from "@/lib/heading-styles";
import { cn } from "@/lib/utils";

export type SectionHeadingLineVariant = "default" | "gradient";

export interface SectionHeadingLine {
  text: string;
  variant?: SectionHeadingLineVariant;
}

const lineVariantClassesDark: Record<SectionHeadingLineVariant, string> = {
  default: "block text-display-md text-text-heading sm:text-display-lg",
  gradient:
    "block overflow-visible bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text pb-1 text-display-md text-transparent sm:text-display-lg",
};

const lineVariantClassesLight: Record<SectionHeadingLineVariant, string> = {
  default: "block text-display-md text-text-ink sm:text-display-lg",
  gradient:
    "block overflow-visible bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text pb-1 text-display-md text-transparent sm:text-display-lg",
};

export interface SectionHeadingProps {
  label: string;
  labelVariant?: "dark" | "light";
  lines: SectionHeadingLine[];
  /** Right-aligned subcopy on desktop, left on mobile. */
  subheading?: React.ReactNode;
  /** Optional action under the subheading (split layout only). */
  subheadingAction?: React.ReactNode;
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
  subheadingAction,
  split = false,
  className,
  titleClassName,
  titleMaxWidth = "max-w-[640px]",
  subheadingMaxWidth = "max-w-[420px]",
}: SectionHeadingProps) {
  const lineClasses =
    labelVariant === "light" ? lineVariantClassesLight : lineVariantClassesDark;
  const subheadingColor =
    labelVariant === "light" ? "text-text-ink-sub" : "text-text-sub";

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
            lineClasses[line.variant ?? "default"],
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
          {(subheading || subheadingAction) && (
            <div
              className={cn(
                subheadingMaxWidth,
                "flex flex-col gap-5 text-left lg:ml-auto lg:items-end lg:justify-self-end lg:text-right"
              )}
            >
              {subheading ? (
                <p
                  className={cn(
                    "text-body-md leading-relaxed",
                    subheadingColor
                  )}
                >
                  {subheading}
                </p>
              ) : null}
              {subheadingAction ? (
                <div className="flex justify-start lg:justify-end">
                  {subheadingAction}
                </div>
              ) : null}
            </div>
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
            "mt-3 text-body-md leading-relaxed",
            subheadingColor,
            subheadingMaxWidth
          )}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
