import { Metadata } from 'next';
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import {
  AboutHero,
  AboutStory,
} from "./_components";
import PageViewTracker from "@/components/analytics/PageViewTracker";
import { createAboutMetadata } from "@/lib/meta";

export const metadata: Metadata = createAboutMetadata();

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <PageViewTracker 
        pageTitle="About Us - Wafipix"
        pageType="about"
        contentName="About Page"
        contentCategory="Company Information"
      />
      <AboutHero />
      <AboutStory />
      <WhyChooseUsSection />
    </main>
  );
}
 