import type { Metadata } from 'next'
import { PflegegradSeite, pflegegradMetadata } from '@/components/vorlage/PflegegradSeite'

// Pflegegrad 4: Inhalt in lib/pflegegrad-inhalte.ts, Bau in components/vorlage/PflegegradSeite.tsx (20.09.2026).
export const metadata: Metadata = pflegegradMetadata(4)

export default function Pflegegrad4() {
  return <PflegegradSeite grad={4} />
}
