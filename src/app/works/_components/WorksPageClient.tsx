'use client';

import { cn } from '@/lib/utils';
import { useWorksAsCards } from '@/hooks/api/useWorks';
import WorksFilterBar from './WorksFilterBar';
import WorksGrid from './WorksGrid';
import ShowMoreButton from './ShowMoreButton';

interface WorksPageClientProps {
  filter: string | null;
}

export function WorksPageClient({ filter }: WorksPageClientProps) {
  const { data: worksData, isLoading, error } = useWorksAsCards();
  
  if (isLoading) {
    return (
      <main className={cn('container mx-auto px-4 md:px-6 py-10 md:py-14 space-y-8')}>
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </main>
    );
  }
  
  if (error || !worksData?.data) {
    return (
      <main className={cn('container mx-auto px-4 md:px-6 py-10 md:py-14 space-y-8')}>
        <div className="flex items-center justify-center py-20">
          <div className="text-center">
            <p className="text-muted-foreground">Failed to load works</p>
            <p className="text-sm text-muted-foreground">Please try again later</p>
          </div>
        </div>
      </main>
    );
  }

  const worksAsCard = worksData.data;
  
  function filterCards(filter: string | null): Array<typeof worksAsCard[0]> {
    if (!filter) return worksAsCard;

    // Match by service name
    return worksAsCard.filter((w) => w.service.toLowerCase() === filter.toLowerCase());
  }

  const f = filter;
  const items = filterCards(f);

  // Basic pagination for demo
  const pageSize = 7;
  const first = items.slice(0, pageSize);
  const hasMore = items.length > pageSize;

  return (
    <main className={cn('container mx-auto px-4 md:px-6 py-10 md:py-14 space-y-8')}>
      <section className="flex flex-col gap-6 md:mt-12">
        <WorksFilterBar filters={[]} />
      </section>

      <section>
        <WorksGrid items={first} />
        <ShowMoreButton hasMore={hasMore} href={`/works${f ? `?filter=${encodeURIComponent(f)}` : ''}`} />
      </section>
    </main>
  );
}
