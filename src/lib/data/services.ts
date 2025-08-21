// ============================================================================
// SERVICES DATA - Clean data structure for company services
// ============================================================================
// 
// This file contains the demo data structure that your backend API should replicate.
// Each interface shows exactly what data your Spring Boot backend should return.
//
// BACKEND API ENDPOINTS NEEDED:
// - GET /api/services - List all available services
// - GET /api/services/{slug} - Get service page data by slug
// - GET /api/services/packages - Get all service packages
// - GET /api/services/categories - Get service categories
// - GET /api/services/navigation - Get services navigation structure
//
// ============================================================================

import type { ServicePageData, ServicePackage, ServiceCategory } from '@/types';

// ============================================================================
// SERVICES NAVIGATION DATA (for navigation submenu)
// ============================================================================

export const servicesNavigation = [
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
];

// ============================================================================
// SERVICE PACKAGES DATA
// ============================================================================

// Logo Design Packages
export const logoDesignPackages: ServicePackage[] = [
  {
    id: 'starter',
    name: 'Starter',
    subtitle: 'Perfect for small businesses and startups',
    pricing: {
      usd: 18,
      bdt: 1200,
    },
    features: [
      { id: 'f1', text: '1 unique logo concept', highlight: false },
      { id: 'f2', text: '3 color variations', highlight: false },
      { id: 'f3', text: 'PNG & JPG formats', highlight: false },
      { id: 'f4', text: '2 rounds of revisions', highlight: false },
      { id: 'f5', text: 'Basic usage guidelines', highlight: false },
      { id: 'f6', text: '5-day delivery', highlight: true },
    ],
    status: 'active',
    deliveryTime: '5 business days',
    paymentTerms: '100% upfront',
    popular: false,
  },
  {
    id: 'professional',
    name: 'Professional',
    subtitle: 'Ideal for growing businesses',
    pricing: {
      usd: 28,
      bdt: 1900,
    },
    features: [
      { id: 'f1', text: '3 unique logo concepts', highlight: false },
      { id: 'f2', text: '5 color variations', highlight: false },
      { id: 'f3', text: 'PNG, JPG, SVG formats', highlight: true },
      { id: 'f4', text: 'Unlimited revisions', highlight: true },
      { id: 'f5', text: 'Comprehensive brand guidelines', highlight: true },
      { id: 'f6', text: 'Business card design included', highlight: true },
      { id: 'f7', text: '7-day delivery', highlight: false },
      { id: 'f8', text: 'Source files included', highlight: false },
    ],
    status: 'featured',
    deliveryTime: '7 business days',
    paymentTerms: '50% upfront, 50% on delivery',
    popular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    subtitle: 'Complete branding solution for established businesses',
    pricing: {
      usd: 75,
      bdt: 5000,
    },
    features: [
      { id: 'f1', text: '5 unique logo concepts', highlight: false },
      { id: 'f2', text: 'Unlimited color variations', highlight: false },
      { id: 'f3', text: 'All formats (PNG, JPG, SVG, AI, EPS)', highlight: true },
      { id: 'f4', text: 'Unlimited revisions', highlight: false },
      { id: 'f5', text: 'Complete brand identity system', highlight: true },
      { id: 'f6', text: 'Business card, letterhead, envelope design', highlight: true },
      { id: 'f7', text: 'Social media templates (10 platforms)', highlight: true },
      { id: 'f8', text: 'Brand strategy consultation', highlight: true },
      { id: 'f9', text: '10-day delivery', highlight: false },
      { id: 'f10', text: '3 months support', highlight: true },
    ],
    status: 'active',
    deliveryTime: '10 business days',
    paymentTerms: '30% upfront, 40% at milestone, 30% on delivery',
    popular: false,
  },
];

