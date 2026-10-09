import type { Metadata } from 'next';
import { company } from '@/lib/content';

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || company.website;

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const canonical = new URL(path, siteUrl).toString();

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} | A.D. Enterprises`,
      description,
      url: canonical,
      siteName: 'A.D. Enterprises',
      type: 'website',
    },
  };
}
