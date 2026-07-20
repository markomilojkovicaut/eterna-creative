import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
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
              ${template.price}
            </p>
          ) : null}
          <div className="mt-6">
            <Button variant="primary" size="md" type="button">
              {template.isPaid ? "Purchase template" : "Download template"}
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
