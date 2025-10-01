import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable experimental scroll restoration
  experimental: {
    scrollRestoration: true,
  },
  // Configure scroll behavior
  compiler: {
    // Ensure proper scroll handling
  },
  // Enable standalone output for Docker
  output: 'standalone',
  // Disable ESLint during build for Docker
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Configure images
  images: {
    remotePatterns: [
      {
        protocol : 'https',
        hostname: 'pub-df8554bc8acd468e9312f01236ca95f5.r2.dev',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
