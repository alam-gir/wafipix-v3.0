"use client";

import React from 'react';
import type { GalleryPublicResponse } from '@/types/works';
import WorkDetailGalleryItem from './WorkDetailGalleryItem';

interface WorkDetailGalleryRowProps {
  gallery: GalleryPublicResponse;
}

export default function WorkDetailGalleryRow({ gallery }: WorkDetailGalleryRowProps) {
  if (!gallery.items || gallery.items.length === 0) {
    return null;
  }

  return (
    <div className="w-full">
      {/* PC: Always single row, items fill 100% width */}
      <div className="hidden md:flex w-full">
        {gallery.items.map((item) => (
          <WorkDetailGalleryItem 
            key={item.id} 
            item={item} 
            isMobile={false}
          />
        ))}
      </div>

      {/* Mobile: Grid or stacked based on isMobileGrid */}
      <div className={`md:hidden w-full ${
        gallery.isMobileGrid 
          ? 'flex' // Grid layout (same as PC)
          : 'flex flex-col' // Stacked layout (one item per row)
      }`}>
        {gallery.items.map((item) => (
          <WorkDetailGalleryItem 
            key={item.id} 
            item={item} 
            isMobile={true}
            isMobileGrid={gallery.isMobileGrid}
          />
        ))}
      </div>
    </div>
  );
}
