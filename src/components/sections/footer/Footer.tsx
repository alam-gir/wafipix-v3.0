"use client";

import { CompanyNameSection } from "./CompanyNameSection";
import { CTASection } from "./CTASection";
import { FooterLinks } from "./FooterLinks";

interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  return (
    <>
      <CTASection />
      <footer
        className={`bg-background border-t border-border/50 ${className}`}
      >
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-20">
          <CompanyNameSection />
          <FooterLinks />
        </div>
      </footer>
    </>
  );
}
