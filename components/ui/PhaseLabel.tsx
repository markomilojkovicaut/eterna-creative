import { cn } from "@/lib/utils";

/** Matches Engine card label styling (ENGINE 01, DISCOVERY, etc.). */
export function PhaseLabel({
  children,
  className,
  highlight = false,
}: {
  children: React.ReactNode;
  className?: string;
  highlight?: boolean;
}) {
  return (
    <p
      className={cn(
        "text-[11px] font-semibold uppercase tracking-[0.12em]",
        highlight ? "text-brand-pink" : "text-brand-purple-light",
        className
      )}
    >
      {children}
    </p>
  );
}
