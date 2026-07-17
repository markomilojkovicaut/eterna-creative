import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { HEADER_OFFSET_CLASS } from "@/lib/layout-constants";
import { Section } from "@/components/layout/Section";
import type { Template } from "@/lib/types";

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function getTemplateBySlug(slug: string): Promise<Template | null> {
  void slug;
  return null;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return [];
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = await getTemplateBySlug(slug);

  if (template) {
    return {
      title: `${template.title} | Eterna Templates`,
      description: template.description,
    };
  }

  return {
    title: "Template | Eterna Templates",
    description:
      "Bubble.io starter templates from Eterna for faster MVP development.",
  };
}

export default async function TemplatePage({ params }: PageProps) {
  const { slug } = await params;
  const template = await getTemplateBySlug(slug);

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
            <Badge variant={template.isPaid ? "purple" : "success"}>
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
            <Button variant="primary" size="md">
              {template.isPaid ? "Purchase template" : "Download template"}
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
