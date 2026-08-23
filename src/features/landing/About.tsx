import Image from 'next/image'
import { site } from '@/shared/config/site'
import { dict, type Locale } from '@/shared/i18n/dict'

export function About({ locale }: { locale: Locale }) {
  const t = dict[locale]
  const areaKey = locale === 'ru' ? 'ru' : 'ro'

  return (
    <section id="about" className="scroll-mt-20 bg-warm py-16 md:py-24">
      <div className="mx-auto grid max-w-[1200px] items-start gap-10 px-5 md:grid-cols-2 md:gap-14 md:px-8">
        <div className="relative aspect-4/3 overflow-hidden rounded-lg bg-bg">
          <Image
            src="/images/about.jpg"
            alt={site.name}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-2xl md:text-4xl">{t.about.h2}</h2>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-2 md:text-base">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p className="text-ink-3">{t.about.p3}</p>
          </div>

          <p className="mt-7 text-[11px] tracking-[0.18em] text-ink-3 uppercase">
            {t.about.areasLabel}
          </p>
          <p className="mt-2 text-sm text-ink">
            {site.areas.map((a) => a[areaKey]).join(' · ')}
          </p>
        </div>
      </div>
    </section>
  )
}
