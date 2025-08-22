import React from 'react';
import { Metadata } from 'next';
import {
  StartProjectCTA,
  StartProjectFeatures,
} from "./_components";
import PageViewTracker from "@/components/analytics/PageViewTracker";
import { createStartProjectMetadata } from "@/lib/meta";

export const metadata: Metadata = createStartProjectMetadata();

export default function StartProjectPage() {
  return (
    <main className="min-h-screen">
      <PageViewTracker 
        pageTitle="Start Your Project - Wafipix"
        pageType="start-project"
        contentName="Start Project Page"
        contentCategory="Project Initiation"
      />
      <StartProjectCTA />
      <StartProjectFeatures />
    </main>
  );
}
