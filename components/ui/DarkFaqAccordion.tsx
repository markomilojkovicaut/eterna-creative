"use client";

import { useState } from "react";

import type { FaqItem } from "@/lib/faq";
import { cn } from "@/lib/utils";

export function DarkFaqAccordion({
  items,
  className,
  defaultOpenId,
}: {
  items: FaqItem[];
  className?: string;
  defaultOpenId?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  if (items.length === 0) return null;

  return (
    <div
      className={cn(
        "overflow-hidden rounded-soft border border-border-dark bg-bg-card/40",
        className
      )}
    >
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        const isLast = index === items.length - 1;

        return (
          <div
            key={item.id}
            className={cn(!isLast && "border-b border-border-dark")}
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-6"
              aria-expanded={isOpen}
            >
              <span className="font-heading text-body-sm font-semibold leading-snug text-text-heading sm:text-body-md">
                {item.question}
              </span>
              <span
                className={cn(
                  "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full border border-border-dark bg-bg-card text-brand-purple-light transition-transform duration-200",
                  isOpen && "rotate-180"
                )}
                aria-hidden
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </button>

            {isOpen && (
              <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                <p className="max-w-[640px] text-body-md leading-relaxed text-text-body">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
