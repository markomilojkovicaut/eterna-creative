import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { TemplateProductView } from "@/components/templates/TemplateProductView";
import {
  getAllTemplateSlugs,
  getTemplateBySlug,
} from "@/lib/templates-content";

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
    description: "Premium Bubble templates from Eterna Creative.",
  };
}

export default async function TemplatePage({ params }: PageProps) {
  const { slug } = await params;
  const template = getTemplateBySlug(slug);

  if (!template) {
    notFound();
  }

  return <TemplateProductView template={template} />;
}
