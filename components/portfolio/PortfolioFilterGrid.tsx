"use client";

import { useMemo, useState } from "react";

import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import {
  caseStudies,
  caseStudyProductLabels,
  type CaseStudyProductType,
} from "@/lib/case-studies";
import { cn } from "@/lib/utils";

type FilterId = "all" | CaseStudyProductType;

const filters: { id: FilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "application", label: caseStudyProductLabels.application },
  { id: "website", label: caseStudyProductLabels.website },
  { id: "automation", label: caseStudyProductLabels.automation },
];

export function PortfolioFilterGrid() {
  const [active, setActive] = useState<FilterId>("all");

  const filtered = useMemo(() => {
    if (active === "all") return caseStudies;
    return caseStudies.filter((s) => s.productType === active);
  }, [active]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => {
          const isActive = active === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActive(filter.id)}
              className={cn(
                "rounded-soft border px-3.5 py-1.5 text-[12px] font-semibold transition-colors",
                isActive
                  ? "border-brand-purple-light/50 bg-brand-purple/20 text-text-heading"
                  : "border-border-dark bg-bg-card/30 text-text-sub hover:border-border-strong hover:text-text-heading"
              )}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-body-sm text-text-muted">
        {filtered.length} {filtered.length === 1 ? "case study" : "case studies"}
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:gap-8">
        {filtered.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>
    </div>
  );
}
