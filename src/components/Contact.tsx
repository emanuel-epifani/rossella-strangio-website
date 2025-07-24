import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container">
        <div className="section-title">
          <h2>Contatti</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Prenota il tuo appuntamento</h3>
              <p className="text-lg mb-6">
                Sono qui per aiutarti. Contattami per prenotare la tua <strong>prima seduta gratuita</strong> 
                e iniziare insieme il percorso verso il tuo benessere.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Telefono</h4>
                  <p className="text-gray-700">
                    <a href="tel:+393343071131" className="text-accent hover:underline font-medium">
                      +39 334 307 1131
                    </a>
                  </p>
                  <p className="text-sm text-gray-600">Lun-Ven: 9:00-19:00 | Sab: 9:00-13:00</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <Mail className="text-secondary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-gray-700">
                    <a href="mailto:rossella.strangio@gmail.com" className="text-accent hover:underline font-medium">
                      rossella.strangio@gmail.com
                    </a>
                  </p>
                  <p className="text-sm text-gray-600">Risposta entro 24h</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <MapPin className="text-accent" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Studio</h4>
                  <p className="text-gray-700">
                    Via Roma, 123<br />
                    10100 Torino (TO)
                  </p>
                  <p className="text-sm text-gray-600">Facilmente raggiungibile con mezzi pubblici</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Options */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-6">Come prenotare</h3>
            
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-secondary">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="text-secondary" size={20} />
                  <h4 className="font-semibold">Chiamata Diretta</h4>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Preferisci parlare direttamente? Chiamami negli orari di ricevimento.
                </p>
                <a 
                  href="tel:+393343071131" 
                  className="bg-secondary text-white px-4 py-2 rounded font-medium hover:bg-secondary/90 transition-colors inline-block"
                >
                  Chiama Ora
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-accent">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="text-accent" size={20} />
                  <h4 className="font-semibold">WhatsApp</h4>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Invia un messaggio WhatsApp per ricevere informazioni o prenotare.
                </p>
                <a 
                  href="https://wa.me/393343071131?text=Ciao%2C%20vorrei%20prenotare%20una%20prima%20seduta%20gratuita" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-accent text-white px-4 py-2 rounded font-medium hover:bg-accent/90 transition-colors inline-block"
                >
                  Scrivi su WhatsApp
                </a>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="text-primary" size={20} />
                  <h4 className="font-semibold">Email</h4>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Scrivi una email per informazioni dettagliate o per fissare un appuntamento.
                </p>
                <a 
                  href="mailto:rossella.strangio@gmail.com?subject=Richiesta prima seduta gratuita" 
                  className="bg-primary text-white px-4 py-2 rounded font-medium hover:bg-primary/90 transition-colors inline-block"
                >
                  Invia Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 