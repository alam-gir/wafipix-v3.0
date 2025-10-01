"use client";

import { motion } from "framer-motion";
import { Badge } from "./Badge";
import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  badgeIcon: LucideIcon;
  badgeText: string;
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  animationDelay?: number;
}

export function SectionHeader({
  badgeIcon: BadgeIcon,
  badgeText,
  title,
  subtitle,
  description,
  className = ""
}: SectionHeaderProps) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      className={`text-center space-y-6 ${className}`}
    >
      <Badge
        icon={BadgeIcon}
        text={badgeText}
        variant="gradient"
        size="md"
        className="mb-8"
      />

      <motion.h2
        variants={fadeUpVariants}
        className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight"
      >
        <span className="text-white">
          {title}
        </span>
        {subtitle && (
          <>
            <br />
            <span className="text-primary">
              {subtitle}
            </span>
          </>
        )}
      </motion.h2>

      {description && (
        <motion.p
          variants={fadeUpVariants}
          className="text-lg md:text-xl text-primary/80 max-w-3xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
} 