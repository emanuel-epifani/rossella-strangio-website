import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="pt-10 bg-white">
      <div className="container">

        
        <article className="flex flex-col items-center gap-8 text-center">
          {/* Profile and intro */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-12">
            <figure className="flex-1 lg:max-w-sm">
              <Image
                src="/images/chi-sono.PNG"
                alt="Dott.ssa Rossella Strangio, psicologa specializzata in terapia per ansia e depressione nel suo studio professionale a Torino"
                width={300}
                height={300}
                className="rounded-full w-full max-w-[300px] shadow-lg"
                priority
              />
            </figure>
            
            <div className="flex-1 text-left">
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
            </div>
          </div>
        </article>
      </div>
    </section>
  )
} 