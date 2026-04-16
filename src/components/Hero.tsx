import Image from 'next/image'
import { homeContent } from '@/content/text'

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="container flex flex-col md:flex-row items-center gap-12">
        {/* Colonna sinistra: Immagine */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <Image 
            src="/images/Rossella Strangio.png"
            alt={homeContent.hero.imageAlt}
            width={400}
            height={400}
            priority
            className="object-contain w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
          />
        </div>

        {/* Colonna destra: Testo */}
        <div className="flex-1 flex flex-col md:text-left">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {homeContent.hero.name}
            </h1>
            <h2 className="text-xl md:text-2xl mb-2">
              {homeContent.hero.title} <span className="underline decoration-2 decoration-primary font-bold">{homeContent.hero.specialization}</span>
            </h2>
            <p className="text-lg md:text-xl mb-4">
              Sostegno Psicologico a <span className="underline decoration-2 decoration-primary font-bold">{homeContent.hero.location}</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
} 