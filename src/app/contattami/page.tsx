import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react'

export const dynamic = 'force-static'

export default function Contattami() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="py-10 bg-primary">
          <div className="container">
            <h1 className="text-4xl font-bold text-white mb-6">Contattami</h1>
            <p className="text-lg text-white ">
              Sono disponibile per ricevimenti sia online che in presenza. 
              Puoi contattarmi tramite telefono, WhatsApp o email per fissare un appuntamento 
              o per qualsiasi informazione. Sarò felice di rispondere alle tue esigenze.
            </p>
          </div>
        </section>

        {/* Sezione 1: Contatti */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-2xl font-bold text-primary mb-8">Contatti Diretti</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Telefono */}
              <a href="tel:+393343071131" className="bg-white p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-lg hover:border-gray-300 transition-all text-center">
                <Phone size={32} className="text-primary mb-4 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">Telefono</h3>
                <p className="text-foreground">+39 334 307 1131</p>
              </a>

              {/* WhatsApp */}
              <a href="https://wa.me/393343071131" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-lg hover:border-gray-300 transition-all text-center">
                <MessageCircle size={32} className="text-primary mb-4 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                <p className="text-foreground">+39 334 307 1131</p>
              </a>

              {/* Email */}
              <a href="mailto:rossella.strangio@gmail.com" className="bg-white p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-lg hover:border-gray-300 transition-all text-center">
                <Mail size={32} className="text-primary mb-4 mx-auto" />
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-foreground">rossella.strangio@gmail.com</p>
              </a>
            </div>
          </div>
        </section>

        {/* Sezione 2: Dove Riceve */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-2xl font-bold text-primary mb-8">Dove Ricevo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Online */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-lg hover:border-gray-300 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={32} className="text-primary" />
                  <h3 className="font-semibold text-xl">Online</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-foreground"><strong>Lunedì - Giovedì:</strong> 16:00 - 18:00</p>
                  <p className="text-foreground"><strong>Venerdì:</strong>  Chiuso</p>
                  <p className="text-foreground"><strong>Sabato:</strong>  Chiuso</p>
                  <p className="text-foreground"><strong>Domenica:</strong> Chiuso</p>
                </div>
              </div>

              {/* In presenza */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-lg hover:border-gray-300 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin size={32} className="text-primary" />
                  <h3 className="font-semibold text-xl">In Presenza</h3>
                </div>
                <p className="text-foreground mb-4">
                  <strong>Studio:</strong> Via Roma 123 - 10100 Torino (TO)<br />
                  <strong>Orari:</strong> Lunedì: 14:0 - 20:00<br />
                </p>
                <div className="relative mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.123456789!2d7.681234567!3d45.067890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDA0JzA0LjQiTiA3wrA0MCczOS4yIkU!5e0!3m2!1sit!2sit!4v1234567890"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Via+Roma+123+10100+Torino+TO"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-transparent hover:bg-black/10 transition-colors rounded-lg"
                    aria-label="Calcola percorso su Google Maps"
                  >
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
