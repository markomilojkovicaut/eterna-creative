"use client";

import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { servicePhaseLabels, type Service } from "@/lib/services";
import { cn } from "@/lib/utils";

export function ServiceCard({
  service,
  highlighted,
  className,
}: {
  service: Service;
  highlighted: boolean;
  className?: string;
}) {
  const highlight = service.iconHighlight ?? false;

  return (
    <article
      className={cn(
        "group relative flex min-h-[240px] flex-col p-4 transition-opacity duration-300 sm:min-h-[260px] sm:p-5 lg:p-6",
        highlighted ? "opacity-100" : "opacity-[0.35]",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-engine-hover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />

      <div className="relative z-10 flex h-full flex-col gap-5">
        <p
          className={cn(
            "text-[11px] font-semibold uppercase tracking-[0.12em]",
            highlight ? "text-brand-pink" : "text-brand-purple-light"
          )}
        >
          {servicePhaseLabels[service.phase]}
        </p>

        <ServiceIcon icon={service.icon} highlight={highlight} />

        <div className="flex flex-col gap-2">
          <h3
            className={cn(
              "font-heading text-heading-md font-bold",
              highlight ? "text-brand-pink" : "text-text-heading"
            )}
          >
            {service.title}
          </h3>
          <p className="min-h-[4.2em] text-body-sm leading-relaxed text-text-body">
            {service.description}
          </p>
        </div>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {service.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-soft border border-border-dark bg-bg-card/40 px-2 py-0.5 text-[10px] font-medium tracking-wide text-text-sub"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
