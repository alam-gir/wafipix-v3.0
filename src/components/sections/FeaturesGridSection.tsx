"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Target, Users } from "lucide-react";
import MagneticWrapper from "@/components/ui/MagneticWrapper";

interface FeaturesGridSectionProps {
  className?: string;
}

export function FeaturesGridSection({ className }: FeaturesGridSectionProps) {
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

  const features = [
    {
      icon: Sparkles,
      title: "Creative Excellence",
      description: "Award-winning designs that captivate and convert",
      color: "from-primary to-primary/80",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Rapid development without compromising quality",
      color: "from-primary/80 to-primary/60",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every pixel optimized for maximum impact",
      color: "from-primary/60 to-primary/40",
    },
    {
      icon: Users,
      title: "Global Reach",
      description: "Serving clients across 50+ countries worldwide",
      color: "from-primary/40 to-primary/20",
    },
  ];

  return (
    <section className={`py-16 md:py-20 relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Features Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <MagneticWrapper>
                <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/20 hover:border-primary/30 transition-all duration-500 h-full relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-primary/10">
                  {/* Hover background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feature.color} p-3.5 mb-5 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center`}>
                      <feature.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-primary/80 leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </MagneticWrapper>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 