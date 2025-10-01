'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import VideoPlayer from '../ui/VideoPlayer';
import { useVideoScrollAnimation } from '@/hooks/useVideoScrollAnimation';
import { useHeroVideo } from '@/hooks/api/useCommon';
import { cn } from '@/lib/utils';

interface VideoSectionProps {
  videoSrc?: string;
  posterSrc?: string;
  className?: string;
}

export function VideoSection({
  videoSrc,
  posterSrc,
  className = '',
}: VideoSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Get hero video from API
  const { data: heroVideoData, error: heroVideoError, isLoading: heroVideoLoading } = useHeroVideo();

  // Scroll animation hook
  const { width } = useVideoScrollAnimation({
    containerRef,
    initialWidth: 80,
    fullScreenWidth: 100,
  });

  // Use API video URL if available, otherwise fallback to prop
  const videoUrl = heroVideoData?.data || videoSrc;

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
          width: `clamp(90%, ${width}%, 100%)`,
        }}
        transition={{
          width: { duration: 0.1, ease: "easeOut" },
        }}
      >
        <div className="relative w-full h-full">
          {/* Show video only when we have a URL */}
          {videoUrl ? (
            <VideoPlayer
              videoSrc={videoUrl}
              posterSrc={posterSrc}
              className="w-full h-full"
            />
          ) : (
            /* Loading State - Show a placeholder that matches video dimensions */
            <div className="w-full h-full bg-gradient-to-br from-card/20 to-card/10 backdrop-blur-sm rounded-3xl flex items-center justify-center border border-border/20">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                <p className="text-sm text-muted-foreground">Loading video...</p>
              </div>
            </div>
          )}

          {/* Error State Overlay */}
          {heroVideoError && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/90 backdrop-blur-sm z-10 rounded-3xl">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-destructive">Failed to load video</p>
                  <p className="text-xs text-muted-foreground mt-1">Please refresh the page</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
