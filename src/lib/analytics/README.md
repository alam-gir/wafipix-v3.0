# Meta Pixel Analytics Implementation

This directory contains the comprehensive Meta Pixel analytics implementation for the Wafipix website.

## Overview

The Meta Pixel implementation provides comprehensive event tracking for:
- Page views
- Contact form submissions
- Package selections
- Service interactions
- Portfolio/work views
- Navigation clicks
- Form interactions

## Architecture

### Core Components

1. **`meta-pixel.ts`** - Main Meta Pixel library with comprehensive event tracking
2. **`config.ts`** - Configuration management and environment validation
3. **`MetaPixelProvider.tsx`** - React context provider for Meta Pixel
4. **`useMetaPixelTracking.ts`** - Custom hook for easy event tracking
5. **`PageViewTracker.tsx`** - Component for automatic page view tracking

### Event Types

#### 1. Page Views (`PageView`)
- **Automatic**: Tracks every page load
- **Custom data**: Page title, type, category, content information
- **Usage**: Automatically included in all pages via `PageViewTracker`

#### 2. Contact Form Events (`Lead`)
- **Trigger**: Form submission
- **Custom data**: Form fields, submission status
- **Usage**: Automatically tracked in `ContactForm` component

#### 3. Package Selection (`InitiateCheckout`)
- **Trigger**: "Get Started" button clicks on package cards
- **Custom data**: Package details, pricing, features
- **Usage**: Automatically tracked in `PackageCard` component

#### 4. Service Views (`ViewContent`)
- **Trigger**: Service page visits
- **Custom data**: Service name, category, features
- **Usage**: Automatically tracked in service pages

#### 5. Portfolio Views (`ViewContent`)
- **Trigger**: Work/portfolio page visits
- **Custom data**: Work title, category, technologies
- **Usage**: Automatically tracked in works pages

#### 6. Navigation Events (`ViewContent`)
- **Trigger**: Navigation link clicks
- **Custom data**: Navigation item, category, action
- **Usage**: Automatically tracked for main navigation

#### 7. Form Interactions (`Lead`/`CompleteRegistration`)
- **Trigger**: Form interactions (start/completion)
- **Custom data**: Form details, fields, status
- **Usage**: Automatically tracked in forms

## Setup Instructions

### 1. Environment Configuration

Add your Meta Pixel ID to `.env.local`:

```bash
NEXT_PUBLIC_META_PIXEL_ID=your_meta_pixel_id_here
```

### 2. Get Your Meta Pixel ID

