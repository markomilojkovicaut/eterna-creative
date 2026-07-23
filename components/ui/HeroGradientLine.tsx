import { cn } from "@/lib/utils";

/** Section-bottom brand gradient rail with subtle left→right color flow. */
export function HeroGradientLine({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative z-20 h-1 w-full animate-hero-gradient-flow bg-hero-gradient bg-[length:200%_100%] motion-reduce:animate-none",
        className
      )}
      aria-hidden
    />
  );
}
