import { motion } from 'framer-motion';
import { navigation } from '@/lib/navigation';
import { MobileNavbarItem } from './MobileNavbarItem';

interface MobileNavbarContainerProps {
  children: React.ReactNode;
  activeMenuItem: string | null;
  activeSubmenu: string | null;
  isMenuItemActive: (itemId: string) => boolean;
  handleItemClick: (item: typeof navigation[0]) => void;
}

export function MobileNavbarContainer({
  children,
  activeMenuItem,
  activeSubmenu,
  isMenuItemActive,
  handleItemClick,
}: MobileNavbarContainerProps) {
  return (
    <motion.nav
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-xl border-t border-border/20" />
      
      {/* Navigation Items */}
      <div className="relative px-4 py-3">
        <div className="flex items-center justify-around">
          {navigation.map((item) => {
            const isActive = isMenuItemActive(item.id) || activeSubmenu === item.id;
            
            return (
              <MobileNavbarItem
                key={item.id}
                item={item}
                isActive={isActive}
                onClick={() => handleItemClick(item)}
              />
            );
          })}
        </div>
      </div>

      {/* Submenu Panel - Ensure proper positioning and visibility */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.nav>
  );
} 