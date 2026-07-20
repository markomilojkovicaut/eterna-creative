"use client";

import Link from "next/link";

import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { getServiceSlug } from "@/lib/service-pages";
import { servicePhaseLabels, type Service } from "@/lib/services";
import { cn } from "@/lib/utils";

/** Services section motion: slide-left reveal (shared by every service card). */
const descHidden =
  "translate-x-3 opacity-0 motion-reduce:translate-x-0";
const descShown =
  "group-hover:translate-x-0 group-hover:opacity-100 group-focus-within:translate-x-0 group-focus-within:opacity-100";

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
  const href = getServiceSlug(service.id) ?? `/services/${service.id}`;

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex min-h-[240px] flex-col overflow-hidden p-4 outline-none transition-opacity duration-300 sm:min-h-[260px] sm:p-5 lg:min-h-[280px] lg:p-6",
        "no-underline focus-visible:ring-2 focus-visible:ring-brand-purple-light/50",
        highlighted ? "opacity-100" : "opacity-[0.35]",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-engine-hover opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
        aria-hidden
      />

      <div className="relative z-10 flex h-full min-h-0 flex-col">
        {/* Top row: phase left, icon top-right aligned with phase */}
        <div className="flex items-start justify-between gap-3">
          <p
            className={cn(
              "pt-1 text-[11px] font-semibold uppercase tracking-[0.12em]",
              highlight ? "text-brand-pink" : "text-brand-purple-light"
            )}
          >
            {servicePhaseLabels[service.phase]}
          </p>
          <div className="shrink-0 transition-transform duration-500 group-hover:rotate-6 group-focus-within:rotate-6 motion-reduce:group-hover:rotate-0 motion-reduce:group-focus-within:rotate-0">
            <ServiceIcon icon={service.icon} highlight={highlight} />
          </div>
        </div>

        {/* 8px between phase row and title */}
        <h3
          className={cn(
            "mt-2 font-heading text-heading-md font-bold",
            highlight ? "text-brand-pink" : "text-text-heading"
          )}
        >
          {service.title}
        </h3>

        <div className="relative mt-auto min-h-[4.5rem] pt-4">
          <ul className="absolute inset-x-0 bottom-0 flex flex-wrap gap-1.5 transition-all duration-300 group-hover:translate-y-1 group-hover:opacity-0 group-focus-within:translate-y-1 group-focus-within:opacity-0 motion-reduce:group-hover:translate-y-0 motion-reduce:group-focus-within:translate-y-0">
            {service.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-soft border border-border-dark bg-bg-card/40 px-2 py-0.5 text-[10px] font-medium tracking-wide text-text-sub"
              >
                {tag}
              </li>
            ))}
          </ul>

          <p
            className={cn(
              "absolute inset-x-0 bottom-0 text-body-sm leading-relaxed text-text-body",
              "transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none",
              descHidden,
              descShown,
              "motion-reduce:group-hover:opacity-100 motion-reduce:group-focus-within:opacity-100"
            )}
          >
            {service.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
