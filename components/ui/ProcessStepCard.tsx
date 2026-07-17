import { CornerPlusAccents } from "@/components/ui/CornerPlusAccents";
import { PhaseLabel } from "@/components/ui/PhaseLabel";
import type { ProcessStep } from "@/lib/process-steps";
import { lightResourceGradientClasses } from "@/lib/surface-styles";
import { cn } from "@/lib/utils";

export function ProcessStepCard({
  step,
  showTopBorder = false,
  className,
}: {
  step: ProcessStep;
  showTopBorder?: boolean;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "py-8 sm:py-10",
        showTopBorder && "border-t border-border-muted",
        className
      )}
    >
      <div
        className={cn(
          step.gradientBackground &&
            cn(
              "-mx-1 rounded-soft border px-4 py-5 sm:px-5 sm:py-6",
              lightResourceGradientClasses
            )
        )}
      >
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3 sm:gap-4">
          <div className="relative flex size-12 shrink-0 items-center justify-center rounded-sharp border border-border-muted bg-bg-muted sm:size-14">
            <CornerPlusAccents />
            <span className="text-center font-heading text-[1rem] font-extrabold leading-none tracking-tight text-brand-pink sm:text-[1.125rem]">
              {step.number}
            </span>
          </div>

          <div className="min-w-0 flex flex-col gap-2 pt-0.5">
            <PhaseLabel highlight>{step.phase}</PhaseLabel>
            <h3 className="font-heading text-heading-md font-bold leading-snug text-text-ink">
              {step.title}
            </h3>
          </div>
        </div>

        {step.free && (
          <span className="shrink-0 rounded-soft border border-border-strong bg-brand-purple/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-brand-purple">
            Free
          </span>
        )}
      </div>

      <p className="mt-5 text-body-md leading-relaxed text-text-ink-sub">
        {step.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {step.tags.map((tag) => (
          <li key={tag}>
            <span className="inline-flex rounded-soft border border-border-muted bg-bg-surface px-2.5 py-1 text-[11px] font-medium text-text-ink-muted">
              {tag}
            </span>
          </li>
        ))}
      </ul>
      </div>
    </article>
  );
}
