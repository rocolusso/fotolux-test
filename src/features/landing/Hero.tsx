import Image from 'next/image'
import { site } from '@/shared/config/site'
import { dict, type Locale } from '@/shared/i18n/dict'

export function Hero({ locale }: { locale: Locale }) {
  const t = dict[locale]

  return (
    <section className="relative isolate flex min-h-[78svh] items-end overflow-hidden md:min-h-[70vh]">
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/45 via-40% to-black/10"
      />

      <div className="mx-auto w-full max-w-[1200px] px-5 pb-14 pt-24 md:px-8 md:pb-20">
        <p className="mb-4 text-[11px] tracking-[0.2em] text-white/85 uppercase md:text-xs">
          {t.hero.eyebrow}
        </p>
        <h1 className="max-w-[18ch] text-3xl leading-[1.12] text-white md:text-5xl lg:text-[3.5rem]">
          {t.hero.h1}
        </h1>
        <p className="mt-5 max-w-[62ch] text-[15px] leading-relaxed text-white/90 md:text-[17px]">
          {t.hero.lead}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#contact"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition hover:bg-accent-soft"
          >
            {t.hero.cta}
          </a>
          <a
            href={`tel:${site.phone}`}
            className="rounded-full border border-white/60 px-6 py-3 text-sm text-white transition hover:bg-white/10"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  )
}
