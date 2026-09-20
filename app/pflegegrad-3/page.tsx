import type { Metadata } from 'next'
import { PflegegradSeite, pflegegradMetadata } from '@/components/vorlage/PflegegradSeite'

// Pflegegrad 3: Inhalt in lib/pflegegrad-inhalte.ts, Bau in components/vorlage/PflegegradSeite.tsx (20.09.2026).
export const metadata: Metadata = pflegegradMetadata(3)

export default function Pflegegrad3() {
  return <PflegegradSeite grad={3} />
}
