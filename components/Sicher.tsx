'use client'

import { Component, type ErrorInfo, type ReactNode } from 'react'

// Fehlergrenze für Client-Bausteine (20.09.2026). Ohne sie ersetzt Next.js bei jedem Laufzeitfehler die ganze Seite durch
// „Application error: a client-side exception has occurred", ohne Titel und ohne Canonical. Google hatte 31 Seiten (darunter
// /kosten) genau so gesehen und als Duplikate fremder Next.js-Seiten (747live.bet, afpintegra.pe) eingestuft. Fällt ein
// Baustein aus, bleibt jetzt der Rest der Seite stehen; der Fehler landet in der Konsole.
export class Sicher extends Component<{ children: ReactNode; fallback?: ReactNode; name?: string }, { fehler: boolean }> {
  state = { fehler: false }

  static getDerivedStateFromError() {
    return { fehler: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(`Baustein ${this.props.name ?? 'unbekannt'} ausgefallen:`, error, info.componentStack)
  }

  render() {
    return this.state.fehler ? this.props.fallback ?? null : this.props.children
  }
}
