import type { Metadata } from 'next'
import { Landing } from '@/features/landing/Landing'
import { site } from '@/shared/config/site'
import { dict } from '@/shared/i18n/dict'

const t = dict.ro

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: t.meta.title,
  description: t.meta.description,
  alternates: {
    canonical: '/ro',
    languages: { 'ru-MD': '/', 'ro-MD': '/ro', 'x-default': '/' },
  },
  openGraph: {
    type: 'website',
    locale: 'ro_MD',
    url: '/ro',
    siteName: site.name,
    title: t.meta.title,
    description: t.meta.description,
    images: [{ url: '/images/og.jpg', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
}

export default function Page() {
  return <Landing locale="ro" />
}
