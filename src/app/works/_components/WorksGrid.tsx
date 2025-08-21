import type { WorkAsCard } from '@/types';
import WorkCard from './WorkCard';
import { cn } from '@/lib/utils';

interface WorksGridProps {
  items: Array<WorkAsCard>;
  className?: string;
}

export default function WorksGrid({ items, className }: WorksGridProps) {
  // Create rows: odd rows (0, 2, 4...) have 1 item, even rows (1, 3, 5...) have 2 items
  const rows: Array<Array<WorkAsCard>> = [];
  let currentIndex = 0;
  
  while (currentIndex < items.length) {
    const rowIndex = rows.length;
    const isOddRow = rowIndex % 2 === 0;
    
    if (isOddRow) {
      // Odd row: 1 item spanning full width
      rows.push([items[currentIndex]]);
      currentIndex += 1;
    } else {
      // Even row: 2 items side by side
      const rowItems = items.slice(currentIndex, currentIndex + 2);
      rows.push(rowItems);
      currentIndex += 2;
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
              'flex flex-col md:flex-row gap-6 md:gap-8',
              // Odd rows: 1 item full width, Even rows: 2 items side by side
              isOddRow ? 'md:justify-start' : 'md:justify-between'
            )}
          >
            {row.map((item) => (
              <div 
                key={item.id} 
                className={cn(
                  // Mobile: full width, Desktop: odd rows get full width, even rows get 1/2 width
                  'w-full overflow-hidden rounded-xl',
                  isOddRow ? 'md:w-full' : 'md:w-[calc(50%-0.75rem)]'
                )}
              >
                <WorkCard item={item} />
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}