# Error Page Components

This directory contains reusable components for creating beautiful, animated error pages and loading states that match the Wafipix design system.

## Components Overview

### Core Components

#### `AnimatedBackground`
A reusable animated background component with floating shapes and grid patterns.

```tsx
import { AnimatedBackground } from "@/components/ui";

<AnimatedBackground className="custom-class" />
```

#### `AnimatedIcon`
An animated icon component with glow effects and hover animations.

```tsx
import { AnimatedIcon } from "@/components/ui";
import { Search } from "lucide-react";

<AnimatedIcon 
  icon={Search} 
  size={80} 
  delay={0.2}
  className="custom-class"
/>
```

#### `ErrorPageLayout`
A layout wrapper for error pages with consistent styling and animations.

```tsx
import { ErrorPageLayout } from "@/components/ui";

<ErrorPageLayout>
  {/* Your error page content */}
</ErrorPageLayout>
```

#### `ErrorPageActions`
A component for navigation buttons (back, home, refresh) with consistent styling.

```tsx
import { ErrorPageActions } from "@/components/ui";

<ErrorPageActions 
  showBackButton={true}
  showHomeButton={true}
  showRefreshButton={false}
  onBack={() => router.back()}
  onRefresh={() => window.location.reload()}
/>
```

#### `ComingSoonPage`
A complete coming soon page component with customizable content.

```tsx
import { ComingSoonPage } from "@/components/ui";

<ComingSoonPage
  pageName="Our Services"
  description="We're building an amazing showcase of our digital services."
  estimatedDate="Q1 2024"
/>
```

## Pre-built Pages

### 404 Not Found (`app/not-found.tsx`)
- Creative 404 page with interactive elements
- Navigation options (back, home)
- Fun messaging and helpful suggestions

### Error Page (`app/error.tsx`)
- Handles application errors gracefully
- Shows error details in development mode
- Provides refresh and navigation options
- Includes error reporting integration

### Loading Page (`app/loading.tsx`)
- Beautiful loading animation with progress indicators
- Floating particles and smooth transitions
- Loading steps visualization
- Engaging user experience

## Usage Examples

### Creating a Custom Error Page

```tsx
import { ErrorPageLayout, AnimatedIcon, ErrorPageActions } from "@/components/ui";
import { AlertTriangle } from "lucide-react";

export default function CustomErrorPage() {
  return (
    <ErrorPageLayout>
      <div className="text-center">
        <AnimatedIcon icon={AlertTriangle} size={80} />
        <h1 className="text-4xl font-bold text-gray-900">
          Custom Error Message
        </h1>
        <ErrorPageActions 
          showBackButton={true}
          showHomeButton={true}
        />
      </div>
    </ErrorPageLayout>
  );
}
```

### Using Coming Soon for Unimplemented Pages

```tsx
import { ComingSoonPage } from "@/components/ui";

export default function BlogPage() {
  return (
    <ComingSoonPage
      pageName="Our Blog"
      description="We're creating amazing content to share our insights and experiences."
      estimatedDate="February 2024"
    />
  );
}
```

## Design System Integration

All components follow the Wafipix design system:

- **Colors**: Uses the established color palette (purple, blue, gray gradients)
- **Typography**: Consistent with the site's font hierarchy
- **Spacing**: Follows the established spacing scale
- **Animations**: Smooth Framer Motion animations with consistent timing
- **Responsive**: Mobile-first design with proper breakpoints

## Customization

### Styling
All components accept `className` props for custom styling:

```tsx
<ErrorPageLayout className="bg-custom-gradient">
  {/* Content */}
</ErrorPageLayout>
```

### Animation Timing
Components use consistent animation delays and durations that can be customized:

```tsx
<AnimatedIcon 
  icon={Search} 
  delay={0.5} // Custom delay
/>
```

### Content Customization
The `ComingSoonPage` component is highly customizable:

```tsx
<ComingSoonPage
  pageName="Custom Page Name"
  description="Custom description text"
  estimatedDate="Custom date"
/>
```

## Best Practices

1. **Consistency**: Use these components for all error states to maintain design consistency
2. **Accessibility**: All components include proper ARIA labels and keyboard navigation
3. **Performance**: Animations are optimized and don't impact page performance
4. **User Experience**: Provide clear navigation options and helpful messaging
5. **Error Handling**: Always include proper error boundaries and fallbacks

## File Structure

```
app/components/ui/
├── AnimatedBackground.tsx      # Animated background component
├── AnimatedIcon.tsx           # Animated icon component
├── ErrorPageLayout.tsx        # Layout wrapper for error pages
├── ErrorPageActions.tsx       # Navigation buttons component
├── ComingSoonPage.tsx         # Complete coming soon page
├── index.ts                   # Component exports
└── README.md                  # This documentation
```

## Dependencies

- **Framer Motion**: For smooth animations
- **Lucide React**: For consistent iconography
- **Next.js**: For routing and navigation
- **Tailwind CSS**: For styling and responsive design
