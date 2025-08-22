'use client';

import { useEffect } from 'react';
import { ErrorPageLayout, ErrorPageActions, ErrorMessage } from '@/components/ui';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <ErrorPageLayout>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Something went wrong!
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          We encountered an unexpected error. Please try again or contact support if the problem persists.
        </p>
      </div>
      
      <ErrorMessage error={error} />
      
      <ErrorPageActions 
        showRefreshButton={true}
        onRefresh={reset}
        className="mt-8"
      />
    </ErrorPageLayout>
  );
}
