import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/Badge";
import { CallToActionLink } from "@/components/ui/CallToActionLink";
import { SecondaryCtaLink } from "@/components/ui/SecondaryCtaLink";
import {
  formatTemplatePrice,
  getAllTemplateSlugs,
  getTemplateBySlug,
} from "@/lib/templates-content";
import { HEADER_OFFSET_CLASS } from "@/lib/layout-constants";
import { Section } from "@/components/layout/Section";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getAllTemplateSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (template) {
    return {
      title: `${template.title} | Eterna Templates`,
      description: template.description,
    };
  }

  return {
    title: "Template | Eterna Templates",
    description: "Starter templates from Eterna for faster MVP development.",
  };
}

export default async function TemplatePage({ params }: PageProps) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    notFound();
  }

  return (
    <main className={HEADER_OFFSET_CLASS}>
      <Section>
        <Link
          href="/templates"
          className="text-body-sm text-brand-purple-light transition-colors hover:text-text-heading"
        >
          ← Back to Templates
        </Link>
        <div className="mt-8">
          <div className="flex flex-wrap gap-2">
            {template.tags.map((tag) => (
              <Badge key={tag} variant="pink">
                {tag}
              </Badge>
            ))}
            <Badge variant={template.isPaid ? "purple" : "muted"}>
              {template.isPaid ? "Paid" : "Free"}
            </Badge>
          </div>
          <h1 className="mt-4 font-heading text-display-md text-text-heading">
            {template.title}
          </h1>
          <p className="mt-4 max-w-2xl text-body-md text-text-body">
            {template.description}
          </p>
          {template.isPaid ? (
            <p className="mt-4 text-heading-md text-text-sub">
              {formatTemplatePrice(template)}
            </p>
          ) : null}
          <div className="mt-6 flex flex-wrap gap-3">
            {template.isPaid ? (
              <CallToActionLink href="/book">
                Inquire to purchase
              </CallToActionLink>
            ) : (
              <a
                href={template.downloadUrl}
                download
                className="inline-flex items-center justify-center rounded-soft bg-text-heading px-6 py-3 text-body-md font-semibold text-bg-base no-underline transition-opacity hover:opacity-90"
              >
                Download template
              </a>
            )}
            {template.demoUrl ? (
              <a
                href={template.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-soft border border-border-dark bg-bg-card/60 px-6 py-[10px] text-body-md font-medium text-text-heading no-underline transition-colors hover:border-border-strong hover:bg-bg-card/80"
              >
                View live demo
              </a>
            ) : (
              <SecondaryCtaLink href="/book">Book a strategy call</SecondaryCtaLink>
            )}
          </div>
        </div>
      </Section>
    </main>
  );
}
