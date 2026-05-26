import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: '24h-Pflegekosten berechnen | Primundus',
  description: 'Kosten für 24h-Pflege sofort berechnen — persönliches Angebot mit Pflegegeld, Entlastungsbudget und individuellem Eigenanteil.',
  alternates: { canonical: 'https://primundus.de/eigenanteil-rechner/' },
}

export default function EigenanteilRechner() {
  redirect('https://kostenrechner.primundus.de')
}
