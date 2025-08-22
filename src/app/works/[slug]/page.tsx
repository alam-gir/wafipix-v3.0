import { Metadata } from 'next';
import { WorkDetailPageClient } from './_components/WorkDetailPageClient';
import { createWorkMetadata } from '@/lib/meta';
import { works } from '@/lib/data/works';

interface WorkDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const work = works.find(w => w.slug === slug);
  
  if (!work) {
    return {
      title: 'Work Not Found',
      description: 'The requested work could not be found.',
    };
  }

  return createWorkMetadata(work);
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  return <WorkDetailPageClient slug={slug} />;
}


