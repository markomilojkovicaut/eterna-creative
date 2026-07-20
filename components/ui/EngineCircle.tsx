"use client";

import { useState } from "react";

import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { EngineIcon } from "@/components/ui/EngineIcon";
import type { EternaEngine } from "@/lib/eterna-engines";
import { cn } from "@/lib/utils";

const SEGMENT_ANGLE = 360 / 6;

function polarToCartesian(
  cx: number,
  cy: number,
  radius: number,
  angleDeg: number
) {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(angleRad),
    y: cy + radius * Math.sin(angleRad),
  };
}

function describeArc(
  cx: number,
  cy: number,
  innerR: number,
  outerR: number,
  startAngle: number,
  endAngle: number
) {
  const startOuter = polarToCartesian(cx, cy, outerR, endAngle);
  const endOuter = polarToCartesian(cx, cy, outerR, startAngle);
  const startInner = polarToCartesian(cx, cy, innerR, startAngle);
  const endInner = polarToCartesian(cx, cy, innerR, endAngle);
  const largeArc = endAngle - startAngle <= 180 ? 0 : 1;

  return [
    `M ${startOuter.x} ${startOuter.y}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 0 ${endOuter.x} ${endOuter.y}`,
    `L ${startInner.x} ${startInner.y}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 1 ${endInner.x} ${endInner.y}`,
    "Z",
  ].join(" ");
}

export function EngineCircle({ engines }: { engines: EternaEngine[] }) {
  const [activeId, setActiveId] = useState<string | null>(engines[0]?.id ?? null);
  const active = engines.find((e) => e.id === activeId) ?? engines[0];

  const size = 320;
  const cx = size / 2;
  const cy = size / 2;
  const innerR = 72;
  const outerR = 148;

  return (
    <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">
      <div className="relative mx-auto shrink-0" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="overflow-visible"
          role="img"
          aria-label="Six Eterna methodology engines"
        >
          {engines.map((engine, index) => {
            const startAngle = index * SEGMENT_ANGLE + 2;
            const endAngle = (index + 1) * SEGMENT_ANGLE - 2;
            const midAngle = (startAngle + endAngle) / 2;
            const labelPos = polarToCartesian(cx, cy, (innerR + outerR) / 2, midAngle);
            const isActive = active?.id === engine.id;

            return (
              <g key={engine.id}>
                <path
                  d={describeArc(cx, cy, innerR, outerR, startAngle, endAngle)}
                  className={cn(
                    "cursor-pointer transition-all duration-300",
                    isActive
                      ? "fill-brand-purple/30 stroke-brand-purple-light"
                      : "fill-bg-card stroke-border-dark hover:fill-brand-purple/15"
                  )}
                  strokeWidth={1}
                  onClick={() => setActiveId(engine.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setActiveId(engine.id);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isActive}
                  aria-label={`Engine ${engine.number}: ${engine.title}`}
                />
                <text
                  x={labelPos.x}
                  y={labelPos.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="pointer-events-none fill-text-sub text-[9px] font-semibold uppercase tracking-wider"
                >
                  {engine.number}
                </text>
              </g>
            );
          })}
          <circle
            cx={cx}
            cy={cy}
            r={innerR - 4}
            className="fill-bg-base stroke-border-dark"
            strokeWidth={1}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {active && (
            <div className="flex size-16 items-center justify-center">
              <EngineIcon icon={active.icon} highlight={active.highlight} />
            </div>
          )}
        </div>
      </div>

      {active && (
        <div className="w-full max-w-lg rounded-soft border border-border-dark bg-bg-card/30 p-6 sm:p-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
            Engine {active.number}
          </p>
          <h3
            className={cn(
              "mt-2 font-heading text-heading-lg font-bold",
              active.highlight ? "text-brand-pink" : "text-text-heading"
            )}
          >
            {active.title}
          </h3>
          <p className="mt-2 text-body-sm font-medium text-text-sub">
            {active.subtitle}
          </p>
          <p className="mt-4 text-body-md leading-relaxed text-text-body">
            {active.description}
          </p>
          <div className="mt-8 aspect-[16/9] rounded-soft border border-border-dark bg-gradient-to-br from-brand-purple-dark/40 via-bg-base to-bg-card flex items-center justify-center">
            <span className="text-body-sm text-text-muted">Engine visual</span>
          </div>
          <CallToActionLink href="/book" className="mt-8">
            Book a strategy call
          </CallToActionLink>
        </div>
      )}
    </div>
  );
}
