import { getServicePageData } from '@/lib/demo-data';
import {
  ServiceHero,
  ServiceFeatures,
  ServiceFAQ
} from '../_components';
import { notFound } from 'next/navigation';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = getServicePageData(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background" key={params.slug}>
      <ServiceHero service={service} />
      <ServiceFeatures service={service} />
      <ServiceFAQ service={service} />
    </div>
  );
}

// Generate static params for all services
export function generateStaticParams() {
  const slugs = ['logo-design', 'branding', 'motion-video'];
  return slugs.map((slug) => ({
    slug,
  }));
}
