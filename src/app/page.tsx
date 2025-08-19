import React from 'react';
import { Hero } from "@/components/sections/Hero";
import { HeroQuoteSection } from "@/components/sections/HeroQuoteSection";
import { FeaturesGridSection } from "@/components/sections/FeaturesGridSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TrustedCustomersSection } from "@/components/sections/TrustedCustomersSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { VideoSection } from "@/components/sections/VideoSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HeroQuoteSection />
      <FeaturesGridSection />
      <StatsSection />
      <VideoSection />
      <TrustedCustomersSection />
      <CTASection />
      <TestimonialSection />
      <WhyChooseUsSection />
    </main>
  );
}