import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/meta';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'Wafipix',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#6366f1', // primary color
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['business', 'productivity', 'design'],
    lang: 'en',
    dir: 'ltr',
    scope: '/',
    display_override: ['standalone', 'minimal-ui'],

    shortcuts: [
      {
        name: 'Our Works',
        short_name: 'Works',
        description: 'View our portfolio of creative projects',
        url: '/works',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
          },
        ],
      },
      {
        name: 'Our Services',
        short_name: 'Services',
        description: 'Explore our digital services',
        url: '/services',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
          },
        ],
      },
      {
        name: 'Contact Us',
        short_name: 'Contact',
        description: 'Get in touch with our team',
        url: '/contact',
        icons: [
          {
            src: '/icon-192.png',
            sizes: '192x192',
          },
        ],
      },
    ],
  };
}
