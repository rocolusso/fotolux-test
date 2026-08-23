import type { MetadataRoute } from 'next'
import { site } from '@/shared/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    {
      url: `${site.url}/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: { languages: { 'ru-MD': `${site.url}/`, 'ro-MD': `${site.url}/ro` } },
    },
    {
      url: `${site.url}/ro`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
      alternates: { languages: { 'ru-MD': `${site.url}/`, 'ro-MD': `${site.url}/ro` } },
    },
  ]
}
