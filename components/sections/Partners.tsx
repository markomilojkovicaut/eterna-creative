import { PartnerLogoMarquee } from "@/components/ui/PartnerLogoMarquee";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { partners } from "@/lib/partners";

export function Partners() {
  return (
    <div className={LAYOUT_OUTER_CLASS}>
      <div className={LAYOUT_INNER_CLASS}>
        <div className="relative overflow-hidden py-2">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 bg-gradient-to-r from-bg-surface via-bg-surface/90 to-transparent sm:w-20"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 bg-gradient-to-l from-bg-surface via-bg-surface/90 to-transparent sm:w-20"
            aria-hidden
          />
          <PartnerLogoMarquee partners={partners} className="relative z-10" />
        </div>
      </div>
    </div>
  );
}
