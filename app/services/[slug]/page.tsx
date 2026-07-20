import { notFound } from "next/navigation";

import { ServiceDetailView } from "@/components/services/ServiceDetailView";
import { getServicePageContent, getAllServiceSlugs } from "@/lib/service-pages";
import { services } from "@/lib/services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = getServicePageContent(slug);
  const service = services.find((s) => s.id === slug);

  if (!page || !service) {
    return { title: "Service | Eterna" };
  }

  return {
    title: `${service.title} | Eterna`,
    description: page.hero.subheading,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const page = getServicePageContent(slug);
  const service = services.find((s) => s.id === slug);

  if (!page || !service) {
    notFound();
  }

  return <ServiceDetailView page={page} service={service} />;
}
