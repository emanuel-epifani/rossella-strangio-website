import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-gray-100">
      <div className="container flex flex-col md:flex-row items-center gap-12">
        {/* Colonna sinistra: Immagine */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <Image 
            src="/images/Rossella Strangio.png"
            alt="Dott.ssa Rossella Strangio"
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
              Dott.ssa Rossella Strangio
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-700 mb-6">
              <span className="underline decoration-2 decoration-primary-500">Psicologa</span> Psicoterapeuta ad orientamento Cognitivo Comportamentale
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Sostegno Psicologico a <span className="bg-yellow-200 px-1 rounded">Torino e Online</span>
            </p>
          </div>
          {/*Horizontal logo hero*/}
          <div className="flex justify-end">
            <Image
                src="/images/img_1.png"
                alt="Dott.ssa Rossella Strangio"
                width={200}
                height={200}
                priority
                className="object-contain h-auto"
            />
          </div>
        </div>

      </div>
    </section>
  )
} 