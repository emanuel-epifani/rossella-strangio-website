import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Phone, MessageCircle, Mail, MapPin, Clock } from 'lucide-react'
import { contattamiContent } from '@/content/text'

export const dynamic = 'force-static'

export default function Contattami() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <section className="page-header">
          <div className="container">
            <h1 className="mb-2 text-4xl font-bold">{contattamiContent.title}</h1>
            <p className="text-lg">
              {contattamiContent.subtitle}
            </p>
          </div>
        </section>

        {/* Sezione 1: Contatti */}
        <section className="py-16 section-bg-white">
          <div className="container">
            <h2 className="text-2xl font-bold text-primary mb-8">Contatti</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contattamiContent.contactMethods.map((method) => {
                const IconComponent = method.icon === 'Phone' ? Phone : method.icon === 'MessageCircle' ? MessageCircle : Mail
                return (
                  <a
                    key={method.id}
                    href={method.link}
                    target={method.icon === 'MessageCircle' ? '_blank' : undefined}
                    rel={method.icon === 'MessageCircle' ? 'noopener noreferrer' : undefined}
                    className="card-base card-hover p-6 text-center"
                  >
                    <IconComponent size={32} className="text-primary mb-4 mx-auto" />
                    <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                    <p className="text-foreground">{method.contact}</p>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* Sezione 2: Dove Riceve */}
        <section className="py-16 section-bg-white">
          <div className="container">
            <h2 className="text-2xl font-bold text-primary mb-8">Dove Ricevo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Online */}
              <div className="card-base card-hover p-6">
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
              <div className="card-base card-hover p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin size={32} className="text-primary" />
                  <h3 className="font-semibold text-xl">In Presenza</h3>
                </div>
                <p className="text-foreground mb-4">
                  <strong>Studio:</strong> Via Vagnone 2, Torino<br />
                  <strong>Orari:</strong> Lunedì: 14:0 - 20:00<br />
                </p>
                <div className="relative mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.678901234!2d7.656789012!3d45.078901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47791f3b0e0e0e0f%3A0x0!2sVia+Vagnone+2%2C+Torino!5e0!3m2!1sit!2sit!4v1234567890"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Via+Vagnone+2+Torino"
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
