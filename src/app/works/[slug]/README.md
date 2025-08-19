# Work Detail Page

This directory contains the components for displaying individual work portfolio items in detail.

## Components

### WorkDetailHero
- **Purpose**: Hero section displaying the work title, service, short description, and cover media
- **Features**: 
  - Animated background elements with floating orbs
  - Responsive grid layout (2 columns on desktop, stacked on mobile)
  - Video and image support with fallbacks
  - Animated scroll indicator
  - Smooth entrance animations with staggered delays

### WorkDetailContent
- **Purpose**: Displays detailed information about the work
- **Features**:
  - Service badge display
  - Project title and description
  - Responsive description handling (hidden on mobile, expandable)
  - Project statistics section
  - Smooth scroll-triggered animations

### WorkDetailGallery
- **Purpose**: Displays the work's gallery with media blocks
- **Features**:
  - Support for both image and video media
  - Responsive grid layouts (mobile grid vs full width)
  - Modal view for media items
  - Hover effects and smooth transitions
  - Empty state handling

### WorkNavigation
- **Purpose**: Navigation between different works
- **Features**:
  - Previous/Next work navigation
  - Responsive layout with hover effects
  - Back to all works link
  - Smooth animations and transitions

## Data Structure

The components use the following data types from `@/lib/demo-data`:

- `Work`: Main work information (id, slug, name, service, descriptions, media URLs)
- `Gallery`: Gallery data with blocks and media items
- `GalleryBlock`: Individual gallery sections with layout configuration
- `GalleryMedia`: Individual media items (images or videos)

## Responsive Behavior

- **Mobile**: Description is hidden by default, expandable via toggle
- **Tablet**: Single column layout with optimized spacing
- **Desktop**: Two-column hero layout with full description visible

## Animation Features

- **Entrance Animations**: Staggered fade-in effects with viewport detection
- **Hover Effects**: Subtle scale and color transitions
- **Background Elements**: Floating animated orbs with continuous motion
- **Scroll Indicators**: Animated scroll prompts with smooth motion

## Usage

The main page (`page.tsx`) orchestrates all components and handles data fetching:

```tsx
export default async function WorkFullPage({ params }: { params: Promise<{ slug: string }> }) {
  const work = findWorkBySlug(p.slug);
  const gallery = findGalleryByWorkId(work.id);
  const { previousWork, nextWork } = findPreviousAndNextWork(work.id);
  
  return (
    <main className="min-h-screen bg-background">
      <WorkDetailHero work={work} />
      <WorkDetailContent work={work} />
      {gallery && <WorkDetailGallery gallery={gallery} />}
      <WorkNavigation 
        currentWork={work} 
        previousWork={previousWork} 
        nextWork={nextWork} 
      />
    </main>
  );
}
```

## Styling

All components use Tailwind CSS with:
- Consistent spacing scale
- Semantic color variables
- Responsive breakpoints
- Modern design patterns
- Accessibility considerations
