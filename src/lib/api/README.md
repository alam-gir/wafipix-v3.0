# API Configuration

This project uses a configurable API layer that can easily switch between mock and real APIs.

## Current Setup

- **Mock APIs**: Used by default in both development and production
- **Real APIs**: Can be enabled when backend is ready

## How to Switch APIs

### Use Mock APIs (Current Default)
```bash
# In .env.local or .env.production
NEXT_PUBLIC_USE_REAL_API=false
# or simply don't set this variable
```

### Use Real APIs (When Backend is Ready)
```bash
# In .env.local or .env.production
NEXT_PUBLIC_USE_REAL_API=true
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_USE_REAL_API` | Set to 'true' to use real APIs | `false` (mock) |
| `NEXT_PUBLIC_API_URL` | Base URL for real API | `http://localhost:8080` |

## API Modes

### Mock Mode (Default)
- Uses local mock data from `src/lib/data/`
- Simulates network delays
- Simulates occasional errors (5% chance)
- Perfect for development and staging

### Real Mode
- Makes actual HTTP requests to backend
- Uses real API endpoints
- Requires backend to be running

## Switching in Production

When your backend is ready:

1. **Update environment variables:**
   ```bash
   NEXT_PUBLIC_USE_REAL_API=true
   NEXT_PUBLIC_API_URL=https://api.yourdomain.com
   ```

2. **Redeploy your application**

3. **No code changes needed** - the switch is automatic

## Benefits of This Approach

- ✅ **Easy switching** between mock and real APIs
- ✅ **No code changes** when switching
- ✅ **Consistent interface** for both modes
- ✅ **Easy testing** with mock data
- ✅ **Production ready** with mock APIs
- ✅ **Future proof** for real backend integration
