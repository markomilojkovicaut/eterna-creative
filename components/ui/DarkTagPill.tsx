import { cn } from "@/lib/utils";

/** Uppercase tag pill used on dark surfaces (case study cards, partner marquee). */
export function DarkTagPill({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-border-dark px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-text-body",
        className
      )}
    >
      {children}
    </span>
  );
}