// Branding Packages
export const brandingPackages: ServicePackage[] = [
  {
    id: 'essentials',
    name: 'Essentials',
    subtitle: 'Basic brand identity for small businesses',
    pricing: {
      usd: 25,
      bdt: 1700,
    },
    features: [
      { id: 'f1', text: 'Logo design (3 concepts)', highlight: false },
      { id: 'f2', text: 'Color palette (5 colors)', highlight: false },
      { id: 'f3', text: 'Typography selection', highlight: false },
      { id: 'f4', text: 'Basic brand guidelines', highlight: false },
      { id: 'f5', text: 'Business card design', highlight: true },
      { id: 'f6', text: '7-day delivery', highlight: true },
    ],
    status: 'active',
    deliveryTime: '7 business days',
    paymentTerms: '100% upfront',
    popular: false,
  },
  {
    id: 'complete',
    name: 'Complete',
    subtitle: 'Full brand identity system',
    pricing: {
      usd: 38,
      bdt: 2500,
    },
    features: [
      { id: 'f1', text: 'Logo design (5 concepts)', highlight: false },
      { id: 'f2', text: 'Comprehensive color system', highlight: true },
      { id: 'f3', text: 'Typography hierarchy', highlight: true },
      { id: 'f4', text: 'Brand guidelines document', highlight: true },
      { id: 'f5', text: 'Business card, letterhead, envelope', highlight: true },
      { id: 'f6', text: 'Social media templates (5 platforms)', highlight: true },
      { id: 'f7', text: '10-day delivery', highlight: false },
      { id: 'f8', text: 'Unlimited revisions', highlight: false },
    ],
    status: 'featured',
    deliveryTime: '10 business days',
    paymentTerms: '50% upfront, 50% on delivery',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    subtitle: 'Comprehensive branding for large organizations',
    pricing: {
      usd: 90,
      bdt: 6000,
    },
    features: [
      { id: 'f1', text: 'Logo design (unlimited concepts)', highlight: false },
      { id: 'f2', text: 'Full brand identity system', highlight: true },
      { id: 'f3', text: 'Brand strategy consultation', highlight: true },
      { id: 'f4', text: 'Complete marketing collateral', highlight: true },
      { id: 'f5', text: 'Website design consultation', highlight: true },
      { id: 'f6', text: 'Brand voice and messaging', highlight: true },
      { id: 'f7', text: '15-day delivery', highlight: false },
      { id: 'f8', text: '6 months ongoing support', highlight: true },
    ],
    status: 'active',
    deliveryTime: '15 business days',
    paymentTerms: '30% upfront, 40% at milestone, 30% on delivery',
    popular: false,
  },
];

// Motion Video Packages
export const motionVideoPackages: ServicePackage[] = [
  {
    id: 'basic',
    name: 'Basic',
    subtitle: 'Simple motion graphics for social media',
    pricing: {
      usd: 22,
      bdt: 1500,
    },
    features: [
      { id: 'f1', text: '15-30 second video', highlight: false },
      { id: 'f2', text: '2 motion concepts', highlight: false },
      { id: 'f3', text: 'Basic animations', highlight: false },
      { id: 'f4', text: 'Stock music included', highlight: false },
      { id: 'f5', text: 'MP4 format', highlight: false },
      { id: 'f6', text: '5-day delivery', highlight: true },
    ],
    status: 'active',
    deliveryTime: '5 business days',
    paymentTerms: '100% upfront',
    popular: false,
  },
  {
    id: 'standard',
    name: 'Standard',
    subtitle: 'Professional motion graphics with custom elements',
    pricing: {
      usd: 35,
      bdt: 2300,
    },
    features: [
      { id: 'f1', text: '30-60 second video', highlight: false },
      { id: 'f2', text: '3 motion concepts', highlight: true },
      { id: 'f3', text: 'Advanced animations', highlight: true },
      { id: 'f4', text: 'Custom music/sound design', highlight: true },
      { id: 'f5', text: 'Multiple formats (MP4, MOV)', highlight: true },
      { id: 'f6', text: 'Unlimited revisions', highlight: true },
      { id: 'f7', text: '7-day delivery', highlight: false },
    ],
    status: 'featured',
    deliveryTime: '7 business days',
    paymentTerms: '50% upfront, 50% on delivery',
    popular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    subtitle: 'High-end motion graphics with full production',
    pricing: {
      usd: 75,
      bdt: 5000,
    },
    features: [
      { id: 'f1', text: '60-120 second video', highlight: false },
      { id: 'f2', text: 'Unlimited motion concepts', highlight: true },
      { id: 'f3', text: 'Cinematic quality animations', highlight: true },
      { id: 'f4', text: 'Original music composition', highlight: true },
      { id: 'f5', text: 'All formats + source files', highlight: true },
      { id: 'f6', text: 'Storyboard and script included', highlight: true },
      { id: 'f7', text: '10-day delivery', highlight: false },
      { id: 'f8', text: '3 months support', highlight: true },
    ],
    status: 'active',
    deliveryTime: '10 business days',
    paymentTerms: '30% upfront, 40% at milestone, 30% on delivery',
    popular: false,
  },
];

