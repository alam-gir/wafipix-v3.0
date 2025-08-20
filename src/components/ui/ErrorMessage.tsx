import { cn } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  error: Error | string;
  className?: string;
  showIcon?: boolean;
}

export default function ErrorMessage({ error, className, showIcon = true }: ErrorMessageProps) {
  const errorMessage = typeof error === 'string' ? error : error.message;

  return (
    <div className={cn('flex items-center justify-center py-20', className)}>
      <div className="text-center">
        {showIcon && (
          <AlertCircle className="mx-auto h-12 w-12 text-red-500 mb-4" />
        )}
        <h2 className="text-xl font-semibold text-red-500 mb-2">
          Something went wrong
        </h2>
        <p className="text-gray-600 mb-4">{errorMessage}</p>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

