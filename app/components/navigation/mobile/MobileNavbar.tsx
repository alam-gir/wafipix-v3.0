'use client';

import { useActiveMenu } from '@/hooks/useActiveMenu';
import { useSubmenuManagement } from '@/hooks/useSubmenuManagement';
import { MobileNavbarContainer } from './MobileNavbarContainer';
import { MobileSubmenuPanel } from './MobileSubmenuPanel';

export default function MobileNavbar() {
  // Custom hooks for state management
  const { activeMenuItem, isMenuItemActive } = useActiveMenu();
  const {
    activeSubmenu,
    activeSubmenuData,
    submenuRef,
    handleItemClick,
    handleSubmenuItemClick,
    handleSubmenuClose,
    hasActiveSubmenu,
  } = useSubmenuManagement();

  return (
    <>
      <MobileNavbarContainer
        activeMenuItem={activeMenuItem}
        activeSubmenu={activeSubmenu}
        isMenuItemActive={isMenuItemActive}
        handleItemClick={handleItemClick}
      >
        {hasActiveSubmenu && activeSubmenuData && (
          <MobileSubmenuPanel
            ref={submenuRef}
            activeSubmenuData={activeSubmenuData}
            onClose={handleSubmenuClose}
            onSubmenuItemClick={handleSubmenuItemClick}
          />
        )}
      </MobileNavbarContainer>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-24 md:hidden" />
    </>
  );
} 