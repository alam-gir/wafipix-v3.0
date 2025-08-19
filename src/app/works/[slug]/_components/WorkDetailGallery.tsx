'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Gallery } from '@/lib/demo-data';

interface WorkDetailGalleryProps {
  gallery: Gallery;
}

export default function WorkDetailGallery({ gallery }: WorkDetailGalleryProps) {
  const sortedBlocks = [...gallery.blocks].sort((a, b) => a.order - b.order);

  return (
    <section className="bg-background">
      {/* Gallery Blocks - No margins between blocks */}
      <div className="space-y-0">
        {sortedBlocks.map((block, blockIndex) => (
          <motion.div
            key={block.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: blockIndex * 0.1, ease: "easeOut" }}
            className="w-full"
          >
            {/* Media Grid - Grid layout based on isMobileGrid */}
            <div 
              className={`grid gap-0 ${
                block.isMobileGrid 
                  ? `grid-cols-${Math.min(block.medias.length, 2)} sm:grid-cols-${Math.min(block.medias.length, 3)} lg:grid-cols-${Math.min(block.medias.length, 4)} xl:grid-cols-${Math.min(block.medias.length, 6)}` 
                  : `grid-cols-1 lg:grid-cols-${Math.min(block.medias.length, 4)} xl:grid-cols-${Math.min(block.medias.length, 6)}`
              }`}
            >
              {block.medias.map((media, mediaIndex) => (
                <motion.div
                  key={`${block.id}-${mediaIndex}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: mediaIndex * 0.05, ease: "easeOut" }}
                  className="relative overflow-hidden"
                >
                  {media.type === 'video' ? (
                    <div className="relative aspect-video w-full h-full">
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src={media.url} type="video/mp4" />
                      </video>
                    </div>
                  ) : (
                    <div className="relative aspect-video w-full h-full">
                      <Image
                        src={media.url}
                        alt="Gallery media"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={() => {
                          console.error('Gallery image failed to load:', media.url);
                        }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Empty State */}
      {sortedBlocks.length === 0 && (
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
          <h3 className="text-xl font-semibold text-white mb-2">No Gallery Available</h3>
          <p className="text-primary/80">Gallery content will be added soon.</p>
        </motion.div>
      )}
    </section>
  );
}
