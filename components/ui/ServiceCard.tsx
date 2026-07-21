"use client";

import Link from "next/link";

import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { getServiceSlug } from "@/lib/service-pages";
import { servicePhaseLabels, type Service } from "@/lib/services";
import { cn } from "@/lib/utils";

const pillsHidden =
  "translate-y-2 opacity-0 motion-reduce:translate-y-0";
const pillsShown =
  "group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100";

export function ServiceCard({
  service,
  highlighted,
  className,
  eyebrow,
}: {
  service: Service;
  highlighted: boolean;
  className?: string;
  /** Overrides the default Plan/Build/Grow phase label. */
  eyebrow?: string;
}) {
  const highlight = service.iconHighlight ?? false;
  const href = getServiceSlug(service.id) ?? `/services/${service.id}`;
  const label = eyebrow ?? servicePhaseLabels[service.phase];

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
        <div className="flex items-start justify-between gap-3">
          <p
            className={cn(
              "pt-1 text-[11px] font-semibold uppercase tracking-[0.12em]",
              highlight ? "text-brand-pink" : "text-brand-purple-light"
            )}
          >
            {label}
          </p>
          <div className="shrink-0 transition-transform duration-500 group-hover:rotate-6 group-focus-within:rotate-6 motion-reduce:group-hover:rotate-0 motion-reduce:group-focus-within:rotate-0">
            <ServiceIcon icon={service.icon} highlight={highlight} />
          </div>
        </div>

        <h3
          className={cn(
            "mt-2 font-heading text-heading-md font-bold",
            highlight ? "text-brand-pink" : "text-text-heading"
          )}
        >
          {service.title}
        </h3>

        <div className="mt-auto flex flex-col gap-4 pt-4">
          <ul
            className={cn(
              "flex min-h-[1.5rem] flex-wrap gap-1.5",
              "transition-[opacity,transform] duration-300 ease-out motion-reduce:transition-none",
              pillsHidden,
              pillsShown,
              "motion-reduce:group-hover:opacity-100 motion-reduce:group-focus-within:opacity-100"
            )}
          >
            {service.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-soft border border-border-dark bg-bg-card/40 px-2 py-0.5 text-[10px] font-medium tracking-wide text-text-sub"
              >
                {tag}
              </li>
            ))}
          </ul>

          <span className="inline-flex w-fit items-center gap-1.5 text-body-sm font-semibold text-text-heading">
            Open
            <ArrowUpRight className="!h-4 !w-4 !text-brand-purple-light" />
          </span>
        </div>
      </div>
    </Link>
  );
}
