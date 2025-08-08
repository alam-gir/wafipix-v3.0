"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import AnimatedBackground from "./AnimatedBackground";

interface ErrorPageLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function ErrorPageLayout({ children, className = "" }: ErrorPageLayoutProps) {
  return (
    <div className={`min-h-screen relative bg-gradient-to-br from-gray-50 via-white to-gray-100 ${className}`}>
      <AnimatedBackground />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
}
