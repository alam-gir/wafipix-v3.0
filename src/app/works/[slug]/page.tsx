'use client';

import { notFound } from 'next/navigation';
import { findWorkBySlug, findGalleryByWorkId, findPreviousAndNextWork } from '@/lib/demo-data';
import { WorkDetailHero, WorkDetailContent, WorkDetailGallery, WorkNavigation } from './_components';

interface WorkDetailPageProps {
  params: {
    slug: string;
  };
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const work = findWorkBySlug(params.slug);
  
  if (!work) {
    notFound();
  }

  const gallery = findGalleryByWorkId(work.id);
  const { previousWork, nextWork } = findPreviousAndNextWork(work.id);

  return (
    <main className="min-h-screen bg-background">
      <WorkDetailHero work={work} />
      <WorkDetailContent work={work} />
      {gallery && <WorkDetailGallery gallery={gallery} />}
      <WorkNavigation 
        currentWork={work} 
        previousWork={previousWork} 
        nextWork={nextWork} 
      />
    </main>
  );
}


