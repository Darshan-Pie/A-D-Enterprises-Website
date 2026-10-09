import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/about', '/products', '/quality', '/infrastructure', '/contact'].map((path) => ({
    url: new URL(path || '/', siteUrl).toString(),
    lastModified: new Date(),
  }));
}
