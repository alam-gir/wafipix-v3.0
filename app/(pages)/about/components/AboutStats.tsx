"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  TrendingUp, 
  Users, 
  Globe, 
  Award,
  Coffee,
  Star
} from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

interface AboutStatsProps {
  className?: string;
}

interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  suffix: string;
  label: string;
  color: string;
  delay: number;
}

const StatCard = ({ icon: Icon, value, suffix, label, color, delay }: StatCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.8, delay, type: "spring", stiffness: 100 }}
      className="group relative"
    >
      <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-8 text-center hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
        {/* Icon */}
        <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Value */}
        <div className="mb-4">
          <div className="flex items-center justify-center gap-1">
            <AnimatedCounter
              value={value}
              className="text-4xl md:text-5xl font-bold text-foreground"
            />
            <span className="text-2xl md:text-3xl font-bold text-primary">{suffix}</span>
          </div>
        </div>

        {/* Label */}
        <div className="text-muted-foreground font-medium">
          {label}
        </div>

        {/* Background Glow */}
        <div className={`absolute inset-0 rounded-2xl ${color.replace('bg-', 'bg-').replace('/10', '/5')} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`} />
      </div>
    </motion.div>
  );
};

export function AboutStats({ className }: AboutStatsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const stats = [
    {
      icon: TrendingUp,
      value: 500,
      suffix: "+",
      label: "Projects Completed",
      color: "bg-primary/10",
    },
    {
      icon: Users,
      value: 200,
      suffix: "+",
      label: "Happy Clients",
      color: "bg-green-500/10",
    },
    {
      icon: Globe,
      value: 25,
      suffix: "+",
      label: "Countries Served",
      color: "bg-blue-500/10",
    },
    {
      icon: Award,
      value: 15,
      suffix: "+",
      label: "Industry Awards",
      color: "bg-yellow-500/10",
    },
    {
      icon: Coffee,
      value: 1000,
      suffix: "+",
      label: "Cups of Coffee",
      color: "bg-orange-500/10",
    },
    {
      icon: Star,
      value: 98,
      suffix: "%",
      label: "Client Satisfaction",
      color: "bg-purple-500/10",
    },
  ];

  return (
    <section className={`py-20 md:py-32 bg-gradient-to-b from-muted/20 to-background ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            ref={ref}
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 mb-6">
              <TrendingUp className="w-4 h-4" />
              Our Impact
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Numbers That Tell Our Story
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These aren't just statistics—they represent real relationships, 
              successful projects, and the trust our clients place in us every day.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                color={stat.color}
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl p-8 md:p-12 border border-primary/20">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Trusted by Industry Leaders
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                From startups to Fortune 500 companies, we've helped businesses of all sizes 
                achieve their digital goals and exceed their expectations.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>4+ Years of Excellence</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>100% Project Success Rate</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>24/7 Support Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 