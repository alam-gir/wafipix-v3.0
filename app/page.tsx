import { Hero } from "./components/sections/Hero";
import { VideoSection } from "./components/sections/VideoSection";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <VideoSection 
        videoSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        posterSrc="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
      />
      
      {/* Additional content to test scroll effects */}
      <div className="bg-gradient-to-b from-background to-muted py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-24">
            <section className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Scroll-Driven Video Experience
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience the future of digital storytelling with our innovative video player that responds to your scroll.
                Watch as the video expands, becomes sticky, and shrinks back with smooth animations.
              </p>
            </section>
            
            <section className="grid lg:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🎬</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Dynamic Resizing</h3>
                <p className="text-muted-foreground">
                  The video player smoothly transitions from 80% width to full screen and back based on scroll position.
                </p>
              </div>
              
              <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Mobile Optimized</h3>
                <p className="text-muted-foreground">
                  On mobile devices, enjoy a simplified experience with the video maintaining 16:9 aspect ratio.
                </p>
              </div>
              
              <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🎮</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Interactive Controls</h3>
                <p className="text-muted-foreground">
                  Full video controls with play/pause, mute/unmute, and volume adjustment with smooth animations.
                </p>
              </div>
            </section>
            
            <section className="text-center py-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Experience?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Scroll back up to see the video player in action again, or explore more of our work.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all duration-300 hover:scale-105">
                  View Our Work
                </button>
                <button className="px-8 py-4 bg-card text-foreground rounded-xl border border-border hover:bg-card/80 transition-all duration-300 hover:scale-105">
                  Get in Touch
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
 