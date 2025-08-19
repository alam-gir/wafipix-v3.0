import { cn } from '@/lib/utils';
import { DesktopLogoSection } from './DesktopLogoSection';
import { DesktopNavigationItems } from './DesktopNavigationItems';
import { DesktopCTASection } from './DesktopCTASection';
import { navigation } from '@/lib/navigation';

interface DesktopNavbarContentProps {
  isScrolled: boolean;
  activeSubmenu: string | null;
  activeMenuItem: string | null;
  onMouseEnter: (itemId: string) => void;
  onMouseLeave: () => void;
  onServiceClick?: (item: typeof navigation[0]) => void;
}

export function DesktopNavbarContent({ 
  isScrolled,
  activeSubmenu,
  activeMenuItem,
  onMouseEnter,
  onMouseLeave,
  onServiceClick,
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
        onServiceClick={onServiceClick}
      />
      
      <DesktopCTASection isScrolled={isScrolled} />
    </div>
  );
} 