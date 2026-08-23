import { site } from '@/shared/config/site'
import { dict, type Locale } from '@/shared/i18n/dict'

export function Footer({ locale }: { locale: Locale }) {
  const t = dict[locale]
  const links = Object.entries(site.social).filter(([, v]) => v)

  return (
    <footer className="bg-deep py-10 text-white/70">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-4 px-5 text-sm md:flex-row md:items-center md:justify-between md:px-8">
        <p>
          <span className="font-display text-base text-white">{site.name}</span>
          {' — '}
          {t.footer.dev}
        </p>

        {links.length > 0 && (
          <nav className="flex gap-5">
            {links.map(([k, v]) => (
              <a
                key={k}
                href={v}
                rel="noopener noreferrer"
                target="_blank"
                className="hover:text-white"
              >
                {k}
              </a>
            ))}
          </nav>
        )}

        <p className="text-white/50">
          © {new Date().getFullYear()} {site.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
