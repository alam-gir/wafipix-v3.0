import type { WorkAsCard } from '@/types';
import WorkCard from './WorkCard';
import { cn } from '@/lib/utils';

interface WorksGridProps {
  items: Array<WorkAsCard>;
  className?: string;
}

export default function WorksGrid({ items, className }: WorksGridProps) {
  // Layout: odd rows -> 1 card, even rows -> 2 cards (desktop), mobile -> 1
  // We build rows manually for deterministic layout
  const rows: Array<Array<WorkAsCard>> = [];
  for (let i = 0; i < items.length; ) {
    const isOddRow = rows.length % 2 === 0; // 0-indexed
    if (isOddRow) {
      rows.push([items[i]]);
      i += 1;
    } else {
      rows.push(items.slice(i, i + 2));
      i += 2;
    }
  }

  return (
    <div className={cn('space-y-6 md:space-y-8', className)}>
      {rows.map((row, rowIndex) => {
        const isOddRow = rowIndex % 2 === 0;
        return (
          <div
            key={rowIndex}
            className={cn(
              'grid grid-cols-1 gap-6 md:gap-8',
              !isOddRow && 'md:grid-cols-2'
            )}
          >
            {row.map((item) => (
              <WorkCard key={item.id} item={item} />
            ))}
          </div>
        );
      })}
    </div>
  );
}


