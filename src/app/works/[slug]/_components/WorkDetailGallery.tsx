'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { GalleryBlock } from '@/types';

interface WorkDetailGalleryProps {
  gallery: GalleryBlock[];
}

export default function WorkDetailGallery({ gallery }: WorkDetailGalleryProps) {
  // Helper function to get grid columns class
  const getGridColsClass = (itemCount: number) => {
    const gridClasses = {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6'
    };
    return gridClasses[itemCount as keyof typeof gridClasses] || 'grid-cols-1';
  };

  return (
    <section className="bg-background">
      {/* Gallery Blocks - Each block is a separate grid */}
      <div className="space-y-0">
        {gallery.map((block, blockIndex) => (
          <motion.div
            key={`${block.workId}-${blockIndex}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: blockIndex * 0.1, ease: "easeOut" }}
            className="w-full"
          >
            {/* Each block is a grid with columns equal to number of items */}
            <div 
              className={`grid gap-0 ${
                block.isMobileGrid 
                  ? getGridColsClass(block.items.length) // Mobile: same as desktop
                  : `grid-cols-1 sm:${getGridColsClass(block.items.length)}` // Mobile: 1 column, desktop: items count
              }`}
            >
              {block.items.map((item, itemIndex) => (
                <motion.div
                  key={`${block.workId}-${itemIndex}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: itemIndex * 0.05, ease: "easeOut" }}
                  className="relative w-full"
                >
                  {item.type === 'video' ? (
                    <div className="relative w-full aspect-video">
                      <video
                        className="w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls={false}
                      >
                        <source src={item.url} type="video/mp4" />
                      </video>
                    </div>
                  ) : (
                    <div className="relative w-full aspect-video">
                      <Image
                        src={item.url}
                        alt="Gallery item"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={() => {
                          console.error('Gallery item failed to load:', item.url);
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
      {gallery.length === 0 && (
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
          <h3 className="text-xl font-semibold text-white mb-2">No Gallery Items</h3>
          <p className="text-primary/80">{"This work doesn't have any gallery items yet."}</p>
        </motion.div>
      )}
    </section>
  );
}
