"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AnimatedIconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  delay?: number;
}

export default function AnimatedIcon({ 
  icon: Icon, 
  size = 64, 
  className = "",
  delay = 0 
}: AnimatedIconProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.5,
        }}
      />
      
      {/* Icon container */}
      <motion.div
        className="relative bg-white rounded-full p-6 shadow-2xl border border-gray-100"
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        <Icon 
          size={size} 
          className="text-gray-800"
        />
      </motion.div>
    </motion.div>
  );
}
