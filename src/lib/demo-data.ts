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
export const Galleries : Array<Gallery> = []

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
      '<p>We crafted a minimal, confident identity system with motion-first guidelines and digital clarity.</p>',
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
    description: '<p>Product-led animation series highlighting craft and materiality.</p>',
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
      '<p>We simplified information architecture and introduced a scalable design system.</p>',
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
    description: '<p>Inclusive, WCAG-compliant design with community storytelling.</p>',
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
    description: '<p>Grid-based construction with variable logo assets.</p>',
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
    description: '<p>Systematic motion tokens and micro-interactions library.</p>',
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
    description: '<p>Reduced cognitive load with progressive disclosure patterns.</p>',
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
    description: '<p>Validated ideas through iterative design sprints.</p>',
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
    description: '<p>Optimistic color system and inclusive typography.</p>',
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
    description: '<p>Performance-first design with visual storytelling.</p>',
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