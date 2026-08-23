import { site } from '@/shared/config/site'
import { dict, type Locale } from '@/shared/i18n/dict'

export function Contact({ locale }: { locale: Locale }) {
  const t = dict[locale]
  const areaKey = locale === 'ru' ? 'ru' : 'ro'

  const rows = [
    { label: t.contact.phoneLabel, value: site.phoneDisplay, href: `tel:${site.phone}` },
    { label: t.contact.emailLabel, value: site.email, href: `mailto:${site.email}` },
    { label: t.contact.areasLabel, value: site.areas.map((a) => a[areaKey]).join(' · ') },
    { label: t.contact.hoursLabel, value: t.contact.hours },
  ]

  return (
    <section id="contact" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <h2 className="text-2xl md:text-4xl">{t.contact.h2}</h2>
        <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-ink-2">
          {t.contact.lead}
        </p>

        <dl className="mt-9 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
          {rows.map((r) => (
            <div key={r.label} className="bg-bg p-6">
              <dt className="text-[11px] tracking-[0.18em] text-ink-3 uppercase">
                {r.label}
              </dt>
              <dd className="mt-2 text-base text-ink">
                {r.href ? (
                  <a className="hover:text-accent" href={r.href}>
                    {r.value}
                  </a>
                ) : (
                  r.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
