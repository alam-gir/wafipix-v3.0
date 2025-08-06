"use client";

import { motion } from "framer-motion";
import { SITE_CONSTANTS } from "@/lib/constants";
import { AnimatedLetter } from "./AnimatedLetter";

export function CompanyNameSection() {
  const companyName = SITE_CONSTANTS.COMPANY.NAME;
  
  return (
    <div className="text-center mb-12 md:mb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex justify-center items-center flex-wrap"
      >
        {companyName.split('').map((letter, index) => (
          <AnimatedLetter key={index} letter={letter} index={index} />
        ))}
      </motion.div>
    </div>
  );
} 