import { Hero } from "./components/sections/Hero";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Add scrollable content to test parallax */}
      <div className="bg-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            <section className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Services</h2>
              <p className="text-lg text-muted-foreground">Scroll down to see the parallax effect in action</p>
            </section>
            
            <section className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-xl font-semibold mb-4">Web Design</h3>
                <p className="text-muted-foreground">Beautiful, responsive websites that convert visitors into customers.</p>
              </div>
              <div className="p-6 rounded-lg bg-card border">
                <h3 className="text-xl font-semibold mb-4">Digital Marketing</h3>
                <p className="text-muted-foreground">Strategic marketing solutions to grow your online presence.</p>
              </div>
            </section>
            
            <section className="text-center py-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Get Started</h2>
              <p className="text-lg text-muted-foreground mb-8">Ready to bring your vision to life?</p>
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Contact Us
              </button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
 