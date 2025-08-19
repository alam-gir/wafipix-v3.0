"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface HeroQuoteSectionProps {
  className?: string;
}

export function HeroQuoteSection({ className }: HeroQuoteSectionProps) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className={`py-16 md:py-20 relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Main Quote Section */}
        <SectionHeader
          badgeIcon={Award}
          badgeText="Trusted by 500+ Brands"
          title="We Don't Just Design"
          subtitle="We Create Digital Magic"
          className="mb-12"
        />

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative max-w-5xl mx-auto"
          whileHover={{ 
            rotateX: 2,
            rotateY: 1,
            scale: 1.02,
            transition: { duration: 0.3, ease: "easeOut" }
          }}
        >
          {/* 3D Background Layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/3 to-primary/5 rounded-3xl blur-2xl transform translate-y-4" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-primary/3 rounded-3xl blur-xl transform translate-y-2" />
          
          {/* Main Container with 3D Effect */}
          <div className="relative bg-gradient-to-br from-card via-card/98 to-card/90 backdrop-blur-xl border border-border/60 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/10 dark:shadow-black/30 transform-gpu">
            {/* Subtle 3D Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-card/50 to-transparent rounded-3xl pointer-events-none" />
            
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
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/25 transform rotate-3">
                  <svg className="w-8 h-8 text-primary-foreground transform -rotate-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
                <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/20 blur-xl transform translate-y-1" />
              </div>
            </motion.div>
            
            {/* Quote Text with Enhanced Typography */}
            <blockquote className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed font-medium text-center mb-8 max-w-4xl mx-auto relative z-10">
              &ldquo;In a world where everyone is trying to be different, we help you be 
              <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent font-bold"> authentically unique</span>. 
              Our designs don&apos;t just look good – they feel right, work perfectly, and drive real results.&rdquo;
            </blockquote>

            {/* Author Signature */}
            <div className="flex items-center justify-center gap-4 pt-6 border-t border-border/30">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-lg">W</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-white">
                  Wafipix Team
                </div>
                <div className="text-sm text-primary/80 font-medium">
                  Digital Magic Creators
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 