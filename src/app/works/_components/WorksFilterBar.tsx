"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import MagneticWrapper from '@/components/ui/MagneticWrapper';
import type { ServiceFilter } from '@/types/works';

interface WorksFilterBarProps {
  services: ServiceFilter[];
  isLoading: boolean;
  currentFilter: string | null;
  onFilterChange: (serviceId: string | null) => void;
}

export default function WorksFilterBar({
  services,
  currentFilter,
  onFilterChange,
}: WorksFilterBarProps) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-start gap-3">
        {/* All Button */}
        <MagneticWrapper strength={0.2} attractArea={80}>
          <Button
            onClick={() => onFilterChange(null)}
            variant={currentFilter === null ? "default" : "outline"}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              currentFilter === null
                ? 'bg-gradient-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25'
                : 'bg-card/50 text-muted-foreground hover:bg-primary/10 hover:text-primary border-border/20'
            }`}
          >
            All
          </Button>
        </MagneticWrapper>

        {/* Service Buttons */}
        {services.map((service) => (
          <MagneticWrapper key={service.id} strength={0.2} attractArea={80}>
            <Button
              onClick={() => onFilterChange(service.id)}
              variant={currentFilter === service.id ? "default" : "outline"}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                currentFilter === service.id
                  ? 'bg-gradient-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25'
                  : 'bg-card/50 text-muted-foreground hover:bg-primary/10 hover:text-primary border-border/20'
              }`}
            >
              {service.title}
            </Button>
          </MagneticWrapper>
        ))}
      </div>

      {/* Active Filter Indicator */}
      {currentFilter && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full"></div>
            <span className="text-sm text-primary font-medium">
              Showing: {services.find(s => s.id === currentFilter)?.title || 'Unknown Service'}
            </span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

