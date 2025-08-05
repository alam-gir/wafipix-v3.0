import { motion } from 'framer-motion';
import { ServiceCategory } from '@/lib/navigation';
import { SubmenuCategoryHeader } from './SubmenuCategoryHeader';
import { SubmenuServiceItem } from './SubmenuServiceItem';

interface SubmenuCategoryProps {
  category: ServiceCategory;
  categoryIndex: number;
  activeSubmenuItem?: string | null;
}

export function SubmenuCategory({
  category,
  categoryIndex,
  activeSubmenuItem,
}: SubmenuCategoryProps) {
  return (
    <motion.div
      key={category.id}
      className="group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: categoryIndex * 0.1 }}
    >
      <SubmenuCategoryHeader title={category.title} />
      <div className="space-y-2">
        {category.items.map((subItem, itemIndex) => (
          <SubmenuServiceItem
            key={subItem.id}
            subItem={subItem}
            categoryIndex={categoryIndex}
            itemIndex={itemIndex}
            activeSubmenuItem={activeSubmenuItem}
          />
        ))}
      </div>
    </motion.div>
  );
} 