'use client';

import { useActiveMenu } from '@/hooks/useActiveMenu';
import { useSubmenuManagement } from '@/hooks/useSubmenuManagement';
import { useScrollDetection } from '@/hooks/useScrollDetection';
import { DesktopNavbarWrapper } from './DesktopNavbarWrapper';
import { DesktopNavbarContainer } from './DesktopNavbarContainer';
import { DesktopNavbarContent } from './DesktopNavbarContent';
import { DesktopSubmenuSection } from './DesktopSubmenuSection';

export default function DesktopNavbar() {
  // Custom hooks for state management
  const isScrolled = useScrollDetection();
  const { activeMenuItem, activeSubmenuItem } = useActiveMenu();
  const {
    activeSubmenu,
    activeSubmenuData,
    handleMouseEnter,
    handleMouseLeave,
    handleSubmenuMouseEnter,
    handleSubmenuMouseLeave,
    hasActiveSubmenu,
  } = useSubmenuManagement();

  return (
    <>
      <DesktopNavbarWrapper isScrolled={isScrolled}>
        <DesktopNavbarContainer 
          isScrolled={isScrolled} 
          hasActiveSubmenu={hasActiveSubmenu}
        >
          <DesktopNavbarContent 
            isScrolled={isScrolled}
            activeSubmenu={activeSubmenu}
            activeMenuItem={activeMenuItem}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />

          <DesktopSubmenuSection
            hasActiveSubmenu={hasActiveSubmenu}
            activeSubmenuData={activeSubmenuData}
            activeSubmenuItem={activeSubmenuItem}
            onSubmenuMouseEnter={handleSubmenuMouseEnter}
            onSubmenuMouseLeave={handleSubmenuMouseLeave}
          />
        </DesktopNavbarContainer>
      </DesktopNavbarWrapper>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20" />
    </>
  );
} 