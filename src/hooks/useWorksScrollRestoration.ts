'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { scrollUtils } from '@/lib/scrollUtils';

export function useWorksScrollRestoration() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isWorksPage = pathname.startsWith('/works');
  const scrollPositionRef = useRef<number>(0);

  useEffect(() => {
    if (!isWorksPage) return;

    // Store current scroll position before navigation
    const handleBeforeUnload = () => {
      scrollPositionRef.current = scrollUtils.getScrollPosition();
      // Also store in sessionStorage as backup
      scrollUtils.storeScrollPosition(pathname);
    };

    // Restore scroll position after navigation
    const restoreScrollPosition = () => {
      scrollUtils.waitForPageReady(() => {
        const storedPosition = scrollUtils.restoreScrollPosition(pathname);
        const currentPosition = scrollPositionRef.current;
        
        // Use the most recent position
        const targetPosition = currentPosition > 0 ? currentPosition : storedPosition;
        
        if (targetPosition > 0) {
          scrollUtils.scrollTo(targetPosition, 'instant');
        } else {
          // If no stored position, scroll to top
          scrollUtils.scrollToTop('instant');
        }
      }, 150); // Increased delay for better reliability
    };

    // Handle page reload
    if (scrollUtils.isPageReload()) {
      // On reload, always scroll to top
      scrollUtils.waitForPageReady(() => {
        scrollUtils.scrollToTop('instant');
      }, 100);
      
      // Clear stored positions on reload
      scrollUtils.clearScrollPosition(pathname);
    } else {
      // On navigation, restore position
      restoreScrollPosition();
    }

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [pathname, isWorksPage]);

  // Reset scroll position when filter changes
  useEffect(() => {
    if (isWorksPage) {
      scrollUtils.waitForPageReady(() => {
        scrollUtils.scrollToTop('instant');
        // Clear stored position when filter changes
        scrollUtils.clearScrollPosition(pathname);
      }, 100);
    }
  }, [searchParams, isWorksPage, pathname]);
}
