"use client";

import React from 'react';
import Image from 'next/image';
import VideoPlayer from '@/components/ui/VideoPlayer';
import type { GalleryItemPublicResponse } from '@/types/works';

interface WorkDetailGalleryItemProps {
  item: GalleryItemPublicResponse;
  isMobile: boolean;
  isMobileGrid?: boolean;
}

export default function WorkDetailGalleryItem({ 
  item, 
  isMobile, 
  isMobileGrid = false 
}: WorkDetailGalleryItemProps) {
  // Calculate item width to fill 100% of row
  const getItemStyle = () => {
    if (isMobile && !isMobileGrid) {
      // Mobile stacked: full width
      return { width: '100%' };
    }
    
    // PC or mobile grid: equal width distribution
    return { flex: 1 };
  };

  return (
    <div 
      className="relative overflow-hidden"
      style={getItemStyle()}
    >
      {item.type === 'video' ? (
        <VideoPlayer
          videoSrc={item.url}
          className="w-full h-auto object-cover"
          showControlsOverlay={false}
        />
      ) : (
        <Image
          src={item.url}
          alt="Gallery item"
          width={0}
          height={0}
          className="w-full h-auto object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={95}
        />
      )}
    </div>
  );
}
