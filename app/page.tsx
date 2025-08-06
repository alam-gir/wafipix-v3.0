import { Hero } from "./components/sections/Hero";
import { VideoSection } from "./components/sections/VideoSection";
import { HeroQuoteSection } from "./components/sections/HeroQuoteSection";
import { FeaturesGridSection } from "./components/sections/FeaturesGridSection";
import { StatsSection } from "./components/sections/StatsSection";
import { CTASection } from "./components/sections/CTASection";
import { TrustedCustomersSection } from "./components/sections/TrustedCustomersSection";
import { TestimonialSection } from "./components/sections/TestimonialSection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <VideoSection
        videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        posterSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
      />
      <TrustedCustomersSection />
      <HeroQuoteSection />
      <FeaturesGridSection />
      <StatsSection />
      <CTASection />
      <TestimonialSection />
    </div>
  );
}
 