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