import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import {
  AboutHero,
  AboutStory,
  AboutCTA
} from "./_components";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutStory />
      <WhyChooseUsSection />
      <AboutCTA />
    </main>
  );
}
 