import Image from 'next/image'
import { dict, type Locale } from '@/shared/i18n/dict'

const shots = [1, 2, 3, 4, 5, 6]

export function Gallery({ locale }: { locale: Locale }) {
  const t = dict[locale]

  return (
    <section id="works" className="scroll-mt-20 py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-5 md:px-8">
        <h2 className="text-2xl md:text-4xl">{t.works.h2}</h2>
        <p className="mt-3 max-w-[60ch] text-sm text-ink-3">{t.works.lead}</p>

        <div className="mt-9 grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
          {shots.map((n, i) => (
            <div
              key={n}
              className="relative aspect-4/5 overflow-hidden rounded-md bg-warm"
            >
              <Image
                src={`/images/work-${n}.jpg`}
                alt={`${t.works.alt} ${n}`}
                fill
                loading={i < 2 ? 'eager' : 'lazy'}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
