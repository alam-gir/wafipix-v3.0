'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import VideoPlayer from '../ui/VideoPlayer';
import { useVideoScrollAnimation } from '@/hooks/useVideoScrollAnimation';
import { cn } from '@/lib/utils';

interface VideoSectionProps {
  videoSrc?: string;
  posterSrc?: string;
  className?: string;
}

export function VideoSection({
  videoSrc = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  posterSrc,
  className = '',
}: VideoSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll animation hook
  const { width } = useVideoScrollAnimation({
    containerRef,
    initialWidth: 80,
    fullScreenWidth: 100,
  });

  return (
    <motion.div
      ref={containerRef}
             className={cn(
         "relative w-screen overflow-hidden bg-background",
         "h-auto md:h-screen",
         className
       )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Video Player Container */}
      <motion.div
        className={cn(
          "relative w-full h-auto aspect-video mx-auto",
          "md:absolute md:top-0 md:h-screen md:left-1/2 md:-translate-x-1/2"
        )}
        style={{
          width: `clamp(80%, ${width}%, 100%)`,
        }}
        transition={{
          width: { duration: 0.1, ease: "easeOut" },
        }}
      >
        <div className="relative w-full h-full">
          <VideoPlayer
            videoSrc={videoSrc}
            posterSrc={posterSrc}
            className="w-full h-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
