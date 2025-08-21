'use client';

import { useServicePage } from '@/hooks/api/useServices';
import { notFound } from 'next/navigation';
import {
  ServiceHero,
  ServiceFeatures,
  ServiceFAQ
} from '../../_components';
import Loading from '@/components/ui/Loading';

interface ServicePageClientProps {
  slug: string;
}

export function ServicePageClient({ slug }: ServicePageClientProps) {
  const { data: serviceData, isLoading, error } = useServicePage(slug);

  if (isLoading) {
    return (
      <div className="h-screen w-screen">
        <Loading />
      </div>
    );
  }

  if (error || !serviceData?.data) {
    notFound();
  }

  const service = serviceData.data;

  return (
    <div className="min-h-screen bg-background" key={slug}>
      <ServiceHero service={service} />
      <ServiceFeatures features={service.features} />
      <ServiceFAQ serviceTitle={service.title} faqs={service.faqs} />
    </div>
  );
}
