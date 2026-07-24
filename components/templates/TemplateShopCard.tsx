import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "@/components/ui/ArrowUpRight";
import { Reveal } from "@/components/ui/Reveal";
import {
  formatTemplatePrice,
  getTemplateOrderHref,
  isExternalTemplateHref,
} from "@/lib/templates-content";
import type { Template } from "@/lib/types";
import { cn } from "@/lib/utils";

function OrderButton({
  template,
  className,
}: {
  template: Template;
  className?: string;
}) {
  const href = getTemplateOrderHref(template);
  const label = template.orderLabel ?? "Order";
  const external = isExternalTemplateHref(href);
  const classes = cn(
    "inline-flex items-center justify-center gap-1.5 rounded-soft bg-text-heading px-5 py-2.5 text-body-sm font-semibold !text-bg-base no-underline transition-opacity hover:opacity-90",
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {label}
        <ArrowUpRight className="!h-3.5 !w-3.5 !text-bg-base" />
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {label}
      <ArrowUpRight className="!h-3.5 !w-3.5 !text-bg-base" />
    </Link>
  );
}

export function TemplateShopCard({ template }: { template: Template }) {
  return (
    <Reveal className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-soft border border-border-dark bg-bg-card/25 transition-colors hover:border-border-strong">
        <Link
          href={`/templates/${template.slug}`}
          className="relative block aspect-[16/10] overflow-hidden no-underline"
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-[#1F1145] via-bg-base to-bg-card"
            aria-hidden
          />
          <Image
            src={template.previewImage}
            alt=""
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </Link>

        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="flex flex-wrap items-center gap-2">
            {template.platform ? (
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-purple-light">
                {template.platform}
              </span>
            ) : null}
            {template.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border-dark px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.06em] text-text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/templates/${template.slug}`}
            className="mt-3 no-underline"
          >
            <h2 className="font-heading text-heading-sm font-bold text-text-heading transition-colors group-hover:text-brand-purple-light">
              {template.title}
            </h2>
          </Link>
          {template.subtitle ? (
            <p className="mt-1.5 text-body-sm text-text-sub">{template.subtitle}</p>
          ) : (
            <p className="mt-1.5 line-clamp-2 text-body-sm text-text-body">
              {template.description}
            </p>
          )}

          <div className="mt-auto flex items-end justify-between gap-4 pt-6">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-text-muted">
                Price
              </p>
              <p className="mt-1 font-heading text-heading-md font-bold text-text-heading">
                {formatTemplatePrice(template)}
              </p>
            </div>
            <OrderButton template={template} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export { OrderButton as TemplateOrderButton };
