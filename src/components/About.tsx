import Link from 'next/link'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Immagine */}
          <figure className="flex-1 lg:max-w-xs">
            <Image
              src="/images/chi-sono.PNG"
              alt="Dott.ssa Rossella Strangio"
              width={200}
              height={200}
              className="w-full max-w-[200px] shadow-lg mx-auto lg:mx-0"
              priority
            />
          </figure>
          
          {/* Testo */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Benvenuti nel mio spazio
            </h3>
            <p className="text-lg leading-relaxed mb-5">
              La vita a volte ti mette di fronte a sfide difficili – ma non devi affrontarle da solo.
              Sono una psicologa, <strong>specializzata nel supporto di adulti e coppie</strong>,
              e ti offro uno <strong>spazio sicuro, accogliente e senza giudizio</strong> per aiutarti
              a trovare la serenità che meriti.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Insieme useremo <strong>strategie pratiche e scientificamente provate</strong> per
              aiutarti a ritrovare equilibrio e serenità.
            </p>
            <Link 
              href="/chi-sono" 
              className="inline-block text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors"
            >
              Scopri di più sulla mia formazione
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 