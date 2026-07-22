"use client";

import { useEffect, useId, useState } from "react";

import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { DarkTagPill } from "@/components/ui/DarkTagPill";
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

function EnginePopup({
  engine,
  onClose,
}: {
  engine: EternaEngine;
  onClose: () => void;
}) {
  const titleId = useId();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-bg-base/80 backdrop-blur-sm"
        aria-label="Close engine details"
        onClick={onClose}
      />
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-soft border border-border-dark bg-bg-card shadow-glow-purple">
        <div className="flex items-start justify-between gap-4 border-b border-border-dark px-6 py-5 sm:px-8">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
              Engine {engine.number}
            </p>
            <h3
              id={titleId}
              className={cn(
                "mt-2 font-heading text-heading-lg font-bold",
                engine.highlight ? "text-brand-pink" : "text-text-heading"
              )}
            >
              {engine.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-soft border border-border-dark text-text-sub transition-colors hover:border-border-strong hover:text-text-heading"
            aria-label="Close"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div className="space-y-5 px-6 py-6 sm:px-8">
          <div className="flex flex-wrap gap-2">
            <DarkTagPill>{`Engine ${engine.number}`}</DarkTagPill>
            <DarkTagPill>{engine.subtitle}</DarkTagPill>
          </div>

          <div className="flex items-center gap-4">
            <EngineIcon icon={engine.icon} highlight={engine.highlight} />
            <p className="text-body-sm font-medium text-text-sub">
              {engine.subtitle}
            </p>
          </div>

          <p className="text-body-md leading-relaxed text-text-body">
            {engine.description}
          </p>

          <CallToActionLink href="/book" className="w-fit">
            Book a strategy call
          </CallToActionLink>
        </div>
      </div>
    </div>
  );
}

function EngineSegmentOverlay({
  engine,
  left,
  top,
  onOpen,
}: {
  engine: EternaEngine;
  left: number;
  top: number;
  onOpen: () => void;
}) {
  return (
    <div
      className="absolute z-10 flex w-[28%] max-w-[200px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2.5 text-center sm:w-[26%] sm:gap-3 lg:max-w-[220px]"
      style={{ left: `${left}%`, top: `${top}%` }}
    >
      <EngineIcon icon={engine.icon} highlight={engine.highlight} />
      <p
        className={cn(
          "font-heading text-[11px] font-bold leading-snug sm:text-[13px] lg:text-body-sm",
          engine.highlight ? "text-brand-pink" : "text-text-heading"
        )}
      >
        {engine.title}
      </p>
      <button
        type="button"
        onClick={onOpen}
        className={cn(
          "inline-flex items-center justify-center rounded-soft border border-border-dark",
          "bg-bg-card/80 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.08em] text-text-heading sm:text-[11px]",
          "transition-colors hover:border-border-strong hover:bg-bg-card"
        )}
      >
        Learn more
      </button>
    </div>
  );
}

export function EngineCircle({ engines }: { engines: EternaEngine[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const open = engines.find((e) => e.id === openId) ?? null;

  // Full-bleed circle inside the content rail
  const size = 1000;
  const cx = size / 2;
  const cy = size / 2;
  const innerR = 185;
  const outerR = 495;
  const labelR = (innerR + outerR) / 2;

  return (
    <>
      {/* Mobile: stacked cards — circle is too dense under ~640px */}
      <ul className="grid gap-3 sm:hidden">
        {engines.map((engine) => (
          <li key={engine.id}>
            <button
              type="button"
              onClick={() => setOpenId(engine.id)}
              className={cn(
                "flex w-full items-center gap-4 rounded-soft border border-border-dark bg-bg-card/60 px-4 py-4 text-left",
                "transition-colors hover:border-border-strong hover:bg-bg-card"
              )}
            >
              <EngineIcon icon={engine.icon} highlight={engine.highlight} />
              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-brand-purple-light">
                  Engine {engine.number}
                </p>
                <p
                  className={cn(
                    "mt-1 font-heading text-body-sm font-bold",
                    engine.highlight ? "text-brand-pink" : "text-text-heading"
                  )}
                >
                  {engine.title}
                </p>
              </div>
              <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.08em] text-text-muted">
                Open
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Tablet/desktop: capped circle */}
      <div className="relative mx-auto hidden w-full max-w-[800px] sm:block">
        <div className="relative aspect-square w-full max-h-[800px]">
          <svg
            viewBox={`0 0 ${size} ${size}`}
            className="h-full w-full overflow-visible"
            role="img"
            aria-label="Six Eterna methodology engines"
          >
            {engines.map((engine, index) => {
              const startAngle = index * SEGMENT_ANGLE + 1.2;
              const endAngle = (index + 1) * SEGMENT_ANGLE - 1.2;
              const isOpen = openId === engine.id;

              return (
                <path
                  key={engine.id}
                  d={describeArc(cx, cy, innerR, outerR, startAngle, endAngle)}
                  className={cn(
                    "transition-all duration-300",
                    isOpen
                      ? "fill-brand-purple/35 stroke-brand-purple-light"
                      : "fill-bg-card/80 stroke-border-dark hover:fill-brand-purple/20"
                  )}
                  strokeWidth={2}
                />
              );
            })}
            <circle
              cx={cx}
              cy={cy}
              r={innerR - 6}
              className="fill-bg-base stroke-border-dark"
              strokeWidth={2}
            />
            <text
              x={cx}
              y={cy - 14}
              textAnchor="middle"
              className="fill-brand-purple-light text-[26px] font-bold uppercase tracking-[0.2em]"
            >
              Eterna
            </text>
            <text
              x={cx}
              y={cy + 24}
              textAnchor="middle"
              className="fill-text-muted text-[18px] uppercase tracking-[0.16em]"
            >
              system
            </text>
          </svg>

          {engines.map((engine, index) => {
            const midAngle = index * SEGMENT_ANGLE + SEGMENT_ANGLE / 2;
            const pos = polarToCartesian(cx, cy, labelR, midAngle);
            const left = (pos.x / size) * 100;
            const top = (pos.y / size) * 100;

            return (
              <EngineSegmentOverlay
                key={engine.id}
                engine={engine}
                left={left}
                top={top}
                onOpen={() => setOpenId(engine.id)}
              />
            );
          })}
        </div>
      </div>

      {open && <EnginePopup engine={open} onClose={() => setOpenId(null)} />}
    </>
  );
}
