"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useState } from "react";

interface AnimatedLetterProps {
  letter: string;
  index: number;
}

export function AnimatedLetter({ letter, index }: AnimatedLetterProps) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [25, -25]);
  const rotateY = useTransform(x, [-100, 100], [-25, 25]);
  const rotateZ = useTransform(x, [-100, 100], [-8, 8]);
  
  const springConfig = { damping: 30, stiffness: 350 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);
  const springRotateZ = useSpring(rotateZ, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="relative inline-block cursor-pointer mx-0.5 md:mx-1"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: 1500,
        transformStyle: "preserve-3d",
      }}
      animate={{
        scale: isHovered ? 1.2 : 1,
        z: isHovered ? 40 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 30,
        delay: index * 0.02,
      }}
    >
      {/* Main Letter */}
      <motion.div
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[0.15em] text-muted-foreground/50 select-none uppercase"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          rotateZ: springRotateZ,
          transformStyle: "preserve-3d",
        }}
        animate={{
          textShadow: isHovered 
            ? "0 0 40px rgba(139, 92, 246, 0.5), 0 0 80px rgba(139, 92, 246, 0.3), 0 0 120px rgba(139, 92, 246, 0.1)"
            : "0 0 0px rgba(139, 92, 246, 0)",
          color: isHovered ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground) / 0.5)",
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        {letter}
      </motion.div>
      
      {/* 3D Shadow Effect */}
      <motion.div
        className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[0.15em] text-foreground/40 select-none pointer-events-none uppercase"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          rotateZ: springRotateZ,
          transformStyle: "preserve-3d",
          z: -20,
        }}
        animate={{
          x: isHovered ? 15 : 8,
          y: isHovered ? 15 : 8,
          opacity: isHovered ? 0.5 : 0.2,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        {letter}
      </motion.div>

      {/* Secondary Shadow for Depth */}
      <motion.div
        className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[0.15em] text-foreground/25 select-none pointer-events-none uppercase"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          rotateZ: springRotateZ,
          transformStyle: "preserve-3d",
          z: -40,
        }}
        animate={{
          x: isHovered ? 25 : 15,
          y: isHovered ? 25 : 15,
          opacity: isHovered ? 0.3 : 0.1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        {letter}
      </motion.div>

      {/* Highlight Effect */}
      <motion.div
        className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[0.15em] text-white/10 select-none pointer-events-none uppercase"
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          rotateZ: springRotateZ,
          transformStyle: "preserve-3d",
          z: 8,
        }}
        animate={{
          x: isHovered ? -6 : -3,
          y: isHovered ? -6 : -3,
          opacity: isHovered ? 0.4 : 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        {letter}
      </motion.div>
    </motion.div>
  );
} 