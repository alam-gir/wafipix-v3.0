import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { navigation } from '@/lib/navigation';

export function useSubmenuManagement() {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [isSubmenuHovered, setIsSubmenuHovered] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const submenuRef = useRef<HTMLDivElement>(null);
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
    if (item.hasSubmenu) {
      // Toggle submenu
      if (activeSubmenu === item.id) {
        setActiveSubmenu(null);
      } else {
        setActiveSubmenu(item.id);
      }
    } else {
      // Navigate to page using Next.js router
      setActiveSubmenu(null);
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

  // Close submenu
  const handleSubmenuClose = () => {
    setActiveSubmenu(null);
    setIsSubmenuHovered(false);
  };

  // Close submenu when clicking outside (mobile)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
        handleSubmenuClose();
      }
    };

    if (activeSubmenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
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
    
    // Computed values
    isSubmenuOpen: !!activeSubmenu,
    hasActiveSubmenu: !!activeSubmenu,
  };
} 