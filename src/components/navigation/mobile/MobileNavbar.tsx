'use client';

import { motion } from 'framer-motion';
import { useNavigation } from '@/hooks/useNavigation';
import { navigation } from '@/lib/navigation';
import { MobileNavbarItem } from './MobileNavbarItem';
import SubmenuPanel from '../submenu/SubmenuPanel';

export default function MobileNavbar() {
  const {
    activeMenuItem,
    activeSubmenuItem,
    activeSubmenu,
    activeSubmenuData,
    submenuRef,
    handleItemClick,
    handleSubmenuItemClick,
    handleSubmenuClose,
    hasActiveSubmenu,
  } = useNavigation();

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
            const isActive = activeMenuItem === item.id || activeSubmenu === item.id;
            
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

      {/* Submenu Panel */}
      {hasActiveSubmenu && activeSubmenuData && (
        <div className="relative z-10">
          <SubmenuPanel
            ref={submenuRef}
            categories={activeSubmenuData}
            activeSubmenuItem={activeSubmenuItem}
            onClose={handleSubmenuClose}
            onSubmenuItemClick={handleSubmenuItemClick}
          />
        </div>
      )}
    </motion.nav>
  );
} 