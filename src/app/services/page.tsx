import { Metadata } from 'next';
import { ServicesPageClient } from './_components';
import { createServicesMetadata } from '@/lib/meta';

export const metadata: Metadata = createServicesMetadata();

export default function ServicesPage() {
  return <ServicesPageClient />;
}
