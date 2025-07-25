import { Check } from 'lucide-react'

export default function Where() {
  return (
    <section id="where" className="py-20 bg-white">
      <div className="container">
        <div className="section-title">
          <h2>Dove ricevo</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Online */}
          <div className="service-card">
            <div className="service-content">
              <div className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">Online</h3>
              <p className="text-gray-700 mb-6 text-center">
                In videochiamata comodamente da casa tua. Un modo efficace per ricevere supporto psicologico professionale, senza spostamenti e con la massima privacy.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="text-secondary flex-shrink-0" size={20} />
                  <span>Risparmio di tempo negli spostamenti</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-secondary flex-shrink-0" size={20} />
                  <span>Massima flessibilità di orari</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-secondary flex-shrink-0" size={20} />
                  <span>Connessione sicura e riservata</span>
                </li>
              </ul>
              <div className="text-center">
                <a href="#contact" className="cta-button">
                  Contattami
                </a>
              </div>
            </div>
          </div>

          {/* Studio */}
          <div className="service-card">
            <div className="service-content">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">In sede a Torino</h3>
              <p className="text-gray-700 mb-6 text-center">
                Se preferisci parlarmi dal vivo, organizzeremo un incontro nel mio studio a Torino, in un ambiente confortevole e riservato.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <Check className="text-secondary flex-shrink-0" size={20} />
                  <span>Ambiente accogliente e rilassante</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-secondary flex-shrink-0" size={20} />
                  <span>Studio facilmente raggiungibile</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="text-secondary flex-shrink-0" size={20} />
                  <span>Massima privacy e riservatezza</span>
                </li>
              </ul>
              <div className="text-center">
                <a href="#contact" className="cta-button">
                  Contattami
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 