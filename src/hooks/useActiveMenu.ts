import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { navigation } from '@/lib/navigation';

export function useActiveMenu() {
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);
  const [activeSubmenuItem, setActiveSubmenuItem] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const updateActiveStates = () => {
      // Find the active menu item by matching href or submenu hrefs
      const currentMenuItem = navigation.find(item => {
        // Direct match with menu href
        if (item.href === pathname) {
          return true;
        }
        
        // Check if any submenu item matches the current path
        if (item.submenu) {
          return item.submenu.some(category => 
            category.items.some(subItem => subItem.href === pathname)
          );
        }
        
        return false;
      });
      
      if (currentMenuItem) {
        setActiveMenuItem(currentMenuItem.id);
        
        // Find the active submenu item if we're on a submenu page
        if (currentMenuItem.submenu) {
          for (const category of currentMenuItem.submenu) {
            const activeItem = category.items.find(item => item.href === pathname);
            if (activeItem) {
              setActiveSubmenuItem(activeItem.id);
              break;
            }
          }
        } else {
          setActiveSubmenuItem(null);
        }
      } else {
        // No match found, clear active states
        setActiveMenuItem(null);
        setActiveSubmenuItem(null);
      }
    };

    // Update active states whenever pathname changes
    updateActiveStates();
  }, [pathname]);

  // Helper function to check if a menu item is active
  const isMenuItemActive = (itemId: string): boolean => {
    return activeMenuItem === itemId;
  };

  // Helper function to check if a submenu item is active
  const isSubmenuItemActive = (submenuItemId: string): boolean => {
    return activeSubmenuItem === submenuItemId;
  };

  // Helper function to get active menu item data
  const getActiveMenuItem = () => {
    return navigation.find(item => item.id === activeMenuItem) || null;
  };

  // Helper function to get active submenu item data
  const getActiveSubmenuItem = () => {
    if (!activeMenuItem || !activeSubmenuItem) return null;
    
    const menuItem = navigation.find(item => item.id === activeMenuItem);
    if (!menuItem?.submenu) return null;
    
    for (const category of menuItem.submenu) {
      const subItem = category.items.find(item => item.id === activeSubmenuItem);
      if (subItem) return subItem;
    }
    
    return null;
  };

  return {
    // Active states
    activeMenuItem,
    activeSubmenuItem,
    
    // Helper functions
    isMenuItemActive,
    isSubmenuItemActive,
    getActiveMenuItem,
    getActiveSubmenuItem,
    
    // Computed values
    hasActiveMenu: !!activeMenuItem,
    hasActiveSubmenu: !!activeSubmenuItem,
  };
} 