// ============================================================================
// WORKS DATA - Clean data structure for portfolio works
// ============================================================================
// 
// This file contains the demo data structure that your backend API should replicate.
// Each interface shows exactly what data your Spring Boot backend should return.
//
// BACKEND API ENDPOINTS NEEDED:
// - GET /api/works - List all works with pagination and filtering
// - GET /api/works/{slug} - Get single work by slug
// - GET /api/works/{id}/gallery - Get work gallery
// - GET /api/works/cards - Get works optimized for grid display
//
// ============================================================================

import type { Work, WorkAsCard, WorksFilters } from '@/types';

// ============================================================================
// DEMO WORKS DATA
// ============================================================================

export const works: Work[] = [
  {
    id: 'wrk-aurora-brand',
    slug: 'aurora-brand',
    name: 'Aurora Brand Identity',
    service: 'branding',
    description: 'Complete brand identity system for Aurora Tech',
    coverVideoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    coverImageUrl: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
    profileVideoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    profileImageUrl: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      {
        id: 'img-1',
        url: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
        alt: 'Aurora Brand Identity',
        type: 'image'
      },
      {
        id: 'img-2',
        url: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop',
        alt: 'Aurora Brand Guidelines',
        type: 'image'
      }
    ],
    tags: ['branding', 'logo-design', 'identity'],
    client: 'Aurora Tech',
    projectDate: '2024',
    duration: '3 weeks',
    tools: ['Figma', 'Adobe Illustrator', 'Photoshop'],
    challenge: 'Create a modern tech brand identity',
    solution: 'Comprehensive brand system with guidelines',
    result: 'Successful brand launch with positive feedback'
  },
  {
    id: 'wrk-sussex-taps',
    slug: 'sussex-taps',
    name: 'Sussex Taps Logo Design',
    service: 'logo-design',
    description: 'Modern logo design for Sussex Taps brewery',
    coverVideoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    coverImageUrl: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
    profileVideoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    profileImageUrl: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      {
        id: 'img-3',
        url: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop',
        alt: 'Sussex Taps Logo',
        type: 'image'
      }
    ],
    tags: ['logo-design', 'brewing', 'craft'],
    client: 'Sussex Taps',
    projectDate: '2024',
    duration: '2 weeks',
    tools: ['Adobe Illustrator', 'Photoshop'],
    challenge: 'Design a memorable brewery logo',
    solution: 'Custom typography with brewing elements',
    result: 'Logo successfully represents brand identity'
  },
  {
    id: 'wrk-olive-ui',
    slug: 'olive-ui',
    name: 'Olive UI Design System',
    service: 'ui-design',
    description: 'Complete UI design system for Olive mobile app',
    coverVideoUrl: '',
    coverImageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    profileVideoUrl: '',
    profileImageUrl: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      {
        id: 'img-4',
        url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
        alt: 'Olive UI Design System',
        type: 'image'
      }
    ],
    tags: ['ui-design', 'design-system', 'mobile'],
    client: 'Olive App',
    projectDate: '2024',
    duration: '6 weeks',
    tools: ['Figma', 'Principle', 'Sketch'],
    challenge: 'Create scalable UI system',
    solution: 'Comprehensive component library',
    result: 'Improved development efficiency'
  }
];

// ============================================================================
// WORKS AS CARDS (for grid display)
// ============================================================================

export const worksAsCard: WorkAsCard[] = works.map(work => ({
  id: work.id,
  slug: work.slug,
  name: work.name,
  service: work.service,
  coverVideoUrl: work.coverVideoUrl,
  coverImageUrl: work.coverImageUrl,
  profileVideoUrl: work.profileVideoUrl,
  profileImageUrl: work.profileImageUrl,
}));

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

export const findWorkBySlug = (slug: string): Work | undefined => {
  return works.find(work => work.slug === slug);
};

export const getAllWorks = (): Work[] => {
  return works;
};

export const getWorksAsCards = (): WorkAsCard[] => {
  return worksAsCard;
};
