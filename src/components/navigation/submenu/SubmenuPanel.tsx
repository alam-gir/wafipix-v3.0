'use client';

import { forwardRef } from 'react';
import { ServiceCategory } from '@/lib/navigation';
import { SubmenuCategoriesSection } from './SubmenuCategoriesSection';
import { SubmenuCTASection } from './SubmenuCTASection';

interface SubmenuPanelProps {
  categories: ServiceCategory[];
  activeSubmenuItem?: string | null;
  onClose?: () => void;
  onSubmenuItemClick?: (submenuItemId: string) => void;
}

const SubmenuPanel = forwardRef<HTMLDivElement, SubmenuPanelProps>(({
  categories,
  activeSubmenuItem,
  onClose,
  onSubmenuItemClick,
}, ref) => {
  return (
    <div 
      ref={ref}
      className="border-t border-border/20 bg-background backdrop-blur-xl -mt-px overflow-hidden"
    >
      <div className="grid grid-cols-12 min-h-96">
        <SubmenuCategoriesSection
          categories={categories}
          activeSubmenuItem={activeSubmenuItem}
          onSubmenuItemClick={onSubmenuItemClick}
        />
        <SubmenuCTASection onClose={onClose} />
      </div>
    </div>
  );
});

SubmenuPanel.displayName = 'SubmenuPanel';

export default SubmenuPanel; 