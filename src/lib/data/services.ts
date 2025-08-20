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

export const servicePackages: ServicePackage[] = [
  {
    id: 'basic',
    name: 'Basic',
    subtitle: 'Perfect for startups and small businesses',
    pricing: {
      usd: 299,
      bdt: 29900,
    },
    features: [
      { id: 'f1', text: 'Professional logo in multiple formats', highlight: false },
      { id: 'f2', text: 'Basic brand usage guidelines', highlight: false },
      { id: 'f3', text: 'All editable source files included', highlight: true },
      { id: 'f4', text: 'Up to 2 rounds of revisions', highlight: false },
    ],
    status: 'active',
    deliveryTime: '5-7 business days',
    paymentTerms: '50% upfront, 50% on delivery',
    popular: false,
  },
  {
    id: 'professional',
    name: 'Professional',
    subtitle: 'Ideal for growing businesses and teams',
    pricing: {
      usd: 599,
      bdt: 59900,
    },
    features: [
      { id: 'f1', text: 'Professional logo in multiple formats', highlight: false },
      { id: 'f2', text: 'Comprehensive brand guidelines', highlight: false },
      { id: 'f3', text: 'Business card design included', highlight: true },
      { id: 'f4', text: 'Social media profile templates', highlight: true },
      { id: 'f5', text: 'All editable source files included', highlight: false },
      { id: 'f6', text: 'Unlimited revisions until satisfaction', highlight: true },
      { id: 'f7', text: 'Priority customer support', highlight: false },
    ],
    status: 'featured',
    deliveryTime: '7-10 business days',
    paymentTerms: '50% upfront, 50% on delivery',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    subtitle: 'Complete branding solution for large organizations',
    pricing: {
      usd: 1299,
      bdt: 129900,
    },
    features: [
      { id: 'f1', text: 'Professional logo in multiple formats', highlight: false },
      { id: 'f2', text: 'Comprehensive brand guidelines', highlight: false },
      { id: 'f3', text: 'Business card design included', highlight: false },
      { id: 'f4', text: 'Social media profile templates', highlight: false },
      { id: 'f5', text: 'Custom website design and development', highlight: true },
      { id: 'f6', text: 'Brochures, flyers, and presentations', highlight: true },
      { id: 'f7', text: 'All editable source files included', highlight: false },
      { id: 'f8', text: 'Unlimited revisions until satisfaction', highlight: false },
      { id: 'f9', text: 'Priority customer support', highlight: false },
      { id: 'f10', text: 'Comprehensive brand strategy consultation', highlight: true },
      { id: 'f11', text: '3 months of ongoing support', highlight: true },
    ],
    status: 'active',
    deliveryTime: '10-15 business days',
    paymentTerms: '30% upfront, 40% at milestone, 30% on delivery',
    popular: false,
  },
];

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
    id: 'development',
    name: 'Development',
    slug: 'development',
    description: 'Web and mobile development services',
    icon: 'Code',
  },
  {
    id: 'marketing',
    name: 'Marketing',
    slug: 'marketing',
    description: 'Digital marketing and growth services',
    icon: 'TrendingUp',
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
    packages: servicePackages,
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
    id: 'motion-video',
    slug: 'motion-video',
    title: 'Motion Video',
    subtitle: 'Bring your brand to life with engaging motion graphics',
  },
];

export const getServiceBySlug = (slug: string) => {
  return getAllServices().find(service => service.slug === slug);
};

export const getPackagesByService = (serviceSlug: string) => {
  // For now, all services use the same packages
  // In the future, you might want different packages per service
  return servicePackages;
};
