import { Hero } from "./components/sections/Hero";
import { VideoSection } from "./components/sections/VideoSection";
import { HeroQuoteSection } from "./components/sections/HeroQuoteSection";
import { FeaturesGridSection } from "./components/sections/FeaturesGridSection";
import { StatsSection } from "./components/sections/StatsSection";
import { CTASection } from "./components/sections/CTASection";
import { TrustedCustomersSection } from "./components/sections/TrustedCustomersSection";
import { TestimonialSection } from "./components/sections/TestimonialSection";
import { AboutCTA } from "./(pages)/about/_components";
import WhyChooseUsSection from "./components/sections/WhyChooseUsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <VideoSection
        videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        posterSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
      />
      <TrustedCustomersSection />
      <HeroQuoteSection />
      <FeaturesGridSection />
      <StatsSection />
      <WhyChooseUsSection />
      <CTASection />
      <TestimonialSection />
      <AboutCTA />
    </main>
  );
}
 