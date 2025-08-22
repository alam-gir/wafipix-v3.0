import { Metadata } from 'next';
import { WorksPageClient } from './_components/WorksPageClient';
import PageViewTracker from "@/components/analytics/PageViewTracker";
import { createWorksMetadata } from "@/lib/meta";

export const metadata: Metadata = createWorksMetadata();

export default async function Page({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const sp = await searchParams;
  const f = typeof sp.filter === 'string' ? sp.filter : null;
  return (
    <>
      <PageViewTracker 
        pageTitle="Our Works - Wafipix"
        pageType="portfolio"
        contentName="Works Page"
        contentCategory="Portfolio Showcase"
      />
      <WorksPageClient filter={f} />
    </>
  );
}
