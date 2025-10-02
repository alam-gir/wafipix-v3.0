"use client";

import React from 'react';
import { motion } from 'framer-motion';
import WorksFilterBar from './WorksFilterBar';
import WorksGrid from './WorksGrid';
import { useWorks, useServiceFilters } from '@/hooks/api/useWorks';

export default function WorksPageClient() {
  const { 
    works, 
    isLoading, 
    error, 
    hasMore, 
    loadMore, 
    filterByService, 
    currentFilter 
  } = useWorks();
  
  const { services, isLoading: filtersLoading } = useServiceFilters();

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Filter Section */}
      <section className="pt-6 pb-16 md:pt-24 md:pb-12 px-4">
        <div className="p-4 md:px-6">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className=""
          >
            <WorksFilterBar
              services={services}
              isLoading={filtersLoading}
              currentFilter={currentFilter.serviceId}
              onFilterChange={filterByService}
            />
          </motion.div>
        </div>
      </section>

      {/* Works Grid Section */}
      <section className="pb-20 md:pb-28">
        <div className="h-full w-full mx-auto px-4 md:px-6">
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mx-auto"
          >
            <WorksGrid
              works={works}
              isLoading={isLoading}
              error={error}
              hasMore={hasMore}
              onLoadMore={loadMore}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}

