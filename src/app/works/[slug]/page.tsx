import { Metadata } from 'next';
import { WorkDetailPageClient } from './_components/WorkDetailPageClient';
import { createWorkMetadata } from '@/lib/meta';
import { works } from '@/lib/data/works';

interface WorkDetailPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: WorkDetailPageProps): Promise<Metadata> {
  const work = works.find(w => w.slug === params.slug);
  
  if (!work) {
    return {
      title: 'Work Not Found',
      description: 'The requested work could not be found.',
    };
  }

  return createWorkMetadata(work);
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  return <WorkDetailPageClient slug={params.slug} />;
}


