"use client";

import { useEffect, useRef, useState } from "react";

import { LabelPill } from "@/components/ui/LabelPill";
import { QuoteBar } from "@/components/ui/QuoteBar";
import { StatCard, statSuffixes } from "@/components/ui/StatCard";
import { cn } from "@/lib/utils";

const stats = [
  {
    value: "15",
    suffix: statSuffixes.plus,
    label: "products shipped",
  },
  {
    value: "5",
    suffix: statSuffixes.star,
    label: "Clutch & Upwork",
  },
  {
    value: "6",
    suffix: statSuffixes.weeks,
    label: "average MVP delivery",
  },
  {
    value: "5",
    suffix: statSuffixes.mobileApp,
    label: "co-funded apps",
  },
] as const;

type MissionChunk = {
  text: string;
  bold?: boolean;
};

/** Sentence groups for scroll opacity; bold key judgment words inside. */
const missionGroups: MissionChunk[][] = [
  [
    { text: "AI collapsed the build timeline so anyone can ship a demo. " },
  ],
  [
    { text: "What still separates winners is " },
    { text: "judgment", bold: true },
    { text: ": strategy, smart architecture, design craft and a path to revenue. " },
  ],
  [
    { text: "That is why we exist - an " },
    { text: "AI-native product studio", bold: true },
    {
      text: " that plans, builds, and grows digital products that ",
    },
    { text: "compound instead of expire", bold: true },
    { text: ". " },
  ],
  [
    { text: "So the " },
    { text: "advantage is on your side", bold: true },
    { text: "." },
  ],
];

export function WhatDrivesUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setProgress(1);
      return;
    }

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const start = viewport * 0.85;
      const end = viewport * 0.25;
      const raw = (start - rect.top) / (start - end);
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,720px)_minmax(0,1fr)] lg:gap-12 xl:gap-16">
      <div className="flex w-full min-w-0 flex-col lg:max-w-[720px]">
        <LabelPill variant="light">Mission</LabelPill>

        <div className="mt-3 flex w-full flex-col gap-8">
          <div
            ref={containerRef}
            className="font-heading w-full text-[38px] font-normal leading-[1.12] tracking-[-1.5px] text-text-ink"
          >
            {missionGroups.map((group, index) => {
              const segment = 1 / missionGroups.length;
              const local = (progress - index * segment) / segment;
              const opacity = Math.min(1, Math.max(0.22, local));

              return (
                <span
                  key={index}
                  className="transition-opacity duration-300 ease-out"
                  style={{ opacity }}
                >
                  {group.map((chunk) => (
                    <span
                      key={chunk.text}
                      className={cn(
                        chunk.bold && "text-gradient-hero font-bold"
                      )}
                    >
                      {chunk.text}
                    </span>
                  ))}
                </span>
              );
            })}
          </div>

          <QuoteBar className="w-fit max-w-full">
            AI gets you moving.{" "}
            <span className="text-gradient-hero font-bold">
              Systems make it compound.
            </span>
          </QuoteBar>
        </div>
      </div>

      <div className="grid w-full grid-cols-4 gap-x-4 gap-y-3 overflow-visible px-1 py-1 max-lg:max-w-none lg:flex lg:max-w-[180px] lg:flex-col lg:gap-4 lg:px-0 lg:py-0 lg:justify-self-end">
        {stats.map((stat) => (
          <StatCard
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            variant={stat.label === "products shipped" ? "gradient" : "default"}
          />
        ))}
      </div>
    </div>
  );
}
