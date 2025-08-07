"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { 
  Heart, 
  Rocket, 
  Sparkles, 
  Award, 
  Users, 
  Globe, 
  CheckCircle,
  TrendingUp,
  Star,
  Palette,
  PenTool,
  Package,
} from "lucide-react";

interface AboutStoryProps {
  className?: string;
}

export function AboutStory({ className }: AboutStoryProps) {
  const data = [
    {
      title: "2020",
      content: (
        <div>
          <p className="text-body text-muted-foreground mb-8 leading-relaxed">
            Founded Wafipix with a passion for creative excellence. We started as a small team of 
            visionary designers and artists, determined to transform brands through innovative design solutions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-lg p-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                <PenTool className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-subtitle font-semibold text-foreground">First Project</p>
                <p className="text-caption text-muted-foreground">Restaurant Brand Identity</p>
              </div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-lg p-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500/10 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-green-500" />
              </div>
              <div>
                <p className="text-subtitle font-semibold text-foreground">Team Size</p>
                <p className="text-caption text-muted-foreground">3 Designers</p>
              </div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-lg p-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <Award className="w-4 h-4 text-blue-500" />
              </div>
              <div>
                <p className="text-subtitle font-semibold text-foreground">Projects</p>
                <p className="text-caption text-muted-foreground">12 Brand Identities</p>
              </div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-lg p-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-500/10 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-purple-500" />
              </div>
              <div>
                <p className="text-subtitle font-semibold text-foreground">Satisfaction</p>
                <p className="text-caption text-muted-foreground">100% Rate</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p className="text-body text-muted-foreground mb-8 leading-relaxed">
            Our reputation for creative excellence and innovative design solutions spread quickly. 
            We expanded our services to include packaging design, digital branding, and comprehensive brand strategies.
          </p>
          <div className="mb-8 space-y-3">
            <div className="flex gap-3 items-center text-body text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span>Expanded team to 8 creative professionals</span>
            </div>
            <div className="flex gap-3 items-center text-body text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span>Launched 150+ successful brand projects</span>
            </div>
            <div className="flex gap-3 items-center text-body text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span>Introduced packaging design services</span>
            </div>
            <div className="flex gap-3 items-center text-body text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span>Developed signature design methodology</span>
            </div>
            <div className="flex gap-3 items-center text-body text-muted-foreground">
              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span>Won 5 design industry awards</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-lg p-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                <Globe className="w-4 h-4 text-yellow-500" />
              </div>
              <div>
                <p className="text-subtitle font-semibold text-foreground">Global Reach</p>
                <p className="text-caption text-muted-foreground">25 Countries</p>
              </div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-lg p-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-red-500/10 rounded-lg flex items-center justify-center">
                <Package className="w-4 h-4 text-red-500" />
              </div>
              <div>
                <p className="text-subtitle font-semibold text-foreground">Packaging</p>
                <p className="text-caption text-muted-foreground">50+ Designs</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-body text-muted-foreground mb-8 leading-relaxed">
            Today, we&apos;re a leading creative design agency trusted by brands worldwide. 
            Our commitment to artistic excellence, innovative thinking, and brand transformation 
            remains at the heart of everything we create.
          </p>
          <div className="mb-8 space-y-3">
            <div className="flex gap-3 items-center text-body text-muted-foreground">
              <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
              <span>500+ successful brand transformations</span>
            </div>
            <div className="flex gap-3 items-center text-body text-muted-foreground">
              <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
              <span>15+ creative professionals across 2 studios</span>
            </div>
            <div className="flex gap-3 items-center text-body text-muted-foreground">
              <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
              <span>Fortune 500 and startup clients</span>
            </div>
            <div className="flex gap-3 items-center text-body text-muted-foreground">
              <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
              <span>Advanced 3D and motion design capabilities</span>
            </div>
            <div className="flex gap-3 items-center text-body text-muted-foreground">
              <Star className="w-4 h-4 text-yellow-500 flex-shrink-0" />
              <span>Industry-leading creative awards</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-lg p-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                <Award className="w-4 h-4 text-emerald-500" />
              </div>
              <div>
                <p className="text-subtitle font-semibold text-foreground">Awards</p>
                <p className="text-caption text-muted-foreground">25+ Won</p>
              </div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-lg p-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                <Palette className="w-4 h-4 text-indigo-500" />
              </div>
              <div>
                <p className="text-subtitle font-semibold text-foreground">Services</p>
                <p className="text-caption text-muted-foreground">8+ Categories</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div>
          <p className="text-body text-muted-foreground mb-8 leading-relaxed">
            Embracing AI-powered design tools and cutting-edge creative technologies to revolutionize 
            brand experiences. We&apos;re pioneering the future of design that anticipates and exceeds 
            brand expectations.
          </p>
          <div className="mb-8 space-y-3">
            <div className="flex gap-3 items-center text-body text-muted-foreground">
              <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
              <span>AI-powered design automation tools</span>
            </div>
            <div className="flex gap-3 items-center text-body text-muted-foreground">
              <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Advanced 3D and AR packaging experiences</span>
            </div>
            <div className="flex gap-3 items-center text-body text-muted-foreground">
              <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Sustainable design methodologies</span>
            </div>
            <div className="flex gap-3 items-center text-body text-muted-foreground">
              <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Interactive brand experiences</span>
            </div>
            <div className="flex gap-3 items-center text-body text-muted-foreground">
              <TrendingUp className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Global creative studio expansion</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-lg p-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-500/10 rounded-lg flex items-center justify-center">
                <Rocket className="w-4 h-4 text-orange-500" />
              </div>
              <div>
                <p className="text-subtitle font-semibold text-foreground">Innovation</p>
                <p className="text-caption text-muted-foreground">Future Ready</p>
              </div>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-lg p-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-pink-500/10 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-pink-500" />
              </div>
              <div>
                <p className="text-subtitle font-semibold text-foreground">Vision</p>
                <p className="text-caption text-muted-foreground">Creative Magic</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className={`${className}`}>
      <Timeline data={data} />
    </section>
  );
} 