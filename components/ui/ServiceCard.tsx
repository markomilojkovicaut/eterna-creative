"use client";

import { ServiceIcon } from "@/components/ui/ServiceIcon";
import type { Service } from "@/lib/services";
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
  return (
    <article
      className={cn(
        "group relative flex flex-col gap-4 p-4 transition-opacity duration-300 sm:p-5 lg:p-6",
        highlighted ? "opacity-100" : "opacity-[0.35]",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-engine-hover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col gap-4">
        <ServiceIcon
          icon={service.icon}
          highlight={service.iconHighlight ?? false}
        />

        <h3 className="font-heading text-[15px] font-bold leading-snug text-text-heading sm:text-base">
          {service.title}
        </h3>

        <ul className="flex flex-nowrap items-center gap-1">
          {service.tags.map((tag, index) => (
            <li key={tag} className="flex min-w-0 items-center gap-1">
              {index > 0 && (
                <span
                  className="shrink-0 text-[10px] text-text-muted"
                  aria-hidden
                >
                  ·
                </span>
              )}
              <span className="truncate text-[10px] font-medium leading-tight text-text-body">
                {tag}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
