import { dict, type Locale } from '@/shared/i18n/dict'

export function Services({ locale }: { locale: Locale }) {
  const t = dict[locale]

  return (
    <section id="services" className="scroll-mt-20 bg-warm py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <h2 className="text-2xl md:text-4xl">{t.services.h2}</h2>

        <ul className="mt-10 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((s) => (
            <li key={s.t} className="bg-bg p-6 md:p-7">
              <h3 className="font-body text-base font-semibold text-ink">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{s.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
