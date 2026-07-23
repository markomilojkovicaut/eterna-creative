import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { Reveal } from "@/components/ui/Reveal";
import {
  caseStudyProductLabels,
  getCaseStudyBySlug,
  type CaseStudy,
} from "@/lib/case-studies";
import {
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";

export function CaseStudySibling({ study }: { study: CaseStudy }) {
  if (!study.siblingSlug) return null;
  const sibling = getCaseStudyBySlug(study.siblingSlug);
  if (!sibling) return null;

  const label =
    study.siblingLabel ??
    `${caseStudyProductLabels[sibling.productType]} case study`;

  return (
    <section className="border-t border-border-dark bg-bg-base py-12">
      <div className={LAYOUT_OUTER_CLASS}>
        <div className={LAYOUT_INNER_CLASS}>
          <Reveal>
            <Link
              href={`/portfolio/${sibling.slug}`}
              className="group flex flex-col gap-4 rounded-soft border border-border-dark bg-bg-card/30 p-4 no-underline transition-colors hover:border-border-strong sm:flex-row sm:items-center sm:gap-5 sm:p-5"
            >
              <div
                className="relative aspect-[16/10] w-full shrink-0 overflow-hidden rounded-soft sm:aspect-auto sm:h-24 sm:w-40"
                style={{ background: sibling.imageGradient }}
              >
                {sibling.coverImage ? (
                  <Image
                    src={sibling.coverImage}
                    alt=""
                    fill
                    className="object-cover object-top opacity-90 transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="160px"
                  />
                ) : null}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-purple-light">
                  Also built for {study.client}
                </p>
                <p className="mt-1 font-heading text-heading-sm font-bold text-text-heading">
                  {label}
                </p>
                <p className="mt-1 line-clamp-2 text-body-sm text-text-sub">
                  {sibling.description}
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 text-body-sm font-semibold text-brand-purple-light sm:pr-1">
                Open case study
                <ArrowUpRight className="!h-3.5 !w-3.5 !text-brand-purple-light transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
