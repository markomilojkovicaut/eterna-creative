import { CaseStudySiblingCard } from "@/components/case-study/CaseStudySibling";
import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { Reveal } from "@/components/ui/Reveal";
import type { CaseStudy } from "@/lib/case-studies";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";

export function CaseStudyClosing({ study }: { study: CaseStudy }) {
  return (
    <section className="border-t border-border-dark bg-bg-base py-section">
      <div className={LAYOUT_OUTER_CLASS}>
        <div className={LAYOUT_INNER_CLASS}>
          <Reveal>
            <div className="max-w-2xl">
              {study.closing ? (
                <>
                  <h2 className="font-heading text-heading-lg font-bold text-text-heading">
                    {study.closing.title}
                  </h2>
                  <p className="mt-4 text-body-md leading-relaxed text-text-body">
                    {study.closing.body}
                  </p>
                </>
              ) : (
                <p className="text-body-md text-text-sub">
                  Building something similar?
                </p>
              )}
              <CallToActionLink href="/book" className="mt-6">
                Book a strategy call
              </CallToActionLink>
            </div>

            <CaseStudySiblingCard study={study} className="mt-10" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
