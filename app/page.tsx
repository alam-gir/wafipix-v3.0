import OptimizedImage from './components/ui/OptimizedImage';
import AnimatedGradientBlur from './components/ui/AnimatedGradientBlur';
import { BackgroundGradientAnimationDemo } from './components/ui/background-gradient-animation-demo';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-display text-6xl text-foreground mb-8">
            Wafipix Design System
          </h1>
          
          <p className="text-body text-xl text-muted-foreground mb-12 max-w-3xl">
            Experience the power of smooth animations, magnetic interactions, and professional design. 
            Hover over &ldquo;Services&rdquo; in the navbar to see the expandable submenu in action!
          </p>
        
          {/* Typography Showcase */}
          <section className="mb-16">
            <h2 className="text-heading text-3xl mb-6 text-foreground">Typography with Manrope Font</h2>
            <div className="space-y-6">
              <div>
                <h1 className="text-display text-7xl text-foreground mb-2">
                  Creative Design
                </h1>
                <p className="text-subtitle text-lg">Hero heading with Manrope font</p>
              </div>
              
              <div>
                <h2 className="text-heading text-4xl text-foreground mb-2">
                  Professional Excellence
                </h2>
                <p className="text-body text-lg text-muted-foreground">
                  Manrope font provides excellent readability and modern aesthetics perfect for design agencies.
                </p>
              </div>
              
              <div>
                <h3 className="text-heading text-2xl text-foreground mb-2">
                  Digital Magic Creators
                </h3>
                <p className="text-body text-base text-muted-foreground">
                  Clean, contemporary typography that conveys creativity and professionalism.
                </p>
              </div>
            </div>
          </section>
          
          {/* Color Palette */}
          <section className="mb-16">
            <h2 className="text-heading text-3xl mb-6">shadcn/ui Color System</h2>
            
            {/* Semantic Colors */}
            <div className="mb-8">
              <h3 className="text-heading text-xl mb-4">Semantic Colors</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="h-16 bg-background border border-border rounded-lg mb-2"></div>
                  <span className="text-caption">background</span>
                </div>
                <div className="text-center">
                  <div className="h-16 bg-card border border-border rounded-lg mb-2"></div>
                  <span className="text-caption">card</span>
                </div>
                <div className="text-center">
                  <div className="h-16 bg-primary rounded-lg mb-2"></div>
                  <span className="text-caption">primary</span>
                </div>
                <div className="text-center">
                  <div className="h-16 bg-secondary rounded-lg mb-2"></div>
                  <span className="text-caption">secondary</span>
                </div>
                <div className="text-center">
                  <div className="h-16 bg-accent rounded-lg mb-2"></div>
                  <span className="text-caption">accent</span>
                </div>
                <div className="text-center">
                  <div className="h-16 bg-muted rounded-lg mb-2"></div>
                  <span className="text-caption">muted</span>
                </div>
                <div className="text-center">
                  <div className="h-16 bg-destructive rounded-lg mb-2"></div>
                  <span className="text-caption">destructive</span>
                </div>
                <div className="text-center">
                  <div className="h-16 bg-border rounded-lg mb-2"></div>
                  <span className="text-caption">border</span>
                </div>
              </div>
            </div>
          </section>
          
          {/* Interactive Elements */}
          <section className="mb-16">
            <h2 className="text-heading text-3xl mb-6">Interactive Elements</h2>
            <div className="flex gap-4">
              <button className="bg-gradient-primary text-white px-6 py-3 rounded-lg hover-lift">
                Primary Button
              </button>
              <button className="bg-gradient-accent text-white px-6 py-3 rounded-lg hover-glow">
                Accent Button
              </button>
              <button className="bg-gradient-secondary text-white px-6 py-3 rounded-lg hover-lift">
                Secondary Button
              </button>
            </div>
          </section>

          {/* OptimizedImage Test */}
          <section className="mb-16">
            <h2 className="text-heading text-3xl mb-6">OptimizedImage Test</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <OptimizedImage
                src="https://picsum.photos/300/200?random=1"
                alt="Test image 1"
                width={300}
                height={200}
                className="rounded-lg"
              />
              <OptimizedImage
                src="https://picsum.photos/300/200?random=2"
                alt="Test image 2"
                width={300}
                height={200}
                className="rounded-lg"
                priority
              />
              <OptimizedImage
                src="https://picsum.photos/300/200?random=3"
                alt="Test image 3"
                width={300}
                height={200}
                className="rounded-lg"
                quality={90}
              />
            </div>
          </section>

          {/* AnimatedGradientBlur Demo */}
          <section className="mb-16">
            <h2 className="text-heading text-3xl mb-6">Animated Gradient Blur Demo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-64 rounded-xl overflow-hidden bg-black/5 border border-border/20">
                <AnimatedGradientBlur
                  className="absolute inset-0"
                  colors={['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b']}
                  duration={8}
                  size="lg"
                />
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-bold mb-2">Creative Agency</h3>
                    <p className="text-white/80">Beautiful animated backgrounds</p>
                  </div>
                </div>
              </div>
              
              <div className="relative h-64 rounded-xl overflow-hidden bg-black/5 border border-border/20">
                <AnimatedGradientBlur
                  className="absolute inset-0"
                  colors={['#10b981', '#3b82f6', '#8b5cf6', '#f59e0b']}
                  duration={12}
                  size="xl"
                />
                <div className="relative z-10 h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-xl font-bold mb-2">Modern Design</h3>
                    <p className="text-white/80">Smooth gradient animations</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* BackgroundGradientAnimation Demo */}
          <section className="mb-16">
            <h2 className="text-heading text-3xl mb-6">Advanced Gradient Animation Demo</h2>
            <div className="relative h-96 rounded-xl overflow-hidden border border-border/20">
              <BackgroundGradientAnimationDemo />
            </div>
          </section>
        </div>
      </section>

      {/* Additional Sections for Scroll Testing */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-heading text-4xl text-foreground mb-8 text-center">
            Scroll Down to See Navbar Transform
          </h2>
          <p className="text-body text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            As you scroll, the navbar will shrink and become more compact with a beautiful backdrop blur effect.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-heading text-4xl text-foreground mb-8 text-center">
            Professional Design Agency
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-heading text-xl text-foreground mb-2">Creative Design</h3>
              <p className="text-body text-muted-foreground">
                Innovative design solutions that captivate and inspire
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-heading text-xl text-foreground mb-2">Fast Development</h3>
              <p className="text-body text-muted-foreground">
                Rapid prototyping and efficient development workflows
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-heading text-xl text-foreground mb-2">Launch Ready</h3>
              <p className="text-body text-muted-foreground">
                Production-ready solutions that scale with your business
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <h2 className="text-heading text-4xl text-foreground mb-8 text-center">
            Ready to Get Started?
          </h2>
          <p className="text-body text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            Let&apos;s create something amazing together. Our team is ready to bring your vision to life.
          </p>
          <div className="text-center">
            <button className="bg-gradient-primary text-white px-8 py-4 rounded-lg hover-lift text-lg font-medium">
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
 