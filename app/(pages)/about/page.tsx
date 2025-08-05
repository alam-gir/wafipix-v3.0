
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-foreground">About Us</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Welcome to Wafipix - Digital Magic Creators. We are a creative design agency 
          specializing in digital solutions that bring your vision to life.
        </p>
        <div className="flex items-center justify-center space-x-4">
          <div className="w-4 h-4 bg-primary rounded-full"></div>
          <span className="text-sm text-muted-foreground">Navigation is working!</span>
          <div className="w-4 h-4 bg-primary rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
 