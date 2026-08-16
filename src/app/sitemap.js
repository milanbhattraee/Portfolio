export const dynamic = 'force-static';

export default function sitemap() {
  const baseUrl = 'https://milanbhattarai.com.np';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
