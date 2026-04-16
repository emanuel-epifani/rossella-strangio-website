import Image from 'next/image'
import { homeContent } from '@/content/text'

export default function Hero() {
  return (
    <section className="bg-gray-100">
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary-800 mb-4 ">
              {homeContent.hero.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-2">
              {homeContent.hero.title} <span className="underline decoration-2 decoration-primary-500">{homeContent.hero.specialization}</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-4">
              Sostegno Psicologico a <span className="underline decoration-2 decoration-primary-500">{homeContent.hero.location}</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  )
} 