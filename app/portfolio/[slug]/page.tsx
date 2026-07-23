import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyView } from "@/components/case-study/CaseStudyView";
import { getAllCaseStudySlugs, getCaseStudyBySlug } from "@/lib/case-studies";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseStudyBySlug(slug);

  if (item) {
    return {
      title: `${item.client} | Eterna Portfolio`,
      description: item.description,
    };
  }

  return {
    title: "Case Study | Eterna Portfolio",
    description: "Case studies from Eterna - products built for startup founders.",
  };
}

export default async function PortfolioCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const item = getCaseStudyBySlug(slug);

  if (!item) {
    notFound();
  }

  return <CaseStudyView study={item} />;
}
