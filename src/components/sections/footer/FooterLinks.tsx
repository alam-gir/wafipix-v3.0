"use client";

import { motion } from "framer-motion";
import { SITE_CONSTANTS } from "@/lib/constants";
import { socialMediaData } from "@/lib/demo-data";
import { SocialLink } from "./SocialLink";

export function FooterLinks() {
  return (
    <>
      {/* Desktop Layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="hidden md:flex justify-between items-center gap-4 text-sm text-muted-foreground"
      >
        {/* Left Section - Copyright & Legal */}
        <div className="flex items-center gap-4">
          <span>© {new Date().getFullYear()} {SITE_CONSTANTS.COMPANY.NAME}</span>
          <span>•</span>
          <a 
            href="/privacy" 
            className="hover:text-foreground transition-colors duration-200"
          >
            Privacy Policy
          </a>
          <span>•</span>
          <a 
            href="/terms" 
            className="hover:text-foreground transition-colors duration-200"
          >
            Terms & Conditions
          </a>
        </div>

        {/* Right Section - Social Media */}
        <div className="flex items-center gap-2">
          {socialMediaData.map((social, index) => (
            <SocialLink key={social.name} social={social} index={index} />
          ))}
        </div>
      </motion.div>

      {/* Mobile Layout */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="md:hidden space-y-6"
      >
        {/* Social Media Links - Mobile */}
        <div className="flex flex-wrap justify-center gap-2">
          {socialMediaData.map((social, index) => (
            <SocialLink key={social.name} social={social} index={index} />
          ))}
        </div>

        {/* Copyright & Legal - Mobile */}
        <div className="flex flex-col items-center gap-2 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} {SITE_CONSTANTS.COMPANY.NAME}</span>
          <div className="flex items-center gap-4">
            <a 
              href="/privacy" 
              className="hover:text-foreground transition-colors duration-200"
            >
              Privacy
            </a>
            <span>•</span>
            <a 
              href="/terms" 
              className="hover:text-foreground transition-colors duration-200"
            >
              Terms
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
} 