import { Phone, Mail, MessageCircle } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container">
        <div className="section-title">
          <h2>Contattami</h2>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-8 text-foreground">
            Sono disponibile per ricevimenti online e in presenza. Contattami per fissare un primo colloquio o per maggiori informazioni.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <a href="tel:+393343071131" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <Phone className="text-primary mx-auto mb-3" size={28} />
              <h3 className="font-semibold mb-2">Telefono</h3>
              <p className="text-sm text-muted-foreground">+39 334 307 1131</p>
            </a>

            <a href="https://wa.me/393343071131" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <MessageCircle className="text-primary mx-auto mb-3" size={28} />
              <h3 className="font-semibold mb-2">WhatsApp</h3>
              <p className="text-sm text-muted-foreground">+39 334 307 1131</p>
            </a>

            <a href="mailto:rossella.strangio@gmail.com" className="bg-white p-6 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
              <Mail className="text-primary mx-auto mb-3" size={28} />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">rossella.strangio@gmail.com</p>
            </a>
          </div>

          <Link 
            href="/contattami" 
            className="inline-block text-primary hover:text-primary/80 font-medium underline underline-offset-4 transition-colors"
          >
            Scopri orari e sede
          </Link>
        </div>
      </div>
    </section>
  )
} 