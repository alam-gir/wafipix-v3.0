"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface HeroQuoteSectionProps {
  className?: string;
}

export function HeroQuoteSection({ className }: HeroQuoteSectionProps) {
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
    <section className={`py-16 md:py-20 relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Main Quote Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center"
        >
          <Badge
            icon={Award}
            text="Trusted by 500+ Brands"
            variant="gradient"
            size="md"
            className="mb-8"
          />

          <motion.h2
            variants={fadeUpVariants}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight tracking-tight"
          >
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              We Don&apos;t Just Design
            </span>
            <br />
            <span className="bg-gradient-to-r from-gray-900 via-primary to-purple-500 dark:from-gray-100 bg-clip-text text-transparent">
              We Create Digital Magic
            </span>
          </motion.h2>

          <motion.div
            variants={fadeUpVariants}
            className="relative max-w-5xl mx-auto"
            whileHover={{ 
              rotateX: 2,
              rotateY: 1,
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            {/* 3D Background Layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5 rounded-3xl blur-2xl transform translate-y-4" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-purple-500/3 rounded-3xl blur-xl transform translate-y-2" />
            
            {/* Main Container with 3D Effect */}
            <div className="relative bg-gradient-to-br from-white via-white/98 to-gray-50/90 dark:from-gray-900 dark:via-gray-900/98 dark:to-gray-800/90 backdrop-blur-xl border border-gray-200/60 dark:border-gray-700/60 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/10 dark:shadow-black/30 transform-gpu">
              {/* Subtle 3D Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent dark:from-gray-800/50 rounded-3xl pointer-events-none" />
              
              {/* Quote Icon with 3D Effect */}
              <motion.div 
                className="flex items-center justify-center mb-8"
                whileHover={{ 
                  rotateY: 15,
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="relative">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-primary/25 transform rotate-3">
                    <svg className="w-8 h-8 text-white transform -rotate-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>
                  <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 blur-xl transform translate-y-1" />
                </div>
              </motion.div>
              
              {/* Quote Text with Enhanced Typography */}
              <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed font-medium text-center mb-8 max-w-4xl mx-auto relative z-10">
                &ldquo;In a world where everyone is trying to be different, we help you be 
                <span className="text-primary font-semibold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"> authentically extraordinary</span>. 
                Your brand deserves more than just a logo – it deserves a story that moves people.&rdquo;
              </blockquote>
              
              {/* Professional Label */}
              <div className="flex items-center justify-center gap-3">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-purple-500 rounded-full shadow-sm" />
                <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-widest">Wafipix Philosophy</span>
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-purple-500 rounded-full shadow-sm" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 