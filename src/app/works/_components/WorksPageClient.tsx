'use client';

import { cn } from '@/lib/utils';
import { useWorksAsCards } from '@/hooks/api/useWorks';
import WorksFilterBar from './WorksFilterBar';
import WorksGrid from './WorksGrid';
import ShowMoreButton from './ShowMoreButton';
import Loading from '@/components/ui/Loading';
import Error from '@/app/error';


interface WorksPageClientProps {
  filter: string | null;
}

export function WorksPageClient({ filter }: WorksPageClientProps) {
  const { data: worksData, isLoading, error } = useWorksAsCards();
  if (isLoading) {
    return (
      <main className={cn('h-screen w-screen')}>
        <Loading />
      </main>
    );
  }
  
  if (error || !worksData?.data) {
    return <Error error={error} reset={() => {}}/>
  }

  const worksAsCard = worksData.data;

  const f = filter;


  return (
    <main className={cn('container mx-auto px-4 md:px-6 py-10 md:py-14 space-y-8')}>
      <section className="flex flex-col gap-6 md:mt-12">
        <WorksFilterBar filters={[{service: "abc"}]} />
      </section>

      <section>
        <WorksGrid items={worksAsCard} />
        <ShowMoreButton hasMore={true} href={`/works${f ? `?filter=${encodeURIComponent(f)}` : ''}`} />
      </section>
    </main>
  );
}