1. Go to [Facebook Business Manager](https://business.facebook.com/settings/pixels)
2. Create a new pixel or use existing one
3. Copy the 15-digit pixel ID
4. Add it to your environment variables

### 3. Verify Installation

The Meta Pixel is automatically initialized when the app loads. Check browser console for:
- `[Meta Pixel] Meta Pixel initialized successfully`
- `[Meta Pixel] Event tracked: [event details]`

## Usage Examples

### Basic Event Tracking

```typescript
import { useMetaPixelTracking } from '@/hooks/useMetaPixelTracking';

function MyComponent() {
  const { trackCustomEvent } = useMetaPixelTracking();
  
  const handleCustomAction = () => {
    trackCustomEvent({
      event_name: 'CustomEvent',
      custom_data: {
        content_name: 'Custom Action',
        content_category: 'User Interaction',
        value: 100,
        currency: 'USD'
      }
    });
  };
  
  return <button onClick={handleCustomAction}>Custom Action</button>;
}
```

### Page View Tracking

```typescript
import PageViewTracker from '@/components/analytics/PageViewTracker';

export default function MyPage() {
  return (
    <>
      <PageViewTracker 
        pageTitle="My Page Title"
        pageType="custom"
        contentName="Custom Page"
        contentCategory="Special Content"
      />
      {/* Your page content */}
    </>
  );
}
```

### Contact Form Tracking

```typescript
import { useMetaPixelTracking } from '@/hooks/useMetaPixelTracking';

function ContactForm() {
  const { trackContactSubmission } = useMetaPixelTracking();
  
  const handleSubmit = async (formData) => {
    // Your form submission logic
    const result = await submitForm(formData);
    
    if (result.success) {
      // Track successful submission
      trackContactSubmission(formData);
    }
  };
}
```

## Automatic Tracking

The implementation includes automatic tracking for:

### Forms
- Form submissions are automatically tracked
- Form interactions (start/completion) are tracked
- Field information is captured

### Navigation
- Main navigation clicks are tracked
- CTA button clicks are tracked
- Link interactions are monitored

### Package Interactions
- Package card interactions are tracked
- "Get Started" button clicks are tracked
- Package details are captured

### Page Views
- All page loads are automatically tracked
- Page metadata is captured
- Custom page information can be added

## Customization

### Adding New Event Types

1. **Define interface** in `meta-pixel.ts`:
```typescript
export interface CustomEventData extends BaseEventData {
  event_name: 'CustomEvent';
  custom_data: {
    // Your custom data fields
  };
}
```

2. **Add to union type**:
```typescript
export type MetaPixelEventData = 
  | ContactEventData 
  | PageViewEventData 
  | CustomEventData; // Add here
```

3. **Add tracking method**:
```typescript
public trackCustomEvent(data: CustomEventData): void {
  // Implementation
}
```

### Modifying Event Data

Override default event data by passing custom data:

```typescript
trackPageView({
  custom_data: {
    page_title: 'Custom Title',
    page_category: 'Custom Category'
  }
});
```

## Debugging

### Development Mode

In development, Meta Pixel logs all events to console:
- `[Meta Pixel] Meta Pixel initialized successfully`
- `[Meta Pixel] Event tracked: [event details]`
- `[Meta Pixel] Failed to track event: [error]`

### Production Mode

In production, logging is disabled for performance. Use Facebook Events Manager to monitor events.

## Best Practices

### 1. Event Naming
- Use consistent, descriptive event names
- Follow Facebook's standard event names when possible
- Use camelCase for custom event names

### 2. Data Structure
- Keep custom data consistent across similar events
- Use appropriate data types (strings, numbers, arrays)
- Include relevant identifiers for tracking

### 3. Performance
- Events are queued if Meta Pixel isn't loaded
- Automatic tracking is optimized for performance
- Minimal impact on page load times

### 4. Privacy
- No personally identifiable information is sent
- User data is hashed when required
- Compliant with privacy regulations

## Troubleshooting

### Common Issues

1. **Meta Pixel not loading**
   - Check environment variable is set
   - Verify pixel ID format (15 digits)
   - Check browser console for errors

2. **Events not tracking**
   - Ensure Meta Pixel is initialized
   - Check event data format
   - Verify Facebook Events Manager setup

3. **Performance issues**
   - Disable debug mode in production
   - Check for excessive event tracking
   - Monitor bundle size impact

### Debug Commands

```typescript
// Check if Meta Pixel is initialized
const instance = getMetaPixel();
console.log('Initialized:', instance?.getInitialized());
console.log('Pixel ID:', instance?.getPixelId());

// Manually track event
trackCustomEvent({
  event_name: 'TestEvent',
  custom_data: { test: true }
});
```

## Facebook Events Manager

### Viewing Events

1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager2)
2. Select your pixel
3. View real-time events
4. Monitor event performance

### Standard Events

The implementation tracks these Facebook standard events:
- `PageView` - Page loads
- `Lead` - Form submissions, contact interactions
- `ViewContent` - Service/portfolio views
- `InitiateCheckout` - Package selections
- `CompleteRegistration` - Form completions

### Custom Events

Custom events can be added for specific business needs:
- User interactions
- Feature usage
- Business-specific actions

## Support

For issues or questions:
1. Check browser console for error messages
2. Verify environment configuration
3. Test with Facebook Events Manager
4. Review event data format

## Future Enhancements

Potential improvements:
- Conversion API integration
- Advanced user identification
- Custom audience building
- Enhanced event validation
- Performance optimization
- A/B testing integration
