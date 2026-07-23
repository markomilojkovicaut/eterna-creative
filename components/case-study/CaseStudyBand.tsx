import { Reveal } from "@/components/ui/Reveal";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { cn } from "@/lib/utils";

const toneClasses = {
  base: "bg-bg-base",
  elevated: "bg-bg-card/40 border-y border-border-dark",
  light: "bg-white text-text-ink",
} as const;

export function CaseStudyBand({
  tone = "elevated",
  children,
  className,
}: {
  tone?: keyof typeof toneClasses;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-section", toneClasses[tone], className)}>
      <div className={LAYOUT_OUTER_CLASS}>
        <div className={LAYOUT_INNER_CLASS}>
          <Reveal>{children}</Reveal>
        </div>
      </div>
    </section>
  );
}
