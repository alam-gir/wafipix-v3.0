'use client';

import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useVideoControls } from '@/hooks/useVideoControls';
import VideoControls from './VideoControls';

interface VideoPlayerProps {
  videoSrc?: string;
  posterSrc?: string;
  className?: string;
  containerRef?: React.RefObject<HTMLElement>;
  showControlsOverlay?: boolean; // allow disabling overlay (e.g., works grid)
}

export default function VideoPlayer({
  videoSrc,
  posterSrc,
  className = '',
  showControlsOverlay = true,
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<HTMLDivElement>(null);
  const [showControls, setShowControls] = useState(false);

  // Video controls hook
  const {
    isPlaying,
    isMuted,
    togglePlay,
    toggleMute,
    handleVideoLoad,
    handleVideoEnded,
    handleTimeUpdate,
    handleLoadedMetadata,
    cleanup,
  } = useVideoControls({
    videoRef,
    defaultMuted: true,
    defaultPlaying: true,
  });

  // Cleanup on unmount
  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  // Handle mouse events for controls visibility
  const handleMouseEnter = () => {
    if (!showControlsOverlay) return;
    setShowControls(true);
  };

  const handleMouseLeave = () => {
    if (!showControlsOverlay) return;
    setShowControls(false);
  };

  return (
    <motion.div
      ref={playerRef}
      className={`relative overflow-hidden rounded-lg bg-black ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={posterSrc}
        playsInline
        loop
        autoPlay
        muted={isMuted}
        onLoad={handleVideoLoad}
        onEnded={handleVideoEnded}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Controls Overlay */}
      {showControlsOverlay && (
        <AnimatePresence>
          {showControls && (
            <motion.div
              className="absolute bottom-4 right-4 z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <VideoControls
                isPlaying={isPlaying}
                isMuted={isMuted}
                onTogglePlay={togglePlay}
                onToggleMute={toggleMute}
              />
            </motion.div>
          )}
        </AnimatePresence>
      )}



      {/* Error State */}
      <AnimatePresence>
        {videoRef.current?.error && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-red-900/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-white text-center p-4">
              <div className="text-lg font-medium mb-2">Video Error</div>
              <div className="text-sm opacity-80">
                Unable to load video. Please check your connection.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}