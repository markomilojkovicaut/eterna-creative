"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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

  if (!mounted) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
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
      <div
        className="relative z-10 flex w-full max-w-lg flex-col overflow-hidden rounded-soft border border-border-dark bg-bg-card shadow-glow-purple"
        style={{ maxHeight: "min(80vh, calc(100dvh - 5rem))" }}
      >
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-border-dark px-6 py-5 sm:px-8">
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

        <div className="min-h-0 flex-1 space-y-5 overflow-y-auto overscroll-contain px-6 py-6 sm:px-8">
          <DarkTagPill>{`Engine ${engine.number}`}</DarkTagPill>

          <div className="flex items-center gap-4">
            <EngineIcon icon={engine.icon} highlight={engine.highlight} />
            <p className="text-body-sm font-medium text-text-sub">
              {engine.subtitle}
            </p>
          </div>

          <p className="text-body-md leading-relaxed text-text-body">
            {engine.description}
          </p>

          <ul className="space-y-3 border-t border-border-dark pt-5">
            {engine.details.map((detail) => (
              <li
                key={detail}
                className="flex gap-3 text-body-sm leading-relaxed text-text-body"
              >
                <span
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-purple-light"
                  aria-hidden
                />
                <span>{detail}</span>
              </li>
            ))}
          </ul>

          <p className="rounded-soft border border-border-dark bg-bg-base/50 px-4 py-3 text-body-sm leading-relaxed text-text-sub">
            {engine.outcome}
          </p>

          <CallToActionLink href="/book" className="w-fit">
            Book a strategy call
          </CallToActionLink>
        </div>
      </div>
    </div>,
    document.body
  );
}

function EngineSegmentOverlay({
  engine,
  left,
  top,
  active,
  onOpen,
  onHoverChange,
}: {
  engine: EternaEngine;
  left: number;
  top: number;
  active: boolean;
  onOpen: () => void;
  onHoverChange: (hovered: boolean) => void;
}) {
  return (
    <div
      className="absolute z-10 flex w-[28%] max-w-[200px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2.5 text-center sm:w-[26%] sm:gap-3 lg:max-w-[220px]"
      style={{ left: `${left}%`, top: `${top}%` }}
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
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
          "inline-flex items-center justify-center rounded-soft border-0 bg-transparent",
          "px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] sm:text-[11px]",
          "text-brand-purple-light transition-colors hover:text-text-heading",
          active && "text-text-heading"
        )}
      >
        Learn more
      </button>
    </div>
  );
}

