import {
  lightEditorialDisplayClasses,
} from "@/lib/heading-styles";
import { cn } from "@/lib/utils";

export interface LightEditorialDisplayProps {
  as?: "h2" | "p";
  className?: string;
  children: React.ReactNode;
}

/** 48px / 104% line-height editorial type on light surfaces. */
export function LightEditorialDisplay({
  as: Tag = "h2",
  className,
  children,
}: LightEditorialDisplayProps) {
  return (
    <Tag className={cn(lightEditorialDisplayClasses, className)}>
      {children}
    </Tag>
  );
}
