'use client';

import { useWork } from '@/hooks/api/useWorks';
import { notFound } from 'next/navigation';
import { WorkDetailHero, WorkDetailContent, WorkDetailGallery, WorkNavigation } from './index';

interface WorkDetailPageClientProps {
  slug: string;
}

export function WorkDetailPageClient({ slug }: WorkDetailPageClientProps) {
  const { data: workData, isLoading, error } = useWork(slug);
  
  if (isLoading) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </main>
    );
  }

  if (error || !workData?.data) {
    notFound();
  }

  const work = workData.data;
  
  // For now, we'll use the gallery from the work data
  // In the future, you can create a separate useWorkGallery hook
  const gallery = work.gallery || [];

  return (
    <main className="min-h-screen bg-background">
      <WorkDetailHero work={work} />
      <WorkDetailContent work={work} />
      {gallery.length > 0 && <WorkDetailGallery gallery={gallery} />}
      <WorkNavigation 
        currentWork={work} 
        previousWork={undefined} // TODO: Implement navigation logic
        nextWork={undefined} 
      />
    </main>
  );
}
