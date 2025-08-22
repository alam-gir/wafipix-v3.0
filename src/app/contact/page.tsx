import { Metadata } from 'next';
import {
  ContactForm,
} from "./_components";
import PageViewTracker from "@/components/analytics/PageViewTracker";
import { createContactMetadata } from "@/lib/meta";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = createContactMetadata();

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <PageViewTracker 
        pageTitle="Contact Us - Wafipix"
        pageType="contact"
        contentName="Contact Page"
        contentCategory="Contact Form"
      />
      <ContactForm />
    </main>
  );
} 