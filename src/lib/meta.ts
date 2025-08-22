import type { Metadata } from 'next';

// Base site configuration
export const siteConfig = {
  name: 'Wafipix',
  title: 'Wafipix - Digital Magic Creators',
  description: 'Transform your ideas into stunning digital experiences. We craft websites, apps, and digital solutions that captivate and convert.',
  url: 'https://wafipix.com', // Replace with your actual domain
  ogImage: '/images/og-default.jpg', // Default OG image
  twitterImage: '/images/twitter-default.jpg', // Default Twitter image
  creator: '@wafipix', // Replace with your actual Twitter handle
  keywords: [
    'web development',
    'mobile apps',
    'UI/UX design',
    'digital marketing',
    'creative agency',
    'branding',
    'logo design',
    'motion graphics',
    'video production',
    'digital solutions'
  ],
  authors: [{ name: 'Wafipix Team' }],
  category: 'Technology',
  classification: 'Business',
  robots: 'index, follow',
  language: 'en',
  country: 'BD',
  region: 'BD',
  city: 'Chattogram',
  latitude: '22.3728',
  longitude: '91.7752',
  timezone: 'Asia/Dhaka',
  contact: {
    phone: '01705097013', // Replace with actual phone
    email: 'info@wafipix.com', // Replace with actual email
    address: 'Chattogram, Bangladesh' // Replace with actual address
  }
};

// Base metadata function
export function createBaseMetadata(): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.title,
      template: `%s | ${siteConfig.name}`
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: siteConfig.authors,
    creator: siteConfig.creator,
    publisher: siteConfig.name,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: '/',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code', // Replace with actual verification code
      yandex: 'your-yandex-verification-code', // Replace if needed
      yahoo: 'your-yahoo-verification-code', // Replace if needed
    },
    other: {
      'geo.region': siteConfig.region,
      'geo.placename': siteConfig.city,
      'geo.position': `${siteConfig.latitude};${siteConfig.longitude}`,
      'ICBM': `${siteConfig.latitude}, ${siteConfig.longitude}`,
      'DC.title': siteConfig.title,
      'DC.description': siteConfig.description,
      'DC.subject': siteConfig.keywords.join(', '),
      'DC.creator': siteConfig.creator,
      'DC.publisher': siteConfig.name,
      'DC.date.created': new Date().toISOString(),
      'DC.date.modified': new Date().toISOString(),
      'DC.language': siteConfig.language,
      'DC.coverage': siteConfig.country,
      'DC.rights': `© ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.`,
    },
  };
}

// Homepage metadata
export function createHomeMetadata(): Metadata {
  const base = createBaseMetadata();
  return {
    ...base,
    title: siteConfig.title,
    description: 'Transform your ideas into stunning digital experiences. We craft websites, apps, and digital solutions that captivate and convert. Discover how Wafipix can bring your digital vision to life.',
    keywords: [
      ...siteConfig.keywords,
      'digital transformation',
      'creative solutions',
      'web design',
      'app development',
      'digital strategy'
    ],
    openGraph: {
      title: siteConfig.title,
      description: 'Transform your ideas into stunning digital experiences. We craft websites, apps, and digital solutions that captivate and convert.',
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: 'Wafipix - Digital Magic Creators',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: siteConfig.title,
      description: 'Transform your ideas into stunning digital experiences. We craft websites, apps, and digital solutions that captivate and convert.',
      images: [siteConfig.twitterImage],
      creator: siteConfig.creator,
      site: siteConfig.creator,
    },
    alternates: {
      canonical: siteConfig.url,
    },
  };
}

