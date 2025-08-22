# Docker Setup for Wafipix

This project uses Docker for production deployment with a simplified setup.

## Files

- `Dockerfile` - Multi-stage production build
- `docker-compose.yml` - Production services orchestration
- `.dockerignore` - Optimized build context
- `env.production` - Environment variables template

## Quick Start

### 1. Set up environment variables

Copy the environment template and fill in your values:

```bash
cp env.production .env.production
# Edit .env.production with your actual values
```

### 2. Build and run the application

```bash
# Build and start just the Next.js app
docker-compose up -d wafipix-app

# Or build and start everything (including nginx if you have the config)
docker-compose up -d
```

### 3. Access your application

- **Direct access**: http://localhost:3000
- **With nginx** (if configured): http://localhost:80

## Services

### wafipix-app
- **Port**: 3000
- **Description**: Main Next.js application
- **Health check**: Available at `/api/health`

### nginx (optional)
- **Ports**: 80, 443
- **Profile**: `with-nginx`
- **Description**: Reverse proxy for production
- **Usage**: `docker-compose --profile with-nginx up -d`

## Commands

```bash
# Build and start
docker-compose up -d

# View logs
docker-compose logs -f wafipix-app

# Stop services
docker-compose down

# Rebuild and restart
docker-compose up -d --build

# Run with nginx
docker-compose --profile with-nginx up -d

# Clean up everything
docker-compose down -v --remove-orphans
```

## Environment Variables

Required environment variables (set in `.env.production`):

- `NEXT_PUBLIC_META_PIXEL_ID` - Meta Pixel ID for analytics
- `GMAIL_USER` - Gmail address for email service
- `GMAIL_APP_PASSWORD` - Gmail app password
- `CONTACT_EMAIL` - Contact email address
- `NEXT_PUBLIC_APP_URL` - Your production domain

## Production Considerations

1. **SSL/TLS**: Configure nginx with SSL certificates
2. **Environment**: Use proper production environment variables
3. **Monitoring**: Set up health checks and logging
4. **Backup**: Configure volume backups for logs
5. **Security**: Run containers as non-root users (already configured)

## Troubleshooting

### Build issues
```bash
# Clean build
docker-compose build --no-cache

# Check build context
docker-compose config
```

### Runtime issues
```bash
# Check container status
docker-compose ps

# View logs
docker-compose logs wafipix-app

# Access container shell
docker-compose exec wafipix-app sh
```

### Port conflicts
If ports 3000, 80, or 443 are already in use, modify the port mappings in `docker-compose.yml`.
