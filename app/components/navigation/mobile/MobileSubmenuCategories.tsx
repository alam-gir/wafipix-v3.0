import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ServiceCategory } from '@/lib/navigation';
import { MobileSubmenuCategory } from './MobileSubmenuCategory';

interface MobileSubmenuCategoriesProps {
  categories: ServiceCategory[];
  onSubmenuItemClick: (submenuItemId: string) => void;
}

export function MobileSubmenuCategories({ 
  categories, 
  onSubmenuItemClick 
}: MobileSubmenuCategoriesProps) {
  return (
    <div className="grid grid-cols-1 gap-4 max-h-64 overflow-y-auto custom-scrollbar">
      {categories.map((category) => (
        <MobileSubmenuCategory
          key={category.id}
          category={category}
          onSubmenuItemClick={onSubmenuItemClick}
        />
      ))}
    </div>
  );
} 