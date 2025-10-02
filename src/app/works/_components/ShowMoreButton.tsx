"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import MagneticWrapper from '@/components/ui/MagneticWrapper';

interface ShowMoreButtonProps {
  isLoading: boolean;
  onLoadMore: () => void;
}

export default function ShowMoreButton({ isLoading, onLoadMore }: ShowMoreButtonProps) {
  return (
    <MagneticWrapper strength={0.3} attractArea={120}>
      <Button
        onClick={onLoadMore}
        disabled={isLoading}
        className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
            />
            <span>Loading More...</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <span>Show More</span>
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </div>
        )}
      </Button>
    </MagneticWrapper>
  );
}

