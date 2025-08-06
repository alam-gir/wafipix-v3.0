"use client";

import { motion } from "framer-motion";
import { SocialMediaLink } from "@/lib/demo-data";

interface SocialLinkProps {
  social: SocialMediaLink;
  index: number;
}

export function SocialLink({ social, index }: SocialLinkProps) {
  return (
    <motion.a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="px-3 py-1.5 rounded-lg hover:bg-muted/50 transition-all duration-300 text-muted-foreground hover:text-foreground border border-transparent hover:border-muted-foreground/20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.05,
        y: -2,
      }}
      whileTap={{
        scale: 0.95,
      }}
    >
      <span className="text-sm font-medium">{social.name}</span>
    </motion.a>
  );
} 