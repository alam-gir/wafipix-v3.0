// ============================================================================
// NAVBAR EXPORTS - Clean component exports
// ============================================================================

export { default as Navbar } from './Navbar';
export { default as DesktopNavbar } from './desktop/DesktopNavbar';
export { default as MobileNavbar } from './mobile/MobileNavbar';
export { default as NavbarLogo } from './NavbarLogo';
export { default as NavbarNavigation } from './NavbarNavigation';
export { default as NavbarAction } from './NavbarAction';

// Data exports
export { navbarItems, servicesSubmenu } from './data';

// Type exports
export type { NavbarItem, SubmenuItem, SubmenuCategory, NavbarProps } from './types';
