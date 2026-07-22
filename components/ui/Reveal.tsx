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

/**
 * Fab Senchuri-style scroll reveal:
 * opacity 0 + translateY(22px) → settle with soft cubic ease.
 */

export function useReveal(delayMs = 0) {
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
  }, []);

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
  as?: ElementType;
}

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const reveal = useReveal(delay);

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
