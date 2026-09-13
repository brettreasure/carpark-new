import { MetadataRoute } from 'next';

const SITE_URL = 'https://www.notbadforacarpark.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/collab',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
