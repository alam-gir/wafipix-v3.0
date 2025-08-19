import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import {
  AboutHero,
  AboutStory,
} from "./_components";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <AboutHero />
      <AboutStory />
      <WhyChooseUsSection />
    </main>
  );
}
 