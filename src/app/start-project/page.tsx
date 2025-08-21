import React from 'react';
import { Metadata } from 'next';
import { StartProjectFeatures } from './_components';
import {StartProjectCTA} from './_components';

export const metadata: Metadata = {
  title: "Start Your Project - Wafipix",
  description: "Ready to bring your digital vision to life? Start your project with Wafipix and let's create something extraordinary together.",
  keywords: ["start project", "digital project", "web development", "creative agency", "project consultation"],
};

export default function StartProjectPage() {
  return (
    <main className="min-h-screen">
      <StartProjectFeatures />
      <StartProjectCTA />
    </main>
  );
}