// Print & Packaging Packages
export const printPackagingPackages: ServicePackage[] = [
  {
    id: 'basic',
    name: 'Basic',
    subtitle: 'Essential print materials for small businesses',
    pricing: {
      usd: 20,
      bdt: 1300,
    },
    features: [
      { id: 'f1', text: 'Business card design', highlight: false },
      { id: 'f2', text: 'Letterhead design', highlight: false },
      { id: 'f3', text: 'Basic flyer design', highlight: false },
      { id: 'f4', text: 'Print-ready files', highlight: true },
      { id: 'f5', text: '2 rounds of revisions', highlight: false },
      { id: 'f6', text: '5-day delivery', highlight: true },
    ],
    status: 'active',
    deliveryTime: '5 business days',
    paymentTerms: '100% upfront',
    popular: false,
  },
  {
    id: 'comprehensive',
    name: 'Comprehensive',
    subtitle: 'Complete print package for growing businesses',
    pricing: {
      usd: 32,
      bdt: 2100,
    },
    features: [
      { id: 'f1', text: 'Business card, letterhead, envelope', highlight: false },
      { id: 'f2', text: 'Brochure design (2-4 pages)', highlight: true },
      { id: 'f3', text: 'Flyer and poster designs', highlight: true },
      { id: 'f4', text: 'Print specifications guide', highlight: true },
      { id: 'f5', text: 'Unlimited revisions', highlight: true },
      { id: 'f6', text: '7-day delivery', highlight: false },
      { id: 'f7', text: 'Print consultation included', highlight: false },
    ],
    status: 'featured',
    deliveryTime: '7 business days',
    paymentTerms: '50% upfront, 50% on delivery',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    subtitle: 'Full print and packaging solution',
    pricing: {
      usd: 68,
      bdt: 4500,
    },
    features: [
      { id: 'f1', text: 'Complete print collateral', highlight: false },
      { id: 'f2', text: 'Product packaging design', highlight: true },
      { id: 'f3', text: 'Catalog design (up to 20 pages)', highlight: true },
      { id: 'f4', text: 'Print production management', highlight: true },
      { id: 'f5', text: 'Material and finish consultation', highlight: true },
      { id: 'f6', text: '10-day delivery', highlight: false },
      { id: 'f7', text: 'Print quality assurance', highlight: true },
    ],
    status: 'active',
    deliveryTime: '10 business days',
    paymentTerms: '30% upfront, 40% at milestone, 30% on delivery',
    popular: false,
  },
];

// Reels Packages
export const reelsPackages: ServicePackage[] = [
  {
    id: 'starter',
    name: 'Starter',
    subtitle: 'Basic reels for social media presence',
    pricing: {
      usd: 15,
      bdt: 1000,
    },
    features: [
      { id: 'f1', text: '1 reel (15-30 seconds)', highlight: false },
      { id: 'f2', text: 'Basic motion graphics', highlight: false },
      { id: 'f3', text: 'Trending music included', highlight: false },
      { id: 'f4', text: 'MP4 format', highlight: false },
      { id: 'f5', text: '2 rounds of revisions', highlight: false },
      { id: 'f6', text: '3-day delivery', highlight: true },
    ],
    status: 'active',
    deliveryTime: '3 business days',
    paymentTerms: '100% upfront',
    popular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    subtitle: 'Professional reels with custom elements',
    pricing: {
      usd: 25,
      bdt: 1700,
    },
    features: [
      { id: 'f1', text: '3 reels (15-60 seconds each)', highlight: false },
      { id: 'f2', text: 'Advanced motion graphics', highlight: true },
      { id: 'f3', text: 'Custom music/sound effects', highlight: true },
      { id: 'f4', text: 'Multiple formats', highlight: true },
      { id: 'f5', text: 'Unlimited revisions', highlight: true },
      { id: 'f6', text: '5-day delivery', highlight: false },
      { id: 'f7', text: 'Content strategy tips', highlight: false },
    ],
    status: 'featured',
    deliveryTime: '5 business days',
    paymentTerms: '50% upfront, 50% on delivery',
    popular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    subtitle: 'Complete reels package with strategy',
    pricing: {
      usd: 45,
      bdt: 3000,
    },
    features: [
      { id: 'f1', text: '5 reels (15-60 seconds each)', highlight: false },
      { id: 'f2', text: 'Cinematic quality animations', highlight: true },
      { id: 'f3', text: 'Original music composition', highlight: true },
      { id: 'f4', text: 'All formats + source files', highlight: true },
      { id: 'f5', text: 'Content calendar planning', highlight: true },
      { id: 'f6', text: '7-day delivery', highlight: false },
      { id: 'f7', text: '1 month content strategy support', highlight: true },
    ],
    status: 'active',
    deliveryTime: '7 business days',
    paymentTerms: '30% upfront, 40% at milestone, 30% on delivery',
    popular: false,
  },
];

