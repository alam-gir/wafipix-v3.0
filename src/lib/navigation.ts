export interface SubMenuItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon?: string; // Lucide React icon name
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  items: SubMenuItem[];
}

export interface NavItem {
  id: string;
  title: string;
  href: string;
  hasSubmenu?: boolean;
  submenu?: ServiceCategory[];
}

export const navigation: NavItem[] = [
  {
    id: 'home',
    title: 'Home',
    href: '/',
  },
  {
    id: 'services',
    title: 'Services',
    href: '/services',
    hasSubmenu: true,
    submenu: [
      {
        id: 'design-creative',
        title: 'Design & Creative',
        description: 'Visual experiences that captivate and inspire',
        items: [
          {
            id: 'logo-design',
            title: 'Logo Design',
            description: 'Unique, memorable logos that represent your brand identity and values',
            href: '/services/logo-design',
            icon: 'Palette'
          },
          {
            id: 'branding',
            title: 'Branding',
            description: 'Complete brand identity packages including guidelines and visual assets',
            href: '/services/branding',
            icon: 'Brush'
          },
          {
            id: 'print-packaging',
            title: 'Print & Packaging Design',
            description: 'Professional print materials and packaging that enhance your product appeal',
            href: '/services/print-packaging',
            icon: 'Package'
          }
        ]
      },
      {
        id: 'motion-animation',
        title: 'Motion & Animation',
        description: 'Dynamic content that brings your brand to life',
        items: [
          {
            id: 'motion-video',
            title: 'Motion Video',
            description: 'Engaging motion graphics and animated videos for marketing and storytelling',
            href: '/services/motion-video',
            icon: 'Video'
          },
          {
            id: 'reels',
            title: 'Reels',
            description: 'Short-form video content optimized for social media platforms',
            href: '/services/reels',
            icon: 'Smartphone'
          },
          {
            id: 'custom-logo-animation',
            title: 'Custom Logo Animation',
            description: 'Animated versions of your logo for digital platforms and presentations',
            href: '/services/custom-logo-animation',
            icon: 'Zap'
          },
          {
            id: 'intro-outro',
            title: 'Intro & Outro',
            description: 'Professional video intros and outros that establish brand recognition',
            href: '/services/intro-outro',
            icon: 'Play'
          }
        ]
      }
    ]
  },
  {
    id: 'works',
    title: 'Works',
    href: '/works',
  },
  {
    id: 'about',
    title: 'About',
    href: '/about',
  },
  {
    id: 'contact',
    title: 'Contact',
    href: '/contact',
  },
]; 