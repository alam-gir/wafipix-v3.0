import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ServiceCategory } from '@/lib/navigation';
import { MobileSubmenuItem } from './MobileSubmenuItem';

interface MobileSubmenuCategoryProps {
  category: ServiceCategory;
  onSubmenuItemClick: (submenuItemId: string) => void;
}

export function MobileSubmenuCategory({ 
  category, 
  onSubmenuItemClick 
}: MobileSubmenuCategoryProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-semibold text-foreground border-b border-border/20 pb-1">
        {category.title}
      </h3>
      <div className="space-y-1">
        {category.items.map((subItem) => (
          <MobileSubmenuItem
            key={subItem.id}
            subItem={subItem}
            onSubmenuItemClick={onSubmenuItemClick}
          />
        ))}
      </div>
    </div>
  );
} 