// Custom Logo Animation Packages
export const logoAnimationPackages: ServicePackage[] = [
  {
    id: 'basic',
    name: 'Basic',
    subtitle: 'Simple logo animation for digital use',
    pricing: {
      usd: 18,
      bdt: 1200,
    },
    features: [
      { id: 'f1', text: '1 animation style', highlight: false },
      { id: 'f2', text: '3-5 second duration', highlight: false },
      { id: 'f3', text: 'Basic motion effects', highlight: false },
      { id: 'f4', text: 'MP4 format', highlight: false },
      { id: 'f5', text: '2 rounds of revisions', highlight: false },
      { id: 'f6', text: '4-day delivery', highlight: true },
    ],
    status: 'active',
    deliveryTime: '4 business days',
    paymentTerms: '100% upfront',
    popular: false,
  },
  {
    id: 'advanced',
    name: 'Advanced',
    subtitle: 'Professional logo animation with effects',
    pricing: {
      usd: 32,
      bdt: 2100,
    },
    features: [
      { id: 'f1', text: '3 animation styles', highlight: false },
      { id: 'f2', text: '5-8 second duration', highlight: true },
      { id: 'f3', text: 'Advanced motion effects', highlight: true },
      { id: 'f4', text: 'Multiple formats (MP4, MOV, GIF)', highlight: true },
      { id: 'f5', text: 'Unlimited revisions', highlight: true },
      { id: 'f6', text: '6-day delivery', highlight: false },
      { id: 'f7', text: 'Source files included', highlight: false },
    ],
    status: 'featured',
    deliveryTime: '6 business days',
    paymentTerms: '50% upfront, 50% on delivery',
    popular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    subtitle: 'Cinematic logo animation with full production',
    pricing: {
      usd: 52,
      bdt: 3500,
    },
    features: [
      { id: 'f1', text: '5 animation styles', highlight: false },
      { id: 'f2', text: '8-15 second duration', highlight: true },
      { id: 'f3', text: 'Cinematic quality effects', highlight: true },
      { id: 'f4', text: 'All formats + source files', highlight: true },
      { id: 'f5', text: 'Custom sound effects', highlight: true },
      { id: 'f6', text: '8-day delivery', highlight: false },
      { id: 'f7', text: 'Usage guidelines included', highlight: true },
    ],
    status: 'active',
    deliveryTime: '8 business days',
    paymentTerms: '30% upfront, 40% at milestone, 30% on delivery',
    popular: false,
  },
];

