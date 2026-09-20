import type { Metadata } from 'next'
import { PflegegradSeite, pflegegradMetadata } from '@/components/vorlage/PflegegradSeite'

// Pflegegrad 5: Inhalt in lib/pflegegrad-inhalte.ts, Bau in components/vorlage/PflegegradSeite.tsx (20.09.2026).
export const metadata: Metadata = pflegegradMetadata(5)

export default function Pflegegrad5() {
  return <PflegegradSeite grad={5} />
}
