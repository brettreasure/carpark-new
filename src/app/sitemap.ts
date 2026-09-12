import { MetadataRoute } from 'next';
import { SEASON_CONFIRMED } from '@/lib/show-config';

const SITE_URL = 'https://www.notbadforacarpark.com';

const ROUTES = ['', '/about', '/contribute', '/musical', '/downloads', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = ROUTES.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  if (SEASON_CONFIRMED) {
    entries.push({ url: `${SITE_URL}/show`, lastModified: new Date() });
  }

  return entries;
}
