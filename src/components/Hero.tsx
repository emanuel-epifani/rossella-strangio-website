import Image from 'next/image'
import { homeContent } from '@/content/text'

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="container flex flex-col md:flex-row justify-center gap-12 py-10">
        {/* Colonna sinistra: Immagine */}
        <div className="flex-shrink-0 flex ">
          <Image 
            src="/images/logo-website.png"
            alt={homeContent.hero.imageAlt}
            width={200}
            height={200}
            priority
            // className="object-contain w-full max-w-md"
            className="object-contain w-52 h-52"
          />
        </div>

        {/* Colonna destra: Testo */}
        <div className="flex justify-center items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {homeContent.hero.name}
            </h1>
            <h2 className="text-xl md:text-xl mb-2">
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