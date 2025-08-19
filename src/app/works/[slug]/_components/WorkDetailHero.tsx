'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Work } from '@/lib/demo-data';
import { Badge } from '@/components/ui/Badge';

interface WorkDetailHeroProps {
  work: Work;
}

export default function WorkDetailHero({ work }: WorkDetailHeroProps) {
  // Prioritize video over image, with better fallback logic
  const hasVideo = Boolean(work.coverVideoUrl || work.profileVideoUrl);
  const hasImage = Boolean(work.coverImageUrl || work.profileImageUrl);
  
  // Get the best available media
  const videoUrl = work.coverVideoUrl || work.profileVideoUrl;
  const imageUrl = work.coverImageUrl || work.profileImageUrl;
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-background/90">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <Badge 
                text={work.service} 
                variant="outline" 
                size="md"
                className="text-sm font-medium"
              />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
              {work.name}
            </motion.h1>
            
            {work.shortDescription && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="text-lg sm:text-xl text-primary/80 max-w-2xl mx-auto lg:mx-0"
              >
                {work.shortDescription}
              </motion.p>
            )}
          </motion.div>

          {/* Media Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            {hasVideo ? (
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border/20">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  poster={imageUrl || undefined}
                >
                  <source src={videoUrl} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>
            ) : hasImage && imageUrl ? (
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border/20">
                <Image
                  src={imageUrl}
                  alt={work.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  onError={() => {
                    console.error('Hero image failed to load:', imageUrl);
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
              </div>
            ) : (
              <div className="aspect-video rounded-2xl bg-muted flex items-center justify-center ring-1 ring-border/20">
                <p className="text-primary/80">No media available</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-primary/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
