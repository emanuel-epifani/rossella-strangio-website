import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Brand and Description */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Dott.ssa Rossella Strangio</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Psicologa specializzata nel supporto di adulti e coppie. 
              Offro un ambiente sicuro e professionale per il tuo percorso di crescita 
              e benessere psicologico, sia in studio a Torino che online.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <a href="tel:+393343071131" className="hover:text-accent transition-colors">
                  +39 334 307 1131
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <a href="mailto:rossella.strangio@gmail.com" className="hover:text-accent transition-colors">
                  rossella.strangio@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-accent" />
                <span>Via Roma, 123 - 10100 Torino (TO)</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-accent transition-colors">
                  Chi sono
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-accent transition-colors">
                  Servizi
                </a>
              </li>
              <li>
                <a href="#where" className="text-gray-300 hover:text-accent transition-colors">
                  Dove ricevo
                </a>
              </li>
              <li>
                <a href="#prices" className="text-gray-300 hover:text-accent transition-colors">
                  Tariffe
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          {/* Professional Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Informazioni Professionali</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-300">
                <strong className="text-white">Ordine Psicologi Piemonte</strong><br />
                N° Iscrizione: 10268
              </li>
              <li className="text-gray-300">
                <strong className="text-white">Laurea Magistrale</strong><br />
                Psicologia Clinica
              </li>
              <li>
                <a 
                  href="https://www.ordinepsicologi.piemonte.it" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition-colors inline-flex items-center gap-1"
                >
                  Verifica Iscrizione
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {currentYear} Dott.ssa Rossella Strangio. Tutti i diritti riservati.
            </div>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="/privacy" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="/termini" className="hover:text-accent transition-colors">
                Termini e Condizioni
              </a>
              <a href="/cookie" className="hover:text-accent transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-xs text-gray-500 text-center">
            <p>
              Le prestazioni psicologiche non sono soggette ad IVA (art. 10, n. 18 del DPR 633/72). 
              Tutti i trattamenti sono riservati e nel rispetto del Codice Deontologico degli Psicologi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 