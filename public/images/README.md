# Images Folder

This folder contains local images for the Wafipix application.

## How to Add Images

1. **Place your images in this folder** (e.g., `hero-bg.jpg`, `team-photo.png`)
2. **Use them in your components** like this:

```tsx
import OptimizedImage from '@/components/ui/OptimizedImage';

<OptimizedImage
  src="/images/hero-bg.jpg"
  alt="Hero background"
  width={1920}
  height={1080}
  className="rounded-lg"
/>
```

## Recommended Image Sizes

- **Hero Images**: 1920x1080px
- **Card Images**: 400x300px
- **Avatar Images**: 200x200px
- **Thumbnail Images**: 300x200px

## Image Formats

- **JPG**: For photographs and complex images
- **PNG**: For images with transparency
- **WebP**: For better compression (Next.js will automatically convert)
- **AVIF**: For modern browsers (Next.js will automatically convert)

## External Images

For external images, make sure the domain is configured in `next.config.ts`:

```tsx
// next.config.ts
images: {
  remotePatterns: [
    new URL('https://your-domain.com/**'),
    new URL('https://another-domain.com/images/**'),
  ],
},
```

## Performance Tips

1. **Use appropriate sizes** - don't load 4K images for thumbnails
2. **Enable priority loading** for above-the-fold images
3. **Use blur placeholders** for better UX
4. **Optimize images** before adding them to the project 