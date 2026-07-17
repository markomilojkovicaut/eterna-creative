import { cn } from "@/lib/utils";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "purple" | "pink";
}

export function Card({ children, className, hover = false, glow }: CardProps) {
  return (
    <div
      className={cn(
        "bg-bg-card rounded-sharp shadow-card border border-border-default",
        hover && "transition-shadow hover:shadow-card-hover",
        glow === "purple" && "shadow-glow-purple",
        glow === "pink" && "shadow-glow-pink",
        className
      )}
    >
      {children}
    </div>
  );
}
