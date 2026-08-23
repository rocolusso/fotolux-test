import type { ReactNode } from 'react'
import { RootShell } from '@/shared/ui/RootShell'
import '../globals.css'

export default function RuRootLayout({ children }: { children: ReactNode }) {
  return <RootShell lang="ru-MD">{children}</RootShell>
}
