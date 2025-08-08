'use client';

import { useActiveMenu } from '@/hooks/useActiveMenu';
import { useSubmenuManagement } from '@/hooks/useSubmenuManagement';
import { useScrollDetection } from '@/hooks/useScrollDetection';
import { DesktopNavbarWrapper } from '@/components/navigation/desktop/DesktopNavbarWrapper';
import { DesktopNavbarContainer } from '@/components/navigation/desktop/DesktopNavbarContainer';
import { DesktopNavbarContent } from '@/components/navigation/desktop/DesktopNavbarContent';
import { DesktopSubmenuSection } from '@/components/navigation/desktop/DesktopSubmenuSection';

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


    </>
  );
} 