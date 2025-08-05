"use client";

import { motion} from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedBackgroundWrapperProps {
  children: React.ReactNode;
  className?: string;
  variant?: "geometric" | "gradient" | "minimal";
  intensity?: "subtle" | "medium" | "intense";
  enableShapes?: boolean;
  enableGradient?: boolean;
  enableParticles?: boolean;
}

interface AnimatedShapeProps {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  variant?: "light" | "dark";
  enableParallax?: boolean;
  parallaxIntensity?: number;
  scrollY?: number;
}

function AnimatedShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient,
  variant = "dark",
  enableParallax = false,
  parallaxIntensity = 0.5,
  scrollY = 0,
}: AnimatedShapeProps) {
  const defaultGradient = variant === "dark" 
    ? "from-primary/10 to-secondary/10" 
    : "from-primary/15 to-secondary/15";

  // Calculate parallax transforms based on scroll position
  const yOffset = enableParallax ? (scrollY / 1000) * 500 * parallaxIntensity : 0;
  const xOffset = enableParallax ? (scrollY / 1000) * 300 * parallaxIntensity : 0;
  const rotateOffset = enableParallax ? (scrollY / 1000) * 15 : 0;

    return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
             style={{
         y: yOffset,
         x: xOffset,
         rotate: rotate + rotateOffset,
       }}
      className={cn("absolute", className)}
    >
             <motion.div
         animate={{
           y: [0, 15, 0],
         }}
         transition={{
           duration: 12,
           repeat: Number.POSITIVE_INFINITY,
           ease: "easeInOut",
         }}
         style={{
           width,
           height,
         }}
                   className="relative"
       >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient || defaultGradient,
                         variant === "dark" 
               ? "backdrop-blur-[2px] border border-border/20 shadow-[0_8px_32px_0_rgba(255,255,255,0.05)]"
               : "backdrop-blur-[2px] border border-primary/20 shadow-[0_8px_32px_0_rgba(59,130,246,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
                         variant === "dark"
               ? "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"
               : "after:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

function AnimatedParticle({
  className,
  delay = 0,
  size = 4,
  variant = "dark",
}: {
  className?: string;
  delay?: number;
  size?: number;
  variant?: "light" | "dark";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        delay,
        ease: "easeOut",
      }}
      className={cn("absolute rounded-full", className)}
      style={{ width: size, height: size }}
    >
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className={cn(
          "w-full h-full rounded-full",
          variant === "dark" 
            ? "bg-primary/30" 
            : "bg-muted-foreground/20"
        )}
      />
    </motion.div>
  );
}

