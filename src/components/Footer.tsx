import { Phone, Mail, MapPin } from 'lucide-react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Icon from "react-simple-icons"
import Link from 'next/link'

export default function Footer() {

  return (
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container flex flex-col md:flex-row items-stretch gap-8 md:gap-8">
          {/* Colonna 1 - Contatti */}
          <div className="flex-col justify-between flex-1">
            <h4 className="text-lg font-semibold mb-4">Contatti</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary-foreground" />
                <a href="tel:+393343071131" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  +39 334 307 1131
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary-foreground" />
                <a href="mailto:rossella.strangio.psicologa@gmail.com" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  rossella.strangio.psicologa@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-primary-foreground" />
                <a 
                  href="https://maps.google.com/?q=Via+Vagnone+2,+Torino" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  Via Vagnone 2, Torino
                </a>
              </div>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://www.instagram.com/la_psicoross/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                >
                  <Icon name="instagram" className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rossella-strangio-7b2b29320/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
                >
                  <Icon name="linkedin" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex-col justify-between flex-1">
            <h4 className="text-lg font-semibold mb-4">Link Rapidi</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/chi-sono" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Chi sono
                </Link>
              </li>
              <li>
                <Link href="/servizi" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Servizi
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contattami" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contattami
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonna 3 - Info professionali */}
          <div className="flex-col justify-between flex-1">
            <h4 className="text-lg font-semibold mb-4">Informazioni Professionali</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-primary-foreground/80">
                <a 
                  href="https://areariservata.psy.it/albo/iscritto/rossella_strangio_182845" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  <strong className="text-primary-foreground">Ordine Psicologi</strong><br />
                  N° Iscrizione: 182845
                </a>
              </li>
              <li className="text-primary-foreground/80">
                <strong className="text-primary-foreground">P.IVA</strong><br />
                13434760016
              </li>
            </ul>
          </div>
        </div>
      </footer>
  )
} 