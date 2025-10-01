// ============================================================================
// NAVBAR DATA - Navigation items and services submenu
// ============================================================================

import type { NavbarItem, SubmenuCategory } from './types';

export const navbarItems: NavbarItem[] = [
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

export const servicesSubmenu: SubmenuCategory[] = [
  {
    id: 'design-creative',
    title: 'Design & Creative',
    items: [
      { id: 'logo-design', title: 'Logo Design', href: '/services/logo-design' },
      { id: 'branding', title: 'Branding', href: '/services/branding' },
      { id: 'print-packaging', title: 'Print & Packaging Design', href: '/services/print-packaging' },
      { id: 'ui-ux', title: 'UI/UX Design', href: '/services/ui-ux' },
    ]
  },
  {
    id: 'motion-animation',
    title: 'Motion & Animation',
    items: [
      { id: 'motion-video', title: 'Motion Video', href: '/services/motion-video' },
      { id: 'reels', title: 'Reels', href: '/services/reels' },
      { id: 'custom-logo-animation', title: 'Custom Logo Animation', href: '/services/custom-logo-animation' },
      { id: 'intro-outro', title: 'Intro & Outro', href: '/services/intro-outro' },
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development',
    items: [
      { id: 'frontend', title: 'Frontend Development', href: '/services/frontend' },
      { id: 'backend', title: 'Backend Development', href: '/services/backend' },
      { id: 'fullstack', title: 'Full Stack Development', href: '/services/fullstack' },
      { id: 'ecommerce', title: 'E-commerce Solutions', href: '/services/ecommerce' },
    ]
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    items: [
      { id: 'seo', title: 'SEO Optimization', href: '/services/seo' },
      { id: 'social-media', title: 'Social Media Marketing', href: '/services/social-media' },
      { id: 'content-marketing', title: 'Content Marketing', href: '/services/content-marketing' },
      { id: 'ppc', title: 'PPC Advertising', href: '/services/ppc' },
    ]
  },
  {
    id: 'consulting',
    title: 'Consulting',
    items: [
      { id: 'strategy', title: 'Business Strategy', href: '/services/strategy' },
      { id: 'brand-consulting', title: 'Brand Consulting', href: '/services/brand-consulting' },
      { id: 'tech-consulting', title: 'Tech Consulting', href: '/services/tech-consulting' },
    ]
  }
];
