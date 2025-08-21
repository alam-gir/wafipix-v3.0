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
    description: '<h3>Complete brand identity system for Aurora Tech</h3><p>A comprehensive rebranding project that transformed Aurora Tech from a startup to an industry leader. The project included logo design, color palette development, typography selection, and brand guidelines that maintained consistency across all touchpoints.</p><ul><li>Modern, tech-forward aesthetic</li><li>Scalable design system</li><li>Comprehensive brand guidelines</li></ul>',
    coverVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    coverImageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1600&auto=format&fit=crop',
    profileVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    profileImageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      {
        workId: 'wrk-aurora-brand',
        isMobileGrid: false,
        items: [
          { url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1600&auto=format&fit=crop', type: 'image' as const },
          { url: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop', type: 'image' as const },
          { url: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop', type: 'image' as const },
          { url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop', type: 'image' as const }
        ]
      },
      {
        workId: 'wrk-aurora-brand',
        isMobileGrid: true,
        items: [
          { url: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1600&auto=format&fit=crop', type: 'image' as const },
          { url: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1600&auto=format&fit=crop', type: 'image' as const }
        ]
      }
    ],
    tags: ['branding', 'logo-design', 'identity']
  },
  {
    id: 'wrk-sussex-taps',
    slug: 'sussex-taps',
    name: 'Sussex Taps Logo Design',
    service: 'logo-design',
    description: '<h3>Modern logo design for Sussex Taps brewery</h3><p>A sophisticated logo design that captures the essence of traditional brewing while appealing to modern craft beer enthusiasts. The design incorporates elements of Sussex heritage with contemporary typography and iconography.</p><p>The final logo works seamlessly across all applications, from bottle labels to digital platforms, maintaining brand recognition and visual impact.</p>',
    coverVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    coverImageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1600&auto=format&fit=crop',
    profileVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    profileImageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      {
        workId: 'wrk-sussex-taps',
        isMobileGrid: true,
        items: [
          { url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1600&auto=format&fit=crop', type: 'image' as const },
          { url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1200&auto=format&fit=crop', type: 'image' as const },
          { url: 'https://images.unsplash.com/photo-1505075106905-fb052892c116?q=80&w=1600&auto=format&fit=crop', type: 'image' as const }
        ]
      }
    ],
    tags: ['logo-design', 'brewing', 'craft']
  },
  {
    id: 'wrk-olive-ui',
    slug: 'olive-ui',
    name: 'Olive UI Design System',
    service: 'ui-design',
    description: '<h3>Complete UI design system for Olive mobile app</h3><p>A comprehensive design system that established visual consistency and improved user experience across the Olive mobile application. The system includes component libraries, design tokens, and interactive patterns that scale across different screen sizes and platforms.</p><ul><li>Component-based architecture</li><li>Accessibility-first design</li><li>Responsive design patterns</li><li>Interactive prototyping</li></ul>',
    coverVideoUrl: '',
    coverImageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    profileVideoUrl: '',
    profileImageUrl: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      {
        workId: 'wrk-olive-ui',
        isMobileGrid: false,
        items: [
          { url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop', type: 'image' }
        ]
      }
    ],
    tags: ['ui-design', 'design-system', 'mobile']
  },
  {
    id: 'wrk-ecoflow-website',
    slug: 'ecoflow-website',
    name: 'EcoFlow E-commerce Website',
    service: 'web-design',
    description: '<h3>Modern e-commerce website for sustainable products</h3><p>A fully responsive e-commerce platform designed to showcase sustainable products while providing an intuitive shopping experience. The design emphasizes environmental consciousness through natural color palettes, organic shapes, and user-friendly navigation.</p><p>Key features include advanced filtering, product comparison tools, and seamless checkout processes that convert visitors into customers.</p>',
    coverVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    coverImageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop',
    profileVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    profileImageUrl: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      {
        workId: 'wrk-ecoflow-website',
        isMobileGrid: true,
        items: [
          { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200&auto=format&fit=crop', type: 'image' }
        ]
      },
      {
        workId: 'wrk-ecoflow-website',
        isMobileGrid: false,
        items: [
          { url: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1200&auto=format&fit=crop', type: 'image' }
        ]
      }
    ],
    tags: ['web-design', 'e-commerce', 'sustainability', 'responsive']
  },
  {
    id: 'wrk-nova-app',
    slug: 'nova-app',
    name: 'Nova Fitness App Design',
    service: 'app-design',
    description: '<h3>Comprehensive fitness tracking mobile application</h3><p>A modern fitness app that combines workout tracking, nutrition monitoring, and social features to create an engaging health and wellness experience. The design focuses on motivation, progress visualization, and community building.</p><ul><li>Intuitive workout tracking</li><li>Personalized nutrition plans</li><li>Social challenges and leaderboards</li><li>Progress analytics and insights</li></ul>',
    coverVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    coverImageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop',
    profileVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMob.mp4',
    profileImageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      {
        workId: 'wrk-nova-app',
        isMobileGrid: false,
        items: [
          { url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1600&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop', type: 'image' }
        ]
      }
    ],
    tags: ['app-design', 'fitness', 'mobile', 'health']
  },
  {
    id: 'wrk-bloom-packaging',
    slug: 'bloom-packaging',
    name: 'Bloom Organic Packaging Design',
    service: 'packaging',
    description: '<h3>Sustainable packaging design for organic beauty products</h3><p>An eco-friendly packaging solution that reflects the natural and organic nature of Bloom beauty products. The design incorporates sustainable materials, minimalist aesthetics, and clear product information while maintaining visual appeal on retail shelves.</p><p>The packaging system includes various product sizes and formats, all unified by a cohesive design language that communicates quality and environmental responsibility.</p>',
    coverVideoUrl: '',
    coverImageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1600&auto=format&fit=crop',
    profileVideoUrl: '',
    profileImageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      {
        workId: 'wrk-bloom-packaging',
        isMobileGrid: true,
        items: [
          { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1600&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1600&auto=format&fit=crop', type: 'image' }
        ]
      },
      {
        workId: 'wrk-bloom-packaging',
        isMobileGrid: false,
        items: [
          { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1200&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1600&auto=format&fit=crop', type: 'image' }
        ]
      }
    ],
    tags: ['packaging', 'sustainability', 'beauty', 'organic']
  },
  {
    id: 'wrk-zen-studio',
    slug: 'zen-studio',
    name: 'Zen Studio Interior Branding',
    service: 'branding',
    description: '<h3>Complete branding for luxury wellness studio</h3><p>A sophisticated branding project that captures the essence of tranquility and luxury for Zen Studio. The design system encompasses everything from the physical space design to digital presence, creating a cohesive experience that reflects the studio\'s commitment to wellness and mindfulness.</p><p>The brand identity includes custom typography, a calming color palette, and visual elements that evoke serenity and sophistication.</p>',
    coverVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    coverImageUrl: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?q=80&w=1600&auto=format&fit=crop',
    profileVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    profileImageUrl: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      {
        workId: 'wrk-zen-studio',
        isMobileGrid: false,
        items: [
          { url: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?q=80&w=1600&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?q=80&w=1200&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?q=80&w=1600&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?q=80&w=1200&auto=format&fit=crop', type: 'image' }
        ]
      }
    ],
    tags: ['branding', 'wellness', 'luxury', 'interior']
  },
  {
    id: 'wrk-techconf-event',
    slug: 'techconf-event',
    name: 'TechConf 2024 Event Design',
    service: 'event-design',
    description: '<h3>Complete visual identity for major tech conference</h3><p>A comprehensive event design package that created a memorable and engaging experience for TechConf 2024. The project included stage design, digital assets, printed materials, and environmental graphics that unified the entire conference experience.</p><ul><li>Dynamic stage visuals and lighting</li><li>Interactive digital displays</li><li>Comprehensive wayfinding system</li><li>Social media graphics and templates</li></ul>',
    coverVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    coverImageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop',
    profileVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    profileImageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      {
        workId: 'wrk-techconf-event',
        isMobileGrid: true,
        items: [
          { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop', type: 'image' }
        ]
      },
      {
        workId: 'wrk-techconf-event',
        isMobileGrid: false,
        items: [
          { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop', type: 'image' }
        ]
      }
    ],
    tags: ['event-design', 'tech', 'conference', 'marketing']
  },
  {
    id: 'wrk-artisan-bakery',
    slug: 'artisan-bakery',
    name: 'Artisan Bakery Visual Identity',
    service: 'branding',
    description: '<h3>Warm, inviting brand identity for local artisan bakery</h3><p>A heartfelt branding project that captures the warmth and craftsmanship of a local artisan bakery. The design emphasizes the handmade quality and community connection, using organic shapes, warm colors, and traditional typography that feels both timeless and contemporary.</p><p>The brand identity extends across packaging, signage, digital presence, and in-store materials, creating a cohesive experience that builds customer loyalty and community engagement.</p>',
    coverVideoUrl: '',
    coverImageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1600&auto=format&fit=crop',
    profileVideoUrl: '',
    profileImageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      {
        workId: 'wrk-artisan-bakery',
        isMobileGrid: false,
        items: [
          { url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1600&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1200&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1600&auto=format&fit=crop', type: 'image' }
        ]
      }
    ],
    tags: ['branding', 'food', 'artisan', 'local']
  },
  {
    id: 'wrk-cyberpunk-game',
    slug: 'cyberpunk-game',
    name: 'Cyberpunk Game UI Design',
    service: 'game-design',
    description: '<h3>Futuristic user interface design for cyberpunk RPG game</h3><p>An immersive UI design that transports players into a dystopian future world. The interface combines neon aesthetics with functional design, creating an intuitive gaming experience that enhances immersion without compromising usability.</p><ul><li>Holographic-style elements and animations</li><li>Custom iconography and typography</li><li>Responsive HUD design</li><li>Accessibility considerations for gaming</li></ul>',
    coverVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    coverImageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
    profileVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMob.mp4',
    profileImageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      {
        workId: 'wrk-cyberpunk-game',
        isMobileGrid: true,
        items: [
          { url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop', type: 'image' }
        ]
      }
    ],
    tags: ['game-design', 'ui', 'cyberpunk', 'gaming']
  },
  {
    id: 'wrk-solar-energy',
    slug: 'solar-energy',
    name: 'Solar Energy Company Website',
    service: 'web-design',
    description: '<h3>Modern website design for renewable energy company</h3><p>A forward-thinking website that communicates innovation and environmental responsibility while maintaining corporate credibility. The design emphasizes clean energy solutions through modern aesthetics, clear information architecture, and compelling visual storytelling.</p><p>The website includes interactive elements, comprehensive service information, and clear calls-to-action that convert visitors into potential clients.</p>',
    coverVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    coverImageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop',
    profileVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    profileImageUrl: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      {
        workId: 'wrk-solar-energy',
        isMobileGrid: false,
        items: [
          { url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop', type: 'image' }
        ]
      }
    ],
    tags: ['web-design', 'energy', 'sustainability', 'corporate']
  },
  {
    id: 'wrk-fashion-magazine',
    slug: 'fashion-magazine',
    name: 'Vogue Digital Magazine Redesign',
    service: 'editorial-design',
    description: '<h3>Complete digital redesign of fashion magazine layout</h3><p>A comprehensive digital transformation that reimagines the traditional fashion magazine for the digital age. The redesign focuses on enhanced readability, interactive elements, and mobile-first design while maintaining the sophisticated aesthetic that Vogue is known for.</p><ul><li>Responsive grid layouts</li><li>Interactive image galleries</li><li>Enhanced typography hierarchy</li><li>Seamless cross-platform experience</li></ul>',
    coverVideoUrl: '',
    coverImageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop',
    profileVideoUrl: '',
    profileImageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      {
        workId: 'wrk-fashion-magazine',
        isMobileGrid: true,
        items: [
          { url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop', type: 'image' }
        ]
      },
      {
        workId: 'wrk-fashion-magazine',
        isMobileGrid: false,
        items: [
          { url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop', type: 'image' },
          { url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop', type: 'image' }
        ]
      }
    ],
    tags: ['editorial-design', 'fashion', 'magazine', 'digital']
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
