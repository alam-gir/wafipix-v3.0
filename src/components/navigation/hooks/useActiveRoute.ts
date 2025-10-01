'use client';

import { usePathname } from 'next/navigation';

/**
 * Hook to get current active route
 * Single responsibility: Provide current pathname for active state detection
 */
export function useActiveRoute() {
  const pathname = usePathname();
  
  return {
    pathname,
    isActive: (path: string) => {
      if (path === '/') {
        return pathname === '/';
      }
      return pathname.startsWith(path);
    }
  };
}
