"use client";

import React from 'react';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
import VideoPlayer from '@/components/ui/VideoPlayer';
import type { WorkDetailPublicResponse } from '@/types/works';

interface WorkDetailCoverProps {
  work: WorkDetailPublicResponse;
  onBack: () => void;
}

export default function WorkDetailCover({ work, onBack }: WorkDetailCoverProps) {
  // Prioritize video over image
  const coverMedia = work.coverVideo || work.coverImage;

  return (
    <section className="relative h-[40vh] w-full overflow-hidden">
      {/* Cover Media */}
      {coverMedia ? (
        work.coverVideo ? (
        <VideoPlayer
          videoSrc={work.coverVideo}
          className="w-full h-full object-cover"
          showControlsOverlay={false}
        />
        ) : (
          <Image
            src={work.coverImage!}
            alt={work.title}
            fill
            className="object-cover"
            sizes="100vw"
            quality={95}
            priority
          />
        )
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/10" />
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Title and Back Button - Bottom Left */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
        <div className="container max-w-7xl mx-auto">
          <div className="flex items-end space-x-6">
            {/* Back Button */}
            <button
              onClick={onBack}
              className="flex items-center text-white/80 hover:text-white transition-colors mb-2"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-4xl">
              {work.title}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
