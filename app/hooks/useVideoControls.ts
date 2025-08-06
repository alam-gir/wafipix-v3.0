import { useState, useRef, useCallback } from 'react';

interface UseVideoControlsProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  defaultMuted?: boolean;
  defaultPlaying?: boolean;
}

interface VideoControlsState {
  isPlaying: boolean;
  isMuted: boolean;
  currentTime: number;
  duration: number;
}

export function useVideoControls({
  videoRef,
  defaultMuted = true,
  defaultPlaying = true,
}: UseVideoControlsProps) {
  const [state, setState] = useState<VideoControlsState>({
    isPlaying: defaultPlaying,
    isMuted: defaultMuted,
    currentTime: 0,
    duration: 0,
  });

  const intervalRef = useRef<NodeJS.Timeout>(undefined);

  const updateTime = useCallback(() => {
    if (videoRef.current) {
      setState(prev => ({
        ...prev,
        currentTime: videoRef.current?.currentTime || 0,
        duration: videoRef.current?.duration || 0,
      }));
    }
  }, [videoRef]);

  const togglePlay = useCallback(() => {
    if (!videoRef.current) return;

    if (state.isPlaying) {
      videoRef.current.pause();
      setState(prev => ({ ...prev, isPlaying: false }));
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    } else {
      videoRef.current.play().catch(console.error);
      setState(prev => ({ ...prev, isPlaying: true }));
      intervalRef.current = setInterval(updateTime, 100);
    }
  }, [state.isPlaying, videoRef, updateTime]);

  const toggleMute = useCallback(() => {
    if (!videoRef.current) return;

    const newMuted = !state.isMuted;
    videoRef.current.muted = newMuted;
    setState(prev => ({ ...prev, isMuted: newMuted }));
  }, [state.isMuted, videoRef]);

  const handleVideoLoad = useCallback(() => {
    if (!videoRef.current) return;

    // Set initial state
    videoRef.current.muted = defaultMuted;
    videoRef.current.volume = 1;
    
    if (defaultPlaying) {
      videoRef.current.play().catch(console.error);
      intervalRef.current = setInterval(updateTime, 100);
    }

    setState(prev => ({
      ...prev,
      isPlaying: defaultPlaying,
      isMuted: defaultMuted,
      duration: videoRef.current?.duration || 0,
    }));
  }, [videoRef, defaultMuted, defaultPlaying, updateTime]);

  const handleVideoEnded = useCallback(() => {
    setState(prev => ({ ...prev, isPlaying: false }));
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }, []);

  const handleTimeUpdate = useCallback(() => {
    updateTime();
  }, [updateTime]);

  const handleLoadedMetadata = useCallback(() => {
    if (videoRef.current) {
      setState(prev => ({
        ...prev,
        duration: videoRef.current?.duration || 0,
      }));
    }
  }, [videoRef]);

  return {
    // State
    ...state,
    
    // Actions
    togglePlay,
    toggleMute,
    
    // Event handlers
    handleVideoLoad,
    handleVideoEnded,
    handleTimeUpdate,
    handleLoadedMetadata,
    
    // Cleanup
    cleanup: () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    },
  };
} 