"use client";

import { motion } from "framer-motion";
import { Users2, Rocket, Globe, Star } from "lucide-react";
import { useRef, useState } from "react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

interface StatsSectionProps {
  className?: string;
}

export function StatsSection({ className }: StatsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

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

  const stats = [
    { 
      number: 500, 
      suffix: "+",
      label: "Happy Clients", 
      icon: Users2,
      color: "from-primary to-primary/80"
    },
    { 
      number: 1000, 
      suffix: "+",
      label: "Projects Delivered", 
      icon: Rocket,
      color: "from-primary/80 to-primary/60"
    },
    { 
      number: 50, 
      suffix: "+",
      label: "Countries Served", 
      icon: Globe,
      color: "from-primary/60 to-primary/40"
    },
    { 
      number: 99, 
      suffix: "%",
      label: "Client Satisfaction", 
      icon: Star,
      color: "from-primary/40 to-primary/20"
    },
  ];

  return (
    <section ref={containerRef} className={`py-16 md:py-20 relative overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Stats Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          onAnimationStart={() => setHasAnimated(true)}
        >
          <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border shadow-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariants}
                  className="text-center group"
                >
                  <div className="flex justify-center mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <stat.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                    {hasAnimated ? (
                      <AnimatedCounter 
                        end={stat.number} 
                        suffix={stat.suffix}
                        duration={2.5}
                      />
                    ) : (
                      `0${stat.suffix}`
                    )}
                  </div>
                  <div className="text-xs text-primary/80 font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 