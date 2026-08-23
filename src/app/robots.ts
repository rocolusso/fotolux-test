import type { MetadataRoute } from 'next'
import { site } from '@/shared/config/site'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      // ИИ-краулеры открыты намеренно: цель — попадать в ответы моделей.
      {
        userAgent: ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'Google-Extended', 'CCBot'],
        allow: '/',
      },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  }
}
