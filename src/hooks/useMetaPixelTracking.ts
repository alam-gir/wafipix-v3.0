import { useCallback } from 'react';
import {
  trackPageView,
  trackContactSubmission,
  trackPackageSelection,
  trackServiceView,
  trackWorkView,
  trackNavigation,
  trackFormInteraction,
  trackCustomEvent,
  type ContactFormData,
  type PackageData,
  type ServiceData,
  type WorkData,
  type NavigationData,
  type FormInteractionData,
  type MetaPixelEventData,
  type PageViewEventData,
} from '@/lib/analytics/meta-pixel';

/**
 * Custom hook for Meta Pixel event tracking
 * Provides easy access to all tracking functions
 */
export function useMetaPixelTracking() {
  const handlePageView = useCallback((pageData?: Partial<PageViewEventData>) => {
    trackPageView(pageData);
  }, []);

  const handleContactSubmission = useCallback((formData: Partial<ContactFormData>) => {
    trackContactSubmission(formData);
  }, []);

  const handlePackageSelection = useCallback((packageData: PackageData) => {
    trackPackageSelection(packageData);
  }, []);

  const handleServiceView = useCallback((serviceData: ServiceData) => {
    trackServiceView(serviceData);
  }, []);

  const handleWorkView = useCallback((workData: WorkData) => {
    trackWorkView(workData);
  }, []);

  const handleNavigation = useCallback((navigationData: NavigationData) => {
    trackNavigation(navigationData);
  }, []);

  const handleFormInteraction = useCallback((formData: FormInteractionData) => {
    trackFormInteraction(formData);
  }, []);

  const handleCustomEvent = useCallback((eventData: MetaPixelEventData) => {
    trackCustomEvent(eventData);
  }, []);

  return {
    trackPageView: handlePageView,
    trackContactSubmission: handleContactSubmission,
    trackPackageSelection: handlePackageSelection,
    trackServiceView: handleServiceView,
    trackWorkView: handleWorkView,
    trackNavigation: handleNavigation,
    trackFormInteraction: handleFormInteraction,
    trackCustomEvent: handleCustomEvent,
  };
}

export default useMetaPixelTracking;
