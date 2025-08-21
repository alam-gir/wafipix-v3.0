import { Metadata } from 'next';
import { WorksPageClient } from './_components/WorksPageClient';

export const metadata: Metadata = {
  title: 'Works — Wafipix',
  description: 'Selected work across brand, product and motion.',
};

export default async function Page({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const sp = await searchParams;
  const f = typeof sp.filter === 'string' ? sp.filter : null;
  return (
      <WorksPageClient filter={f} />
  );
}
