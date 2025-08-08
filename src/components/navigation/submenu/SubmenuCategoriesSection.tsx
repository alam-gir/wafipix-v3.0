import { RefObject } from 'react';
import { ServiceCategory } from '@/lib/navigation';
import { SubmenuCategory } from './SubmenuCategory';

interface SubmenuCategoriesSectionProps {
  categories: ServiceCategory[];
  activeSubmenuItem?: string | null;
  scrollContainerRef: RefObject<HTMLDivElement | null>;
}

export function SubmenuCategoriesSection({
  categories,
  activeSubmenuItem,
  scrollContainerRef,
}: SubmenuCategoriesSectionProps) {
  return (
    <div className="col-span-12 lg:col-span-9 p-6 lg:p-8">
      <div
        ref={scrollContainerRef}
        className="max-h-96 overflow-y-auto pr-4 custom-scrollbar"
        onWheel={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <SubmenuCategory
              key={category.id}
              category={category}
              categoryIndex={categoryIndex}
              activeSubmenuItem={activeSubmenuItem}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 