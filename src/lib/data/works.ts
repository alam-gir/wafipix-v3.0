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

import type { WorkCard, WorkDetailPublicResponse, WorksFilterState } from '@/types';

// ============================================================================
// DEMO WORKS DATA
// ============================================================================

export const works: WorkDetailPublicResponse[] = [
  {
    id: 'wrk-aurora-brand',
    title: 'Aurora Brand Identity',
    slug: 'aurora-brand',
    description: '<h3>Complete brand identity system for Aurora Tech</h3><p>A comprehensive rebranding project that transformed Aurora Tech from a startup to an industry leader. The project included logo design, color palette development, typography selection, and brand guidelines that maintained consistency across all touchpoints.</p><ul><li>Modern, tech-forward aesthetic</li><li>Scalable design system</li><li>Comprehensive brand guidelines</li></ul>',
    coverVideo: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    coverImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1600&auto=format&fit=crop',
    profileVideo: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    profileImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1200&auto=format&fit=crop',
    galleries: [
      {
        id: 'gallery-1',
        isMobileGrid: false,
        items: [
          { id: 'item-1', url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1600&auto=format&fit=crop', type: 'image' as const },
          { id: 'item-2', url: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop', type: 'image' as const },
          { id: 'item-3', url: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop', type: 'image' as const },
          { id: 'item-4', url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop', type: 'image' as const }
        ]
      },
      {
        id: 'gallery-2',
        isMobileGrid: true,
        items: [
          { id: 'item-5', url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1600&auto=format&fit=crop', type: 'image' as const },
          { id: 'item-6', url: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop', type: 'image' as const }
        ]
      }
    ]
  },
  {
    id: 'wrk-sussex-taps',
    title: 'Sussex Taps Logo Design',
    slug: 'sussex-taps',
    description: '<h3>Modern logo design for Sussex Taps brewery</h3><p>A sophisticated logo design that captures the essence of traditional brewing while appealing to modern craft beer enthusiasts. The design incorporates elements of Sussex heritage with contemporary typography and iconography.</p><p>The final logo works seamlessly across all applications, from bottle labels to digital platforms, maintaining brand recognition and visual impact.</p>',
    coverVideo: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    coverImage: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1600&auto=format&fit=crop',
    profileVideo: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    profileImage: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop',
    galleries: [
      {
        id: 'gallery-3',
        isMobileGrid: true,
        items: [
          { id: 'item-7', url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1600&auto=format&fit=crop', type: 'image' as const },
          { id: 'item-8', url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop', type: 'image' as const },
          { id: 'item-9', url: 'https://images.unsplash.com/photo-1505075106905-fb052892c116?q=80&w=1600&auto=format&fit=crop', type: 'image' as const }
        ]
      }
    ]
  },
  {
    id: 'wrk-olive-ui',
    title: 'Olive UI Design System',
    slug: 'olive-ui',
    description: '<h3>Complete UI design system for Olive mobile app</h3><p>A comprehensive design system that established visual consistency and improved user experience across the Olive mobile application. The system includes component libraries, design tokens, and interactive patterns that scale across different screen sizes and platforms.</p><ul><li>Component-based architecture</li><li>Accessibility-first design</li><li>Responsive design patterns</li><li>Interactive prototyping</li></ul>',
    coverVideo: null,
    coverImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    profileVideo: null,
    profileImage: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop',
    galleries: [
      {
        id: 'gallery-4',
        isMobileGrid: false,
        items: [
          { id: 'item-10', url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop', type: 'image' as const },
          { id: 'item-11', url: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop', type: 'image' as const },
          { id: 'item-12', url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop', type: 'image' as const },
          { id: 'item-13', url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200&auto=format&fit=crop', type: 'image' as const },
          { id: 'item-14', url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop', type: 'image' as const }
        ]
      }
    ]
  }
];

// ============================================================================
// WORKS AS CARDS (for grid display)
// ============================================================================

export const worksAsCard: WorkCard[] = works.map(work => ({
  id: work.id,
  title: work.title,
  slug: work.slug,
  serviceTitle: 'Design Service', // This would come from your service data
  coverMedia: work.coverVideo ? {
    url: work.coverVideo,
    type: 'video' as const
  } : work.coverImage ? {
    url: work.coverImage,
    type: 'image' as const
  } : null,
  profileMedia: work.profileVideo ? {
    url: work.profileVideo,
    type: 'video' as const
  } : work.profileImage ? {
    url: work.profileImage,
    type: 'image' as const
  } : null,
}));

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

export const findWorkBySlug = (slug: string): WorkDetailPublicResponse | undefined => {
  return works.find(work => work.slug === slug);
};

export const getAllWorks = (): WorkDetailPublicResponse[] => {
  return works;
};

export const getWorksAsCards = (): WorkCard[] => {
  return worksAsCard;
};