export interface SubMenuItem {
  id: string;
  title: string;
  description: string;
  href: string;
  icon?: string;
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
        id: 'web-development',
        title: 'Web Development',
        description: 'Modern web solutions that drive results',
        items: [
          {
            id: 'custom-websites',
            title: 'Custom Websites',
            description: 'Tailored websites built for your brand',
            href: '/services/custom-websites',
            icon: '🌐'
          },
          {
            id: 'ecommerce',
            title: 'E-commerce Solutions',
            description: 'Online stores that convert visitors to customers',
            href: '/services/ecommerce',
            icon: '🛒'
          },
          {
            id: 'web-apps',
            title: 'Web Applications',
            description: 'Complex web applications for your business',
            href: '/services/web-apps',
            icon: '⚡'
          },
          {
            id: 'cms',
            title: 'CMS Development',
            description: 'Content management systems for easy updates',
            href: '/services/cms',
            icon: '📝'
          }
        ]
      },
      {
        id: 'design',
        title: 'Design & Creative',
        description: 'Visual experiences that captivate',
        items: [
          {
            id: 'ui-ux-design',
            title: 'UI/UX Design',
            description: 'User-centered design that delights',
            href: '/services/ui-ux-design',
            icon: '🎨'
          },
          {
            id: 'brand-identity',
            title: 'Brand Identity',
            description: 'Complete brand identity packages',
            href: '/services/brand-identity',
            icon: '🏷️'
          },
          {
            id: 'graphic-design',
            title: 'Graphic Design',
            description: 'Print and digital graphic solutions',
            href: '/services/graphic-design',
            icon: '🖼️'
          },
          {
            id: 'illustration',
            title: 'Custom Illustrations',
            description: 'Unique illustrations for your brand',
            href: '/services/illustration',
            icon: '✏️'
          }
        ]
      },
      {
        id: 'digital-marketing',
        title: 'Digital Marketing',
        description: 'Strategies that grow your business',
        items: [
          {
            id: 'seo',
            title: 'SEO Optimization',
            description: 'Search engine optimization for visibility',
            href: '/services/seo',
            icon: '🔍'
          },
          {
            id: 'social-media',
            title: 'Social Media Marketing',
            description: 'Engaging social media campaigns',
            href: '/services/social-media',
            icon: '📱'
          },
          {
            id: 'content-marketing',
            title: 'Content Marketing',
            description: 'Strategic content that converts',
            href: '/services/content-marketing',
            icon: '📄'
          },
          {
            id: 'ppc',
            title: 'PPC Advertising',
            description: 'Paid advertising campaigns',
            href: '/services/ppc',
            icon: '💰'
          }
        ]
      },
      {
        id: 'mobile',
        title: 'Mobile Development',
        description: 'Native and cross-platform mobile apps',
        items: [
          {
            id: 'ios-apps',
            title: 'iOS Development',
            description: 'Native iPhone and iPad applications',
            href: '/services/ios-apps',
            icon: '📱'
          },
          {
            id: 'android-apps',
            title: 'Android Development',
            description: 'Native Android applications',
            href: '/services/android-apps',
            icon: '🤖'
          },
          {
            id: 'react-native',
            title: 'React Native',
            description: 'Cross-platform mobile development',
            href: '/services/react-native',
            icon: '⚛️'
          },
          {
            id: 'flutter',
            title: 'Flutter Apps',
            description: 'Beautiful cross-platform apps',
            href: '/services/flutter',
            icon: '🦋'
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