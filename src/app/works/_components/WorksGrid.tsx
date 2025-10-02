"use client";

import React from 'react';
import { motion } from 'framer-motion';
import WorkCard from './WorkCard';
import ShowMoreButton from './ShowMoreButton';
import type { WorkCard as WorkCardType } from '@/types/works';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

interface WorksGridProps {
  works: WorkCardType[];
  isLoading: boolean;
  error: Error | null;
  hasMore: boolean;
  onLoadMore: () => void;
}

export default function WorksGrid({
  works,
  isLoading,
  error,
  hasMore,
  onLoadMore,
}: WorksGridProps) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Loading State
  if (isLoading && works.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <LoadingSpinner />
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-destructive">Failed to load works</p>
            <p className="text-xs text-muted-foreground mt-1">Please try again later</p>
          </div>
        </div>
      </div>
    );
  }

  // Empty State
  if (!isLoading && works.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">No works found</p>
            <p className="text-xs text-muted-foreground mt-1">Try adjusting your filters</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12 w-full">
      {/* Works Grid */}
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {works.map((work, index) => {
          // Calculate which row this work belongs to
          const rowIndex = Math.floor(index / 3); // Every 3 works = 1 large + 2 normal
          const positionInRow = index % 3;
          
          // First work in each row (index 0, 3, 6, ...) = Large card
          if (positionInRow === 0) {
            return (
              <motion.div
                key={work.id}
                variants={itemVariants}
                className="group"
              >
                <WorkCard work={work} index={index} isLarge={true} />
              </motion.div>
            );
          }
          
          // Second work in each row (index 1, 4, 7, ...) = Start of normal cards row
          if (positionInRow === 1) {
            const nextWork = works[index + 1];
            return (
              <motion.div
                key={`row-${rowIndex}-normal`}
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
              >
                <div className="group">
                  <WorkCard work={work} index={index} isLarge={false} />
                </div>
                {nextWork && (
                  <div className="group">
                    <WorkCard work={nextWork} index={index + 1} isLarge={false} />
                  </div>
                )}
              </motion.div>
            );
          }
          
          // Third work in each row (index 2, 5, 8, ...) = Skip (already rendered above)
          return null;
        })}
      </motion.div>

      {/* Show More Button */}
      {hasMore && (
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex justify-center pt-8"
        >
          <ShowMoreButton
            isLoading={isLoading}
            onLoadMore={onLoadMore}
          />
        </motion.div>
      )}
    </div>
  );
}

