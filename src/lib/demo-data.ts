// Simplified interface for API data structure
export interface TrustedCustomer {
  logo: string;
}

// Social media data interface
export interface SocialMediaLink {
  name: string;
  url: string;
}

export interface WorkCategory {
  category: string;
}

export interface WorkService {
  service : string;
}

export type WorkFilter = WorkCategory | WorkService

export interface WorkAsCard {
  id: string;
  slug: string;
  name: string;
  coverVideoUrl?: string;
  coverImageUrl?: string;
  profileVideoUrl?: string;
  profileImageUrl?: string;
}

export interface Gallery {
  id: string;
  workId: string;
  blocks: Array<GalleryBlock>
}

export interface GalleryMedia {
  url: string;
  type: 'image' | 'video'
}
export interface GalleryBlock {
  id: string;
  galleryId : string
  order: number;
  isMobileGrid: boolean;
  medias: Array<GalleryMedia>
}

export interface Work {
  id: string;
  slug: string;
  name: string;
  service: string;
  coverVideoUrl?: string;
  coverImageUrl?: string;
  profileVideoUrl?: string;
  profileImageUrl?: string;
  shortDescription?: string;
  description: string; // Html content with richtext editor.
}

// Demo data for Gallery
export const Galleries : Array<Gallery> = [
  {
    id: 'gal-aurora-brand',
    workId: 'wrk-aurora-brand',
    blocks: [
      {
        id: 'blk-aurora-1',
        galleryId: 'gal-aurora-brand',
        order: 1,
        isMobileGrid: false,
        medias: [
          { url: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop', type: 'image' }
        ]
      },
      {
        id: 'blk-aurora-2',
        galleryId: 'gal-aurora-brand',
        order: 2,
        isMobileGrid: true,
        medias: [
          { url: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop', type: 'image' }
        ]
      }
    ]
  },
  {
    id: 'gal-sussex-taps',
    workId: 'wrk-sussex-taps',
    blocks: [
      {
        id: 'blk-sussex-1',
        galleryId: 'gal-sussex-taps',
        order: 1,
        isMobileGrid: false,
        medias: [
          { url: 'https://www.w3schools.com/html/mov_bbb.mp4', type: 'video' }
        ]
      },
      {
        id: 'blk-sussex-2',
        galleryId: 'gal-sussex-taps',
        order: 2,
        isMobileGrid: true,
        medias: [
          { url: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800&auto=format&fit=crop', type: 'image' }
        ]
      }
    ]
  },
  {
    id: 'gal-olive-ui',
    workId: 'wrk-olive-ui',
    blocks: [
      {
        id: 'blk-olive-1',
        galleryId: 'gal-olive-ui',
        order: 1,
        isMobileGrid: false,
        medias: [
          { url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop', type: 'image' }
        ]
      },
      {
        id: 'blk-olive-2',
        galleryId: 'gal-olive-ui',
        order: 2,
        isMobileGrid: true,
        medias: [
          { url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800&auto=format&fit=crop', type: 'image' }
        ]
      }
    ]
  },
  {
    id: 'gal-norfolk-community',
    workId: 'wrk-norfolk-community',
    blocks: [
      {
        id: 'blk-norfolk-1',
        galleryId: 'gal-norfolk-community',
        order: 1,
        isMobileGrid: false,
        medias: [
          { url: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1600&auto=format&fit=crop', type: 'image' }
        ]
      },
      {
        id: 'blk-norfolk-2',
        galleryId: 'gal-norfolk-community',
        order: 2,
        isMobileGrid: true,
        medias: [
          { url: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=800&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=800&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=800&auto=format&fit=crop', type: 'image' }
        ]
      }
    ]
  },
  {
    id: 'gal-flux-logo',
    workId: 'wrk-flux-logo',
    blocks: [
      {
        id: 'blk-flux-1',
        galleryId: 'gal-flux-logo',
        order: 1,
        isMobileGrid: false,
        medias: [
          { url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop', type: 'image' }
        ]
      },
      {
        id: 'blk-flux-2',
        galleryId: 'gal-flux-logo',
        order: 2,
        isMobileGrid: true,
        medias: [
          { url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop', type: 'image' }
        ]
      }
    ]
  },
  {
    id: 'gal-eden-motion',
    workId: 'wrk-eden-motion',
    blocks: [
      {
        id: 'blk-eden-1',
        galleryId: 'gal-eden-motion',
        order: 1,
        isMobileGrid: false,
        medias: [
          { url: 'https://www.w3schools.com/html/movie.mp4', type: 'video' }
        ]
      },
      {
        id: 'blk-eden-2',
        galleryId: 'gal-eden-motion',
        order: 2,
        isMobileGrid: true,
        medias: [
          { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop', type: 'image' }
        ]
      }
    ]
  },
  {
    id: 'gal-hearth-ed',
    workId: 'wrk-hearth-ed',
    blocks: [
      {
        id: 'blk-hearth-1',
        galleryId: 'gal-hearth-ed',
        order: 1,
        isMobileGrid: false,
        medias: [
          { url: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1600&auto=format&fit=crop', type: 'image' }
        ]
      },
      {
        id: 'blk-hearth-2',
        galleryId: 'gal-hearth-ed',
        order: 2,
        isMobileGrid: true,
        medias: [
          { url: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=800&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=800&auto=format&fit=crop', type: 'image' }
        ]
      }
    ]
  },
  {
    id: 'gal-metis-innovation',
    workId: 'wrk-metis-innovation',
    blocks: [
      {
        id: 'blk-metis-1',
        galleryId: 'gal-metis-innovation',
        order: 1,
        isMobileGrid: false,
        medias: [
          { url: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1600&auto=format&fit=crop', type: 'image' }
        ]
      },
      {
        id: 'blk-metis-2',
        galleryId: 'gal-metis-innovation',
        order: 2,
        isMobileGrid: true,
        medias: [
          { url: 'https://images.unsplash.com/photo-1451188502541-13943edb6acb?q=80&w=800&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=800&auto=format&fit=crop', type: 'image' }
        ]
      }
    ]
  },
  {
    id: 'gal-humane-nfp',
    workId: 'wrk-humane-nfp',
    blocks: [
      {
        id: 'blk-humane-1',
        galleryId: 'gal-humane-nfp',
        order: 1,
        isMobileGrid: false,
        medias: [
          { url: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop', type: 'image' }
        ]
      },
      {
        id: 'blk-humane-2',
        galleryId: 'gal-humane-nfp',
        order: 2,
        isMobileGrid: true,
        medias: [
          { url: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop', type: 'image' }
        ]
      }
    ]
  },
  {
    id: 'gal-axiom-commerce',
    workId: 'wrk-axiom-commerce',
    blocks: [
      {
        id: 'blk-axiom-1',
        galleryId: 'gal-axiom-commerce',
        order: 1,
        isMobileGrid: false,
        medias: [
          { url: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1600&auto=format&fit=crop', type: 'image' }
        ]
      },
      {
        id: 'blk-axiom-2',
        galleryId: 'gal-axiom-commerce',
        order: 2,
        isMobileGrid: true,
        medias: [
          { url: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=800&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=800&auto=format&fit=crop', type: 'image' }
        ]
      }
    ]
  }
]

// Demo data for works
export const works: Array<Work> = [
  {
    id: 'wrk-aurora-brand',
    slug: 'aurora-brand-identity',
    name: 'Aurora Brand Identity',
    service: 'Brand Identity',
    coverImageUrl:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
    profileImageUrl:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'A confident and modern identity for a D2C lifestyle brand.',
    description:
      '<p>We crafted a minimal, confident identity system with motion-first guidelines and digital clarity. The Aurora brand represents the intersection of luxury and accessibility, creating a visual language that speaks to modern consumers who value both quality and authenticity.</p><p>Our approach focused on creating a scalable design system that could adapt across all touchpoints while maintaining the brand\'s sophisticated yet approachable personality. The result is a cohesive identity that has helped Aurora establish itself as a leader in the competitive lifestyle market.</p>',
  },
  {
    id: 'wrk-sussex-taps',
    slug: 'sussex-taps-campaign',
    name: 'Sussex Taps Campaign',
    service: 'Animation',
    coverVideoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    profileImageUrl:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1400&auto=format&fit=crop',
    shortDescription: 'Tactile product storytelling with cinematic motion.',
    description: '<p>Product-led animation series highlighting craft and materiality. We developed a series of short-form animations that showcase the premium quality and craftsmanship of Sussex Taps\' products. Each animation focuses on the tactile experience and material properties, creating an emotional connection with potential customers.</p><p>The campaign successfully increased engagement by 40% and helped establish Sussex Taps as a premium brand in the home improvement market.</p>',
  },
  {
    id: 'wrk-olive-ui',
    slug: 'olive-ui-overhaul',
    name: 'Olive UI Overhaul',
    service: 'UI & UX',
    coverImageUrl:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    profileImageUrl:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop',
    shortDescription: 'A conversion-focused redesign for a SaaS dashboard.',
    description:
      '<p>We simplified information architecture and introduced a scalable design system. The redesign focused on reducing cognitive load while improving the user journey through the platform. Key improvements included streamlined navigation, clearer data visualization, and more intuitive workflows.</p><p>The new design system increased user engagement by 35% and reduced support tickets by 28%, while maintaining the platform\'s powerful functionality.</p>',
  },
  {
    id: 'wrk-norfolk-community',
    slug: 'norfolk-community-portal',
    name: 'Norfolk Community Portal',
    service: 'Web Design',
    coverImageUrl:
      'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1600&auto=format&fit=crop',
    profileImageUrl:
      'https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1000&auto=format&fit=crop',
    shortDescription: 'Accessible, purpose-driven digital hub for a council.',
    description: '<p>Inclusive, WCAG-compliant design with community storytelling. We created a digital platform that serves the diverse needs of Norfolk\'s community while maintaining the highest standards of accessibility. The portal features intuitive navigation, clear information hierarchy, and engaging content that reflects the local community\'s values and needs.</p><p>The project successfully improved digital service delivery and community engagement, with 95% of users reporting improved access to council services.</p>',
  },
  {
    id: 'wrk-flux-logo',
    slug: 'flux-logo-design',
    name: 'Flux Logo Design',
    service: 'Logo Design',
    coverImageUrl:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    profileImageUrl:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1000&auto=format&fit=crop',
    shortDescription: 'Kinetic mark designed for motion legibility.',
    description: '<p>Grid-based construction with variable logo assets. The Flux logo was designed to work seamlessly across all digital and print applications, with particular attention to motion graphics and animation. The geometric foundation ensures consistency while the dynamic elements allow for creative expression.</p><p>This versatile logo system has become a cornerstone of Flux\'s brand identity, appearing across all their marketing materials and digital platforms.</p>',
  },
  {
    id: 'wrk-eden-motion',
    slug: 'eden-motion-brand',
    name: 'Eden Motion Brand',
    service: 'Motion Graphics',
    coverVideoUrl: 'https://www.w3schools.com/html/movie.mp4',
    profileImageUrl:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
    shortDescription: 'Playful motion language for a wellness app.',
    description: '<p>Systematic motion tokens and micro-interactions library. We developed a comprehensive motion system that enhances the user experience while maintaining the app\'s calming and therapeutic qualities. Each animation was carefully crafted to provide visual feedback without being distracting.</p><p>The motion system improved user engagement by 45% and received positive feedback for its intuitive and delightful interactions.</p>',
  },
  {
    id: 'wrk-hearth-ed',
    slug: 'hearth-education-suite',
    name: 'Hearth Education Suite',
    service: 'UI & UX',
    coverImageUrl:
      'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1600&auto=format&fit=crop',
    profileImageUrl:
      'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1000&auto=format&fit=crop',
    shortDescription: 'Intuitive student-first LMS experience.',
    description: '<p>Reduced cognitive load with progressive disclosure patterns. We redesigned the learning management system to prioritize student experience, making complex educational tools accessible and engaging. The interface uses progressive disclosure to reveal advanced features only when needed, reducing overwhelm for new users.</p><p>The redesign resulted in a 50% increase in daily active users and significantly improved course completion rates.</p>',
  },
  {
    id: 'wrk-metis-innovation',
    slug: 'metis-innovation-lab',
    name: 'Metis Innovation Lab',
    service: 'Innovation',
    coverImageUrl:
      'https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1600&auto=format&fit=crop',
    profileImageUrl:
      'https://images.unsplash.com/photo-1451188502541-13943edb6acb?q=80&w=1000&auto=format&fit=crop',
    shortDescription: 'Rapid concepting with modular prototypes.',
    description: '<p>Validated ideas through iterative design sprints. We worked with Metis Innovation Lab to develop a rapid prototyping methodology that allows them to test and validate new product concepts quickly and efficiently. The process includes user research, rapid prototyping, and iterative testing.</p><p>This approach has helped Metis reduce their time-to-market by 60% while maintaining high quality standards and user satisfaction.</p>',
  },
  {
    id: 'wrk-humane-nfp',
    slug: 'humane-foundation',
    name: 'Humane Foundation',
    service: 'Brand Identity',
    coverImageUrl:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
    profileImageUrl:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=900&auto=format&fit=crop',
    shortDescription: 'Purposeful identity for a not-for-profit.',
    description: '<p>Optimistic color system and inclusive typography. We created a brand identity that reflects the Humane Foundation\'s mission of compassion and positive change. The design system emphasizes accessibility and inclusivity, ensuring that all communications are clear and engaging for diverse audiences.</p><p>The new identity has helped increase donor engagement by 40% and improved the organization\'s ability to communicate their mission effectively.</p>',
  },
  {
    id: 'wrk-axiom-commerce',
    slug: 'axiom-commerce',
    name: 'Axiom Commerce',
    service: 'Web Design',
    coverImageUrl:
      'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1600&auto=format&fit=crop',
    profileImageUrl:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1000&auto=format&fit=crop',
    shortDescription: 'High-conversion storefront experience.',
    description: '<p>Performance-first design with visual storytelling. We redesigned Axiom Commerce\'s online store to create a high-converting shopping experience that tells their brand story while optimizing for sales. The design balances aesthetics with functionality, ensuring that beautiful visuals don\'t compromise performance or usability.</p><p>The redesign resulted in a 65% increase in conversion rate and a 40% improvement in average order value, while maintaining the site\'s visual appeal and brand integrity.</p>',
  },
];

// Demo data for Works as card (id synced with works[])
export const worksAsCard: Array<WorkAsCard> = works.map((w) => ({
  id: w.id,
  slug: w.slug,
  name: w.name,
  coverVideoUrl: w.coverVideoUrl,
  coverImageUrl: w.coverImageUrl,
  profileVideoUrl: w.profileVideoUrl,
  profileImageUrl: w.profileImageUrl,
}));

export function findWorkBySlug(slug: string): Work | undefined {
  return works.find((w) => w.slug === slug);
}

export function findGalleryByWorkId(workId: string): Gallery | undefined {
  return Galleries.find((g) => g.workId === workId);
}

export function findPreviousAndNextWork(currentWorkId: string): { previousWork?: Work; nextWork?: Work } {
  const currentIndex = works.findIndex(w => w.id === currentWorkId);
  if (currentIndex === -1) return {};
  
  const previousWork = currentIndex > 0 ? works[currentIndex - 1] : undefined;
  const nextWork = currentIndex < works.length - 1 ? works[currentIndex + 1] : undefined;
  
  return { previousWork, nextWork };
}

// Mapping of work -> categories (to support category filtering without changing Work type)
export const workCategoryMap: Record<string, string[]> = {
  'wrk-aurora-brand': ['Featured', 'Commercial'],
  'wrk-sussex-taps': ['Featured', 'Commercial', 'Innovation'],
  'wrk-olive-ui': ['UI & UX', 'Commercial'],
  'wrk-norfolk-community': ['Community & Purpose', 'Not for Profit'],
  'wrk-flux-logo': ['Featured', 'Innovation'],
  'wrk-eden-motion': ['Commercial'],
  'wrk-hearth-ed': ['Education', 'UI & UX'],
  'wrk-metis-innovation': ['Innovation'],
  'wrk-humane-nfp': ['Not for Profit', 'Community & Purpose'],
  'wrk-axiom-commerce': ['Commercial'],
};

// Demo data for workFilters (mixed categories and services)
export const workFilters: Array<WorkFilter> = [
  // Categories
  { category: 'Featured' },
  { category: 'Commercial' },
  { category: 'Not for Profit' },
  { category: 'Education' },
  { category: 'Community & Purpose' },
  { category: 'Innovation' },
  { category: 'UI & UX' },
  // Services
  { service: 'Logo Design' },
  { service: 'Brand Identity' },
  { service: 'Animation' },
  { service: 'Web Design' },
  { service: 'Motion Graphics' },
]; 

// Demo data for trusted customers - replace with API call in production
export const trustedCustomersData: TrustedCustomer[] = [
  {
    logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1549924231-f129b911e442?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1574267432553-4b4628081c31?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1614680376408-81e91ffe3db7?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1558981806-ec527fa84a39?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=200&h=80&fit=crop&crop=center",
  },
  {
    logo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=80&fit=crop&crop=center",
  },
];

// Demo social media data - replace with actual data in production
export const socialMediaData: SocialMediaLink[] = [
  {
    name: "Instagram",
    url: "https://instagram.com/wafipix",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/company/wafipix",
  },
  {
    name: "X (Twitter)",
    url: "https://x.com/wafipix",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@wafipix",
  },
  {
    name: "Behance",
    url: "https://behance.net/wafipix",
  },
];

// Function to fetch trusted customers from API (for future use)
export async function fetchTrustedCustomers(): Promise<TrustedCustomer[]> {
  // TODO: Replace with actual API call
  // Example API call:
  // const response = await fetch('/api/trusted-customers');
  // const data = await response.json();
  // return data; // Expected format: [{logo: "url"}, {logo: "url"}, ...]
  
  // For now, return demo data
  return trustedCustomersData;
}

// Function to fetch social media links from API (for future use)
export async function fetchSocialMediaLinks(): Promise<SocialMediaLink[]> {
  // TODO: Replace with actual API call
  // Example API call:
  // const response = await fetch('/api/social-media');
  // const data = await response.json();
  // return data;
  
  // For now, return demo data
  return socialMediaData;
} 

// ============================================================================
// SERVICE PAGE DATA TYPES AND DEMO DATA
// ============================================================================

// Package pricing interface
export interface PackagePricing {
  usd: number;
  bdt: number;
}

// Package feature interface
export interface PackageFeature {
  id: string;
  text: string;
  highlight?: boolean; // For premium features
}

// Service package interface
export interface ServicePackage {
  id: string;
  name: string;
  subtitle: string;
  pricing: PackagePricing;
  features: PackageFeature[];
  status: 'active' | 'featured' | 'coming-soon';
  deliveryTime: string;
  paymentTerms: string;
  popular?: boolean; // For featured packages
}

// Service page data interface
export interface ServicePageData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  processSteps: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
  packages: ServicePackage[];
  features: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
  faqs: Array<{
    id: string;
    question: string;
    answer: string;
  }>;
}

// Demo data for service packages
export const servicePackages: Record<string, ServicePackage[]> = {
  'logo-design': [
    {
      id: 'logo-starter',
      name: 'STARTER',
      subtitle: 'LOGO PACKAGE',
      pricing: { usd: 15, bdt: 1490 },
      features: [
        { id: 'f1', text: '3 different logo concepts' },
        { id: 'f2', text: 'Up to 5 modifications' },
        { id: 'f3', text: 'Horizontal & Vertical versions' },
        { id: 'f4', text: 'Color & Black-White versions' },
        { id: 'f5', text: 'All necessary files (AI, PSD, PNG, JPG, SVG, PDF)' },
        { id: 'f6', text: '3D mockup view' },
        { id: 'f7', text: 'Easy-to-use guideline (PDF)' }
      ],
      status: 'active',
      deliveryTime: '2-3 working days',
      paymentTerms: '40% (non-refundable) advance payment required'
    },
    {
      id: 'logo-premium',
      name: 'PREMIUM',
      subtitle: 'BRANDING LOGO PACKAGE',
      pricing: { usd: 30, bdt: 2990 },
      features: [
        { id: 'f1', text: '5 premium logo concepts', highlight: true },
        { id: 'f2', text: 'Unlimited revisions', highlight: true },
        { id: 'f3', text: 'Horizontal, Vertical (Social Media Adapted Version)' },
        { id: 'f4', text: 'Brand icon & extra favicon' },
        { id: 'f5', text: 'All necessary files (AI, PSD, PNG, JPG, SVG, PDF)' },
        { id: 'f6', text: '3D mockup view' },
        { id: 'f7', text: 'Trademark-eligible logo & file', highlight: true },
        { id: 'f8', text: '6 months brand support', highlight: true },
        { id: 'f9', text: 'Designer meeting support (Zoom/Chat)' },
        { id: 'f10', text: 'Brand guideline (PDF)' },
        { id: 'f11', text: 'Professional custom cover design' }
      ],
      status: 'featured',
      deliveryTime: '3-4 working days',
      paymentTerms: '40% (non-refundable) advance payment required',
      popular: true
    }
  ],
  'branding': [
    {
      id: 'branding-essential',
      name: 'ESSENTIAL',
      subtitle: 'BRAND IDENTITY PACKAGE',
      pricing: { usd: 45, bdt: 4490 },
      features: [
        { id: 'f1', text: 'Complete brand identity system' },
        { id: 'f2', text: 'Logo design & variations' },
        { id: 'f3', text: 'Color palette & typography' },
        { id: 'f4', text: 'Business card & letterhead design' },
        { id: 'f5', text: 'Brand guidelines document' },
        { id: 'f6', text: 'Social media templates' },
        { id: 'f7', text: 'All source files included' }
      ],
      status: 'active',
      deliveryTime: '5-7 working days',
      paymentTerms: '40% (non-refundable) advance payment required'
    },
    {
      id: 'branding-complete',
      name: 'COMPLETE',
      subtitle: 'BRAND STRATEGY PACKAGE',
      pricing: { usd: 75, bdt: 7490 },
      features: [
        { id: 'f1', text: 'Everything in Essential package', highlight: true },
        { id: 'f2', text: 'Brand strategy & positioning', highlight: true },
        { id: 'f3', text: 'Competitor analysis' },
        { id: 'f4', text: 'Brand voice & messaging guide' },
        { id: 'f5', text: 'Marketing collateral design' },
        { id: 'f6', text: 'Website design consultation' },
        { id: 'f7', text: '3 months brand support', highlight: true },
        { id: 'f8', text: 'Brand launch strategy' }
      ],
      status: 'featured',
      deliveryTime: '7-10 working days',
      paymentTerms: '40% (non-refundable) advance payment required',
      popular: true
    }
  ],
  'motion-video': [
    {
      id: 'motion-basic',
      name: 'BASIC',
      subtitle: 'MOTION PACKAGE',
      pricing: { usd: 25, bdt: 2490 },
      features: [
        { id: 'f1', text: '30-second motion video' },
        { id: 'f2', text: '2 concept options' },
        { id: 'f3', text: 'Up to 3 revisions' },
        { id: 'f4', text: 'HD quality (1920x1080)' },
        { id: 'f5', text: 'MP4 format delivery' },
        { id: 'f6', text: 'Background music included' }
      ],
      status: 'active',
      deliveryTime: '3-5 working days',
      paymentTerms: '40% (non-refundable) advance payment required'
    },
    {
      id: 'motion-premium',
      name: 'PREMIUM',
      subtitle: 'MOTION & ANIMATION PACKAGE',
      pricing: { usd: 50, bdt: 4990 },
      features: [
        { id: 'f1', text: '60-second motion video', highlight: true },
        { id: 'f2', text: '3 concept options' },
        { id: 'f3', text: 'Unlimited revisions', highlight: true },
        { id: 'f4', text: '4K quality (3840x2160)' },
        { id: 'f5', text: 'Multiple format delivery' },
        { id: 'f6', text: 'Custom music composition' },
        { id: 'f7', text: 'Social media variations' },
        { id: 'f8', text: 'Storyboard & script writing' }
      ],
      status: 'featured',
      deliveryTime: '5-7 working days',
      paymentTerms: '40% (non-refundable) advance payment required',
      popular: true
    }
  ]
};

// Demo data for individual service pages
export const servicePagesData: Record<string, ServicePageData> = {
  'logo-design': {
    id: 'logo-design',
    slug: 'logo-design',
    title: 'Logo Design',
    subtitle: 'Create a lasting impression with a unique logo that represents your brand',
    description: 'We craft distinctive logos that capture your brand\'s essence and leave a memorable impact on your audience. Our design process ensures your logo works perfectly across all platforms and applications.',
    processSteps: [
      {
        id: 'step1',
        title: 'Discovery & Research',
        description: 'We dive deep into your brand, industry, and target audience to understand your unique positioning',
        icon: 'Search'
      },
      {
        id: 'step2',
        title: 'Concept Development',
        description: 'Our designers create multiple logo concepts that align with your brand vision and values',
        icon: 'Palette'
      },
      {
        id: 'step3',
        title: 'Refinement & Delivery',
        description: 'We refine the chosen concept and deliver all necessary files for immediate use',
        icon: 'CheckCircle'
      }
    ],
    packages: servicePackages['logo-design'],
    features: [
      {
        id: 'f1',
        title: 'Unique Design',
        description: 'Every logo is custom-designed to reflect your brand\'s unique personality and values',
        icon: 'Sparkles'
      },
      {
        id: 'f2',
        title: 'Scalable Solutions',
        description: 'Logos designed to work perfectly across all sizes and applications',
        icon: 'Maximize2'
      },
      {
        id: 'f3',
        title: 'Multiple Formats',
        description: 'Receive your logo in all necessary formats for print and digital use',
        icon: 'FileType'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'How many logo concepts will I receive?',
        answer: 'Our Starter package includes 3 different logo concepts, while the Premium package offers 5 premium concepts. Each concept is unique and tailored to your brand.'
      },
      {
        id: 'faq2',
        question: 'What file formats are included?',
        answer: 'All packages include AI, PSD, PNG, JPG, SVG, and PDF formats. These cover all your needs for both digital and print applications.'
      },
      {
        id: 'faq3',
        question: 'Can I request changes to the logo?',
        answer: 'Yes! The Starter package includes up to 5 modifications, while the Premium package offers unlimited revisions until you\'re completely satisfied.'
      }
    ]
  },
  'branding': {
    id: 'branding',
    slug: 'branding',
    title: 'Brand Identity',
    subtitle: 'Build a cohesive brand that connects with your audience and drives growth',
    description: 'We develop comprehensive brand identities that go beyond logos to create meaningful connections with your audience. Our strategic approach ensures your brand stands out in today\'s competitive market.',
    processSteps: [
      {
        id: 'step1',
        title: 'Brand Strategy',
        description: 'We analyze your market position and develop a strategic foundation for your brand',
        icon: 'Target'
      },
      {
        id: 'step2',
        title: 'Visual Identity',
        description: 'Our designers create a cohesive visual system that brings your brand to life',
        icon: 'Eye'
      },
      {
        id: 'step3',
        title: 'Brand Guidelines',
        description: 'We provide comprehensive guidelines to maintain consistency across all touchpoints',
        icon: 'BookOpen'
      }
    ],
    packages: servicePackages['branding'],
    features: [
      {
        id: 'f1',
        title: 'Strategic Foundation',
        description: 'Every brand identity starts with a solid strategic foundation based on research and insights',
        icon: 'Lightbulb'
      },
      {
        id: 'f2',
        title: 'Comprehensive System',
        description: 'Complete visual identity system including logos, colors, typography, and guidelines',
        icon: 'Layers'
      },
      {
        id: 'f3',
        title: 'Long-term Support',
        description: 'Ongoing support to ensure your brand evolves and grows with your business',
        icon: 'Headphones'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'What\'s included in a brand identity package?',
        answer: 'Our packages include logo design, color palette, typography system, business collateral, and comprehensive brand guidelines. The Complete package also includes brand strategy and positioning.'
      },
      {
        id: 'faq2',
        question: 'How long does the process take?',
        answer: 'The Essential package takes 5-7 working days, while the Complete package takes 7-10 working days. We\'ll provide a detailed timeline at the start of your project.'
      },
      {
        id: 'faq3',
        question: 'Do you provide ongoing support?',
        answer: 'Yes! The Complete package includes 3 months of brand support, and we\'re always available for questions and guidance.'
      }
    ]
  },
  'motion-video': {
    id: 'motion-video',
    slug: 'motion-video',
    title: 'Motion Video',
    subtitle: 'Bring your brand to life with engaging motion graphics and animations',
    description: 'We create captivating motion videos that tell your story and engage your audience. From simple animations to complex visual effects, we bring your ideas to life with professional quality and creative flair.',
    processSteps: [
      {
        id: 'step1',
        title: 'Concept & Storyboard',
        description: 'We develop the concept and create a detailed storyboard to visualize your video',
        icon: 'Film'
      },
      {
        id: 'step2',
        title: 'Animation & Production',
        description: 'Our animators bring the storyboard to life with smooth animations and visual effects',
        icon: 'Play'
      },
      {
        id: 'step3',
        title: 'Review & Delivery',
        description: 'We refine the video based on your feedback and deliver in multiple formats',
        icon: 'Download'
      }
    ],
    packages: servicePackages['motion-video'],
    features: [
      {
        id: 'f1',
        title: 'Creative Storytelling',
        description: 'We craft compelling narratives that engage your audience and convey your message effectively',
        icon: 'MessageSquare'
      },
      {
        id: 'f2',
        title: 'Professional Quality',
        description: 'High-quality animations and effects that meet industry standards and exceed expectations',
        icon: 'Award'
      },
      {
        id: 'f3',
        title: 'Multiple Formats',
        description: 'Videos optimized for different platforms and delivered in various formats for maximum reach',
        icon: 'Smartphone'
      }
    ],
    faqs: [
      {
        id: 'faq1',
        question: 'What video lengths do you offer?',
        answer: 'Our Basic package includes 30-second videos, while the Premium package offers 60-second videos. We can also create custom lengths based on your specific needs.'
      },
      {
        id: 'faq2',
        question: 'What quality can I expect?',
        answer: 'Basic packages deliver HD quality (1920x1080), while Premium packages include 4K quality (3840x2160). All videos are optimized for web and social media.'
      },
      {
        id: 'faq3',
        question: 'Do you provide music and sound effects?',
        answer: 'Yes! All packages include background music. Premium packages also include custom music composition and sound effects to enhance your video.'
      }
    ]
  }
};

// Function to get service page data by slug
export function getServicePageData(slug: string): ServicePageData | undefined {
  return servicePagesData[slug];
}

// Function to get all service slugs
export function getAllServiceSlugs(): string[] {
  return Object.keys(servicePagesData);
} 