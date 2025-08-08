import { motion, AnimatePresence } from 'framer-motion';
import { ServiceCategory } from '@/lib/navigation';
import SubmenuPanel from '../submenu/SubmenuPanel';

interface DesktopSubmenuSectionProps {
  hasActiveSubmenu: boolean;
  activeSubmenuData: ServiceCategory[] | null;
  activeSubmenuItem: string | null;
  onSubmenuMouseEnter: () => void;
  onSubmenuMouseLeave: () => void;
}

export function DesktopSubmenuSection({ 
  hasActiveSubmenu,
  activeSubmenuData,
  activeSubmenuItem,
  onSubmenuMouseEnter,
  onSubmenuMouseLeave,
}: DesktopSubmenuSectionProps) {
  return (
    <AnimatePresence>
      {hasActiveSubmenu && (
        <motion.div
          className="mt-0"
          onMouseEnter={onSubmenuMouseEnter}
          onMouseLeave={onSubmenuMouseLeave}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <SubmenuPanel 
            categories={activeSubmenuData!} 
            activeSubmenuItem={activeSubmenuItem}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
} 