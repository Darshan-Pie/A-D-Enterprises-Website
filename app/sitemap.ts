import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap { const base=process.env.NEXT_PUBLIC_SITE_URL || 'https://a-d-enterprise-landing-page.vercel.app'; return ['', '/about', '/products', '/quality', '/infrastructure', '/contact'].map(path=>({url:`${base}${path}`,lastModified:new Date()})); }
