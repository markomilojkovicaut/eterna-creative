import Image from "next/image";
import Link from "next/link";

import { TemplateOrderButton } from "@/components/templates/TemplateShopCard";
import { Reveal } from "@/components/ui/Reveal";
import { DarkSectionBackdrop } from "@/components/ui/DarkSectionBackdrop";
import {
  formatTemplatePrice,
  isExternalTemplateHref,
} from "@/lib/templates-content";
import type { Template } from "@/lib/types";
import {
  HEADER_OFFSET_CLASS,
  LAYOUT_INNER_CLASS,
  LAYOUT_OUTER_CLASS,
} from "@/lib/layout-constants";
import { sectionBackdropPresets } from "@/lib/section-backdrops";
import { cn } from "@/lib/utils";

function PreviewLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const external = isExternalTemplateHref(href);
  const classes = cn(
    "inline-flex items-center justify-center rounded-soft border border-border-dark px-5 py-2.5 text-body-sm font-semibold text-brand-purple-light no-underline transition-colors hover:border-border-strong hover:text-text-heading",
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function TemplateProductView({ template }: { template: Template }) {
  const previewHref = template.demoUrl || template.orderUrl || template.downloadUrl;

  return (
    <main className={HEADER_OFFSET_CLASS}>
      <section className="relative overflow-hidden bg-bg-base pb-section pt-section">
        <DarkSectionBackdrop {...sectionBackdropPresets.challenges} />
        <div className={cn("relative z-10", LAYOUT_OUTER_CLASS)}>
          <div className={LAYOUT_INNER_CLASS}>
            <Reveal immediate>
              <nav aria-label="Breadcrumb">
                <ol className="flex flex-wrap items-center gap-2 text-body-sm text-text-muted">
                  <li>
                    <Link
                      href="/templates"
                      className="text-brand-purple-light transition-colors hover:text-text-heading"
                    >
                      Templates
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li className="text-text-sub">{template.title}</li>
                </ol>
              </nav>
            </Reveal>

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-14">
              <Reveal immediate delay={40}>
                <div className="relative aspect-[16/11] overflow-hidden rounded-soft border border-border-dark bg-bg-card/40">
                  <Image
                    src={template.previewImage}
                    alt={`${template.title} preview`}
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>
              </Reveal>

              <Reveal immediate delay={80} className="lg:sticky lg:top-24">
                <div className="rounded-soft border border-border-dark bg-bg-card/30 p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    {template.platform ? (
                      <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-purple-light">
                        {template.platform}
                      </span>
                    ) : null}
                    {template.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border-dark px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h1 className="mt-4 font-heading text-display-md text-text-heading">
                    {template.title}
                  </h1>
                  {template.subtitle ? (
                    <p className="mt-2 text-body-md text-text-sub">
                      {template.subtitle}
                    </p>
                  ) : null}
                  <p className="mt-4 text-body-md leading-relaxed text-text-body">
                    {template.description}
                  </p>

                  <div className="mt-8 border-t border-border-dark pt-6">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                      Price
                    </p>
                    <p className="mt-1 font-heading text-[2rem] font-bold tracking-[-0.03em] text-text-heading">
                      {formatTemplatePrice(template)}
                    </p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <TemplateOrderButton template={template} className="px-6 py-3 text-body-md" />
                    {previewHref ? (
                      <PreviewLink href={previewHref}>Preview</PreviewLink>
                    ) : null}
                  </div>

                  <p className="mt-4 text-body-sm text-text-muted">
                    Need customization?{" "}
                    <Link
                      href="/book"
                      className="font-semibold text-brand-purple-light hover:text-text-heading"
                    >
                      Book a strategy call
                    </Link>
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {template.features && template.features.length > 0 ? (
        <section className="bg-bg-base pb-section">
          <div className={LAYOUT_OUTER_CLASS}>
            <div className={LAYOUT_INNER_CLASS}>
              <Reveal>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-purple-light">
                  Why this template
                </p>
                <ul className="mt-8 grid gap-8 sm:grid-cols-2">
                  {template.features.map((feature) => (
                    <li key={feature.title}>
                      <h2 className="font-heading text-heading-sm font-bold text-text-heading">
                        {feature.title}
                      </h2>
                      <p className="mt-2 text-body-md leading-relaxed text-text-body">
                        {feature.body}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {template.note ? (
                <Reveal delay={80}>
                  <div className="mt-14 max-w-2xl border-l border-brand-purple-light/40 pl-5 sm:pl-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-purple-light">
                      Coming next
                    </p>
                    <p className="mt-3 text-body-md leading-relaxed text-text-body">
                      {template.note}
                    </p>
                    {template.notePrice ? (
                      <p className="mt-2 text-body-sm font-semibold text-text-sub">
                        {template.notePrice}
                      </p>
                    ) : null}
                    <Link
                      href="/book"
                      className="mt-4 inline-block text-body-sm font-semibold text-brand-purple-light hover:text-text-heading"
                    >
                      Request early access
                    </Link>
                  </div>
                </Reveal>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
