import Image from 'next/image'
import { CheckCircle } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="section-title">
          <h2>Psicologa</h2>
        </div>
        
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
              <a href="#contact" className="cta-button">
                Prenota una consulenza
              </a>
            </div>
          </div>

          {/* Credentials and approach */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 w-full">
            <aside className="box box-secondary">
              <h4 className="box-title">Formazione e Qualifiche</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-secondary mt-1 flex-shrink-0" size={18} />
                  <span><strong>Laurea Magistrale</strong> in Psicologia Clinica</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-secondary mt-1 flex-shrink-0" size={18} />
                  <span><strong>Iscritta all&apos;Ordine degli Psicologi</strong> del Piemonte n° 10268</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-secondary mt-1 flex-shrink-0" size={18} />
                  <span><strong>Formazione continua</strong> in protocolli evidence-based</span>
                </li>
              </ul>
            </aside>

            <aside className="box box-primary">
              <h4 className="box-title">Il mio approccio</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span><strong>Focalizzato sui risultati</strong> con strategie pratiche e concrete</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span><strong>Ambiente sicuro e non giudicante</strong> dove esprimere liberamente emozioni e pensieri</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={18} />
                  <span><strong>Percorsi personalizzati</strong> in base alle esigenze specifiche di ogni persona</span>
                </li>
              </ul>
            </aside>
          </div>
        </article>
      </div>
    </section>
  )
} 