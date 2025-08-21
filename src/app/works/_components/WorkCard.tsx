'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import OptimizedImage from '@/components/ui/OptimizedImage';
import VideoPlayer from '@/components/ui/VideoPlayer';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { WorkAsCard } from '@/types';
import { useRef } from 'react';

interface WorkCardProps {
  item: WorkAsCard;
  className?: string;
}

export default function WorkCard({ item, className }: WorkCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] });
  // Slightly increased parallax intensity
  const yBg = useTransform(scrollYProgress, [0, 1], ['-12%', '12%']);
  const yFg = useTransform(scrollYProgress, [0, 1], ['12%', '-12%']);

  const hasCoverVideo = Boolean(item.coverVideoUrl);
  const hasProfileVideo = Boolean(item.profileVideoUrl);

  return (
    <Link href={`/works/${item.slug}`} className="block">
      <div ref={containerRef} className={cn('relative rounded-3xl isolate', className)}>
      {/* Background cover (parallax) */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 -z-10 will-change-transform">
        {hasCoverVideo ? (
          <VideoPlayer videoSrc={item.coverVideoUrl!} className="h-full w-full" showControlsOverlay={false} />
        ) : item.coverImageUrl ? (
          <OptimizedImage src={item.coverImageUrl} alt={item.name} fill className="h-full w-full" />
        ) : null}
      </motion.div>

      {/* Foreground profile (parallax opposite) */}
      <div
        className={cn(
          'relative w-full pointer-events-none select-none',
          'p-6 md:p-8 flex items-center justify-center min-h-[320px] md:min-h-[460px]'
        )}
      >
        <motion.div style={{ y: yFg }} className="max-w-[60%] md:max-w-[45%] w-full drop-shadow-2xl will-change-transform">
          {hasProfileVideo ? (
            <VideoPlayer videoSrc={item.profileVideoUrl!} className="rounded-2xl w-full" showControlsOverlay={false} />
          ) : item.profileImageUrl ? (
            <OptimizedImage
              src={item.profileImageUrl}
              alt={`${item.name} profile`}
              width={900}
              height={600}
              className="rounded-2xl w-full h-auto"
            />
          ) : null}
        </motion.div>
      </div>

      {/* Title overlay */}
      <div className="absolute left-6 bottom-6 md:left-8 md:bottom-8 text-white drop-shadow-xl">
        <h3 className="text-xl md:text-2xl font-semibold">{item.name}</h3>
      </div>
      </div>
    </Link>
  );
}


