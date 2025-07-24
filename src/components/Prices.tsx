import { Euro, CreditCard, FileText } from 'lucide-react'

export default function Prices() {
  return (
    <section id="prices" className="py-20 bg-white">
      <div className="container">
        <div className="section-title">
          <h2>Tariffe</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {/* Individual Therapy */}
          <div className="bg-white border-2 border-primary/20 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Euro className="text-primary" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-primary mb-4">Terapia Individuale</h3>
            <div className="text-4xl font-bold text-primary mb-2">€50</div>
            <p className="text-gray-600 mb-6">per seduta</p>
            <ul className="space-y-3 text-left mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Durata: 50 minuti</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>In studio o online</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span>Sedute individuali per adulti</span>
              </li>
            </ul>
            <div className="bg-accent/10 p-3 rounded text-sm">
              <strong>Prima seduta GRATUITA</strong> di conoscenza e valutazione
            </div>
          </div>

          {/* Couple Therapy */}
          <div className="bg-white border-2 border-secondary/20 rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Euro className="text-secondary" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-secondary mb-4">Terapia di Coppia</h3>
            <div className="text-4xl font-bold text-secondary mb-2">€60</div>
            <p className="text-gray-600 mb-6">per seduta</p>
            <ul className="space-y-3 text-left mb-8">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span>Durata: 50 minuti</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span>In studio o online</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span>Sedute per coppie</span>
              </li>
            </ul>
            <div className="bg-accent/10 p-3 rounded text-sm">
              <strong>Prima seduta GRATUITA</strong> di conoscenza e valutazione
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="box box-primary">
            <div className="flex items-center gap-3 mb-6">
              <CreditCard className="text-primary" size={24} />
              <h3 className="text-2xl font-bold text-primary">Modalità di Pagamento</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Contanti</strong> al termine della seduta</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Bonifico bancario</strong> entro 7 giorni</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Carta di credito/debito</strong> (su richiesta)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Fattura sanitaria</strong> per detrazioni fiscali</span>
              </li>
            </ul>
          </div>

          <div className="box box-secondary">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-secondary" size={24} />
              <h3 className="text-2xl font-bold text-secondary">Note Importanti</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Ricevuta fiscale</strong> sempre rilasciata</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Detrazione fiscale</strong> del 19% nella dichiarazione dei redditi</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Disdetta</strong> almeno 24h prima (altrimenti seduta addebitata)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                <span><strong>Nessun costo aggiuntivo</strong> per sedute online</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 