// Works page metadata
export function createWorksMetadata(): Metadata {
  const base = createBaseMetadata();
  return {
    ...base,
    title: 'Our Works',
    description: 'Explore our portfolio of creative projects, from brand identity and web design to motion graphics and digital solutions. See how we bring ideas to life.',
    keywords: [
      ...siteConfig.keywords,
      'portfolio',
      'case studies',
      'creative projects',
      'brand examples',
      'design showcase'
    ],
    openGraph: {
      title: 'Our Works | Wafipix',
      description: 'Explore our portfolio of creative projects, from brand identity and web design to motion graphics and digital solutions.',
      url: `${siteConfig.url}/works`,
      siteName: siteConfig.name,
      images: [
        {
          url: '/images/og-works.jpg', // Replace with actual works page image
          width: 1200,
          height: 630,
          alt: 'Wafipix Portfolio - Creative Works Showcase',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Our Works | Wafipix',
      description: 'Explore our portfolio of creative projects, from brand identity and web design to motion graphics and digital solutions.',
      images: ['/images/twitter-works.jpg'], // Replace with actual works page image
      creator: siteConfig.creator,
      site: siteConfig.creator,
    },
    alternates: {
      canonical: `${siteConfig.url}/works`,
    },
  };
}

// Individual work metadata
export function createWorkMetadata(work: {
  name: string;
  description: string;
  coverImageUrl: string;
  tags: string[];
  service: string;
}): Metadata {
  const base = createBaseMetadata();
  const cleanDescription = work.description.replace(/<[^>]*>/g, '').substring(0, 160);
  
  return {
    ...base,
    title: work.name,
    description: cleanDescription,
    keywords: [
      ...work.tags,
      work.service,
      'portfolio',
      'case study',
      'creative work',
      ...siteConfig.keywords
    ],
    openGraph: {
      title: `${work.name} | Wafipix`,
      description: cleanDescription,
      url: `${siteConfig.url}/works/${work.name.toLowerCase().replace(/\s+/g, '-')}`,
      siteName: siteConfig.name,
      images: [
        {
          url: work.coverImageUrl,
          width: 1200,
          height: 630,
          alt: `${work.name} - ${work.service} project by Wafipix`,
        },
      ],
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${work.name} | Wafipix`,
      description: cleanDescription,
      images: [work.coverImageUrl],
      creator: siteConfig.creator,
      site: siteConfig.creator,
    },
    alternates: {
      canonical: `${siteConfig.url}/works/${work.name.toLowerCase().replace(/\s+/g, '-')}`,
    },
  };
}

// Services page metadata
export function createServicesMetadata(): Metadata {
  const base = createBaseMetadata();
  return {
    ...base,
    title: 'Our Services',
    description: 'Discover our comprehensive range of digital services including web development, mobile apps, UI/UX design, branding, motion graphics, and digital marketing solutions.',
    keywords: [
      ...siteConfig.keywords,
      'service offerings',
      'digital solutions',
      'creative services',
      'brand development',
      'web design services'
    ],
    openGraph: {
      title: 'Our Services | Wafipix',
      description: 'Discover our comprehensive range of digital services including web development, mobile apps, UI/UX design, branding, motion graphics, and digital marketing solutions.',
      url: `${siteConfig.url}/services`,
      siteName: siteConfig.name,
      images: [
        {
          url: '/images/og-services.jpg', // Replace with actual services page image
          width: 1200,
          height: 630,
          alt: 'Wafipix Services - Digital Solutions Portfolio',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Our Services | Wafipix',
      description: 'Discover our comprehensive range of digital services including web development, mobile apps, UI/UX design, branding, motion graphics, and digital marketing solutions.',
      images: ['/images/twitter-services.jpg'], // Replace with actual services page image
      creator: siteConfig.creator,
      site: siteConfig.creator,
    },
    alternates: {
      canonical: `${siteConfig.url}/services`,
    },
  };
}

// Individual service metadata
export function createServiceMetadata(service: {
  title: string;
  description: string;
  icon?: string;
}): Metadata {
  const base = createBaseMetadata();
  return {
    ...base,
    title: service.title,
    description: service.description,
    keywords: [
      service.title.toLowerCase(),
      ...siteConfig.keywords,
      'service',
      'digital solution'
    ],
    openGraph: {
      title: `${service.title} | Wafipix`,
      description: service.description,
      url: `${siteConfig.url}/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`,
      siteName: siteConfig.name,
      images: [
        {
          url: `/images/og-${service.title.toLowerCase().replace(/\s+/g, '-')}.jpg`, // Replace with actual service image
          width: 1200,
          height: 630,
          alt: `${service.title} service by Wafipix`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Wafipix`,
      description: service.description,
      images: [`/images/twitter-${service.title.toLowerCase().replace(/\s+/g, '-')}.jpg`], // Replace with actual service image
      creator: siteConfig.creator,
      site: siteConfig.creator,
    },
    alternates: {
      canonical: `${siteConfig.url}/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`,
    },
  };
}

// About page metadata
export function createAboutMetadata(): Metadata {
  const base = createBaseMetadata();
  return {
    ...base,
    title: 'About Us',
    description: 'Learn about Wafipix, our story, values, and the team behind the digital magic. Discover how we help businesses transform their digital presence.',
    keywords: [
      ...siteConfig.keywords,
      'about us',
      'our story',
      'company values',
      'team',
      'digital agency'
    ],
    openGraph: {
      title: 'About Us | Wafipix',
      description: 'Learn about Wafipix, our story, values, and the team behind the digital magic. Discover how we help businesses transform their digital presence.',
      url: `${siteConfig.url}/about`,
      siteName: siteConfig.name,
      images: [
        {
          url: '/images/og-about.jpg', // Replace with actual about page image
          width: 1200,
          height: 630,
          alt: 'About Wafipix - Our Story and Team',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Us | Wafipix',
      description: 'Learn about Wafipix, our story, values, and the team behind the digital magic. Discover how we help businesses transform their digital presence.',
      images: ['/images/twitter-about.jpg'], // Replace with actual about page image
      creator: siteConfig.creator,
      site: siteConfig.creator,
    },
    alternates: {
      canonical: `${siteConfig.url}/about`,
    },
  };
}

// Contact page metadata
export function createContactMetadata(): Metadata {
  const base = createBaseMetadata();
  return {
    ...base,
    title: 'Contact Us',
    description: 'Get in touch with Wafipix to discuss your next digital project. We\'re here to help bring your creative vision to life with our expert team.',
    keywords: [
      ...siteConfig.keywords,
      'contact',
      'get quote',
      'project inquiry',
      'digital consultation',
      'creative consultation'
    ],
    openGraph: {
      title: 'Contact Us | Wafipix',
      description: 'Get in touch with Wafipix to discuss your next digital project. We\'re here to help bring your creative vision to life with our expert team.',
      url: `${siteConfig.url}/contact`,
      siteName: siteConfig.name,
      images: [
        {
          url: '/images/og-contact.jpg', // Replace with actual contact page image
          width: 1200,
          height: 630,
          alt: 'Contact Wafipix - Get in Touch for Your Digital Project',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Us | Wafipix',
      description: 'Get in touch with Wafipix to discuss your next digital project. We\'re here to help bring your creative vision to life with our expert team.',
      images: ['/images/twitter-contact.jpg'], // Replace with actual contact page image
      creator: siteConfig.creator,
      site: siteConfig.creator,
    },
    alternates: {
      canonical: `${siteConfig.url}/contact`,
    },
  };
}

// Start project page metadata
export function createStartProjectMetadata(): Metadata {
  const base = createBaseMetadata();
  return {
    ...base,
    title: 'Start Your Project',
    description: 'Ready to bring your digital vision to life? Start your project with Wafipix and let our expert team create something extraordinary for your business.',
    keywords: [
      ...siteConfig.keywords,
      'start project',
      'get started',
      'project inquiry',
      'digital consultation',
      'creative brief'
    ],
    openGraph: {
      title: 'Start Your Project | Wafipix',
      description: 'Ready to bring your digital vision to life? Start your project with Wafipix and let our expert team create something extraordinary for your business.',
      url: `${siteConfig.url}/start-project`,
      siteName: siteConfig.name,
      images: [
        {
          url: '/images/og-start-project.jpg', // Replace with actual start project page image
          width: 1200,
          height: 630,
          alt: 'Start Your Project with Wafipix - Digital Magic Creators',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Start Your Project | Wafipix',
      description: 'Ready to bring your digital vision to life? Start your project with Wafipix and let our expert team create something extraordinary for your business.',
      images: ['/images/twitter-start-project.jpg'], // Replace with actual start project page image
      creator: siteConfig.creator,
      site: siteConfig.creator,
    },
    alternates: {
      canonical: `${siteConfig.url}/start-project`,
    },
  };
}

// Error page metadata
export function createErrorMetadata(): Metadata {
  const base = createBaseMetadata();
  return {
    ...base,
    title: 'Page Not Found',
    description: 'The page you\'re looking for doesn\'t exist. Return to Wafipix homepage to explore our digital services and creative portfolio.',
    robots: {
      index: false,
      follow: false,
    },
    openGraph: {
      title: 'Page Not Found | Wafipix',
      description: 'The page you\'re looking for doesn\'t exist. Return to Wafipix homepage to explore our digital services and creative portfolio.',
      url: `${siteConfig.url}/404`,
      siteName: siteConfig.name,
      images: [
        {
          url: '/images/og-404.jpg', // Replace with actual 404 page image
          width: 1200,
          height: 630,
          alt: 'Page Not Found - Wafipix',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Page Not Found | Wafipix',
      description: 'The page you\'re looking for doesn\'t exist. Return to Wafipix homepage to explore our digital services and creative portfolio.',
      images: ['/images/twitter-404.jpg'], // Replace with actual 404 page image
      creator: siteConfig.creator,
      site: siteConfig.creator,
    },
  };
}
