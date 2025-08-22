'use client';

import { useEffect } from 'react';
import { useMetaPixelTracking } from '@/hooks/useMetaPixelTracking';

interface PageViewTrackerProps {
  pageTitle?: string;
  pageType?: string;
  pageCategory?: string;
  contentName?: string;
  contentCategory?: string;
}

export default function PageViewTracker({
  pageTitle,
  pageType = 'website',
  pageCategory = 'business',
  contentName,
  contentCategory = 'Digital Agency',
}: PageViewTrackerProps) {
  const { trackPageView } = useMetaPixelTracking();

  useEffect(() => {
    // Track page view when component mounts
    trackPageView({
      custom_data: {
        page_title: pageTitle,
        page_type: pageType,
        page_category: pageCategory,
        content_name: contentName,
        content_category: contentCategory,
      },
    });
  }, [trackPageView, pageTitle, pageType, pageCategory, contentName, contentCategory]);

  // This component doesn't render anything
  return null;
}
