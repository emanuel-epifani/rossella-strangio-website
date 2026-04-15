import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react'

export default function Footer() {

  return (
      <footer className="bg-primary-900 text-white py-16">
        <div className="container flex flex-col md:flex-row items-stretch gap-8 md:gap-8">
          {/* Colonna 1 - Contatti */}
          <div className="flex-col justify-between flex-1">
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <div className="space-y-4">
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
                <a 
                  href="https://maps.google.com/?q=Via+Roma,+123+-+10100+Torino+(TO)" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  Via Roma, 123 - 10100 Torino (TO)
                </a>
              </div>
            </div>
          </div>

          <div className="flex-col justify-between flex-1">
            <h4 className="text-lg font-semibold mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-muted-foreground hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/chi-sono" className="text-muted-foreground hover:text-accent transition-colors">
                  Chi sono
                </a>
              </li>
              <li>
                <a href="/servizi" className="text-muted-foreground hover:text-accent transition-colors">
                  Servizi
                </a>
              </li>
              <li>
                <a href="/faq" className="text-muted-foreground hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contattami" className="text-muted-foreground hover:text-accent transition-colors">
                  Contattami
                </a>
              </li>
            </ul>
          </div>

          {/* Colonna 3 - Info professionali */}
          <div className="flex-col justify-between flex-1">
            <h4 className="text-lg font-semibold mb-4">Informazioni Professionali</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-muted-foreground">
                <a 
                  href="https://areariservata.psy.it/albo/iscritto/rossella_strangio_182845" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  <strong className="text-white">Ordine Psicologi</strong><br />
                  N° Iscrizione: 182845
                </a>
              </li>
              <li className="text-muted-foreground">
                <strong className="text-white">P.IVA</strong><br />
                13434760016
              </li>
            </ul>
          </div>
        </div>
      </footer>
  )
} 