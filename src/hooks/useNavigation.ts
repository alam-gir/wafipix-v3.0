// ============================================================================
// NAVIGATION HOOK - Combines hardcoded navigation with dynamic services from API
// ============================================================================

import { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { navigation, NavItem } from '@/lib/navigation';

export function useNavigation() {
  const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);
  const [activeSubmenuItem, setActiveSubmenuItem] = useState<string | null>(null);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isSubmenuHovered, setIsSubmenuHovered] = useState(false);
  
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const submenuRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Update active states when pathname changes
  useEffect(() => {
    const updateActiveStates = () => {
      const currentMenuItem = navigation.find(item => {
        if (item.href === pathname) return true;
        if (item.submenu) {
          return item.submenu.some(category => 
            category.items.some(subItem => subItem.href === pathname)
          );
        }
        return false;
      });
      
      if (currentMenuItem) {
        setActiveMenuItem(currentMenuItem.id);
        
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
        setActiveMenuItem(null);
        setActiveSubmenuItem(null);
      }
    };

    updateActiveStates();
  }, [pathname]);

  // Desktop hover handlers
  const handleMouseEnter = (itemId: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    
    const item = navigation.find(nav => nav.id === itemId);
    if (item && item.submenu) {
      setActiveSubmenu(itemId);
    }
  };

  const handleMouseLeave = () => {
    if (!isSubmenuHovered) {
      closeTimeoutRef.current = setTimeout(() => {
        setActiveSubmenu(null);
      }, 150);
    }
  };

  const handleSubmenuMouseEnter = () => {
    setIsSubmenuHovered(true);
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleSubmenuMouseLeave = () => {
    setIsSubmenuHovered(false);
    closeTimeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 150);
  };

  // Mobile click handlers
  const handleItemClick = (item: NavItem) => {
    if (item.hasSubmenu) {
      if (activeSubmenu === item.id) {
        setActiveSubmenu(null);
      } else {
        setActiveSubmenu(null);
        setTimeout(() => {
          setActiveSubmenu(item.id);
        }, 50);
      }
    } else {
      setActiveSubmenu(null);
      router.push(item.href);
    }
  };

  const handleServiceClick = (item: NavItem) => {
    if (item.hasSubmenu && item.href) {
      router.push(item.href);
    }
  };

  const handleSubmenuItemClick = (submenuItemId: string) => {
    for (const menuItem of navigation) {
      if (menuItem.submenu) {
        for (const category of menuItem.submenu) {
          const subItem = category.items.find(item => item.id === submenuItemId);
          if (subItem) {
            router.push(subItem.href);
            setActiveSubmenu(null);
            return;
          }
        }
      }
    }
  };

  const handleSubmenuClose = useCallback(() => {
    setActiveSubmenu(null);
    setIsSubmenuHovered(false);
  }, []);

  // Click outside handler for mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeSubmenu && submenuRef.current) {
        const target = event.target as Element;
        const isInsideSubmenu = submenuRef.current.contains(target);
        const isNavItem = target.closest('[data-nav-item]');
        
        if (!isInsideSubmenu && !isNavItem) {
          handleSubmenuClose();
        }
      }
    };

    if (activeSubmenu) {
      const timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 100);

      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [activeSubmenu, handleSubmenuClose]);

  // Helper functions
  const isMenuItemActive = (itemId: string): boolean => activeMenuItem === itemId;
  const isSubmenuItemActive = (submenuItemId: string): boolean => activeSubmenuItem === submenuItemId;
  
  const activeSubmenuData = activeSubmenu 
    ? navigation.find(item => item.id === activeSubmenu)?.submenu || null
    : null;

  return {
    // States
    activeMenuItem,
    activeSubmenuItem,
    activeSubmenu,
    activeSubmenuData,
    submenuRef,
    
    // Desktop handlers
    handleMouseEnter,
    handleMouseLeave,
    handleSubmenuMouseEnter,
    handleSubmenuMouseLeave,
    
    // Mobile handlers
    handleItemClick,
    handleSubmenuItemClick,
    handleSubmenuClose,
    
    // Service click handler
    handleServiceClick,
    
    // Helper functions
    isMenuItemActive,
    isSubmenuItemActive,
    
    // Computed values
    hasActiveSubmenu: !!activeSubmenu,
  };
}
