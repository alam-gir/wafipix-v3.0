import { cn } from '@/lib/utils';
import { navigation } from '@/lib/navigation';
import NavbarItem from '../NavbarItem';

interface DesktopNavigationItemsProps {
  isScrolled: boolean;
  activeSubmenu: string | null;
  activeMenuItem: string | null;
  onMouseEnter: (itemId: string) => void;
  onMouseLeave: () => void;
}

export function DesktopNavigationItems({ 
  isScrolled,
  activeSubmenu,
  activeMenuItem,
  onMouseEnter,
  onMouseLeave,
}: DesktopNavigationItemsProps) {
  return (
    <div className={cn(
      'flex items-center space-x-1 lg:space-x-2',
      isScrolled && 'mx-auto'
    )}>
      {navigation.map((item) => (
        <div key={item.id} className="relative">
          <NavbarItem
            item={item}
            isScrolled={isScrolled}
            isHovered={activeSubmenu === item.id}
            isActive={activeMenuItem === item.id}
            onMouseEnter={() => onMouseEnter(item.id)}
            onMouseLeave={onMouseLeave}
          />
        </div>
      ))}
    </div>
  );
} 