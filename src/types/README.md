# Types Structure

This directory contains all TypeScript type definitions organized by feature for better maintainability and API integration.

## 📁 Directory Structure

```
src/types/
├── index.ts          # Main export file - import all types from here
├── common.ts         # Shared/common types used across features
├── works.ts          # Works-related types (portfolio, gallery, etc.)
├── services.ts       # Services-related types (packages, pricing, etc.)
└── README.md         # This file
```

## 🚀 Usage

### Import All Types
```typescript
import type { Work, ServicePackage, TrustedCustomer } from '@/types';
```

### Import Specific Types
```typescript
import type { Work, Gallery } from '@/types/works';
import type { ServicePackage } from '@/types/services';
import type { ApiResponse } from '@/types/common';
```

## 🔧 Type Categories

### Common Types (`common.ts`)
- **Base Types**: `ApiResponse<T>`, `PaginatedResponse<T>`, `ApiError`
- **Shared Types**: `TrustedCustomer`, `SocialMediaLink`, `MediaAsset`
- **Utility Types**: `LoadingState`, `BaseFilter`, `SeoMetadata`
- **Contact Types**: `ContactFormData`, `ContactFormResponse`

### Works Types (`works.ts`)
- **Core Types**: `Work`, `WorkAsCard`, `Gallery`, `GalleryBlock`
- **Filter Types**: `WorkFilter`, `WorkCategory`, `WorkService`, `WorksFilters`
- **Navigation Types**: `WorkNavigation`
- **API Response Types**: `WorksResponse`, `GalleryResponse`, `WorksAsCardsResponse`

### Services Types (`services.ts`)
- **Core Types**: `ServicePageData`, `ServicePackage`, `PackageFeature`
- **Pricing Types**: `PackagePricing`
- **Category Types**: `ServiceCategory`
- **API Response Types**: `ServicePageResponse`, `ServicePackagesResponse`

## 🌐 API Integration

### Response Wrapper
All API responses follow this structure:
```typescript
interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
  timestamp: string;
}
```

### Pagination
For paginated responses:
```typescript
interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}
```

### Error Handling
```typescript
interface ApiError {
  message: string;
  code: string;
  status: number;
  details?: Record<string, any>;
}
```

## 📱 Component Usage

### Works Component
```typescript
import { useWorksAsCards } from '@/hooks/useWorks';

export default function WorksGrid() {
  const { data, error, isLoading } = useWorksAsCards();
  
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  
  return (
    <div>
      {data?.data?.map(work => (
        <WorkCard key={work.id} work={work} />
      ))}
    </div>
  );
}
```

### Services Component
```typescript
import { useServicePage } from '@/hooks/useServices';

export default function ServicePage({ slug }: { slug: string }) {
  const { data, error, isLoading } = useServicePage(slug);
  
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  
  const service = data?.data;
  if (!service) return <NotFound />;
  
  return (
    <div>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      {/* ... rest of component */}
    </div>
  );
}
```

## 🔄 Migration from Demo Data

### Before (Mixed Types & Data)
```typescript
// Old way - types mixed with data
import { works, Work } from '@/lib/demo-data';
```

### After (Clean Separation)
```typescript
// New way - clean separation
import type { Work } from '@/types';
import { useWorksAsCards } from '@/hooks/useWorks';

export default function WorksPage() {
  const { data, error, isLoading } = useWorksAsCards();
  const works = data?.data || [];
  
  // ... component logic
}
```

## 🎯 Benefits

1. **Clean Separation**: Types are separate from data
2. **Better IntelliSense**: Full TypeScript support
3. **API Ready**: Types match your Spring Boot API structure
4. **Maintainable**: Easy to update and extend
5. **Reusable**: Types can be shared across components
6. **Performance**: SWR hooks with smart caching
7. **Error Handling**: Built-in error handling and retry logic

## 🔮 Future Enhancements

- Add validation schemas (Zod) for runtime type checking
- Implement optimistic updates for better UX
- Add real-time updates with WebSocket support
- Implement offline support with service workers
- Add analytics and performance monitoring

## 📚 Related Files

- **Hooks**: `src/hooks/` - SWR hooks for data fetching
- **API Client**: `src/lib/api-client.ts` - HTTP client with error handling
- **Demo Data**: `src/lib/demo-data-clean.ts` - Clean demo data (no types)
- **Constants**: `src/lib/constants.ts` - App constants and configuration

