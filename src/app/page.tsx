import React from 'react';
import { Metadata } from 'next';
import { Hero } from "@/components/sections/Hero";
import { HeroQuoteSection } from "@/components/sections/HeroQuoteSection";
import { FeaturesGridSection } from "@/components/sections/FeaturesGridSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TrustedCustomersSection } from "@/components/sections/TrustedCustomersSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { VideoSection } from "@/components/sections/VideoSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import { CTASection } from "@/components/sections/CTASection";
import PageViewTracker from "@/components/analytics/PageViewTracker";
import { createHomeMetadata } from "@/lib/meta";

export const metadata: Metadata = createHomeMetadata();

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <PageViewTracker 
        pageTitle="Wafipix - Digital Magic Creators"
        pageType="homepage"
        contentName="Wafipix Homepage"
        contentCategory="Digital Agency Homepage"
      />
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