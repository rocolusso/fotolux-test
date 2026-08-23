import type { ReactNode } from 'react'
import { RootShell } from '@/shared/ui/RootShell'
import '../globals.css'

export default function RoRootLayout({ children }: { children: ReactNode }) {
  return <RootShell lang="ro-MD">{children}</RootShell>
}
