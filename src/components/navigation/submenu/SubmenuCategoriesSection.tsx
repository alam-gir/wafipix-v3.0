import { ServiceCategory } from '@/lib/navigation';
import { SubmenuCategory } from './SubmenuCategory';

interface SubmenuCategoriesSectionProps {
  categories: ServiceCategory[];
  activeSubmenuItem?: string | null;
  onSubmenuItemClick?: (submenuItemId: string) => void;
}

export function SubmenuCategoriesSection({
  categories,
  activeSubmenuItem,
  onSubmenuItemClick,
}: SubmenuCategoriesSectionProps) {
  return (
    <div className="col-span-12 lg:col-span-9 p-6 lg:p-8">
      <div
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
              onSubmenuItemClick={onSubmenuItemClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 