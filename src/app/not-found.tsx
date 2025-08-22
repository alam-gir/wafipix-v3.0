import { Metadata } from 'next';
import Link from 'next/link';
import { createErrorMetadata } from '@/lib/meta';

export const metadata: Metadata = createErrorMetadata();

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-background/90 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-6">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          The page you&rsquo;re looking for doesn&rsquo;t exist. Return to our homepage to explore our digital services and creative portfolio.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 font-semibold"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
