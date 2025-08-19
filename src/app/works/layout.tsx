'use client';

import { useScrollToTop } from '@/hooks/useScrollToTop';

interface WorksLayoutProps {
  children: React.ReactNode;
}

export default function WorksLayout({ children }: WorksLayoutProps) {
  // Ensure all work pages scroll to top on navigation
  useScrollToTop();

  return <>{children}</>;
}
