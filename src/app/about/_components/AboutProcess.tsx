"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Search, 
  Palette, 
  Code, 
  TestTube, 
  Rocket,
  ArrowRight,
  Sparkles
} from "lucide-react";

interface AboutProcessProps {
  className?: string;
}

interface ProcessStepProps {
  step: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const ProcessStep = ({ step, icon: Icon, title, description, color, delay }: ProcessStepProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
      className="group relative"
    >
      <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-8 hover:bg-card/80 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2">
        {/* Step Number */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
          {step}
        </div>

        {/* Icon */}
        <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Background Glow */}
        <div className={`absolute inset-0 rounded-2xl ${color.replace('bg-', 'bg-').replace('/10', '/5')} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10`} />
      </div>
    </motion.div>
  );
};

export function AboutProcess({ className }: AboutProcessProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const processSteps = [
    {
      step: 1,
      icon: Search,
      title: "Discovery & Research",
      description: "We dive deep into understanding your business, goals, target audience, and competitive landscape to create a solid foundation.",
      color: "bg-blue-500/10",
    },
    {
      step: 2,
      icon: Palette,
      title: "Design & Strategy",
      description: "Our creative team crafts stunning visual concepts and user experiences that align with your brand and business objectives.",
      color: "bg-purple-500/10",
    },
    {
      step: 3,
      icon: Code,
      title: "Development & Build",
      description: "We bring designs to life with clean, efficient code using the latest technologies and best practices for optimal performance.",
      color: "bg-green-500/10",
    },
    {
      step: 4,
      icon: TestTube,
      title: "Testing & Quality",
      description: "Rigorous testing ensures your digital product works flawlessly across all devices and meets the highest quality standards.",
      color: "bg-yellow-500/10",
    },
    {
      step: 5,
      icon: Rocket,
      title: "Launch & Optimize",
      description: "We launch your project with confidence and continue to monitor, optimize, and improve based on real user data and feedback.",
      color: "bg-red-500/10",
    },
  ];

  return (
    <section className={`py-20 md:py-32 bg-gradient-to-b from-background to-muted/20 ${className}`}>
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
              <Sparkles className="w-4 h-4" />
              Our Process
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              How We Bring Ideas to Life
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Our proven 5-step process ensures every project is delivered on time, 
              within budget, and exceeds expectations. We believe in transparency 
              and collaboration at every stage.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {processSteps.slice(0, 3).map((step, index) => (
              <ProcessStep
                key={index}
                step={step.step}
                icon={step.icon}
                title={step.title}
                description={step.description}
                color={step.color}
                delay={index * 0.2}
              />
            ))}
          </div>

          {/* Middle Arrow */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <ArrowRight className="w-6 h-6 text-primary rotate-90 md:rotate-0" />
            </div>
          </motion.div>

          {/* Last Two Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {processSteps.slice(3).map((step, index) => (
              <ProcessStep
                key={index + 3}
                step={step.step}
                icon={step.icon}
                title={step.title}
                description={step.description}
                color={step.color}
                delay={(index + 3) * 0.2}
              />
            ))}
          </div>

          {/* Process Benefits */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 1 }}
            className="mt-16"
          >
            <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl p-8 md:p-12 border border-primary/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">On Time</div>
                  <div className="text-muted-foreground">Project Delivery</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Support Available</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 