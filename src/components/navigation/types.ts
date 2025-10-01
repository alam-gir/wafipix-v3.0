// ============================================================================
// NAVBAR TYPES - Clean and simple types
// ============================================================================

export interface NavbarItem {
  id: string;
  title: string;
  href: string;
  hasSubmenu?: boolean;
}

export interface SubmenuItem {
  id: string;
  title: string;
  href: string;
}

export interface SubmenuCategory {
  id: string;
  title: string;
  items: SubmenuItem[];
}

export interface NavbarProps {
  className?: string;
}
