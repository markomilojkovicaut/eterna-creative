"use client";

import type { ServiceFilterId } from "@/lib/services";
import { serviceFilterOptions } from "@/lib/services";
import { cn } from "@/lib/utils";

export function ServiceFilterBar({
  active,
  onChange,
  className,
}: {
  active: ServiceFilterId;
  onChange: (filter: ServiceFilterId) => void;
  className?: string;
}) {
  return (
    <div
      className={cn("flex flex-wrap gap-2 sm:gap-3", className)}
      role="tablist"
      aria-label="Filter services"
    >
      {serviceFilterOptions.map((option) => {
        const isActive = active === option.id;

        return (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(option.id)}
            className={cn(
              "rounded-full border px-4 py-2 text-[12px] font-medium leading-none transition-colors duration-200",
              isActive
                ? "border-border-strong bg-brand-purple-dark/50 text-text-heading"
                : "border-border-dark bg-transparent text-text-body hover:border-border-default hover:text-text-sub"
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
