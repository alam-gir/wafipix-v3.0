import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function useScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Immediate scroll to top when pathname changes
    window.scrollTo(0, 0);
    
    // Handle cases where immediate scroll might not work
    const handleScroll = () => {
      if (window.scrollY > 0) {
        window.scrollTo(0, 0);
      }
    };

    // Add scroll event listener to catch any scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Force scroll to top after a short delay to handle any race conditions
    const timer = setTimeout(() => {
      if (window.scrollY > 0) {
        window.scrollTo(0, 0);
      }
    }, 50);

    // Additional check after animations/transitions complete
    const animationTimer = setTimeout(() => {
      if (window.scrollY > 0) {
        window.scrollTo(0, 0);
      }
    }, 300);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
      clearTimeout(animationTimer);
    };
  }, [pathname]);

  // Additional effect to handle router events
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    // Listen for popstate events (browser back/forward)
    window.addEventListener('popstate', handleRouteChange);
    
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);
}
