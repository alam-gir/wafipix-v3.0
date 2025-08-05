import { cn } from '@/lib/utils';
import { DesktopLogoSection } from './DesktopLogoSection';
import { DesktopNavigationItems } from './DesktopNavigationItems';
import { DesktopCTASection } from './DesktopCTASection';

interface DesktopNavbarContentProps {
  isScrolled: boolean;
  activeSubmenu: string | null;
  activeMenuItem: string | null;
  onMouseEnter: (itemId: string) => void;
  onMouseLeave: () => void;
}

export function DesktopNavbarContent({ 
  isScrolled,
  activeSubmenu,
  activeMenuItem,
  onMouseEnter,
  onMouseLeave,
}: DesktopNavbarContentProps) {
  return (
    <div className={cn(
      'flex items-center justify-between',
      isScrolled ? 'px-6 py-3' : 'py-2'
    )}>
      <DesktopLogoSection isScrolled={isScrolled} />
      
      <DesktopNavigationItems
        isScrolled={isScrolled}
        activeSubmenu={activeSubmenu}
        activeMenuItem={activeMenuItem}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
      
      <DesktopCTASection isScrolled={isScrolled} />
    </div>
  );
} 