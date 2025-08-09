'use client';

import { useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';
import MagneticWrapper from '@/components/ui/MagneticWrapper';
import type { WorkFilter } from '@/lib/demo-data';

interface WorksFilterBarProps {
  filters: Array<WorkFilter>;
  className?: string;
}

function getFilterLabel(filter: WorkFilter): string {
  // union helper: pick whichever property exists
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const f: any = filter;
  return (f.category as string) || (f.service as string) || '';
}

export default function WorksFilterBar({ filters, className }: WorksFilterBarProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const active = searchParams.get('filter');

  const labels = useMemo(() => {
    const unique = new Set<string>();
    filters.forEach((f) => unique.add(getFilterLabel(f)));
    return ['All', ...Array.from(unique)];
  }, [filters]);

  const handleChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (!value || value === 'All') {
      params.delete('filter');
    } else {
      params.set('filter', value);
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className={cn('w-full flex flex-wrap gap-3 md:gap-4', className)}>
      {labels.map((label) => {
        const isActive = (!active && label === 'All') || active === label;
        return (
          <MagneticWrapper key={label} attractArea={90}>
            <button
              type="button"
              aria-pressed={isActive}
              onClick={() => handleChange(label)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-semibold transition-colors border',
                // outline style for clarity in both light/dark
                isActive
                  ? 'bg-primary text-white border-primary shadow-sm'
                  : 'bg-transparent text-foreground border-foreground/20 hover:border-foreground/40'
              )}
            >
              {label}
            </button>
          </MagneticWrapper>
        );
      })}
    </div>
  );
}


