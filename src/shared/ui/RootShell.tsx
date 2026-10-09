import type { ReactNode } from 'react'
import { Forum, Manrope } from 'next/font/google'
import Head from "next/head";

// latin-ext нужен для румынских ș и ț, cyrillic — для русского.
const forum = Forum({
  weight: '400',
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  variable: '--font-forum',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin', 'latin-ext', 'cyrillic'],
  variable: '--font-manrope',
  display: 'swap',
})

/** Общая оболочка документа. Каждая локаль подставляет свой lang. */
export function RootShell({ lang, children }: { lang: string; children: ReactNode }) {
  return (
    <html lang={lang} className={`${forum.variable} ${manrope.variable}`}>
      <Head>
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="Eq9UKbXcEKL8Yp9N27m3MA" async></script>
      </Head>
      <body>{children}</body>
    </html>
  )
}
