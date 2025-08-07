import { AboutCTA } from "../about/_components";
import {
  ContactForm,

} from "./_components";

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactForm />
      <AboutCTA />
    </main>
  );
} 