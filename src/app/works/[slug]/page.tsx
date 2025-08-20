import { WorkDetailPageClient } from './_components/WorkDetailPageClient';

interface WorkDetailPageProps {
  params: {
    slug: string;
  };
}

export default function WorkDetailPage({ params }: WorkDetailPageProps) {
  return <WorkDetailPageClient slug={params.slug} />;
}


