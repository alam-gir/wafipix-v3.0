import { notFound } from 'next/navigation';
import { ServicePageClient } from './_components/ServicePageClient';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  
  return <ServicePageClient slug={slug} />;
}

// Generate static params for all services
export function generateStaticParams() {
  const slugs = ['logo-design', 'branding', 'motion-video'];
  return slugs.map((slug) => ({
    slug,
  }));
}
