import { forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceCategory } from '@/lib/navigation';
import { MobileSubmenuHeader } from './MobileSubmenuHeader';
import { MobileSubmenuCategories } from './MobileSubmenuCategories';
import { MobileSubmenuCTA } from './MobileSubmenuCTA';

interface MobileSubmenuPanelProps {
  activeSubmenuData: ServiceCategory[];
  onClose: () => void;
  onSubmenuItemClick: (submenuItemId: string) => void;
}

export const MobileSubmenuPanel = forwardRef<HTMLDivElement, MobileSubmenuPanelProps>(
  ({ activeSubmenuData, onClose, onSubmenuItemClick }, ref) => {
    return (
      <AnimatePresence>
        <motion.div
          ref={ref}
          className="absolute bottom-full left-0 right-0 border-b border-border/20 bg-background/95 backdrop-blur-xl overflow-hidden"
          initial={{ height: 0, opacity: 0, y: 20 }}
          animate={{ height: 'auto', opacity: 1, y: 0 }}
          exit={{ height: 0, opacity: 0, y: 20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          style={{ 
            maxHeight: '80vh',
            minHeight: '200px', // Ensure minimum height for visibility
            zIndex: 60 // Higher than the navbar z-index
          }}
        >
          <div className="p-4 overflow-y-auto">
            <MobileSubmenuHeader onClose={onClose} />
            
            <MobileSubmenuCategories
              categories={activeSubmenuData}
              onSubmenuItemClick={onSubmenuItemClick}
            />
            
            <MobileSubmenuCTA onClose={onClose} />
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }
);

MobileSubmenuPanel.displayName = 'MobileSubmenuPanel'; 