export function AnimatedBackgroundWrapper({
  children,
  className,
  variant = "geometric",
  intensity = "medium",
  enableShapes = true,
  enableGradient = true,
  enableParticles = false,
}: AnimatedBackgroundWrapperProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if dark mode is enabled
    const checkDarkMode = () => {
      const isDarkMode = document.documentElement.classList.contains("dark");
      setIsDark(isDarkMode);
    };

    checkDarkMode();

    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getGradientOpacity = () => {
    switch (intensity) {
      case "subtle": return "5";
      case "medium": return "10";
      case "intense": return "20";
      default: return "10";
    }
  };

  const getShapeOpacity = () => {
    switch (intensity) {
      case "subtle": return "5";
      case "medium": return "15";
      case "intense": return "25";
      default: return "15";
    }
  };

     return (
     <div className={cn("relative w-full overflow-hidden", className)}>
      {/* Base gradient background */}
             {enableGradient && (
         <div 
           className={cn(
             "absolute inset-0",
             isDark
               ? `bg-gradient-to-br from-primary/[0.0${getGradientOpacity()}] via-transparent to-secondary/[0.0${getGradientOpacity()}]`
               : `bg-gradient-to-br from-primary/[0.0${getGradientOpacity()}] via-transparent to-secondary/[0.0${getGradientOpacity()}]`,
             "blur-3xl"
           )} 
         />
       )}

             {/* Animated shapes */}
       {enableShapes && variant === "geometric" && (
         <div className="absolute inset-0 overflow-hidden">
                       {/* Large shape - desktop only */}
                         <AnimatedShape
               delay={0.3}
               width={600}
               height={140}
               rotate={12}
               gradient={isDark ? `from-primary/[0.${getShapeOpacity()}]` : `from-primary/[0.${getShapeOpacity()}]`}
               className="hidden lg:block left-[-5%] top-[20%]"
               variant={isDark ? "dark" : "light"}
                               enableParallax={true}
                parallaxIntensity={1.2}
                scrollY={scrollY}
             />

            {/* Medium shape - desktop only */}
                         <AnimatedShape
               delay={0.5}
               width={500}
               height={120}
               rotate={-15}
               gradient={isDark ? `from-secondary/[0.${getShapeOpacity()}]` : `from-secondary/[0.${getShapeOpacity()}]`}
               className="hidden lg:block right-[0%] top-[75%]"
               variant={isDark ? "dark" : "light"}
                               enableParallax={true}
                parallaxIntensity={1.0}
                scrollY={scrollY}
             />

            {/* Medium shape - tablet and desktop */}
                         <AnimatedShape
               delay={0.4}
               width={400}
               height={100}
               rotate={-8}
               gradient={isDark ? `from-primary/[0.${getShapeOpacity()}]` : `from-primary/[0.${getShapeOpacity()}]`}
               className="hidden md:block left-[5%] bottom-[15%]"
               variant={isDark ? "dark" : "light"}
                               enableParallax={true}
                parallaxIntensity={0.8}
                scrollY={scrollY}
             />

            {/* Small shape - tablet and desktop */}
                         <AnimatedShape
               delay={0.6}
               width={250}
               height={70}
               rotate={20}
               gradient={isDark ? `from-secondary/[0.${getShapeOpacity()}]` : `from-secondary/[0.${getShapeOpacity()}]`}
               className="hidden md:block right-[15%] top-[20%]"
               variant={isDark ? "dark" : "light"}
                               enableParallax={true}
                parallaxIntensity={0.6}
                scrollY={scrollY}
             />

           {/* Very small shape - mobile only (subtle) */}
           <AnimatedShape
             delay={0.7}
             width={120}
             height={35}
             rotate={-15}
             gradient={isDark ? `from-primary/[0.${Math.max(5, parseInt(getShapeOpacity()) - 5)}]` : `from-primary/[0.${Math.max(5, parseInt(getShapeOpacity()) - 5)}]`}
             className="md:hidden right-[10%] top-[25%]"
             variant={isDark ? "dark" : "light"}
           />

           {/* Very small shape - mobile only (subtle) */}
           <AnimatedShape
             delay={0.8}
             width={80}
             height={25}
             rotate={25}
             gradient={isDark ? `from-secondary/[0.${Math.max(5, parseInt(getShapeOpacity()) - 5)}]` : `from-secondary/[0.${Math.max(5, parseInt(getShapeOpacity()) - 5)}]`}
             className="md:hidden left-[15%] bottom-[20%]"
             variant={isDark ? "dark" : "light"}
           />
         </div>
       )}

      {/* Animated particles */}
      {enableParticles && (
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <AnimatedParticle
              key={i}
              delay={i * 0.1}
              size={Math.random() * 6 + 2}
              className={`left-[${Math.random() * 100}%] top-[${Math.random() * 100}%]`}
              variant={isDark ? "dark" : "light"}
            />
          ))}
        </div>
      )}

                    {/* Content */}
       <div className="relative z-10 w-full h-full">
         {children}
       </div>

      {/* Overlay gradient for better text readability */}
      <div 
        className={cn(
          "absolute inset-0 pointer-events-none",
          isDark
            ? "bg-gradient-to-t from-background via-transparent to-background/80"
            : "bg-gradient-to-t from-background via-transparent to-background/60"
        )} 
      />
    </div>
  );
} 