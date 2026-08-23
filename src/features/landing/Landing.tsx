import { buildJsonLd } from '@/shared/seo/jsonLd'
import type { Locale } from '@/shared/i18n/dict'
import { About } from './About'
import { Contact } from './Contact'
import { Footer } from './Footer'
import { Gallery } from './Gallery'
import { Header } from './Header'
import { Hero } from './Hero'
import { Services } from './Services'

export function Landing({ locale }: { locale: Locale }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(locale)) }}
      />
      <Header locale={locale} />
      <main>
        <Hero locale={locale} />
        <Services locale={locale} />
        <Gallery locale={locale} />
        <About locale={locale} />
        <Contact locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  )
}
