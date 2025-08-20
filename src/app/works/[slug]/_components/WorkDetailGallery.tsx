'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { WorkImage } from '@/types';

interface WorkDetailGalleryProps {
  gallery: WorkImage[];
}

export default function WorkDetailGallery({ gallery }: WorkDetailGalleryProps) {
  const sortedImages = [...gallery].sort((a, b) => (a.id || '').localeCompare(b.id || ''));

  return (
    <section className="bg-background">
      {/* Gallery Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
        {sortedImages.map((image, imageIndex) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: imageIndex * 0.05, ease: "easeOut" }}
            className="relative overflow-hidden rounded-lg"
          >
            {image.type === 'video' ? (
              <div className="relative aspect-video w-full h-full">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={image.url} type="video/mp4" />
                </video>
              </div>
            ) : (
              <div className="relative aspect-video w-full h-full">
                <Image
                  src={image.url}
                  alt={image.alt || 'Gallery image'}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={() => {
                    console.error('Gallery image failed to load:', image.url);
                  }}
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {sortedImages.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center py-32"
        >
          <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-primary/20">
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">No Gallery Images</h3>
          <p className="text-primary/80">This work doesn't have any gallery images yet.</p>
        </motion.div>
      )}
    </section>
  );
}
