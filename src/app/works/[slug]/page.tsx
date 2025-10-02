"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useWorkDetail } from '@/hooks/api/useWorks';
import { 
  WorkDetailCover, 
  WorkDetailDescription, 
  WorkDetailGallery 
} from './_components';
import Loading from '@/components/ui/Loading';
import ErrorMessage from '@/components/ui/ErrorMessage';

interface WorkDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  const [slug, setSlug] = useState<string>('');
  const router = useRouter();
  const { work, isLoading, error } = useWorkDetail(slug);

  useEffect(() => {
    params.then(({ slug }) => setSlug(slug));
  }, [params]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <Loading />
        </div>
      </div>
    );
  }

  if (error || !work) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <ErrorMessage 
            error={error?.message || 'Work not found'} 
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Cover Section */}
      <WorkDetailCover work={work} onBack={() => router.push('/works')} />

      {/* Description Section */}
      <WorkDetailDescription work={work} />

      {/* Gallery Section */}
      <WorkDetailGallery galleries={work.galleries} />
    </div>
  );
}
