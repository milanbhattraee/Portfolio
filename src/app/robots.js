export const dynamic = 'force-static';

export default function robots() {
  const baseUrl = 'https://milanbhattarai.com.np';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
