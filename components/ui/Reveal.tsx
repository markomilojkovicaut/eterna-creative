"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type UseRevealOptions = {
  delayMs?: number;
  /** Play on mount (hero / above-fold) instead of waiting for scroll. */
  immediate?: boolean;
};

/**
 * Fab Senchuri-style reveal:
 * opacity 0 + translateY(22px) → settle with soft cubic ease.
 */
export function useReveal({
  delayMs = 0,
  immediate = false,
}: UseRevealOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      setInView(true);
      return;
    }

    if (immediate) {
      // Double rAF so the browser paints the hidden state before transitioning in.
      let raf2 = 0;
      const raf1 = window.requestAnimationFrame(() => {
        raf2 = window.requestAnimationFrame(() => setInView(true));
      });
      return () => {
        window.cancelAnimationFrame(raf1);
        window.cancelAnimationFrame(raf2);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [immediate]);

  const setRef = useCallback((node: HTMLElement | null) => {
    ref.current = node;
  }, []);

  return {
    ref: setRef,
    className: cn("reveal", inView && "reveal-in"),
    style: (delayMs
      ? ({ "--reveal-delay": `${delayMs}ms` } as CSSProperties)
      : undefined) as CSSProperties | undefined,
  };
}

export interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms (Fab-style cascade). */
  delay?: number;
  /** Animate on page load rather than on scroll. */
  immediate?: boolean;
  as?: ElementType;
}

export function Reveal({
  children,
  className,
  delay = 0,
  immediate = false,
  as: Tag = "div",
}: RevealProps) {
  const reveal = useReveal({ delayMs: delay, immediate });

  return (
    <Tag
      ref={reveal.ref}
      className={cn(reveal.className, className)}
      style={reveal.style}
    >
      {children}
    </Tag>
  );
}
