import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: '24h-Pflege Kostenrechner | Primundus',
  description: 'Kosten für 24h-Pflege sofort berechnen — persönliches Angebot mit Pflegegeld, Entlastungsbudget und individuellem Eigenanteil.',
  alternates: { canonical: 'https://primundus.de/kostenrechner/' },
}

export default function Kostenrechner() {
  redirect('https://kostenrechner.primundus.de')
}
