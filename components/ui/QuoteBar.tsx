import { cn } from "@/lib/utils";

export type QuoteBarAccent = "purple" | "pink" | "black";

const accentClasses: Record<QuoteBarAccent, string> = {
  purple: "bg-brand-purple-light",
  pink: "bg-brand-pink",
  black: "bg-text-ink",
};

export interface QuoteBarProps {
  children: React.ReactNode;
  className?: string;
  accent?: QuoteBarAccent;
}

export function QuoteBar({
  children,
  className,
  accent = "purple",
}: QuoteBarProps) {
  return (
    <blockquote
      className={cn(
        "relative rounded-soft border border-border-muted bg-bg-muted py-2 pl-6 pr-6",
        "text-body-lg text-text-ink",
        className
      )}
    >
      <span
        className={cn(
          "absolute left-0 top-0 bottom-0 h-full w-1",
          accentClasses[accent]
        )}
        aria-hidden
      />
      <span className="relative block pl-3">{children}</span>
    </blockquote>
  );
}
