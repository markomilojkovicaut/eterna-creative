import { cn } from "@/lib/utils";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "purple" | "pink" | "muted" | "success";
  className?: string;
}

const variantClasses: Record<NonNullable<BadgeProps["variant"]>, string> = {
  purple:
    "bg-brand-purple/10 text-brand-purple-light border-brand-purple/20",
  pink: "bg-brand-pink/10 text-brand-pink-light border-brand-pink/20",
  muted: "bg-white/5 text-text-body border-white/10",
  success: "bg-green-500/10 text-green-400 border-green-500/20",
};

export function Badge({
  children,
  variant = "muted",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[10px] uppercase tracking-[0.08em]",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