// Intro & Outro Packages
export const introOutroPackages: ServicePackage[] = [
  {
    id: 'basic',
    name: 'Basic',
    subtitle: 'Simple intro/outro for content creators',
    pricing: {
      usd: 20,
      bdt: 1300,
    },
    features: [
      { id: 'f1', text: '1 intro OR outro (3-5 seconds)', highlight: false },
      { id: 'f2', text: 'Basic motion graphics', highlight: false },
      { id: 'f3', text: 'Stock music included', highlight: false },
      { id: 'f4', text: 'MP4 format', highlight: false },
      { id: 'f5', text: '2 rounds of revisions', highlight: false },
      { id: 'f6', text: '4-day delivery', highlight: true },
    ],
    status: 'active',
    deliveryTime: '4 business days',
    paymentTerms: '100% upfront',
    popular: false,
  },
  {
    id: 'standard',
    name: 'Standard',
    subtitle: 'Professional intro/outro package',
    pricing: {
      usd: 32,
      bdt: 2100,
    },
    features: [
      { id: 'f1', text: '1 intro AND 1 outro (5-8 seconds each)', highlight: false },
      { id: 'f2', text: 'Advanced motion graphics', highlight: true },
      { id: 'f3', text: 'Custom music/sound design', highlight: true },
      { id: 'f4', text: 'Multiple formats (MP4, MOV)', highlight: true },
      { id: 'f5', text: 'Unlimited revisions', highlight: true },
      { id: 'f6', text: '6-day delivery', highlight: false },
      { id: 'f7', text: 'Source files included', highlight: false },
    ],
    status: 'featured',
    deliveryTime: '6 business days',
    paymentTerms: '50% upfront, 50% on delivery',
    popular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    subtitle: 'Complete intro/outro solution with variations',
    pricing: {
      usd: 60,
      bdt: 4000,
    },
    features: [
      { id: 'f1', text: '3 intro AND 3 outro variations', highlight: false },
      { id: 'f2', text: 'Cinematic quality animations', highlight: true },
      { id: 'f3', text: 'Original music composition', highlight: true },
      { id: 'f4', text: 'All formats + source files', highlight: true },
      { id: 'f5', text: 'Multiple length versions', highlight: true },
      { id: 'f6', text: '8-day delivery', highlight: false },
      { id: 'f7', text: 'Implementation guide', highlight: true },
    ],
    status: 'active',
    deliveryTime: '8 business days',
    paymentTerms: '30% upfront, 40% at milestone, 30% on delivery',
    popular: false,
  },
];

// Legacy packages for backward compatibility
export const servicePackages: ServicePackage[] = logoDesignPackages;

// ============================================================================
// SERVICE CATEGORIES DATA
// ============================================================================

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'design',
    name: 'Design',
    slug: 'design',
    description: 'Visual design and branding services',
    icon: 'Palette',
  },
  {
    id: 'motion',
    name: 'Motion & Animation',
    slug: 'motion',
    description: 'Dynamic content and video production',
    icon: 'Video',
  },
  {
    id: 'print',
    name: 'Print & Packaging',
    slug: 'print',
    description: 'Professional print materials and packaging',
    icon: 'Package',
  },
  {
    id: 'social',
    name: 'Social Media',
    slug: 'social',
    description: 'Content creation for social platforms',
    icon: 'Share2',
  },
];

// ============================================================================
// SERVICE PAGE DATA GENERATORS
// ============================================================================

