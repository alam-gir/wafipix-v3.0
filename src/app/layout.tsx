import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Wafipix - Digital Magic Creators",
  description: "Transform your ideas into stunning digital experiences. We craft websites, apps, and digital solutions that captivate and convert.",
  keywords: ["web development", "mobile apps", "UI/UX design", "digital marketing", "creative agency"],
  authors: [{ name: "Wafipix Team" }],
  viewport: "width=device-width, initial-scale=1",
  // Add scroll restoration meta tags
  other: {
    "scroll-behavior": "auto",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Ensure proper scroll restoration behavior */}
        <meta name="scroll-behavior" content="auto" />
      </head>
      <body
        className={`${manrope.variable} antialiased overflow-x-hidden font-sans`}
        style={{ scrollBehavior: 'auto' }}
      >
        <LenisProvider>
          <Navbar />
          {children}
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
