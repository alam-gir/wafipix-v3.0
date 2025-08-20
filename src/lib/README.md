# 🚀 **Clean API Architecture - From Scratch**

## 📋 **Overview**

This is a **complete rewrite** of the API system, removing all duplication and creating a clean, maintainable structure that clearly shows what your Spring Boot backend needs to implement.

## 🏗️ **New Architecture**

```
src/lib/
├── README.md              # This documentation
├── api/                   # API-related code
│   ├── config.ts          # Single API configuration
│   ├── client.ts          # Clean HTTP client (real + mock)
│   └── index.ts           # API exports
└── data/                  # Clean data structures
    ├── works.ts           # Portfolio works data
    ├── services.ts        # Company services data
    ├── common.ts          # Common app data
    └── index.ts           # Data exports
```

## 🎯 **What This Solves**

- ❌ **Removed duplication** - No more multiple config files
- ❌ **Eliminated confusion** - Clear separation of concerns
- ❌ **Fixed maintainability** - Easy to understand and modify
- ✅ **Clear backend requirements** - Each file shows exactly what your API needs
- ✅ **Easy debugging** - Find issues quickly
- ✅ **Simple testing** - Test individual components

## 🔧 **How It Works**

### **1. Environment Detection**
```typescript
// src/lib/api/config.ts
export const isUsingMockApi = process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_API_URL;
```

- **Development + No API URL** → Uses Mock API
- **Development + API URL set** → Uses Real API
- **Production** → Always uses Real API

### **2. Single API Client**
```typescript
// src/lib/api/client.ts
export const apiClient: ApiClient = isUsingMockApi ? new MockApiClient() : new RealApiClient();
```

One client that automatically switches between mock and real API based on environment.

### **3. Clean Data Structure**
Each data file contains:
- **Demo data** that matches your types exactly
- **Helper functions** for data manipulation
- **Clear comments** showing what backend endpoints are needed

## 📱 **Usage Examples**

### **Import and Use**
```typescript
import { apiClient } from '@/lib/api';
import { useWorks, useServices } from '@/hooks/api';

// In your component
const { data, error, isLoading } = useWorks({ page: 1, limit: 12 });
```

### **Direct API Calls**
```typescript
import { apiClient } from '@/lib/api';

// Get all works
const works = await apiClient.get('/works');

// Get specific service
const service = await apiClient.get('/services/logo-design');
```

## 🎨 **Data Structure Examples**

### **Works Data** (`src/lib/data/works.ts`)
```typescript
export const works: Work[] = [
  {
    id: 'wrk-aurora-brand',
    slug: 'aurora-brand',
    name: 'Aurora Brand Identity',
    service: 'branding',
    // ... more fields
  }
];

// Helper functions
export const findWorkBySlug = (slug: string): Work | undefined => {
  return works.find(work => work.slug === slug);
};
```

### **Services Data** (`src/lib/data/services.ts`)
```typescript
export const servicePackages: ServicePackage[] = [
  {
    id: 'basic',
    name: 'Basic',
    pricing: { usd: 299, bdt: 29900 },
    features: [/* ... */],
    // ... more fields
  }
];
```

## 🔌 **Backend API Requirements**

### **Works Endpoints**
```
GET /api/works                    # List all works with pagination/filtering
GET /api/works/{slug}            # Get single work by slug
GET /api/works/{id}/gallery      # Get work gallery
GET /api/works/cards             # Get works optimized for grid display
```

### **Services Endpoints**
```
GET /api/services                 # List all available services
GET /api/services/{slug}         # Get service page data by slug
GET /api/services/packages       # Get all service packages
GET /api/services/categories     # Get service categories
```

### **Common Endpoints**
```
GET /api/common/trusted-customers  # Get trusted customer logos
GET /api/common/social-media       # Get social media links
GET /api/common/company-info       # Get company information
```

## 🧪 **Testing & Development**

### **Mock API Features**
- **Realistic delays** (200-800ms) to simulate network
- **Error simulation** (5% chance) to test error handling
- **Automatic switching** based on environment
- **Same interface** as real API

### **Development Workflow**
1. **Start development** → Mock API automatically active
2. **Set `NEXT_PUBLIC_API_URL`** → Switch to real API
3. **Test both modes** → Ensure compatibility

## 🚀 **Migration Guide**

### **Old Imports → New Imports**
```typescript
// OLD (don't use these anymore)
import { mockApiClient } from '@/lib/mock-api';
import { apiClient } from '@/lib/api-client';
import { works } from '@/lib/demo-data';

// NEW (use these)
import { apiClient } from '@/lib/api';
import { useWorks } from '@/hooks/api';
import { works } from '@/lib/data';
```

### **Updated Components**
All your existing components will work with the new system. The hooks have the same interface, just cleaner implementation.

## 🔍 **Debugging**

### **Check API Mode**
```typescript
import { isUsingMockApi, getCurrentApiUrl } from '@/lib/api';

console.log('Using Mock API:', isUsingMockApi);
console.log('API URL:', getCurrentApiUrl());
```

### **Console Logs**
The system automatically logs:
- Which API client is active
- Current API URL
- Environment information

## 📚 **File Descriptions**

### **`src/lib/api/config.ts`**
- Environment detection
- API configuration
- Helper functions

### **`src/lib/api/client.ts`**
- HTTP client interface
- Real API implementation
- Mock API implementation
- Automatic switching

### **`src/lib/data/works.ts`**
- Portfolio works data
- Gallery data
- Helper functions
- Backend endpoint documentation

### **`src/lib/data/services.ts`**
- Service packages
- Service categories
- Service page data generators
- Backend endpoint documentation

### **`src/lib/data/common.ts`**
- Trusted customers
- Social media links
- Company information
- Backend endpoint documentation

## 🎯 **Benefits**

1. **🎨 Clean Code** - Easy to read and understand
2. **🔧 Maintainable** - Simple to modify and extend
3. **🐛 Easy Debugging** - Find issues quickly
4. **📱 Clear Requirements** - Know exactly what backend needs
5. **🧪 Better Testing** - Test individual components
6. **🚀 Performance** - Optimized caching and revalidation
7. **📚 Documentation** - Self-documenting code structure

## 🚨 **Important Notes**

- **Backward Compatible** - Existing components continue to work
- **Environment Aware** - Automatically switches between mock/real API
- **Type Safe** - Full TypeScript support
- **SWR Optimized** - Built for optimal performance with SWR

## 🔮 **Future Enhancements**

- **Real-time updates** with WebSocket support
- **Advanced caching** strategies
- **Request/response interceptors**
- **Performance monitoring**
- **Error tracking integration**

---

**🎉 You now have a clean, maintainable API system that clearly shows what your Spring Boot backend needs to implement!**
