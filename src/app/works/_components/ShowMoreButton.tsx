'use client';

import MagneticWrapper from '@/components/ui/MagneticWrapper';

interface ShowMoreButtonProps {
  onClick?: () => void;
  href?: string;
  hasMore: boolean;
}

export default function ShowMoreButton({ onClick, href, hasMore }: ShowMoreButtonProps) {
  if (!hasMore) return null;
  return (
    <div className="flex justify-center pt-6 md:pt-10">
      <MagneticWrapper attractArea={120}>
        {href ? (
          <a
            href={href}
            className="px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold bg-primary text-primary-foreground hover:shadow-xl hover:shadow-primary/25 transition-all border border-primary/80"
          >
            Show more works
          </a>
        ) : (
          <button
            type="button"
            onClick={onClick}
            className="px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold bg-primary text-primary-foreground hover:shadow-xl hover:shadow-primary/25 transition-all border border-primary/80"
          >
            Show more works
          </button>
        )}
      </MagneticWrapper>
    </div>
  );
}