export const getServicePageData = (slug: string): ServicePageData => {
  const serviceData = {
    'logo-design': {
      title: 'Logo Design',
      subtitle: 'Create a lasting impression with a unique logo',
      features: [
        { id: 'f1', title: 'Strategic Design', description: 'Logos designed with your business goals in mind', icon: 'Lightbulb' },
        { id: 'f2', title: 'Multiple Formats', description: 'Delivered in all formats you need for any platform', icon: 'FileType' },
        { id: 'f3', title: 'Brand Guidelines', description: 'Clear guidelines for consistent logo usage', icon: 'Layers' },
        { id: 'f4', title: 'Scalable Design', description: 'Logos that look great at any size', icon: 'Maximize2' },
        { id: 'f5', title: 'Unique Concepts', description: 'Multiple unique concepts to choose from', icon: 'Sparkles' },
        { id: 'f6', title: 'Professional Quality', description: 'Industry-standard quality and craftsmanship', icon: 'Award' },
      ],
      faqs: [
        {
          id: 'faq1',
          question: 'How many logo concepts will I receive?',
          answer: 'We typically provide 3-5 unique logo concepts for you to choose from. Each concept explores different directions and styles to give you variety.',
        },
        {
          id: 'faq2',
          question: 'What file formats will I receive?',
          answer: 'You\'ll receive your logo in multiple formats including AI, EPS, SVG, PNG, and JPG. This ensures compatibility with all platforms and use cases.',
        },
        {
          id: 'faq3',
          question: 'How long does logo design take?',
          answer: 'Our logo design process typically takes 5-10 business days, depending on the package and complexity of your project.',
        },
        {
          id: 'faq4',
          question: 'Do you offer logo revisions?',
          answer: 'Yes! We offer unlimited revisions until you\'re completely satisfied with your logo design.',
        },
      ],
    },
    'branding': {
      title: 'Brand Identity',
      subtitle: 'Build a cohesive brand that connects with your audience',
      features: [
        { id: 'f1', title: 'Brand Strategy', description: 'Strategic approach to brand development', icon: 'Lightbulb' },
        { id: 'f2', title: 'Visual Identity', description: 'Complete visual brand identity system', icon: 'Palette' },
        { id: 'f3', title: 'Brand Guidelines', description: 'Comprehensive brand usage guidelines', icon: 'Layers' },
        { id: 'f4', title: 'Marketing Materials', description: 'All materials needed for brand launch', icon: 'FileType' },
        { id: 'f5', title: 'Brand Voice', description: 'Consistent brand voice and messaging', icon: 'MessageSquare' },
        { id: 'f6', title: 'Long-term Support', description: 'Ongoing support for brand evolution', icon: 'Headphones' },
      ],
      faqs: [
        {
          id: 'faq1',
          question: 'What\'s included in a brand identity package?',
          answer: 'Our brand identity packages include logo design, color palette, typography, brand guidelines, and various marketing materials.',
        },
        {
          id: 'faq2',
          question: 'How do you develop brand strategy?',
          answer: 'We start with research into your industry, competitors, and target audience, then develop a strategic approach that differentiates your brand.',
        },
        {
          id: 'faq3',
          question: 'Can you help with brand messaging?',
          answer: 'Absolutely! We develop your brand voice, taglines, and key messaging to ensure consistency across all communications.',
        },
        {
          id: 'faq4',
          question: 'Do you provide ongoing brand support?',
          answer: 'Yes, we offer ongoing support to help your brand evolve and maintain consistency as your business grows.',
        },
      ],
    },
    'motion-video': {
      title: 'Motion Video',
      subtitle: 'Bring your brand to life with engaging motion graphics',
      features: [
        { id: 'f1', title: 'Creative Concepts', description: 'Unique and engaging motion concepts', icon: 'Sparkles' },
        { id: 'f2', title: 'High Quality', description: 'Professional-grade video production', icon: 'Award' },
        { id: 'f3', title: 'Multiple Formats', description: 'Optimized for all platforms and devices', icon: 'Smartphone' },
        { id: 'f4', title: 'Fast Delivery', description: 'Quick turnaround without compromising quality', icon: 'Clock' },
        { id: 'f5', title: 'Custom Music', description: 'Original music and sound design', icon: 'Headphones' },
        { id: 'f6', title: 'Revisions', description: 'Unlimited revisions until satisfaction', icon: 'RefreshCw' },
      ],
      faqs: [
        {
          id: 'faq1',
          question: 'What types of motion graphics do you create?',
          answer: 'We create various types including logo animations, explainer videos, social media content, and promotional videos.',
        },
        {
          id: 'faq2',
          question: 'How long are the videos you produce?',
          answer: 'Video length varies by project, typically ranging from 15 seconds for social media to 2-3 minutes for explainer videos.',
        },
        {
          id: 'faq3',
          question: 'Do you provide voice-over services?',
          answer: 'Yes, we offer professional voice-over services and can also work with your existing voice-over talent.',
        },
        {
          id: 'faq4',
          question: 'What\'s your video production process?',
          answer: 'Our process includes concept development, storyboarding, animation, sound design, and final delivery with revisions.',
        },
      ],
    },
    'print-packaging': {
      title: 'Print & Packaging Design',
      subtitle: 'Professional print materials and packaging that enhance your product appeal',
      features: [
        { id: 'f1', title: 'Strategic Design', description: 'Designs that align with your brand strategy and business goals', icon: 'Target' },
        { id: 'f2', title: 'Print-Ready Files', description: 'High-resolution files optimized for professional printing', icon: 'Printer' },
        { id: 'f3', title: 'Material Selection', description: 'Expert guidance on paper types, finishes, and printing techniques', icon: 'Package' },
        { id: 'f4', title: 'Brand Consistency', description: 'Maintains your brand identity across all print materials', icon: 'Layers' },
        { id: 'f5', title: 'Production Support', description: 'Ongoing support throughout the printing process', icon: 'Headphones' },
        { id: 'f6', title: 'Quality Assurance', description: 'Rigorous quality checks before final delivery', icon: 'CheckCircle' },
      ],
      faqs: [
        {
          id: 'faq1',
          question: 'What print materials do you design?',
          answer: 'We design business cards, brochures, flyers, posters, packaging, labels, and any other print materials your business needs.',
        },
        {
          id: 'faq2',
          question: 'Do you handle the printing process?',
          answer: 'We design and prepare print-ready files, and can recommend trusted printing partners or work with your existing printer.',
        },
        {
          id: 'faq3',
          question: 'What file formats do you provide?',
          answer: 'We deliver high-resolution PDF files optimized for professional printing, along with source files for future modifications.',
        },
        {
          id: 'faq4',
          question: 'How do you ensure print quality?',
          answer: 'We use industry-standard color profiles, provide detailed printing specifications, and conduct thorough quality checks.',
        },
      ],
    },
    'reels': {
      title: 'Reels',
      subtitle: 'Short-form video content optimized for social media platforms',
      features: [
        { id: 'f1', title: 'Platform Optimization', description: 'Content specifically designed for Instagram, TikTok, and other platforms', icon: 'Smartphone' },
        { id: 'f2', title: 'Trending Content', description: 'Stay relevant with current social media trends and formats', icon: 'TrendingUp' },
        { id: 'f3', title: 'Engaging Hooks', description: 'Captivating openings that grab attention in the first 3 seconds', icon: 'Zap' },
        { id: 'f4', title: 'Brand Integration', description: 'Seamlessly incorporate your brand elements and messaging', icon: 'Palette' },
        { id: 'f5', title: 'Multiple Formats', description: 'Create content for various social media platforms', icon: 'Grid' },
        { id: 'f6', title: 'Analytics Insights', description: 'Performance tracking and optimization recommendations', icon: 'BarChart' },
      ],
      faqs: [
        {
          id: 'faq1',
          question: 'What platforms do you create reels for?',
          answer: 'We create content for Instagram Reels, TikTok, YouTube Shorts, and other short-form video platforms.',
        },
        {
          id: 'faq2',
          question: 'How long are the reels you produce?',
          answer: 'We create reels ranging from 15 seconds to 60 seconds, optimized for each platform\'s best practices.',
        },
        {
          id: 'faq3',
          question: 'Do you include trending music and effects?',
          answer: 'Yes, we incorporate trending music, effects, and transitions to maximize engagement and reach.',
        },
        {
          id: 'faq4',
          question: 'Can you help with content strategy?',
          answer: 'Absolutely! We provide content strategy recommendations and help plan your social media content calendar.',
        },
      ],
    },
    'custom-logo-animation': {
      title: 'Custom Logo Animation',
      subtitle: 'Animated versions of your logo for digital platforms and presentations',
      features: [
        { id: 'f1', title: 'Logo Analysis', description: 'Deep understanding of your logo\'s design elements and brand personality', icon: 'Search' },
        { id: 'f2', title: 'Creative Concepts', description: 'Multiple animation concepts that enhance your logo\'s impact', icon: 'Lightbulb' },
        { id: 'f3', title: 'Smooth Motion', description: 'Professional-grade animations with smooth, polished movements', icon: 'Zap' },
        { id: 'f4', title: 'Multiple Formats', description: 'Delivered in various formats for different use cases', icon: 'FileType' },
        { id: 'f5', title: 'Brand Consistency', description: 'Animations that maintain your brand\'s visual identity', icon: 'Layers' },
        { id: 'f6', title: 'Usage Guidelines', description: 'Clear guidelines for implementing logo animations', icon: 'BookOpen' },
      ],
      faqs: [
        {
          id: 'faq1',
          question: 'What types of logo animations do you create?',
          answer: 'We create various styles including reveal animations, morphing effects, particle systems, and kinetic typography.',
        },
        {
          id: 'faq2',
          question: 'How long are the logo animations?',
          answer: 'Logo animations typically range from 3-10 seconds, optimized for different platforms and use cases.',
        },
        {
          id: 'faq3',
          question: 'Can you animate existing logos?',
          answer: 'Yes! We can animate any existing logo design, whether it\'s vector-based or raster-based.',
        },
        {
          id: 'faq4',
          question: 'What file formats do you provide?',
          answer: 'We deliver MP4, MOV, GIF, and other formats suitable for websites, presentations, and social media.',
        },
      ],
    },
    'intro-outro': {
      title: 'Intro & Outro',
      subtitle: 'Professional video intros and outros that establish brand recognition',
      features: [
        { id: 'f1', title: 'Brand Integration', description: 'Seamlessly incorporate your logo, colors, and brand elements', icon: 'Palette' },
        { id: 'f2', title: 'Professional Quality', description: 'Broadcast-quality animations suitable for any platform', icon: 'Award' },
        { id: 'f3', title: 'Custom Music', description: 'Original music and sound design that matches your brand', icon: 'Headphones' },
        { id: 'f4', title: 'Multiple Lengths', description: 'Versions in different lengths for various content types', icon: 'Clock' },
        { id: 'f5', title: 'Easy Integration', description: 'Simple to add to your videos and presentations', icon: 'Link' },
        { id: 'f6', title: 'Consistent Branding', description: 'Maintains your brand identity across all content', icon: 'Layers' },
      ],
      faqs: [
        {
          id: 'faq1',
          question: 'What\'s the difference between intro and outro?',
          answer: 'Intros appear at the beginning of videos to establish brand recognition, while outros appear at the end with calls-to-action.',
        },
        {
          id: 'faq2',
          question: 'How long are the intro/outro animations?',
          answer: 'Intros typically range from 3-8 seconds, while outros are usually 5-10 seconds with room for additional content.',
        },
        {
          id: 'faq3',
          question: 'Can you create variations for different content types?',
          answer: 'Yes! We create variations optimized for YouTube, social media, presentations, and other content formats.',
        },
        {
          id: 'faq4',
          question: 'Do you provide editable templates?',
          answer: 'We provide both final video files and editable project files for future modifications.',
        },
      ],
    },
  };

  const service = serviceData[slug as keyof typeof serviceData];
  
  if (!service) {
    return {
      id: slug,
      slug: slug,
      title: 'Service Not Found',
      subtitle: 'This service is not available',
      packages: [],
      features: [],
      faqs: [],
    };
  }

  return {
    id: slug,
    slug: slug,
    title: service.title,
    subtitle: service.subtitle,
    packages: getPackagesByService(slug),
    features: service.features,
    faqs: service.faqs,
  };
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export const getAllServices = () => [
  {
    id: 'logo-design',
    slug: 'logo-design',
    title: 'Logo Design',
    subtitle: 'Create a lasting impression with a unique logo',
  },
  {
    id: 'branding',
    slug: 'branding',
    title: 'Brand Identity',
    subtitle: 'Build a cohesive brand that connects with your audience',
  },
  {
    id: 'print-packaging',
    slug: 'print-packaging',
    title: 'Print & Packaging Design',
    subtitle: 'Professional print materials and packaging that enhance your product appeal',
  },
  {
    id: 'motion-video',
    slug: 'motion-video',
    title: 'Motion Video',
    subtitle: 'Bring your brand to life with engaging motion graphics',
  },
  {
    id: 'reels',
    slug: 'reels',
    title: 'Reels',
    subtitle: 'Short-form video content optimized for social media platforms',
  },
  {
    id: 'custom-logo-animation',
    slug: 'custom-logo-animation',
    title: 'Custom Logo Animation',
    subtitle: 'Animated versions of your logo for digital platforms and presentations',
  },
  {
    id: 'intro-outro',
    slug: 'intro-outro',
    title: 'Intro & Outro',
    subtitle: 'Professional video intros and outros that establish brand recognition',
  },
];

export const getServiceBySlug = (slug: string) => {
  return getAllServices().find(service => service.slug === slug);
};

export const getPackagesByService = (serviceSlug: string) => {
  switch (serviceSlug) {
    case 'logo-design':
      return logoDesignPackages;
    case 'branding':
      return brandingPackages;
    case 'motion-video':
      return motionVideoPackages;
    case 'print-packaging':
      return printPackagingPackages;
    case 'reels':
      return reelsPackages;
    case 'custom-logo-animation':
      return logoAnimationPackages;
    case 'intro-outro':
      return introOutroPackages;
    default:
      return [];
  }
};
