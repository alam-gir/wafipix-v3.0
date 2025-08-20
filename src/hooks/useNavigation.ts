// ============================================================================
// NAVIGATION HOOK - Combines hardcoded navigation with dynamic services from API
// ============================================================================

import { useServicesNavigation } from './api/useServices';
import type { NavItem } from '@/lib/navigation';
import { useEffect, useState } from 'react';

export function useNavigation() {
  const [isClient, setIsClient] = useState(false);
  const { data: servicesNavigationData, error, isLoading } = useServicesNavigation();
  
  // Ensure this hook only runs on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  // Define navigation data directly in the hook
  const baseNavigation: NavItem[] = [
    {
      id: 'home',
      title: 'Home',
      href: '/',
    },
    {
      id: 'services',
      title: 'Services',
      href: '/services',
      hasSubmenu: true,
      submenu: []
    },
    {
      id: 'works',
      title: 'Works',
      href: '/works',
    },
    {
      id: 'about',
      title: 'About',
      href: '/about',
    },
    {
      id: 'contact',
      title: 'Contact',
      href: '/contact',
    },
  ];
  
  // On server side, return base navigation without API data
  if (!isClient) {
    return {
      navigation: baseNavigation,
      isLoading: false,
      error: null,
      hasServicesNavigation: false
    };
  }
  
  // Create dynamic navigation by combining hardcoded navigation with API services
  const dynamicNavigation = baseNavigation.map(item => {
    if (item.id === 'services' && item.hasSubmenu) {
      // Replace hardcoded services submenu with API data
      if (servicesNavigationData?.data) {
        // Ensure the API data has the correct structure
        const apiSubmenu = servicesNavigationData.data;
        
        if (Array.isArray(apiSubmenu) && apiSubmenu.length > 0) {
          return {
            ...item,
            submenu: apiSubmenu
          };
        } else {
          console.warn('API services navigation data is not in expected format:', apiSubmenu);
          // Fallback to hardcoded submenu if API data is malformed
          return {
            ...item,
            submenu: [
              {
                id: 'loading',
                title: 'Loading Services...',
                description: 'Please wait while we load our services',
                items: []
              }
            ]
          };
        }
      }
      
      // Fallback to hardcoded data if API fails
      if (error) {
        console.warn('Failed to load services navigation, using fallback data:', error);
        return {
          ...item,
          submenu: [
            {
              id: 'error',
              title: 'Services Temporarily Unavailable',
              description: 'Please try again later',
              items: []
            }
          ]
        };
      }
      
      // Show loading state - keep original submenu structure
      if (isLoading) {
        return {
          ...item,
          submenu: [
            {
              id: 'loading',
              title: 'Loading Services...',
              description: 'Please wait while we load our services',
              items: []
            }
          ]
        };
      }
      
      // Default fallback - ensure submenu is always an array
      return {
        ...item,
        submenu: [
          {
            id: 'default',
            title: 'Our Services',
            description: 'Discover our creative solutions',
            items: []
          }
        ]
      };
    }
    
    return item;
  });
  
  return {
    navigation: dynamicNavigation,
    isLoading,
    error,
    hasServicesNavigation: !!servicesNavigationData?.data
  };
}
