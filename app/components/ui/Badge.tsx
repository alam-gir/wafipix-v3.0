"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  icon?: LucideIcon;
  text: string;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  animationDelay?: number;
  animationDuration?: number;
  variant?: "default" | "gradient" | "outline";
  size?: "sm" | "md" | "lg";
}

export function Badge({
  icon: Icon,
  text,
  className,
  iconClassName,
  textClassName,
  animationDelay = 0,
  animationDuration = 1,
  variant = "gradient",
  size = "md"
}: BadgeProps) {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const sizeClasses = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-3 text-base"
  };

  const iconSizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5"
  };

  const variantClasses = {
    default: "bg-card/50 backdrop-blur-sm border border-border/20 text-muted-foreground",
    gradient: "bg-gradient-to-r from-primary/10 to-purple-500/10 border border-primary/20 text-primary",
    outline: "bg-transparent border-2 border-primary/20 text-primary"
  };

  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: animationDuration, delay: animationDelay }}
      className={cn(
        "inline-flex items-center gap-2 rounded-full font-semibold",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {Icon && (
        <Icon className={cn(
          iconSizeClasses[size],
          variant === "gradient" ? "text-primary" : "text-current",
          iconClassName
        )} />
      )}
      <span className={cn(
        "font-semibold",
        variant === "gradient" ? "text-primary" : "text-current",
        textClassName
      )}>
        {text}
      </span>
    </motion.div>
  );
} 