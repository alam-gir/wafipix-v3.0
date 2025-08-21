/**
 * Utility functions for handling scroll restoration and scroll behavior
 */

export const scrollUtils = {
  /**
   * Scroll to a specific position with proper fallbacks
   */
  scrollTo: (top: number, behavior: 'auto' | 'smooth' | 'instant' = 'auto') => {
    if (typeof window === 'undefined') return;

    try {
      // Try using the modern scrollTo with behavior
      if (behavior === 'instant') {
        // Use requestAnimationFrame for instant scroll to avoid blocking
        requestAnimationFrame(() => {
          window.scrollTo({
            top,
            behavior: 'auto'
          });
        });
      } else {
        window.scrollTo({
          top,
          behavior: behavior === 'smooth' ? 'smooth' : 'auto'
        });
      }
    } catch (error) {
      // Fallback for older browsers
      window.scrollTo(0, top);
    }
  },

  /**
   * Scroll to top of the page
   */
  scrollToTop: (behavior: 'auto' | 'smooth' | 'instant' = 'auto') => {
    scrollUtils.scrollTo(0, behavior);
  },

  /**
   * Get current scroll position
   */
  getScrollPosition: (): number => {
    if (typeof window === 'undefined') return 0;
    return window.scrollY || window.pageYOffset || 0;
  },

  /**
   * Check if page is scrolled
   */
  isScrolled: (): boolean => {
    return scrollUtils.getScrollPosition() > 0;
  },

  /**
   * Store scroll position in sessionStorage
   */
  storeScrollPosition: (key: string) => {
    if (typeof window === 'undefined') return;
    const position = scrollUtils.getScrollPosition();
    sessionStorage.setItem(`scroll_${key}`, position.toString());
  },

  /**
   * Restore scroll position from sessionStorage
   */
  restoreScrollPosition: (key: string, fallback: number = 0) => {
    if (typeof window === 'undefined') return fallback;
    const stored = sessionStorage.getItem(`scroll_${key}`);
    return stored ? parseInt(stored, 10) : fallback;
  },

  /**
   * Clear stored scroll position
   */
  clearScrollPosition: (key: string) => {
    if (typeof window === 'undefined') return;
    sessionStorage.removeItem(`scroll_${key}`);
  },

  /**
   * Check if this is a page reload
   */
  isPageReload: (): boolean => {
    if (typeof window === 'undefined') return false;
    return performance.navigation.type === 1;
  },

  /**
   * Wait for page to be ready before scrolling
   */
  waitForPageReady: (callback: () => void, delay: number = 100) => {
    if (typeof window === 'undefined') return;
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        setTimeout(callback, delay);
      });
    } else {
      setTimeout(callback, delay);
    }
  }
};
