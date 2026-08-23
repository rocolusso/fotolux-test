import { site } from '@/shared/config/site'
import type { Locale } from '@/shared/i18n/dict'
import { dict } from '@/shared/i18n/dict'

/**
 * ProfessionalService без address — это service-area business.
 * Адрес скрыт по правилам Google, поэтому в разметке его нет,
 * зато есть areaServed: он совпадает с зонами в карточке GBP.
 */
export function buildJsonLd(locale: Locale) {
  const t = dict[locale]
  const areaKey = locale === 'ru' ? 'ru' : 'ro'

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${site.url}/#business`,
        name: site.name,
        description: t.meta.description,
        url: site.url,
        telephone: site.phone,
        email: site.email,
        foundingDate: String(site.foundedYear),
        image: `${site.url}/images/og.jpg`,
        priceRange: '$$',
        areaServed: site.areas.map((a) => ({ '@type': 'City', name: a[areaKey] })),
        knowsLanguage: ['ru', 'ro'],
        sameAs: Object.values(site.social).filter(Boolean),
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: t.htmlLang,
        publisher: { '@id': `${site.url}/#business` },
      },
    ],
  }
}
