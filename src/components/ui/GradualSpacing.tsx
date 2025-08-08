"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface GradualSpacingProps {
  text: string;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

function GradualSpacing({
  text,
  duration = 0.5,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className,
}: GradualSpacingProps) {
  return (
    <div className="flex flex-wrap justify-center">
      {text.split(" ").map((word, i) => (
        <motion.h1
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: i * delayMultiple,
            ease: "easeOut"
          }}
          className={cn("drop-shadow-sm mr-2", className)}
        >
                     {word.split("").map((char, j) => (
             <motion.span
               key={j}
               initial={{ opacity: 0, x: -5 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ 
                 duration: 0.8, 
                 delay: (i * delayMultiple) + (j * 0.02),
                 ease: "easeOut"
               }}
               className="inline-block"
             >
               {char}
             </motion.span>
           ))}
        </motion.h1>
      ))}
    </div>
  );
}

export { GradualSpacing }; 