/** Subtle living core - same visual language as hero devices, contextual to engines. */
function EngineCoreVisual() {
  return (
    <div
      className="pointer-events-none absolute left-1/2 top-1/2 z-[5] flex h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 items-center justify-center"
      aria-hidden
    >
      <div className="absolute inset-[8%] rounded-full border border-brand-purple-light/20 animate-engine-ring-pulse" />
      <div className="absolute inset-[18%] rounded-full border border-brand-pink/15 animate-engine-ring-pulse [animation-delay:1.4s]" />

      {/* Mini orbiting nodes - six engines as a quiet system pulse */}
      <div className="absolute inset-[22%] animate-engine-orbit motion-reduce:animate-none">
        {Array.from({ length: 6 }).map((_, i) => {
          const angle = i * 60;
          return (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-purple-light/70 shadow-[0_0_10px_rgba(184,184,255,0.45)]"
              style={{
                transform: `rotate(${angle}deg) translateY(-42px) rotate(-${angle}deg)`,
              }}
            />
          );
        })}
      </div>

      {/* Compact device stack - echoes hero phones, reads as product system */}
      <div className="relative flex h-[58%] w-[42%] items-end justify-center">
        <div
          className={cn(
            "absolute left-[4%] top-[18%] z-[1] h-[72%] w-[42%] origin-bottom",
            "-rotate-[10deg] overflow-hidden rounded-[0.65rem] border border-border-dark bg-bg-card",
            "animate-phone-float-left motion-reduce:animate-none"
          )}
        >
          <div className="flex h-full flex-col gap-0.5 bg-gradient-to-b from-[#0a0a12] to-[#1F1145]/70 p-1.5 pt-2.5">
            <div className="h-0.5 w-[55%] rounded-full bg-brand-purple-light/50" />
            <div className="mt-1 h-4 flex-1 rounded-sm bg-bg-base/50" />
            <div className="h-1.5 rounded-sm bg-white/90" />
          </div>
        </div>
        <div
          className={cn(
            "absolute right-[4%] top-[18%] z-[1] h-[72%] w-[42%] origin-bottom",
            "rotate-[10deg] overflow-hidden rounded-[0.65rem] border border-border-dark bg-bg-card",
            "animate-phone-float-right motion-reduce:animate-none"
          )}
        >
          <div className="flex h-full flex-col gap-0.5 bg-[#07070c] p-1.5 pt-2.5">
            <div className="h-0.5 w-[40%] rounded-full bg-brand-pink/60" />
            <div className="mt-1 space-y-0.5">
              <div className="h-2 rounded-sm border border-border-dark bg-bg-card/60" />
              <div className="h-2 rounded-sm border border-border-dark bg-bg-card/60" />
              <div className="h-2 rounded-sm border border-border-dark bg-bg-card/60" />
            </div>
          </div>
        </div>
        <div
          className={cn(
            "absolute left-1/2 top-[6%] z-[2] h-[78%] w-[46%] -translate-x-1/2 origin-bottom",
            "overflow-hidden rounded-[0.7rem] border border-border-dark bg-bg-card shadow-[0_8px_24px_rgba(31,17,69,0.45)]",
            "animate-phone-float-center motion-reduce:animate-none"
          )}
        >
          <div className="flex h-full flex-col bg-gradient-to-b from-bg-base via-[#12082a] to-[#1F1145] p-1.5 pt-2.5">
            <div className="mx-auto mb-1 h-1 w-[30%] rounded-full bg-black" />
            <p className="text-center text-[5px] font-semibold uppercase tracking-[0.14em] text-brand-purple-light">
              Engines
            </p>
            <div className="mt-1 flex flex-1 items-end gap-0.5 px-0.5 pb-0.5">
              {[45, 62, 52, 78, 68, 88].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-[1px] bg-gradient-to-t from-brand-purple to-brand-pink opacity-85 animate-phone-bar-rise motion-reduce:animate-none"
                  style={{
                    height: `${h}%`,
                    animationDelay: `${i * 0.18}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-[6%] text-center">
        <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-brand-purple-light sm:text-[10px]">
          Eterna
        </p>
        <p className="mt-0.5 text-[8px] uppercase tracking-[0.18em] text-text-muted sm:text-[9px]">
          system
        </p>
      </div>
    </div>
  );
}

export function EngineCircle({ engines }: { engines: EternaEngine[] }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const open = engines.find((e) => e.id === openId) ?? null;

  const size = 1000;
  const cx = size / 2;
  const cy = size / 2;
  const innerR = 185;
  const outerR = 495;
  const labelR = (innerR + outerR) / 2;

  return (
    <>
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
              <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.08em] text-brand-purple-light">
                Learn more
              </span>
            </button>
          </li>
        ))}
      </ul>

      <div className="relative mx-auto hidden w-full max-w-[800px] sm:block">
        <div className="relative aspect-square w-full max-h-[800px]">
          <svg
            viewBox={`0 0 ${size} ${size}`}
            className="h-full w-full overflow-visible"
            role="img"
            aria-label="Six Eterna Method engines"
          >
            {engines.map((engine, index) => {
              const startAngle = index * SEGMENT_ANGLE + 1.2;
              const endAngle = (index + 1) * SEGMENT_ANGLE - 1.2;
              const isOpen = openId === engine.id;
              const isHovered = hoveredId === engine.id;

              return (
                <path
                  key={engine.id}
                  d={describeArc(cx, cy, innerR, outerR, startAngle, endAngle)}
                  className={cn(
                    "transition-[fill,stroke,opacity] duration-300",
                    isOpen
                      ? "fill-brand-purple/40 stroke-brand-purple-light"
                      : isHovered
                        ? "fill-brand-purple/28 stroke-brand-purple-light/70"
                        : hoveredId
                          ? "fill-bg-card/45 stroke-border-dark opacity-70"
                          : "fill-bg-card/80 stroke-border-dark"
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
          </svg>

          <EngineCoreVisual />

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
                active={openId === engine.id || hoveredId === engine.id}
                onOpen={() => setOpenId(engine.id)}
                onHoverChange={(hovered) =>
                  setHoveredId(hovered ? engine.id : null)
                }
              />
            );
          })}
        </div>
      </div>

      {open && <EnginePopup engine={open} onClose={() => setOpenId(null)} />}
    </>
  );
}
