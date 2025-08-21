import { navigation } from '@/lib/navigation';
import { ServicePageClient } from './_components/ServicePageClient';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  
  return <ServicePageClient slug={slug} />;
}

// Generate static params for all services
export function generateStaticParams() {
  const slugs : Array<string> = [];
  
  navigation.forEach(nav => {
    if(nav.hasSubmenu){
      nav.submenu?.forEach(sub => {
        slugs.push(sub.id)
      })
    }
  });

  return slugs.map((slug) => ({
    slug,
  }));
}
