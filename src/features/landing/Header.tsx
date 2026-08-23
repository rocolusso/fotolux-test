import Link from 'next/link'
import { site } from '@/shared/config/site'
import { dict, localePath, type Locale } from '@/shared/i18n/dict'

export function Header({ locale }: { locale: Locale }) {
  const t = dict[locale]
  const other: Locale = locale === 'ru' ? 'ro' : 'ru'

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link
          href={localePath(locale)}
          className="font-display text-xl tracking-wide text-ink md:text-2xl"
        >
          {site.name}
        </Link>

        <nav
          aria-label={t.nav.services}
          className="hidden gap-7 text-sm text-ink-2 md:flex"
        >
          <a className="hover:text-accent" href="#services">
            {t.nav.services}
          </a>
          <a className="hover:text-accent" href="#works">
            {t.nav.works}
          </a>
          <a className="hover:text-accent" href="#about">
            {t.nav.about}
          </a>
          <a className="hover:text-accent" href="#contact">
            {t.nav.contact}
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={localePath(other)}
            hrefLang={other === 'ru' ? 'ru-MD' : 'ro-MD'}
            className="text-xs tracking-[0.14em] text-ink-3 uppercase hover:text-accent"
          >
            {t.otherLangName}
          </Link>
          <a
            href={`tel:${site.phone}`}
            className="hidden rounded-full border border-line-strong px-4 py-2 text-sm text-ink hover:border-accent hover:text-accent sm:inline-block"
          >
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  )
}
