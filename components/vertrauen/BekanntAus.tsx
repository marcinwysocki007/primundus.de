// Die Medienlogos als Vertrauenssignal — auf der Startseite seit 18.09., auf den Ortsseiten seit 24.09.,
// im Ratgeber-Kopf (Kernseiten, Länder, Themen, Ratgeber) seit 25.09. (Martin: „verwenden wir auch auf allen
// Ortsseiten etc. die Medialogos als Trust-Signal?" — bis dahin nur Startseite und Ortsseiten).
import Image from 'next/image'

// Dateien seit 29.09. (PageSpeed) in Anzeigegröße: höchstens 28 px hoch, also 84 px für dreifache Pixeldichte, im exakt
// gleichen Seitenverhältnis wie das Original (w/h unten = Original, damit die Breite auf den Bruchteil gleich bleibt).
// Vorher bis zu 1.472 px breit, zusammen 97 KB; jetzt 37 KB. SAT.1 war schon klein und bleibt.
const MEDIEN = [
  { src: '/images/media/ard-304.webp', alt: 'ARD', w: 608, h: 226 },
  { src: '/images/media/ndr-368.webp', alt: 'NDR', w: 1472, h: 972 },
  { src: '/images/media/sat1.webp', alt: 'SAT.1', w: 458, h: 142 },
  { src: '/images/media/die-welt-406.webp', alt: 'Die Welt', w: 696, h: 144 },
  { src: '/images/media/bild-der-frau-197.webp', alt: 'Bild der Frau', w: 394, h: 450 },
  { src: '/images/media/frankfurter-allgemeine-618.webp', alt: 'Frankfurter Allgemeine', w: 1236, h: 168 },
]

// Weißer Kasten, weil die Logos weiße Bildhintergründe haben (Martin 18.09.: „die Medienlogos müssen auf weißem Hintergrund sein")
// `ton`: Startseite und Ortsseiten stehen auf Papier; unter dem Ratgeber-Kopf führt der Kasten dessen Shell-Fläche
// fort, damit vor dem weißen Artikel nicht drei Töne aufeinanderfolgen (Shell → Papier → Weiß).
export function BekanntAus({ ton = 'papier' }: { ton?: 'papier' | 'shell' }) {
  return (
    <section className={`${ton === 'shell' ? 'bg-pm-shell' : 'bg-pm-paper'} px-5 pb-10 lg:pb-14`}>
      <div className="max-w-wide mx-auto rounded-[20px] bg-white px-5 py-5 shadow-lift sm:px-7 md:px-8 md:py-6">
        <p className="text-[12.5px] font-bold uppercase tracking-[0.14em] text-pm-mute">Bekannt aus</p>
        <ul className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-4 sm:gap-x-8 md:justify-between md:gap-x-6">
          {MEDIEN.map((m) => (
            <li key={m.alt} className="flex items-center">
              <Image src={m.src} alt={m.alt} width={m.w} height={m.h} className="h-5 w-auto object-contain sm:h-6 lg:h-7" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
