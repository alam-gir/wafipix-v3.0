import { worksAsCard, workFilters, works, type WorkAsCard } from '@/lib/demo-data';
import WorksFilterBar from './_components/WorksFilterBar';
import WorksGrid from './_components/WorksGrid';
import ShowMoreButton from './_components/ShowMoreButton';
import { Suspense } from 'react';
import { Metadata } from 'next';
import { cn } from '@/lib/utils';
import { workCategoryMap } from '@/lib/demo-data';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Works — Wafipix',
  description: 'Selected work across brand, product and motion.',
};

function filterCards(filter: string | null): Array<WorkAsCard> {
  if (!filter) return worksAsCard;

  // Match by service name first
  const byService = works.filter((w) => w.service.toLowerCase() === filter.toLowerCase()).map((w) => w.id);
  if (byService.length > 0) {
    return worksAsCard.filter((c) => byService.includes(c.id));
  }

  // Fallback: match by category via map
  const byCategory = Object.entries(workCategoryMap)
    .filter(([, cats]) => cats.map((c) => c.toLowerCase()).includes(filter.toLowerCase()))
    .map(([id]) => id);
  return worksAsCard.filter((c) => byCategory.includes(c.id));
}

function WorksPageContent({ filter }: { filter: string | null }) {
  const f = filter;
  const items = filterCards(f);

  // Basic pagination for demo
  const pageSize = 7;
  const first = items.slice(0, pageSize);
  const hasMore = items.length > pageSize;

  return (
    <main className={cn('container mx-auto px-4 md:px-6 py-10 md:py-14 space-y-8')}>
      <section className="flex flex-col gap-6 md:mt-12">
        <WorksFilterBar filters={workFilters} />
      </section>

      <section>
        <WorksGrid items={first} />
        <ShowMoreButton hasMore={hasMore} href={`/works${f ? `?filter=${encodeURIComponent(f)}` : ''}`} />
      </section>
    </main>
  );
}

export default async function Page({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const sp = await searchParams;
  const f = typeof sp.filter === 'string' ? sp.filter : null;
  return (
    <Suspense>
      <WorksPageContent filter={f} />
    </Suspense>
  );
}
