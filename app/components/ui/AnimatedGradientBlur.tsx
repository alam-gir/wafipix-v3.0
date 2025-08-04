'use client';

import { motion } from 'framer-motion';

interface AnimatedGradientBlurProps {
  className?: string;
  colors?: string[];
  duration?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function AnimatedGradientBlur({
  className = '',
  colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b'],
  duration = 8,
  size = 'lg'
}: AnimatedGradientBlurProps) {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
    xl: 'w-[500px] h-[500px]'
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Multiple animated gradient blurs */}
      <motion.div
        className={`absolute rounded-full blur-3xl opacity-30 ${sizeClasses[size]}`}
        style={{
          background: `radial-gradient(circle, ${colors[0]}, ${colors[1]})`,
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className={`absolute rounded-full blur-3xl opacity-20 ${sizeClasses[size]}`}
        style={{
          background: `radial-gradient(circle, ${colors[2]}, ${colors[3]})`,
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: duration + 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className={`absolute rounded-full blur-3xl opacity-25 ${sizeClasses[size]}`}
        style={{
          background: `radial-gradient(circle, ${colors[1]}, ${colors[2]})`,
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, 80, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: duration - 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Additional floating elements */}
      <motion.div
        className="absolute w-4 h-4 bg-white/10 rounded-full blur-sm"
        animate={{
          x: [0, 200, 0],
          y: [0, -100, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: duration + 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-6 h-6 bg-white/5 rounded-full blur-sm"
        animate={{
          x: [0, -150, 0],
          y: [0, 120, 0],
          opacity: [0.2, 0.6, 0.2],
        }}
        transition={{
          duration: duration + 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
} 