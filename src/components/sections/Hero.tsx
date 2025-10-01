"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Circle } from "lucide-react";
import { SITE_CONSTANTS } from "@/lib/constants";
import { MeteorBackgroundWrapper } from "@/components/ui/MeteorBackgroundWrapper";
import { GradualSpacing } from "@/components/ui/GradualSpacing";
import MagneticWrapper from "@/components/ui/MagneticWrapper";
import { Badge } from "@/components/ui/Badge";
import { VideoSection } from "./VideoSection";

interface HeroProps {
  className?: string;
}

export function Hero({ className }: HeroProps) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <MeteorBackgroundWrapper
      meteorCount={25}
      meteorIntensity="medium"
      enableMeteors={true}
      className={className}
    >
      <div className="flex items-center justify-center min-h-screen w-full py-20 px-4 md:py-60">
 
          <div className="w-full h-auto flex flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-12 md:mb-16">
              <Badge
                icon={Circle}
                text={SITE_CONSTANTS.COMPANY.NAME}
                variant="gradient"
                size="md"
                animationDelay={0.5}
                animationDuration={1}
              />
            </div>

            {/* Main Tagline with Gradual Spacing Effect */}
            <div className="mb-8 md:mb-12 max-w-5xl">
              <GradualSpacing
                text={SITE_CONSTANTS.HERO.TAGLINE}
                duration={1.2}
                delayMultiple={0.08}
                className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-tight text-white"
              />
            </div>

            {/* Subtagline with Animation */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.9 }}
            >
              <p className="text-lg sm:text-xl md:text-2xl text-primary/90 mb-16 md:mb-36 leading-relaxed font-light tracking-wide max-w-3xl mx-auto px-4">
                {SITE_CONSTANTS.HERO.SUBTAGLINE}
              </p>
            </motion.div>

            <VideoSection />

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 1.1 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-stretch sm:items-center w-full sm:w-auto mt-16"
            >
              <MagneticWrapper className="w-full sm:w-auto">
                <Link 
                  href="/start-project"
                  className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 font-bold text-lg inline-block text-center hover:from-primary/90 hover:to-primary/70"
                >
                  Let&apos;s Build Your Brand
                </Link>
              </MagneticWrapper>
              <MagneticWrapper className="w-full sm:w-auto">
                <Link 
                  href="/works"
                  className="w-full sm:w-auto px-10 py-5 bg-transparent text-white border-2 border-primary/60 rounded-2xl hover:border-primary hover:bg-primary/10 transition-all duration-300 font-bold text-lg inline-block text-center"
                >
                  View Portfolio
                </Link>
              </MagneticWrapper>
            </motion.div>
          </div>

      </div>
    </MeteorBackgroundWrapper>
  );
} 