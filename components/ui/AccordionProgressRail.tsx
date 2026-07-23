"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

/**
 * Reliable left-rail progress for auto-accordions.
 * Uses height % via rAF instead of scaleY (which glitches when row height changes).
 */
export function AccordionProgressRail({
  active,
  cycle,
  durationMs,
  paused = false,
  trackClassName,
  fillClassName,
}: {
  active: boolean;
  cycle: number;
  durationMs: number;
  paused?: boolean;
  trackClassName?: string;
  fillClassName?: string;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!active) {
      setProgress(0);
      return;
    }

    setProgress(0);
    let frame = 0;
    let start: number | null = null;
    let elapsedPaused = 0;
    let pauseStarted: number | null = null;

    const tick = (now: number) => {
      if (paused) {
        if (pauseStarted === null) pauseStarted = now;
        frame = window.requestAnimationFrame(tick);
        return;
      }

      if (pauseStarted !== null) {
        elapsedPaused += now - pauseStarted;
        pauseStarted = null;
      }

      if (start === null) start = now;
      const elapsed = now - start - elapsedPaused;
      const next = Math.min(1, elapsed / durationMs);
      setProgress(next);

      if (next < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [active, cycle, durationMs, paused]);

  return (
    <div
      className={cn("relative w-1.5 shrink-0 self-stretch", trackClassName)}
      aria-hidden
    >
      {active ? (
        <div
          className={cn("absolute inset-x-0 top-0 w-full rounded-full", fillClassName)}
          style={{ height: `${Math.max(progress * 100, 2)}%` }}
        />
      ) : null}
    </div>
  );
}
