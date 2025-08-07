import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import {
  AboutHero,
  AboutStory,
  AboutCTA
} from "./components";
import { Footer } from "@/components/sections/footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutStory />
      <WhyChooseUsSection />
      <AboutCTA />
      <Footer />
    </div>
  );
}
 