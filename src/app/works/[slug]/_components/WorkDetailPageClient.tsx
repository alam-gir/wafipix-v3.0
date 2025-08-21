'use client';

import { useWork } from '@/hooks/api/useWorks';
import { useWorksScrollRestoration } from '@/hooks';
import { notFound } from 'next/navigation';
import { WorkDetailHero, WorkDetailContent, WorkDetailGallery, WorkNavigation } from './index';
import Loading from '@/components/ui/Loading';

interface WorkDetailPageClientProps {
  slug: string;
}

export function WorkDetailPageClient({ slug }: WorkDetailPageClientProps) {
  // Initialize scroll restoration
  useWorksScrollRestoration();
  
  const { data: workData, isLoading, error } = useWork(slug);
  
  if (isLoading) {
    return (
      <main className="h-screen w-screen">
        <Loading />
      </main>
    );
  }

  if (error || !workData?.data) {
    notFound();
  }

  const work = workData.data;

  return (
    <main className="min-h-screen bg-background">
      <WorkDetailHero work={work} />
      <WorkDetailContent work={work} />
      <WorkDetailGallery gallery={work.gallery} />
    </main>
  );
}
