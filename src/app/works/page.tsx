import React from 'react';
import { Metadata } from 'next';
import { createWorksMetadata } from '@/lib/meta';
import WorksPageClient from './_components/WorksPageClient';
import PageViewTracker from '@/components/analytics/PageViewTracker';

export const metadata: Metadata = createWorksMetadata();

export default function WorksPage() {
  return (
    <main className="min-h-screen">
      <PageViewTracker
        pageTitle="Our Works - Wafipix Portfolio"
        pageType="works"
        contentName="Wafipix Works Portfolio"
        contentCategory="Portfolio Showcase"
      />
      <WorksPageClient />
    </main>
  );
}

