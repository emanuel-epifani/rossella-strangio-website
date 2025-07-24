import { Users, Heart, Brain } from 'lucide-react'

export default function Patients() {
  return (
    <section id="patients" className="py-20 bg-gray-50">
      <div className="container">
        <div className="section-title">
          <h2>Per chi</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Target Groups */}
          <div className="box box-primary">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-primary" size={24} />
              <h3 className="text-2xl font-bold text-primary">Chi può beneficiare</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Adulti</strong> che vivono periodi di stress, ansia o insoddisfazione</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Coppie</strong> che desiderano migliorare la comunicazione e risolvere conflitti</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Professionisti</strong> che soffrono di burnout o stress lavorativo</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Persone</strong> che vogliono crescere e migliorare il proprio benessere</span>
              </li>
            </ul>
          </div>

          {/* What to Expect */}
          <div className="box box-secondary">
            <div className="flex items-center gap-3 mb-6">
              <Brain className="text-secondary" size={24} />
              <h3 className="text-2xl font-bold text-secondary">Cosa aspettarti</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Prima seduta gratuita</strong> di conoscenza e valutazione</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Ambiente accogliente</strong> e privo di giudizio</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Approccio personalizzato</strong> basato sui tuoi bisogni specifici</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Tecniche evidence-based</strong> scientificamente validate</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Sostegno concreto</strong> nel percorso di benessere</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Key Messages - Solo Empatia e Competenza */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-primary" size={32} />
            </div>
            <h4 className="text-xl font-bold text-primary mb-3">Empatia</h4>
            <p className="text-gray-700">
              Ogni persona è unica e merita un approccio personalizzato e rispettoso
            </p>
          </div>

          <div className="text-center">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="text-secondary" size={32} />
            </div>
            <h4 className="text-xl font-bold text-secondary mb-3">Competenza</h4>
            <p className="text-gray-700">
              Utilizzo tecniche scientificamente validate e aggiornamento continuo
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 