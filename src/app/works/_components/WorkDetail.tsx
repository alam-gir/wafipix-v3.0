'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import OptimizedImage from '@/components/ui/OptimizedImage';
import VideoPlayer from '@/components/ui/VideoPlayer';
import type { Work } from '@/types';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

interface WorkDetailProps {
  work: Work;
  onClose?: () => void;
  isModal?: boolean;
}

export default function WorkDetail({ work, onClose, isModal = false }: WorkDetailProps) {
  const router = useRouter();

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else if (isModal) {
      router.back();
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-10",
        isModal && "bg-background rounded-2xl shadow-2xl border border-border/50 relative"
      )}
    >
      {/* Close button for modal */}
      {isModal && (
        <button 
          aria-label="Close modal" 
          onClick={handleClose} 
          className="absolute top-4 right-4 z-10 rounded-full bg-primary/10 hover:bg-primary/20 p-2 transition-colors"
        >
          <X className="w-5 h-5 text-primary" />
        </button>
      )}

      {/* Left column: text */}
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">{work.name}</h1>
          <div className="text-sm text-primary/80 bg-primary/10 px-3 py-1 rounded-full inline-block border border-primary/20">
            {work.service}
          </div>
        </div>
        
        {work.description && (
          <p className="text-lg text-primary/80 leading-relaxed">{work.description}</p>
        )}
        
        {/* Richtext description (trusted HTML for demo) */}
        <div className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-primary/80 prose-strong:text-white prose-a:text-primary hover:prose-a:text-primary/80" dangerouslySetInnerHTML={{ __html: work.description }} />
      </div>

      {/* Right column: hero media */}
      <div className="rounded-3xl overflow-hidden">
        {work.coverVideoUrl ? (
          <VideoPlayer videoSrc={work.coverVideoUrl} showControlsOverlay={false} />
        ) : work.coverImageUrl ? (
          <OptimizedImage src={work.coverImageUrl} alt={work.name} width={1400} height={900} className="w-full h-auto" />
        ) : null}
      </div>
    </motion.div>
  );
}



