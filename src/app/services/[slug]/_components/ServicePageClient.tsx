'use client';

import { useServicePage } from '@/hooks/api/useServices';
import { notFound } from 'next/navigation';
import {
  ServiceHero,
  ServiceFeatures,
  ServiceFAQ
} from '../../_components';

interface ServicePageClientProps {
  slug: string;
}

export function ServicePageClient({ slug }: ServicePageClientProps) {
  const { data: serviceData, isLoading, error } = useServicePage(slug);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
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
      <ServiceFeatures service={service} />
      <ServiceFAQ service={service} />
    </div>
  );
}
