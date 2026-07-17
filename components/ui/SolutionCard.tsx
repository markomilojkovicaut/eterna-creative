import { SolutionIcon } from "@/components/ui/SolutionIcon";
import type { Solution } from "@/lib/solutions";
import { cn } from "@/lib/utils";

export function SolutionCard({
  solution,
  className,
}: {
  solution: Solution;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col gap-5 p-6 sm:p-7 lg:gap-6 lg:p-8",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-engine-hover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col gap-5 lg:gap-6">
        <SolutionIcon icon={solution.icon} />

        <h3 className="font-heading text-[13px] font-bold uppercase tracking-[0.06em] text-text-heading sm:text-sm">
          {solution.title}
        </h3>

        <p className="min-h-[8.5rem] text-body-md leading-relaxed text-text-body">
          {solution.description}
        </p>
      </div>
    </article>
  );
}
