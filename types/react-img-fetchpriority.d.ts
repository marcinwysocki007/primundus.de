// @types/react 18.2 kennt `fetchPriority` nur am <link>; React 18.3 im App Router rendert es auch am <img>
// (Startbild der Startseite, PageSpeed 29.09.2026).
import 'react'

declare module 'react' {
  interface ImgHTMLAttributes<T> {
    fetchPriority?: 'high' | 'low' | 'auto'
  }
}
