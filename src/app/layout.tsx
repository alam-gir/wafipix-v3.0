import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";
import Navbar from "@/components/navigation/Navbar";
import { Footer } from "@/components/sections/footer";
import MetaPixelProvider from "@/components/providers/MetaPixelProvider";
import { getMetaPixelConfig } from "@/lib/analytics/config";
import { createBaseMetadata } from "@/lib/meta";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = createBaseMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const metaPixelConfig = getMetaPixelConfig();
  
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
        <MetaPixelProvider config={metaPixelConfig}>
          <LenisProvider>
            <Navbar />
            {children}
            <Footer />
          </LenisProvider>
        </MetaPixelProvider>
      </body>
    </html>
  );
}
