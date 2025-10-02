"use client";

import React from 'react';
import type { GalleryPublicResponse } from '@/types/works';
import WorkDetailGalleryRow from './WorkDetailGalleryRow';

interface WorkDetailGalleryProps {
  galleries: GalleryPublicResponse[];
}

export default function WorkDetailGallery({ galleries }: WorkDetailGalleryProps) {
  if (!galleries || galleries.length === 0) {
    return null;
  }

  return (
    <section className="bg-background">
      {galleries.map((gallery) => (
        <WorkDetailGalleryRow 
          key={gallery.id} 
          gallery={gallery} 
        />
      ))}
    </section>
  );
}
