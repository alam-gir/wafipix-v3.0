import { useState, useRef, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { navigation } from '@/lib/navigation';

export function useSubmenuManagement() {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isSubmenuHovered, setIsSubmenuHovered] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const submenuRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  // Handle mouse enter for menu items (desktop)
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

  // Handle mouse leave for menu items (desktop)
  const handleMouseLeave = () => {
    if (!isSubmenuHovered) {
      closeTimeoutRef.current = setTimeout(() => {
        setActiveSubmenu(null);
      }, 150);
    }
  };

  // Handle submenu mouse enter (desktop)
  const handleSubmenuMouseEnter = () => {
    setIsSubmenuHovered(true);
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  // Handle submenu mouse leave (desktop)
  const handleSubmenuMouseLeave = () => {
    setIsSubmenuHovered(false);
    closeTimeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 150);
  };

  // Handle item click (mobile)
  const handleItemClick = (item: typeof navigation[0]) => {
    console.log('Mobile item click:', item.id, 'hasSubmenu:', item.hasSubmenu, 'current activeSubmenu:', activeSubmenu);
    
    if (item.hasSubmenu) {
      // Toggle submenu
      if (activeSubmenu === item.id) {
        console.log('Closing submenu for:', item.id);
        setActiveSubmenu(null);
      } else {
        console.log('Opening submenu for:', item.id);
        // Close any other open submenu first
        setActiveSubmenu(null);
        // Small delay to ensure smooth transition
        setTimeout(() => {
          setActiveSubmenu(item.id);
          console.log('Set active submenu to:', item.id);
        }, 50);
      }
    } else {
      // Navigate to page using Next.js router
      console.log('Navigating to:', item.href);
      setActiveSubmenu(null);
      router.push(item.href);
    }
  };

  // Handle service button click (both mobile and desktop)
  const handleServiceClick = (item: typeof navigation[0]) => {
    if (item.hasSubmenu && item.href) {
      // Navigate to the services page
      console.log('Service click - navigating to:', item.href);
      router.push(item.href);
    }
  };

  // Handle submenu item click
  const handleSubmenuItemClick = (submenuItemId: string) => {
    // Find the submenu item and navigate to its href
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

  // Close submenu - memoized to prevent dependency issues
  const handleSubmenuClose = useCallback(() => {
    console.log('Closing submenu');
    setActiveSubmenu(null);
    setIsSubmenuHovered(false);
  }, []);

  // Close submenu when clicking outside (mobile) - simplified
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeSubmenu && submenuRef.current) {
        const target = event.target as Element;
        const isInsideSubmenu = submenuRef.current.contains(target);
        const isNavItem = target.closest('[data-nav-item]');
        
        if (!isInsideSubmenu && !isNavItem) {
          console.log('Click outside detected, closing submenu');
          handleSubmenuClose();
        }
      }
    };

    if (activeSubmenu) {
      // Add a small delay to prevent immediate closure
      const timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 100);

      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [activeSubmenu, handleSubmenuClose]);

  // Debug effect
  useEffect(() => {
    console.log('Active submenu changed to:', activeSubmenu);
  }, [activeSubmenu]);

  // Get active submenu data
  const activeSubmenuData = activeSubmenu 
    ? navigation.find(item => item.id === activeSubmenu)?.submenu || null
    : null;

  return {
    // States
    activeSubmenu,
    isSubmenuHovered,
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
    
    // Computed values
    isSubmenuOpen: !!activeSubmenu,
    hasActiveSubmenu: !!activeSubmenu,
  };
} 